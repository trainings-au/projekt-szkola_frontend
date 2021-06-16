<template>
  <nav>
    <p>WebSite<b>Name</b>.com</p>
    <img src="../assets/info.png" />
    <div @click="changeTab('arrival')">Po przyjeździe</div>
    <div @click="changeTab('staying')">Pobyt w Polsce</div>
  </nav>
</template>
<script>
export default {
  data: function () {
    return {
      activeTab: "arrival",
    };
  },
  methods: {
    changeTab(tabType) {
      this.activeTab = tabType;
    },
  },
};
</script>
<style>
nav {
  background-color: white;
}
</style>