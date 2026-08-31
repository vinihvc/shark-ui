<script setup lang="ts">
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";
</script>

<template>
  <ArkDialog.Trigger data-slot="dialog-trigger"><slot /></ArkDialog.Trigger>
</template>
