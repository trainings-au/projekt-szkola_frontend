<template>
  <ul>
    <h3>TODO list</h3>
    <li>
      Implement
      <a
        href="https://drive.google.com/file/d/1cq3rp5jGNjk0Lc7qyhR-qoUkP1nbX06Y/view?usp=sharing"
        >this design</a
      >
    </li>
    <li>Add header with app name and info button</li>
    <li>Add main navigation bar with 2 tabs</li>
    <li>Add list component that is shown in tabs</li>
    <li>Add details page</li>
    <li>Details page navigation bar</li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
};
</script>
<style scoped>
h3 {
  border-bottom: 2px solid #42b983;
}
ul {
  padding: 0 40px;
  text-align: left;
}
li {
  margin-bottom: 4px;
}
</style>