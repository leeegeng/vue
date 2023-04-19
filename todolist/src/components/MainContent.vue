<template>
  <div class="main">
    <PageHeader />
    <!-- <PageContent /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import PageContent from './views/PageContent.vue'
import PageHeader from './PageHeader.vue'

export default {
  name: 'MainContent',
  components: {
    PageHeader,
    // PageContent,
  },
}
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
