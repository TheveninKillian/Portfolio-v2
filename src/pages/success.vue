<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section>
    <div class="success">
      <p text="size-25px" font="bold">
        Thank you!
      </p>

      <p>Your form submission has been received.</p>

      <div>
        <button
          class="btn-special mt-8"
          @click="router.back()"
        >
          Back to our site
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../scss/variables';

.success{
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  padding: 30px 30px 30px 15px;
  min-width: 300px;

  background-color: $color-black;

  .btn-special{
    width: 140px;
  }
}
</style>

<route lang="yaml">
meta:
  layout: success
</route>
