<template>
  <div id="app">
    <navBar />
    lal
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";

export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>
