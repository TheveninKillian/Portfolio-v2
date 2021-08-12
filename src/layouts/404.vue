<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section class="px-4 py-10 text-center">
    <div>
      <p class="text-4xl">
        <carbon-warning class="inline-block" />
      </p>
    </div>

    <router-view />

    <div>
      <button
        class="btn-special mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </section>
</template>
