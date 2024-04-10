<script>
import AppHeader from '/src/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }

}

</script>

<template>
  <body> 
    <AppHeader />
    <AppMain />
    <AppFooter />
  </body>
</template>

<style>
@import url('./style.css');
</style>
