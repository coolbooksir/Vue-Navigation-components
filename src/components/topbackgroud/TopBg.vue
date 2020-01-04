<template>
  <div id="top-bg">
      <nav-bar>
          <nav-left path='/home' slot="nav-left">
              <div slot="nav-item">首页</div>
          </nav-left>
          <nav-left path='/recyclables' slot="nav-left">
              <div slot="nav-item">可回收物</div>
          </nav-left>
          <nav-left path='/Kitchen' slot="nav-left">
              <div slot="nav-item">厨余垃圾</div>
          </nav-left>
          <nav-left path='/hazardous' slot="nav-left">
              <div slot="nav-item">有害垃圾</div>
          </nav-left>
          <nav-left path='/other' slot="nav-left">
              <div slot="nav-item">其他垃圾</div>
          </nav-left>
          <nav-right slot=nav-right path='/login'>
              <div slot="nav-features">登录</div>
          </nav-right>
          <nav-right slot=nav-right path='regist'>
              <div slot="nav-features">注册</div>
          </nav-right>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../navbar/NavBar';
import NavLeft from '../navbar/NavLeft';
import NavRight from '../navbar/NavRight';
export default {
    name:'TopBg',
    components:{
        NavBar,
        NavLeft,
        NavRight
    }
}
</script>

<style>
#top-bg{
    width: 1920px;
    height: 320px;
    margin: 0 auto;
    background: url(../../assets/images/topbg/top-banner.png) no-repeat center center;
}
</style>