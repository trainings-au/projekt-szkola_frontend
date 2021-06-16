<template>
  <nav>
    <div class="nav-info">
      <p>WebSite<b>Name</b>.com</p>
      <img src="../assets/info.png" class="icon" />
    </div>
    <div class="nav-tabs">
      <div
        @click="changeTab('arrival')"
        class="tab"
        v-bind:class="{ active: activeTab === 'arrival' }"
      >
        Po przyjeździe
      </div>
      <div
        @click="changeTab('staying')"
        class="tab"
        v-bind:class="{ active: activeTab === 'staying' }"
      >
        Pobyt w Polsce
      </div>
    </div>
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
  margin: 0;
  padding: 0;
  margin-bottom: 100px;
}

.icon {
  height: 20px;
  fill: red;
}

.nav-info {
  color: #8087a4;
  display: flex;
  justify-content: space-between;
  height: 50%;
  margin: 20px;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  height: 50%;
}

.active {
  border-bottom: 5px solid #8087a4;
}

.tab {
  margin: 5px;
  padding: 15px;
  text-align: center;
  width: 120px;
  cursor: pointer;
}
</style>