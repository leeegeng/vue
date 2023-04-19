<template>
  <div class="outer">
    <div class="page-content">
      <div class="box" v-for="item in layout" :key="item.key">
        <div class="box-header">
          <span class="titile">{{ item.cnName }}</span>
          <div class="control">
            <span class="refresh">刷新</span>
            <span class="fullscreen">全屏</span>
          </div>
        </div>
        <div class="box-content"></div>
      </div>

      <i class="default" v-for="i in layout.length" :key="i"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageContent',
  data() {
    return {
      layout: [],
    }
  },
  mounted() {
    axios
      .get('/static/home-layout.json')
      .then((response) => {
        console.log(response.data)
        this.layout = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.outer {
  display: block;
  width: 100%;
  height: 100%;
}
.page-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-evenly;
  /* align-content: flex-end; */
  box-sizing: border-box;
  align-items: flex-start;
}
.page-content .box {
  width: 310px;
  height: 300px;
  background-color: whitesmoke;
  border: 1px solid black;
  margin: 1px;
  box-sizing: border-box;
  align-self: flex-start;
}

.default {
  width: 310px;
  height: 0;
}

.page-content .box .box-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.page-content .box .box-header .control:hover {
  cursor: pointer;
}
</style>
