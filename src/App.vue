<script>
import AppHeader from '/src/components/AppHeader.vue';
import AppMain from '/src/components/AppMain.vue';
import AppFooter from '/src/components/AppFooter.vue';
import { menuItems } from './assets/js/dropdown.js';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      menuItems: menuItems,
      activeDropdown: null,
    };
  },
  methods: {
    toggleDropdown(index) {
      if (this.activeDropdown === index) {
        this.activeDropdown = null;
      } else {
        this.activeDropdown = index;
      }
    }
  }
}
</script>

<template>

  <body>
    <AppHeader :menuItems="menuItems" @toggle-dropdown="toggleDropdown" :active-dropdown="activeDropdown" />
    <AppMain />
    <AppFooter />
  </body>
</template>

<style>
@import url('./style.css');
</style>
