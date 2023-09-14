<template>
  <div tabindex="0" class="min-h-screen flex flex-col justify-between">
    <div class="flex flex-col items-center ">
      <Navbar />
      <slot class="max-w-prose p-3" />
    </div>
    <CopyrightFooter />
  </div>
</template>