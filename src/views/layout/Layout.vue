<template>
  <div class="mywrap" style="min-height: 90vh;"> <!-- 这是一个包裹容器 -->
    <!-- 顶部导航栏 -->

    <div class="navbar" :style="{ backgroundColor: bgColor }">
      <div class="mynav">
        <img src="../../assets/logo6.svg" alt="logo" style="height:120px;margin-top:10px;">
        <div style="width: 18%;"></div>
        <div class="navbar-item" v-for="page in pages" :key="page.name" style="font-size: 28px;">
          <router-link :to="page.link" @mouseover="startAnimation(page.name)" @mouseleave="stopAnimation(page.name)"
            class="nav-item">{{
              page.name
            }}</router-link>
        </div>
      </div>
    </div>



    <!-- 主题内容 -->
    <router-view />
  </div>
  <!-- 底部导航栏 -->
  <footer>
    <nav>
      <div style="width:25%"></div>
      <ul class="nav-menu" style="margin: 0 auto;">
        <li><img src="../../assets/zjulogo1.png" alt="123" style="height: 40px;margin-top: 10px;"></li>
        <li style="width:50px ;"></li>
        <li><img src="../../assets/zjulogo2.png" alt="123" style="height: 40px;margin-top: 10px;"></li>
        <li style="width:50px ;"></li>
        <div>
          <li><a href="#" style="font-size: 12px;">浙ICP案2022028846号</a></li>
          <li><div style="min-height: 5px;"></div></li>
          <li><a href="#" style="font-size: 12px;">© 2022 keyanbu. All rights reserved.
</a></li>
        </div>
      </ul>
      <div style="width:16%"></div>
      <ul class="social-links">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { reactive } from 'vue';
export default {
  setup() {
    const pages = [
      { name: 'Home', link: '/home' },
      { name: 'Search', link: '/about' },
      { name: 'Browser', link: '/search' },
      // { name: 'About', link: '/details' },
      { name: 'Help', link: '/help' },
      { name: 'Download', link: '/download' },
      { name: 'Contact', link: '/contact' },
    ];

    const state = reactive({
      bgColor: '#b19870',
      activePage: null,
    });

    function startAnimation(name:any) {
      state.activePage = name;
    }

    function stopAnimation(name:any) {
      state.activePage = null;
    }

    return {
      pages,
      bgColor: state.bgColor,
      startAnimation,
      stopAnimation,
      activePage: state.activePage,
    };
  },
};
</script>



<style scoped>
.mynav {
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1350px;
  margin: 0 auto;
}

.navbar {
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  box-shadow: 15px 5px 15px #806129;


}



.nav-item {
  font-weight: bold;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
}

.nav-item:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff7cf;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s;
  color: #fff7cf;
}

.nav-item:hover:before,
.nav-item:focus:before {
  transform: scaleX(1);
}

.nav-item:hover {
  animation: shake 0.5s;
  animation-fill-mode: forwards;
}

@keyframes shake {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.navbar-item:hover .nav-item,
.navbar-item:focus .nav-item {
  animation: none;
}

.navbar-item:hover .nav-item:before,
.navbar-item:focus .nav-item:before {
  transform: scaleX(1);
}

.navbar-item:hover .nav-item:hover:before,
.navbar-item:focus .nav-item:hover:before {
  transform: scaleX(1.2);
}

.navbar-item:hover .nav-item:hover {
  color: #fff7cf;
  animation: shake 0.5s;
  animation-fill-mode: forwards;
}

footer {
  bottom: 0;
  height: 60px;
  left: 0;
  background-color: #79510d;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-top: 5vh;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.nav-menu li {
  margin: 0 10px;
}

.nav-menu li a {
  color: #fff;
  text-decoration: none;
}

.social-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.social-links li {
  margin: 0 10px;
}

.social-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}</style>
