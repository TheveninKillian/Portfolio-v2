<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { handleResize } from '~/resize'

const activeNav = ref(false)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const removeScroll = () => {
  if (activeNav.value === true)
    document.body.style.overflow = 'hidden'
  else
    document.body.style.overflow = 'auto'
}
</script>

<template>
  <Overlay v-if="activeNav" :opacity="90" style="z-index: 20; height: 100vh;" @click="activeNav = !activeNav, removeScroll()" />

  <div
    v-if="handleResize() < 1024"
    class="icon-nav"
    cursor="pointer"
    m="r-2"
    @click="activeNav = !activeNav, removeScroll()"
  >
    <ci:hamburger />
  </div>

  <nav
    v-if="handleResize() < 1024"
    class="nav-mobile"
    pos="fixed"
    h="full"
    z="50"
    :class="{ active: activeNav }"
  >
    <ul text="center">
      <router-link to="/portfolio">
        <li @click="activeNav = !activeNav, removeScroll()">
          Portfolio
        </li>
      </router-link>
      <div h="1px" w="1/2" m="auto" bg="light-500 opacity-50"></div>
      <router-link to="/contact">
        <li @click="activeNav = !activeNav, removeScroll()">
          Contact
        </li>
      </router-link>
    </ul>
  </nav>

  <nav v-else class="nav-desktop">
    <ul display="flex">
      <router-link to="/portfolio">
        <li>Portfolio</li>
      </router-link>
      <router-link to="/contact">
        <li>Contact</li>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../scss/variables';
@import '../scss/mixins';

.icon-nav{
  width: 30px;
  height: 30px;

  svg{
    width: 100%;
    height: 100%;
  }
}

.nav-mobile{
  top: 0;
  right: -70%;

  width: 70%;

  background-color: $color-black;
  transition: right .3s ease;

  &.active{
    right: 0;
  }

  @include breakpoint(sm){
    width: 40%;
  }

  li{
    margin: 0;
    height: 70px;
    line-height: 70px;
  }
}

.nav-desktop{
  li{
    margin-right: 10px;

    &:nth-child(1),
    &:nth-child(2){
      margin-right: 15px;
    }
  }
}

li{
  cursor: pointer;
}
</style>
