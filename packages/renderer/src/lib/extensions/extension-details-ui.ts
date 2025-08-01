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

import type { CombinedExtensionInfoUI } from '/@/stores/all-installed-extensions';
import type { ExtensionError } from '/@api/extension-info';

export interface ExtensionDetailsUI {
  displayName: string;
  description: string;
  type: 'dd' | 'pd';
  removable: boolean;
  devMode: boolean;
  state: string;
  name: string;
  icon: undefined | string | { light: string; dark: string };
  iconRef?: string;
  readme: { content?: string; uri?: string };
  releaseDate: string;
  categories: string[];
  publisherDisplayName: string;
  version: string;
  installedExtension?: CombinedExtensionInfoUI;
  id: string;
  fetchable: boolean;
  fetchLink: string;
  fetchVersion: string;
  error?: ExtensionError;
}
