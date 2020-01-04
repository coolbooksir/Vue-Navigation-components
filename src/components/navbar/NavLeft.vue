<template>
    <div class="nav-item" @click="navBtn">
      <slot name="nav-item">
        <div>导航</div>
      </slot>
    </div>
</template>

<script>
export default {
  name: "NavLeft",
  props: {
    path: String
  },
  methods: {
    navBtn() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>

.nav-item {
  width: 80px;
  height: 30px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: #247634;
  font-weight: 700;
  border-radius: 20px;
}
</style>