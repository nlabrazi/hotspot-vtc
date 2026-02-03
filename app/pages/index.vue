<!-- Landing page handling login, subscription state, and main map access entry point. -->

<template>
  <MapBackground :disabled="isMapDisabled">
    <div class="min-h-screen flex flex-col">
      <!-- Top bar -->
      <header class="p-4 flex items-center justify-between">
        <div class="text-white font-semibold tracking-tight">HotspotVTC</div>

        <div class="flex items-center gap-2">
          <template v-if="session.state.value.isLoggedIn">
            <UButton color="gray" variant="soft" size="sm" @click="logout">
              Déconnexion
            </UButton>
          </template>
          <template v-else>
            <UButton color="gray" variant="soft" size="sm" @click="openRegister = true">
              Créer un compte
            </UButton>
            <UButton size="sm" @click="openLogin = true">Login</UButton>
          </template>
        </div>
      </header>

      <!-- Center CTA -->
      <main class="flex-1 flex items-center justify-center px-4">
        <div class="w-full max-w-md bg-black/40 backdrop-blur rounded-2xl p-5 text-white space-y-4">
          <h1 class="text-xl font-semibold leading-tight">
            Trouve où te placer à Paris & petite couronne
          </h1>

          <p class="text-sm text-white/80">
            Prototype : la carte est désactivée tant que tu n’es pas connecté avec un abonnement actif.
          </p>

          <div v-if="!session.state.value.isLoggedIn" class="flex gap-2">
            <UButton class="flex-1" @click="openLogin = true">Se connecter</UButton>
            <UButton class="flex-1" color="gray" variant="soft" @click="openRegister = true">
              Créer un compte
            </UButton>
          </div>

          <div v-else-if="!session.state.value.hasActiveSubscription" class="space-y-3">
            <div class="text-sm text-white/80">
              Connecté en tant que <span class="font-medium">{{ session.state.value.userEmail }}</span>
            </div>
            <UButton class="w-full" @click="activateSubMock">
              Activer abonnement (mock)
            </UButton>
          </div>

          <div v-else class="space-y-3">
            <div class="text-sm text-white/80">
              Abonnement actif ✅ — carte active (placeholder)
            </div>
            <UButton class="w-full" color="gray" variant="soft" @click="deactivateSubMock">
              Désactiver abonnement (mock)
            </UButton>
          </div>
        </div>
      </main>
    </div>

    <LoginModal v-model="openLogin" @logged-in="handleLoggedIn" />
    <RegisterModal v-model="openRegister" @registered="handleRegistered" />
  </MapBackground>
</template>

<script setup lang="ts">
import MapBackground from "../../components/map/MapBackground.vue";
import LoginModal from "../../components/auth/LoginModal.vue";
import RegisterModal from "../../components/auth/RegisterModal.vue";
import { useSession } from "../../composables/useSession";

const session = useSession();

const openLogin = ref(false);
const openRegister = ref(false);

const isMapDisabled = computed(() => {
	return (
		!session.state.value.isLoggedIn ||
		!session.state.value.hasActiveSubscription
	);
});

const handleLoggedIn = (email: string) => {
	session.login(email);
};

const handleRegistered = (email: string) => {
	// prototype: create account then auto-login
	session.login(email);
};

const logout = () => session.logout();

const activateSubMock = () => session.setSubscriptionActive(true);
const deactivateSubMock = () => session.setSubscriptionActive(false);
</script>
