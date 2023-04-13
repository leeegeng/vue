<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <!-- <MenuToggle /> -->
    <MenuNav />
    <MainContent />
    <!-- <RouterTest></RouterTest> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Vue from 'vue'
import MenuNav from './components/MenuNav.vue'
import MainContent from './components/MainContent.vue'
// import RouterTest from './components/RouterTest.vue'

// import MenuToggle from './components/MenuToggle.vue'

// const bus = new Vue()

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MainContent,
    MenuNav,
    // RouterTest,
    // MenuToggle,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
