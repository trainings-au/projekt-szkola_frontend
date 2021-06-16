<template>
  <div id="app">
    <navBar />
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

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
