<template>
  <div id="app">
    <TopBg/>
    <router-view/>
  </div>
</template>
<script>
  import TopBg from './components/topbackgroud/TopBg';
  
  export default{
  name:'App',
  components:{
    TopBg
  }
}
</script>

<style>
  @import url(./assets/css/base.css);
/*
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
