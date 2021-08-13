<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <header display="flex" pos="relative" align="items-center" h="50px xl:75px" p="t-10px">
    <div w="w-1/2">
      <p text="uppercase" m="l-2 lg:l-10px">
        <router-link to="/">
          Killian Thevenin
        </router-link>
      </p>
    </div>

    <div display="flex" justify="end" w="w-1/2" text="right">
      <div class="translation" m="r-15px lg:r-30px" cursor="pointer" @click="toggleLocales">
        <mdi:translate pos="relative top-2px" m="r-2px" w="20px" h="20px" />{{ t('language') }}
      </div>

      <div>
        <Nav />
      </div>
    </div>

    <div class="header-border" pos="absolute bottom-0 left-50%" h="2px" bg="light-500"></div>
  </header>

  <router-view />

  <footer>
    <p>{{ t('footer') }}</p>
  </footer>
</template>

<style lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

.translation{
  color: $color-secondary;
}

.header-border{
  width: calc(100% - 20px);

  @include breakpoint(sm){
    width: calc(100% - 50px);
  }

  @include breakpoint(lg){
    width: calc(100% - 100px);
  }
}

footer{
  padding: 25px 0;

  background-color: $color-black;
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  p{
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    text-align: center;
  }
}
</style>
