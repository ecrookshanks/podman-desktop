<script lang='ts'>
import { EmptyScreen } from '@podman-desktop/ui-svelte';
import type { ComponentProps } from 'svelte';
import { onDestroy, onMount } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';

import KubernetesCheckConnection from '/@/lib/ui/KubernetesCheckConnection.svelte';
import type { IDisposable } from '/@api/disposable';

import { listenResourcePermitted } from '../kube/resource-permission';

interface Props extends ComponentProps<EmptyScreen> {
  resources: string[];
  titleEmpty: string;
  titleNotPermitted: string;
}

let { icon, resources, titleEmpty, titleNotPermitted, ...restProps }: Props = $props();

let resourcesPermitted: boolean = $state(false);
let disposables: IDisposable[] = [];
let resourcePermittedMap: Map<string, boolean> = new SvelteMap();

onMount(async () => {
  for (let i = 0; i < resources?.length; i++) {
    const disposable = await listenResourcePermitted(resources[i], (permitted: boolean) => {
      resourcePermittedMap.set(resources[i], permitted);
      resourcesPermitted = resourcePermittedMap.values().reduce((acc, val) => acc || val, false);
    });
    disposables.push(disposable);
  }
});

onDestroy(() => {
  disposables.forEach(disposable => {
    disposable?.dispose();
  });
});
</script>

<EmptyScreen icon={icon} title={resourcesPermitted ? titleEmpty : titleNotPermitted} {...restProps}>
  <KubernetesCheckConnection />
</EmptyScreen>
