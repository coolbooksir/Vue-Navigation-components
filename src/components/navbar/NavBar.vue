<template>
  <div id="nav">
    <div id="nav-left"><slot name="nav-left"></slot></div>
    <div id="nav-right"><slot name=nav-right></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
#nav {
  height: 30px;
  line-height: 30px;
  background-color: rgba(36, 118, 52, 0.6);
}
#nav-left {
  display: flex;
  flex: 1;
  margin-left: 30px;
  float: left;
}
#nav-right{
  display: flex;
  flex: 1;
  float: right;
  margin-right: 30px;
}
</style>