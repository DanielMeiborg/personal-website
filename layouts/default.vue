<template>
  <div tabindex="0" class="min-h-screen flex flex-col items-center justify-between">
    <Navbar />
    <slot class="max-w-prose p-3" />
    <CopyrightFooter />
  </div>
</template>

<script setup lang="ts">
</script>