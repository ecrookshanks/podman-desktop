/**********************************************************************
 * Copyright (C) 2023-2024 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import * as fs from 'node:fs';

import { afterEach, beforeEach, describe, expect, expectTypeOf, test, vi } from 'vitest';

import type { AnalyzedExtension } from '/@/plugin/extension/extension-analyzer.js';
import type { OnboardingState } from '/@api/onboarding.js';

import type { ApiSenderType } from './api.js';
import { Context } from './context/context.js';
import { OnboardingRegistry } from './onboarding-registry.js';
import type { Disposable } from './types/disposable.js';

let onboardingRegistry: OnboardingRegistry;
const extensionId = 'myextension.id';
const stepId = 'checkInstalledCommand';

const getConfigMock = vi.fn();
const getConfigurationMock = vi.fn();
getConfigurationMock.mockReturnValue({
  get: getConfigMock,
});

const readFileSync = vi.spyOn(fs, 'readFileSync');
const apiSender: ApiSenderType = { send: vi.fn() } as unknown as ApiSenderType;
const context = new Context(apiSender);

let registerOnboardingDisposable: Disposable;

describe('an OnboardingRegistry instance exists', () => {
  /* eslint-disable @typescript-eslint/no-empty-function */
  beforeEach(() => {
    vi.clearAllMocks();
    onboardingRegistry = new OnboardingRegistry(context);
    const manifest = {
      contributes: {
        onboarding: {
          title: 'Get started with Podman Desktop',
          priority: 1,
          removable: false,
          steps: [
            {
              id: 'checkInstalledCommand',
              label: 'Check Podman',
              title: 'Checking for Podman installation',
              command: 'podman.onboarding.checkPodmanInstalled',
              completionEvents: ['onCommand:podman.onboarding.checkPodmanInstalled'],
            },
          ],
          enablement: 'true',
        },
      },
    };

    const extensionPath = '/root/path';
    const extension = {
      path: extensionPath,
      id: extensionId,
    } as AnalyzedExtension;
    registerOnboardingDisposable = onboardingRegistry.registerOnboarding(extension, manifest.contributes.onboarding);
    getConfigMock.mockReturnValue(true);

    vi.mock('node:fs');
    readFileSync.mockReturnValue(JSON.stringify({}));
  });

  test('Should always return onboarding', async () => {
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).not.toBe(undefined);
  });

  test('Should return no onboarding for unknown extension', async () => {
    const onboarding = onboardingRegistry.getOnboarding('unknown');
    expect(onboarding).toBe(undefined);
  });

  test('Should onboarding for known extension', async () => {
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBeDefined();
    expect(onboarding?.title).toBe('Get started with Podman Desktop');
  });

  test('Should not find onboarding after dispose', async () => {
    registerOnboardingDisposable.dispose();
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBe(undefined);
  });

  test('Should not find onboarding after unregistered', async () => {
    onboardingRegistry.unregisterOnboarding(extensionId);
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBe(undefined);
  });

  test('Should return list of registered onboarding', async () => {
    const onboarding = onboardingRegistry.listOnboarding();
    expect(onboarding).toBeDefined();
    expectTypeOf(onboarding).toBeArray();
    expect(onboarding.length).toBe(1);
    expect(onboarding[0]?.title).toBe('Get started with Podman Desktop');
  });

  test('Should update state of step', async () => {
    onboardingRegistry.updateStepState('completed', extensionId, stepId);
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBeDefined();
    expect(onboarding?.steps[0]?.status).toBeDefined();
    expect(onboarding?.steps[0]?.status).toBe('completed');
  });

  test('Should update state of onboarding', async () => {
    onboardingRegistry.updateStepState('completed', extensionId);
    const onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBeDefined();
    expect(onboarding?.status).toBeDefined();
    expect(onboarding?.status).toBe('completed');
  });

  test('updateStepState should throw if no onboarding for that extension', async () => {
    expect(() => onboardingRegistry.updateStepState('completed', 'unknown', stepId)).toThrowError(
      'No onboarding for extension unknown',
    );
  });

  test('Should throw if no step in onboarding for that extension', async () => {
    expect(() => onboardingRegistry.updateStepState('completed', extensionId, 'unknown')).toThrowError(
      `No onboarding step with id unknown for extension ${extensionId}`,
    );
  });

  test('Should reset all states', async () => {
    // update state so they are not undefined
    const contextKey = `${extensionId}.onboarding.test`;
    context.setValue(contextKey, 'test');
    onboardingRegistry.updateStepState('completed', extensionId);
    onboardingRegistry.updateStepState('completed', extensionId, stepId);
    let onboarding = onboardingRegistry.getOnboarding(extensionId);
    // verify update went well
    expect(onboarding).toBeDefined();
    expect(onboarding?.status).toBeDefined();
    expect(onboarding?.status).toBe('completed');
    expect(onboarding?.steps[0]?.status).toBeDefined();
    expect(onboarding?.steps[0]?.status).toBe('completed');
    expect(context.getValue(contextKey)).toBe('test');
    // reset all states
    onboardingRegistry.resetOnboarding([extensionId]);
    // check states have been reset
    onboarding = onboardingRegistry.getOnboarding(extensionId);
    expect(onboarding).toBeDefined();
    expect(onboarding?.status).toBe(undefined);
    expect(onboarding?.steps[0]?.status).toBe(undefined);
    expect('test' in context.collectAllValues()).toBe(false);
  });

  test('resetOnboarding should throw if no onboarding for that extension', async () => {
    expect(() => onboardingRegistry.resetOnboarding(['unknown'])).toThrowError(
      'No onboarding found for extensions unknown',
    );
  });
});

describe('checkIdsReadability tests', () => {
  const consoleWarnMock = vi.fn();
  const originalConsoleWarn = console.warn;

  beforeEach(() => {
    console.warn = consoleWarnMock;
    vi.clearAllMocks();
  });

  afterEach(() => {
    console.warn = originalConsoleWarn;
  });

  test('checkIdsReadability should detect non valid ids', () => {
    const onboardingRegistry = new OnboardingRegistry(context);
    const extensionPath = '/root/path';
    const extension = {
      path: extensionPath,
      id: extensionId,
    } as AnalyzedExtension;
    const onboarding = {
      title: 'Get started with Podman Desktop',
      priority: 50,
      steps: [
        {
          id: 'welcomeViewNotOK',
          label: 'Check Podman',
          title: 'Checking for Podman installation',
        },
        {
          id: 'welcomeView',
          label: 'Check Podman',
          title: 'Checking for Podman installation',
        },
        {
          id: 'checkInstalledCommandNotOK',
          label: 'Check Podman',
          title: 'Checking for Podman installation',
          command: 'podman.onboarding.checkPodmanInstalled',
          completionEvents: ['onCommand:podman.onboarding.checkPodmanInstalled'],
        },
        {
          id: 'checkInstalledCommand',
          label: 'Check Podman',
          title: 'Checking for Podman installation',
          command: 'podman.onboarding.checkPodmanInstalled',
          completionEvents: ['onCommand:podman.onboarding.checkPodmanInstalled'],
        },
        {
          id: 'installFailure',
          label: 'Installation failed',
          title: 'Installation failed',
          state: 'failed' as OnboardingState,
        },
        {
          id: 'installFailureNotOK',
          label: 'Installation failed',
          title: 'Installation failed',
          state: 'failed' as OnboardingState,
        },
        {
          id: 'installSuccess',
          label: 'Installation successful',
          title: 'Installation successful',
          state: 'completed' as OnboardingState,
        },
        {
          id: 'installSuccessNotOK',
          label: 'Installation successful',
          title: 'Installation successful',
          state: 'completed' as OnboardingState,
        },
      ],
      enablement: 'true',
    };

    registerOnboardingDisposable = onboardingRegistry.registerOnboarding(extension, onboarding);
    expect(consoleWarnMock).toBeCalledTimes(4);
    expect(consoleWarnMock).toBeCalledWith(
      `[myextension.id]: Missing suffix 'Command' for the step 'checkInstalledCommandNotOK' that defines a command`,
    );
    expect(consoleWarnMock).toBeCalledWith(
      `[myextension.id]: Missing suffix 'Failure' for the step 'installFailureNotOK' that has a 'failed' state`,
    );
    expect(consoleWarnMock).toBeCalledWith(
      `[myextension.id]: Missing suffix 'Success' for the step 'installSuccessNotOK' that has a 'completed' state`,
    );
    expect(consoleWarnMock).toBeCalledWith(
      `[myextension.id]: Missing suffix 'View' for the step 'welcomeViewNotOK' that is neither a Command, Failure or Success step`,
    );
  });

  test('onboarding list sorting by priority and removable', () => {
    const onboardingRegistry = new OnboardingRegistry(context);
    function registerOnboarding(id: number, removable: boolean, priority?: number): void {
      onboardingRegistry.registerOnboarding(
        {
          path: `extension${id}`,
          id: `extension.id${id}`,
          removable,
        } as AnalyzedExtension,
        {
          title: `Get started with Podman Desktop ${id}`,
          priority,
          enablement: '',
          steps: [
            {
              id: 'welcomeViewNotOK',
              title: `Checking for Podman installation ${id}`,
            },
          ],
        },
      );
    }

    registerOnboarding(1, false, 50);
    registerOnboarding(2, true, 50);
    registerOnboarding(3, false, 99);
    registerOnboarding(4, true, 99);
    registerOnboarding(5, false, 1);
    registerOnboarding(6, true, 1);
    registerOnboarding(7, false);
    registerOnboarding(8, true);

    const onboardings = onboardingRegistry.listOnboarding();
    expect(onboardings[0]?.priority).equals(1);
    expect(onboardings[0]?.removable).equals(false);
    expect(onboardings[1]?.priority).equals(50);
    expect(onboardings[1]?.removable).equals(false);
    expect(onboardings[2]?.priority).equals(99);
    expect(onboardings[2]?.removable).equals(false);
    expect(onboardings[3]?.priority).toBeUndefined();
    expect(onboardings[3]?.removable).equals(false);
    expect(onboardings[4]?.priority).equals(1);
    expect(onboardings[4]?.removable).equals(true);
    expect(onboardings[5]?.priority).equals(50);
    expect(onboardings[5]?.removable).equals(true);
    expect(onboardings[6]?.priority).equals(99);
    expect(onboardings[6]?.removable).equals(true);
    expect(onboardings[7]?.priority).toBeUndefined();
    expect(onboardings[7]?.removable).equals(true);
  });
});
