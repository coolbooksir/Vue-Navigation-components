<template>
  <div class="nav-right" @click='loginClick'>
    <slot name="nav-features">
      <div>功能</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "NavRight",
  props:{
      path:String
  },
  methods:{
      loginClick(){
          this.$router.push(this.path);
      }
  }
};
</script>

<style>
.nav-right {
  width: 60px;
  height: 30px;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
}
.nav-right:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: #247634;
  font-weight: 700;
  border-radius: 20px;
}
</style>