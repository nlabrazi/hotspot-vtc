<!-- Login modal component used to authenticate users (mocked in early stages). -->

<template>
  <UModal v-model="open">
  </UModal>
</template>

<script setup lang="ts">
const open = defineModel<boolean>({ default: false });
const emit = defineEmits<{ (e: "logged-in", email: string): void }>();

const email = ref("");

const onLogin = () => {
	if (!email.value) return;
	emit("logged-in", email.value.trim());
	open.value = false;
};
</script>
