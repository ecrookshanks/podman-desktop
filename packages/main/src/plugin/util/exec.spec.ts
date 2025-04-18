/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type { ChildProcess, ChildProcessWithoutNullStreams } from 'node:child_process';
import { spawn } from 'node:child_process';
import type { Readable } from 'node:stream';

import * as sudo from 'sudo-prompt';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import * as util from '../../util.js';
import type { Proxy } from '../proxy.js';
import { Exec, getInstallationPath, macosExtraPath } from './exec.js';

// Mock sudo-prompt exec to resolve everytime.
vi.mock('sudo-prompt', async () => {
  return {
    exec: vi.fn(),
  };
});

vi.mock('../../util', async () => {
  return {
    isWindows: vi.fn(),
    isMac: vi.fn(),
    isLinux: vi.fn(),
  };
});

vi.mock('child_process', () => {
  return {
    spawn: vi.fn(),
  };
});

const setEncodingMock = vi.fn();

describe('exec', () => {
  const proxy: Proxy = {
    isEnabled: vi.fn().mockReturnValue(false),
  } as unknown as Proxy;

  beforeEach(() => {
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  const exec = new Exec(proxy);

  test('should run the command and resolve with the result', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const { stdout } = await exec.exec(command, args);

    expect(spawnMock).toHaveBeenCalledWith(command, args, { env: expect.any(Object) });
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should run the command with custom cwd and resolve with the result', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];
    const cwd = '/tmp';

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const { stdout } = await exec.exec(command, args, { cwd });

    // caller should contains the cwd provided
    expect(spawnMock).toHaveBeenCalledWith(command, args, expect.objectContaining({ cwd: cwd }));
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should reject with an error when the command execution returns non-zero exit code', async () => {
    const command = 'nonexistent-command';

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('');
      }
    }) as unknown as Readable;
    vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(1);
        }
      }),
    } as unknown as ChildProcess);
    const execResult = exec.exec(command);
    await expect(execResult).rejects.toThrowError(/Command execution failed with exit code 1/);
    await expect(execResult).rejects.toThrowError(Error);
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should reject with an error when the process error event received', async () => {
    const command = 'nonexistent-command';

    vi.mock('child_process', () => {
      return {
        spawn: vi.fn(),
      };
    });

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('');
      }
    }) as unknown as Readable;
    const error = new Error('Error message');
    vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: Error) => void) => {
        if (event === 'error') {
          cb(error);
        }
      }),
    } as unknown as ChildProcess);
    const execResult = exec.exec(command);
    await expect(execResult).rejects.toThrowError(/Failed to execute command: Error message/);
    await expect(execResult).rejects.toThrowError(Error);
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should reject with an error when the execution is cancelled on macOS and linux', async () => {
    const command = 'sleep';
    const args = ['1'];
    const cancellationToken = {
      isCancellationRequested: true,
      onCancellationRequested: vi.fn(),
    };
    const options = {
      token: cancellationToken,
      logger: { log: vi.fn(), warn: vi.fn(), error: vi.fn() },
    };

    const childProcessMock: unknown = {
      killed: false,
      stdout: { on: vi.fn(), setEncoding: setEncodingMock },
      stderr: { on: vi.fn(), setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'exit') {
          cb(0);
        }
      }),
      kill: vi.fn(),
    };
    vi.mocked(spawn).mockReturnValue(childProcessMock as ChildProcessWithoutNullStreams);

    vi.mocked(cancellationToken.onCancellationRequested).mockImplementationOnce((handler: () => void) => {
      handler();
    });

    const result = exec.exec(command, args, options);
    await expect(result).rejects.toThrowError(/Execution cancelled/);
    await expect(result).rejects.toThrowError(Error);
    expect((childProcessMock as unknown as ChildProcess).kill).toHaveBeenCalled();
    expect(options.logger.error).toHaveBeenCalledWith('Execution cancelled');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should reject with an error when the callback called with error in admin mode on windows', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];
    const error = new Error('Error message');
    (util.isWindows as Mock).mockReturnValue(true);

    (sudo.exec as Mock).mockImplementation((_command, _options, callback) => {
      callback(error);
    });

    vi.mock('child_process', () => {
      return {
        spawn: vi.fn(),
      };
    });

    const execResult = exec.exec(command, args, { isAdmin: true });

    await expect(execResult).rejects.toThrowError(/Failed to execute command: Error message/);
    await expect(execResult).rejects.toThrowError(Error);
  });

  test('should run the command and set HTTP_PROXY', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const httpProxy = {
      isEnabled: vi.fn().mockReturnValue(true),
      proxy: {
        httpProxy: 'http://127.0.0.1:8888',
      },
    } as unknown as Proxy;
    const httpExec = new Exec(httpProxy);

    const { stdout } = await httpExec.exec(command, args);

    expect(spawnMock).toHaveBeenCalledWith(command, args, {
      env: expect.objectContaining({ HTTP_PROXY: 'http://127.0.0.1:8888' }),
    });
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should run the command and set HTTPS_PROXY', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const httpsProxy = {
      isEnabled: vi.fn().mockReturnValue(true),
      proxy: {
        httpsProxy: 'http://127.0.0.1:8888',
      },
    } as unknown as Proxy;
    const httpsExec = new Exec(httpsProxy);

    const { stdout } = await httpsExec.exec(command, args);

    expect(spawnMock).toHaveBeenCalledWith(command, args, {
      env: expect.objectContaining({ HTTPS_PROXY: 'http://127.0.0.1:8888' }),
    });
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should run the command and set NO_PROXY', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const noProxy = {
      isEnabled: vi.fn().mockReturnValue(true),
      proxy: {
        noProxy: '127.0.0.1',
      },
    } as unknown as Proxy;
    const noProxyExec = new Exec(noProxy);

    const { stdout } = await noProxyExec.exec(command, args);

    expect(spawnMock).toHaveBeenCalledWith(command, args, { env: expect.objectContaining({ NO_PROXY: '127.0.0.1' }) });
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf8');
  });

  test('should run the command with privileges on macOS', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    (util.isMac as Mock).mockReturnValue(true);

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: vi.fn() },
      stderr: { on, setEncoding: vi.fn() },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const { stdout } = await exec.exec(command, args, { isAdmin: true });

    // caller should contains the cwd provided
    expect(spawnMock).toHaveBeenCalledWith(
      'osascript',
      expect.arrayContaining([
        '-e',
        'do shell script "echo Hello, World!" with prompt "Podman Desktop requires admin privileges " with administrator privileges',
      ]),
      expect.anything(),
    );
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
  });

  test('should run the command with privileges on Linux', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    (util.isLinux as Mock).mockReturnValue(true);

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: vi.fn() },
      stderr: { on, setEncoding: vi.fn() },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    const { stdout } = await exec.exec(command, args, { isAdmin: true });

    // caller should contains the cwd provided
    expect(spawnMock).toHaveBeenCalledWith(
      'pkexec',
      expect.arrayContaining(['echo', 'Hello, World!']),
      expect.anything(),
    );
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
  });

  test('should run the command with privileges and set env variables on flatpak Linux', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    (util.isLinux as Mock).mockReturnValue(true);

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: vi.fn() },
      stderr: { on, setEncoding: vi.fn() },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    // emulate flatpak environment
    const { stdout } = await exec.exec(command, args, {
      env: { FLATPAK_ID: 'true', var1: 'value1', var2: 'value2' },
      isAdmin: true,
    });

    // caller should contains the cwd provided
    expect(spawnMock).toHaveBeenCalledWith(
      'flatpak-spawn',
      expect.arrayContaining(['--host', '--env=var1=value1', '--env=var2=value2', 'pkexec', 'echo', 'Hello, World!']),
      expect.anything(),
    );
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
  });

  test('should run the command with privileges using exec on Windows', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];
    (util.isWindows as Mock).mockReturnValue(true);

    (sudo.exec as Mock).mockImplementation((_command, _options, callback) => {
      callback(undefined);
    });

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: vi.fn() },
      stderr: { on, setEncoding: vi.fn() },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    await exec.exec(command, args, { isAdmin: true });

    // caller should not have called spawn but the sudo.exec api
    expect(spawnMock).not.toHaveBeenCalled();
    expect(sudo.exec).toBeCalledWith('echo Hello, World!', expect.anything(), expect.anything());
  });

  test('should run the command with privileges on Windows and remove unsupported environment', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];
    (util.isWindows as Mock).mockReturnValue(true);
    let options:
      | {
          env?: { [p: string]: string };
        }
      | undefined;

    vi.mocked(sudo.exec).mockImplementation((_command, _options, callback) => {
      callback?.();
      if (typeof _options === 'object' && 'env' in _options) {
        options = _options;
      }
    });

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: vi.fn() },
      stderr: { on, setEncoding: vi.fn() },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    await exec.exec(command, args, { isAdmin: true, env: { 'MY(VAR': 'myvalue' } });

    // caller should not have called spawn but the sudo.exec api
    expect(spawnMock).not.toHaveBeenCalled();
    expect(sudo.exec).toBeCalledWith('echo Hello, World!', expect.anything(), expect.anything());
    expect(options).toBeDefined();
    expect(options?.env).toBeDefined();
    expect(options?.env?.['MY(VAR']).not.toBeDefined();
  });

  test('should run the command and set specific encoding', async () => {
    const command = 'echo';
    const args = ['Hello, World!'];

    (util.isLinux as Mock).mockReturnValue(true);

    const on = vi.fn().mockImplementationOnce((event: string, cb: (arg0: string) => string) => {
      if (event === 'data') {
        cb('Hello, World!');
      }
    }) as unknown as Readable;
    const spawnMock = vi.mocked(spawn).mockReturnValue({
      stdout: { on, setEncoding: setEncodingMock },
      stderr: { on, setEncoding: setEncodingMock },
      on: vi.fn().mockImplementation((event: string, cb: (arg0: number) => void) => {
        if (event === 'close') {
          cb(0);
        }
      }),
    } as unknown as ChildProcess);

    // emulate flatpak environment
    const { stdout } = await exec.exec(command, args, {
      env: { FLATPAK_ID: 'true' },
      isAdmin: true,
      encoding: 'utf16le',
    });

    // caller should contains the cwd provided
    expect(spawnMock).toHaveBeenCalledWith(
      'flatpak-spawn',
      expect.arrayContaining(['--host', 'pkexec', 'echo', 'Hello, World!']),
      expect.anything(),
    );
    expect(stdout).toBeDefined();
    expect(stdout).toContain('Hello, World!');
    expect(setEncodingMock).toBeCalledWith('utf16le');
  });
});

vi.mock('./util', () => {
  return {
    isWindows: vi.fn(),
    isMac: vi.fn(),
  };
});

describe('getInstallationPath', () => {
  let originalPath: string | undefined;

  beforeEach(() => {
    originalPath = process.env['PATH'];
  });

  afterEach(() => {
    process.env['PATH'] = originalPath;
  });

  test('should return the installation path for Windows', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => true);
    vi.spyOn(util, 'isMac').mockImplementation(() => false);
    process.env['PATH'] = '';

    const path = getInstallationPath();

    expect(path).toBe('c:\\Program Files\\RedHat\\Podman;');
  });

  test('should return the installation path for Windows with pre-filled PATH', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => true);
    vi.spyOn(util, 'isMac').mockImplementation(() => false);
    process.env['PATH'] = 'c:\\Local';

    const path = getInstallationPath();

    expect(path).toBe('c:\\Program Files\\RedHat\\Podman;c:\\Local');
  });

  test('should return the installation path for Windows with defined param', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => true);
    vi.spyOn(util, 'isMac').mockImplementation(() => false);
    process.env['PATH'] = 'c:\\Local';

    const path = getInstallationPath('c:\\Directory');

    expect(path).toBe('c:\\Program Files\\RedHat\\Podman;c:\\Directory');
  });

  test('should return the installation path for macOS', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => false);
    vi.spyOn(util, 'isMac').mockImplementation(() => true);

    process.env['PATH'] = '/usr/bin';

    const path = getInstallationPath();

    expect(path).toBe(`${macosExtraPath}:/usr/bin`);
  });

  test('should return the installation path for macOS with defined param', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => false);
    vi.spyOn(util, 'isMac').mockImplementation(() => true);

    process.env['PATH'] = '/usr/bin';

    const path = getInstallationPath('/usr/other');

    expect(path).toBe(`${macosExtraPath}:/usr/other`);
  });

  test('should return the installation path for other platforms', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => false);
    vi.spyOn(util, 'isMac').mockImplementation(() => false);
    process.env['PATH'] = '/usr/bin'; // Example PATH for other platforms

    const path = getInstallationPath();

    expect(path).toBe('/usr/bin');
  });

  test('should return the installation path for other platforms with defined param', () => {
    vi.spyOn(util, 'isWindows').mockImplementation(() => false);
    vi.spyOn(util, 'isMac').mockImplementation(() => false);
    process.env['PATH'] = '/usr/bin'; // Example PATH for other platforms

    const path = getInstallationPath('/usr/other');

    expect(path).toBe('/usr/other');
  });
});
