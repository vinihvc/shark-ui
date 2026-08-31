<script setup lang="ts">
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
} from "../components/sidebar";
</script>

<template>
  <SidebarProvider>
    <Sidebar><SidebarContent /></Sidebar>
    <SidebarInset>
      <Checkbox aria-label="Accept" />
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader><DialogTitle>Pilot</DialogTitle></DialogHeader>
          <Button>Save</Button>
        </DialogContent>
      </Dialog>
    </SidebarInset>
  </SidebarProvider>
</template>
