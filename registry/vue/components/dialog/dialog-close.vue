<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
</script>

<template>
  <ArkDialog.CloseTrigger data-slot="dialog-close-trigger"><slot /></ArkDialog.CloseTrigger>
</template>
