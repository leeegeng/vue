<template>
  <div class="outer">
    <div class="page-content">
      <template v-for="item in layout">
        <div
          :class="['box', item.isFullScreen ? 'fullscreen' : '']"
          v-show="!isFullScreen || (isFullScreen && item.isFullScreen)"
        >
          <div class="box-header">
            <span class="titile">{{ item.cnName }}</span>
            <div class="control">
              <span class="refresh">刷新</span>
              <span class="fullscreen" @click="fullScreen(item)">{{
                item.isFullScreen ? '取消全屏' : '全屏'
              }}</span>
            </div>
          </div>
          <div class="box-content"></div>
        </div>
      </template>
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
      isFullScreen: false,
    }
  },
  methods: {
    fullScreen(item) {
      this.isFullScreen = !this.isFullScreen

      let that = this

      this.layout.forEach((comp) => {
        if (comp.key === item.key) {
          item.isFullScreen = that.isFullScreen
          comp.isFullScreen = that.isFullScreen
        } else {
          comp.isFullScreen = false
        }
      })
    },
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

<style lang="scss" scoped>
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
  .box {
    width: 310px;
    height: 300px;
    background-color: whitesmoke;
    border: 1px solid black;
    margin: 1px;
    box-sizing: border-box;
    align-self: flex-start;

    .box-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      span {
        padding: 0 6px;
      }

      .control:hover {
        cursor: pointer;
      }
    }
  }

  .fullscreen {
    width: 100%;
    height: 600px;
  }

  .default {
    width: 310px;
    height: 0;
  }
}
</style>
