<!-- Registration modal component used to create a new user account (mocked flow). -->

<template>
  <UModal v-model="open">
  </UModal>
</template>

<script setup lang="ts">
const open = defineModel<boolean>({ default: false });
const emit = defineEmits<{ (e: "registered", email: string): void }>();

const email = ref("");
const password = ref("");

const onRegister = () => {
	if (!email.value || !password.value) return;
	emit("registered", email.value.trim());
	open.value = false;
};
</script>
