/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
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
import * as fs from 'node:fs/promises';
import path from 'node:path';

import type { Directories } from '/@/plugin/directories.js';
import type { UserForwardConfig } from '/@api/kubernetes-port-forward-model.js';

/**
 * Interface for forward configuration storage.
 */
export interface ForwardConfigStorage {
  /**
   * Creates a new forward configuration.
   * @param config - The forward configuration to create.
   * @returns The created forward configuration.
   * @see UserForwardConfig
   */
  createForward(config: UserForwardConfig): Promise<UserForwardConfig>;

  /**
   * Deletes an existing forward configuration.
   * @param config - The forward configuration to delete.
   * @returns Void if the operation successful.
   * @see UserForwardConfig
   */
  deleteForward(config: UserForwardConfig): Promise<void>;

  /**
   * Updates an existing forward configuration.
   * @param config - The existing forward configuration.
   * @param newConfig - The new forward configuration.
   * @returns The updated forward configuration.
   * @see UserForwardConfig
   */
  updateForward(config: UserForwardConfig, newConfig: UserForwardConfig): Promise<UserForwardConfig>;

  /**
   * Lists all forward configurations.
   * @returns A list of forward configurations.
   * @see UserForwardConfig
   */
  listForwards(): Promise<UserForwardConfig[]>;
}

/**
 * Interface for file-based storage.
 */
export interface FileBasedStorage {
  /**
   * Initializes the storage.
   * @returns Void is the operation successful.
   */
  initStorage(): Promise<void>;

  /**
   * Checks if the storage is initialized.
   * @returns True if the storage is initialized, otherwise false.
   */
  isStorageInitialized(): boolean;

  /**
   * Gets the storage path.
   * @returns The storage path.
   * @throws If the storage is not initialized.
   */
  getStoragePath(): string;
}

/**
 * Class representing preference folder based storage.
 * @see FileBasedStorage
 */
export class PreferenceFolderBasedStorage implements FileBasedStorage {
  private initialized: boolean = false;

  /**
   * Creates an instance of PreferenceFolderBasedStorage.
   * @param directories - The directories instance.
   */
  constructor(private directories: Directories) {}

  /**
   * Gets the storage path.
   * @returns The storage path.
   * @throws If the storage is not initialized.
   */
  getStoragePath(): string {
    if (!this.isStorageInitialized()) {
      throw new Error('Storage has not been initialized yet.');
    }
    return this.getStoragePathInternal();
  }

  /**
   * Initializes the storage.
   * @returns Void if the operation successful.
   * @throws If the storage is already initialized or initialization fails.
   */
  async initStorage(): Promise<void> {
    if (this.initialized) {
      throw new Error('Storage has already been initialized.');
    }

    const settingsFile = this.getStoragePathInternal();
    const parentDirectory = path.dirname(settingsFile);

    await fs.mkdir(parentDirectory, { recursive: true });

    try {
      await fs.access(settingsFile);
    } catch (err) {
      const error = err as NodeJS.ErrnoException;
      if (error.code === 'ENOENT') {
        await fs.writeFile(settingsFile, JSON.stringify([]));
      } else {
        throw err;
      }
    }

    this.initialized = true;
  }

  /**
   * Checks if the storage is initialized.
   * @returns True if the storage is initialized, otherwise false.
   */
  isStorageInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Gets the internal storage path.
   * @returns The internal storage path.
   */
  protected getStoragePathInternal(): string {
    return path.resolve(this.directories.getConfigurationDirectory(), 'port-forwards.json');
  }
}

/**
 * Class representing file-based configuration storage.
 * @see ForwardConfigStorage
 */
export class FileBasedConfigStorage implements ForwardConfigStorage {
  private configs: UserForwardConfig[] = [];

  /**
   * Creates an instance of FileBasedConfigStorage.
   * @param fileStorage - The file-based storage instance.
   * @param configKey - The configuration key.
   * @see FileBasedStorage
   */
  constructor(
    private fileStorage: FileBasedStorage,
    private configKey: string,
  ) {}

  /**
   * Creates a new forward configuration.
   * @param config - The forward configuration to create.
   * @returns The created forward configuration.
   * @throws If the storage is not initialized or creation fails.
   * @see UserForwardConfig
   */
  async createForward(config: UserForwardConfig): Promise<UserForwardConfig> {
    await this.ensureStorageInitialized();
    this._createForward(config);
    await this.flushStorage();

    return config;
  }

  /**
   * Deletes an existing forward configuration.
   * @param config - The forward configuration to delete.
   * @returns Void if the operation successful.
   * @throws If the storage is not initialized or deletion fails.
   * @see UserForwardConfig
   */
  async deleteForward(config: UserForwardConfig): Promise<void> {
    await this.ensureStorageInitialized();
    this._deleteForward(config);
    await this.flushStorage();
  }

  /**
   * Updates an existing forward configuration.
   * @param config - The existing forward configuration.
   * @param newConfig - The new forward configuration.
   * @returns The updated forward configuration.
   * @throws If the storage is not initialized or update fails.
   * @see UserForwardConfig
   */
  async updateForward(config: UserForwardConfig, newConfig: UserForwardConfig): Promise<UserForwardConfig> {
    await this.ensureStorageInitialized();
    this._updateForward(config, newConfig);
    await this.flushStorage();
    return newConfig;
  }

  /**
   * Lists all forward configurations.
   * @returns A list of forward configurations.
   * @throws If the storage is not initialized.
   * @see UserForwardConfig
   */
  async listForwards(): Promise<UserForwardConfig[]> {
    await this.ensureStorageInitialized();
    return [...this.configs];
  }

  /**
   * Ensures the storage is initialized.
   * @returns Void if the operation successful.
   * @throws If the storage initialization fails.
   */
  protected async ensureStorageInitialized(): Promise<void> {
    if (!this.fileStorage.isStorageInitialized()) {
      await this.fileStorage.initStorage();
      const storagePath = this.fileStorage.getStoragePath();
      const fileContent = await fs.readFile(storagePath, 'utf-8');
      const configMap: Map<string, UserForwardConfig[]> = new Map(Object.entries(JSON.parse(fileContent)));

      if (configMap.has(this.configKey)) {
        this.configs = configMap.get(this.configKey) ?? [];
      } else {
        this.configs = [];
      }
    }
  }

  /**
   * Flushes the storage to disk.
   * @returns Void if the operation successful.
   * @throws If flushing the storage fails.
   */
  protected async flushStorage(): Promise<void> {
    const storagePath = this.fileStorage.getStoragePath();
    const fileContent = await fs.readFile(storagePath, 'utf-8');
    const configMap: Map<string, UserForwardConfig[]> = new Map(Object.entries(JSON.parse(fileContent)));

    configMap.set(this.configKey, this.configs);

    // eslint-disable-next-line no-null/no-null
    await fs.writeFile(storagePath, JSON.stringify(Object.fromEntries(configMap), null, 2));
  }

  /**
   * Creates a new forward configuration in memory.
   * @param config - The forward configuration to create.
   * @throws If a configuration with the same display name already exists.
   * @see UserForwardConfig
   */
  protected _createForward(config: UserForwardConfig): void {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index > -1) {
      throw new Error('Found existed forward configuration with the same display name.');
    }

    this.configs.push(config);
  }

  /**
   * Deletes an existing forward configuration in memory.
   * @param config - The forward configuration to delete.
   * @throws If the configuration is not found.
   * @see UserForwardConfig
   */
  protected _deleteForward(config: UserForwardConfig): void {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index === -1) {
      throw new Error(`Forward configuration with display name ${config.displayName} not found.`);
    }

    this.configs.splice(index, 1);
  }

  /**
   * Updates an existing forward configuration in memory.
   * @param config - The existing forward configuration.
   * @param newConfig - The new forward configuration.
   * @throws If the configuration is not found.
   * @see UserForwardConfig
   */
  protected _updateForward(config: UserForwardConfig, newConfig: UserForwardConfig): void {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index === -1) {
      throw new Error(`Forward configuration with display name ${config.displayName} not found.`);
    }

    this.configs[index] = newConfig;
  }
}

export class MemoryBasedStorage implements ForwardConfigStorage {
  private configs: UserForwardConfig[] = [];

  createForward(config: UserForwardConfig): Promise<UserForwardConfig> {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index > -1) {
      throw new Error('Found existed forward configuration with the same display name.');
    }

    this.configs.push(config);
    return Promise.resolve(config);
  }

  deleteForward(config: UserForwardConfig): Promise<void> {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index === -1) {
      throw new Error(`Forward configuration with display name ${config.displayName} not found.`);
    }

    this.configs.splice(index, 1);
    return Promise.resolve();
  }

  listForwards(): Promise<UserForwardConfig[]> {
    return Promise.resolve(this.configs);
  }

  updateForward(config: UserForwardConfig, newConfig: UserForwardConfig): Promise<UserForwardConfig> {
    const index = this.configs.findIndex(c => c.displayName === config.displayName);
    if (index === -1) {
      throw new Error(`Forward configuration with display name ${config.displayName} not found.`);
    }

    this.configs[index] = newConfig;
    return Promise.resolve(newConfig);
  }
}

/**
 * Service for managing configuration.
 * The class is not intended for direct use. For proper usage, use the {@link KubernetesPortForwardServiceProvider.getService}.
 */
export class ConfigManagementService {
  /**
   * Creates an instance of ConfigManagementService.
   * @param configStorage - The forward configuration storage.
   * @see ForwardConfigStorage
   */
  constructor(protected configStorage: ForwardConfigStorage) {}

  /**
   * Creates a new forward configuration.
   * @param config - The forward configuration to create.
   * @returns The created forward configuration.
   * @see UserForwardConfig
   */
  async createForward(config: UserForwardConfig): Promise<UserForwardConfig> {
    return this.configStorage.createForward(config);
  }

  /**
   * Deletes an existing forward configuration.
   * @param config - The forward configuration to delete.
   * @returns Void if the operation successful.
   * @see UserForwardConfig
   */
  async deleteForward(config: UserForwardConfig): Promise<void> {
    return this.configStorage.deleteForward(config);
  }

  /**
   * Update an existing forward configuration.
   * @param oldConfig - The forward configuration to update
   * @param newConfig - The
   * @returns The updated configuration
   * @see UserForwardConfig
   */
  async updateForward(oldConfig: UserForwardConfig, newConfig: UserForwardConfig): Promise<UserForwardConfig> {
    return this.configStorage.updateForward(oldConfig, newConfig);
  }

  /**
   * Lists all forward configurations.
   * @returns A list of forward configurations.
   * @see UserForwardConfig
   */
  async listForwards(): Promise<UserForwardConfig[]> {
    return this.configStorage.listForwards();
  }
}
