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
@import 'variables.scss';

.success{
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50% -50%);

  background-color: $color-black;
}
</style>
