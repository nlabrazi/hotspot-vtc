<!-- Visual map container handling active/disabled states and background overlays. -->

<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <!-- Fake map background -->
    <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />

    <!-- Grid overlay to look like a map -->
    <div class="absolute inset-0 opacity-20" style="
        background-image: linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px);
        background-size: 48px 48px;
      " />

    <!-- Disabled overlay -->
    <div v-if="disabled" class="absolute inset-0 backdrop-blur-[2px] bg-zinc-950/55" />

    <!-- Slot content on top -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	disabled: boolean;
}>();
</script>
