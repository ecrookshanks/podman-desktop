<script lang="ts">
import { faMinusCircle, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Button, ErrorMessage, Input } from '@podman-desktop/ui-svelte';
import { onMount } from 'svelte';
import { router } from 'tinro';

import EngineFormPage from '/@/lib/ui//EngineFormPage.svelte';
import { saveImagesInfo } from '/@/stores/save-images-store';

import { Uri } from '../uri/Uri';
import type { ImageInfoUI } from './ImageInfoUI';

let imagesToSave: ImageInfoUI[];
let saveError: string = '';

let outputPath: string | undefined = undefined;
let singleItemMode = false;
let invalidOutputPath = true;
let inProgress = false;
let saveDisabled = false;
$: saveDisabled = !outputPath || imagesToSave.length === 0;

onMount(async () => {
  imagesToSave = $saveImagesInfo;
  if (imagesToSave.length === 0) {
    // go back to images list
    router.goto('/images/');
  }
  singleItemMode = imagesToSave.length === 1;
});

async function selectOutputPath(): Promise<void> {
  const engines = imagesToSave.map(img => img.engineId);
  const filtered = imagesToSave.filter((img, index) => !engines.includes(img.engineId, index + 1));
  if (filtered.length === 1) {
    await selectTargetFilePath();
  } else {
    await selectOutputDirectoryPath();
  }
}

async function selectTargetFilePath(): Promise<void> {
  let targetFile = 'images.tar';
  if (singleItemMode) {
    let lastSlashPos = imagesToSave[0].name.lastIndexOf('/') + 1;
    let lastColon: number | undefined = imagesToSave[0].name.lastIndexOf(':');
    if (lastColon === -1 || lastColon < lastSlashPos) {
      lastColon = undefined;
    }
    targetFile = `${imagesToSave[0].name.substring(lastSlashPos, lastColon)}.tar`;
  }
  const result = await window.saveDialog({
    title: 'Select the directory to export the container content',
    defaultUri: {
      fsPath: targetFile,
      path: targetFile,
      scheme: 'file',
    } as Uri,
  });
  if (!result) {
    if (!outputPath) {
      invalidOutputPath = true;
    }
    return;
  }
  const uriAPI = Uri.revive(result);
  outputPath = uriAPI.fsPath;
  invalidOutputPath = false;
}

async function selectOutputDirectoryPath(): Promise<void> {
  const result = await window.openDialog({
    title: `Select the directory to save the ${singleItemMode ? 'image' : 'images'}`,
    selectors: ['openDirectory'],
  });
  if (!result?.[0]) {
    if (!outputPath) {
      invalidOutputPath = true;
    }
    return;
  }

  outputPath = result?.[0];
  invalidOutputPath = false;
}

function deleteImageToSave(index: number): void {
  imagesToSave = imagesToSave.filter((_, i) => i !== index);
}

async function saveImages(): Promise<void> {
  saveError = '';
  inProgress = true;

  if (!outputPath) {
    throw new Error('Unable to save images. Output directory not specified');
  }

  try {
    await window.saveImages({
      images: imagesToSave.map(img => {
        // do we have a valid name for the image?
        let imageId = `${img.name}:${img.tag}`;
        if (imageId.startsWith('<none>')) {
          imageId = img.shortId;
        }
        return {
          id: imageId,
          engineId: img.engineId,
        };
      }),
      outputTarget: outputPath,
    });
    // go back to images list
    router.goto('/images/');
  } catch (error) {
    saveError = String(error);
  } finally {
    inProgress = false;
  }
}
</script>

{#if imagesToSave}
  <EngineFormPage title={singleItemMode ? `Save Image ${imagesToSave[0].name}` : 'Save Images'}>
    {#snippet icon()}
      <i class="fas fa-play fa-2x" aria-hidden="true"></i>
    {/snippet}
    {#snippet content()}
    <div class="space-y-2">
      <label for="modalSelectTarget" class="block mb-2 text-sm font-medium text-[var(--pd-content-card-header-text)]"
        >Export to:</label>
      <div class="flex w-full">
        <Input
          class="grow mr-2"
          readonly
          value={outputPath}
          id="input-output-directory"
          aria-invalid={invalidOutputPath} />
        <Button
          on:click={selectOutputPath}
          title="Open dialog to select the output folder"
          aria-label="Select output folder">Browse ...</Button>
      </div>

      {#if !singleItemMode && imagesToSave.length > 0}
        <!-- Display the list of images to save -->
        <div
          class="flex flex-row justify-center w-full pt-5 text-sm font-medium text-[var(--pd-content-card-header-text)]">
          <div class="flex flex-col grow">Images to save</div>
        </div>
        {#each imagesToSave as imageToSave, index (imageToSave.id)}
          {@const imageAndTag = `${imageToSave.name}:${imageToSave.tag}`}
          {@const imageDisplayName = `${imageToSave.name === '<none>' ? imageToSave.shortId : imageAndTag}`}
          <div class="flex flex-row justify-center w-full py-1">
            <Input value={imageDisplayName} aria-label="image {imageDisplayName}" readonly={true} />
            <Button
              type="link"
              aria-label="Delete image {imageDisplayName}"
              on:click={(): void => deleteImageToSave(index)}
              icon={faMinusCircle} />
          </div>
        {/each}
      {/if}

      <div class="pt-5 w-full">
        <Button
          on:click={saveImages}
          inProgress={inProgress}
          class="w-full"
          icon={faPlay}
          aria-label="Save images"
          disabled={saveDisabled}>
          Save Images
        </Button>
        <div aria-label="saveError">
          {#if saveError !== ''}
            <ErrorMessage class="py-2 text-sm" error={saveError} />
          {/if}
        </div>
      </div>
    </div>
    {/snippet}
  </EngineFormPage>
{/if}
