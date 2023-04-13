<template>
  <div class="nav" v-show="menuShow">
    <img src="../../src/assets/logo.png" alt="logo图片" />
    <ul>
      <li
        v-for="item in menu"
        :key="item.id"
        :class="{ 'has-children': item.children }"
      >
        <a href="#" @click="toggleSubMenu(item)">{{ item.name }}</a>
        <collapseTransition>
          <ul v-if="item.children" v-show="item.showSubMenu">
            <li v-for="child in item.children" :key="child.id">
              <a href="#">{{ child.name }}</a>
            </li>
          </ul>
        </collapseTransition>
      </li>
      <!-- <li v-on:click="MenuEvent">首页</li>
      <li>拓扑视图</li>
      <li>设备中心</li>
      <li>告警中心</li>
      <li>视质轮巡</li>
      <li>录像轮巡</li>
      <li>人工巡检</li>
      <li>工单管理</li>
      <li>卡口运维</li>
      <li>状态统计</li>
      <li>日志管理</li>
      <li>用户中心</li>
      <li>模块配置</li>
      <li>自定义分组</li>
      <li>系统管理</li> -->
    </ul>
  </div>
</template>

<script>
// import { bus } from './common/common-bus'
import collapseTransition from './collapseTransition'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'MenuNav',
  data() {
    return {
      menu: [],
    }
  },
  computed: {
    ...mapState(['menuShow']),
  },
  components: {
    collapseTransition,
  },
  methods: {
    MenuEvent(event) {
      const value = event.target.innerText
      console.log(value)
      this.$bus.$emit('menu-event', value)
    },
    toggleSubMenu(item) {
      console.log('item=>', item)
      // 遍历菜单，当前激活菜单menu显示，其它隐藏；激活菜单第一次显示，第二次隐藏
      this.menu.forEach((curItem) => {
        if (curItem.id === item.id) {
          curItem.showSubMenu = !curItem.showSubMenu
        } else {
          curItem.showSubMenu = false
        }
      })
      this.$bus.$emit('menu-event', item.name)
    },
  },
  mounted() {
    console.log('enter mounted')
    axios
      .get('/static/menu.json')
      .then((response) => {
        console.log('enter mounted')
        this.menu = response.data.menu
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
.nav {
  width: 240px !important;
  height: 100vh;
  background-color: #0a052a;
  overflow: auto;
  overflow-x: hidden;
  flex-shrink: 0; /*不允许子元素缩小*/
}

.nav::-webkit-scrollbar {
  width: 8px;
}

a {
  text-decoration: none;
  color: inherit;
}

.nav::-webkit-scrollbar-thumb {
  background-color: darkgray;
  cursor: pointer;
}

.nav ul {
  list-style-type: none;
  /* padding-left: 50px; */
}

.nav ul li {
  color: white;
  font-size: 20px;
  /* padding: 15px; */
  /* text-indent: 50px; */
  display: block;
  position: relative;
}

.nav ul > li > a {
  display: inline-block;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  width: 100%;
}

.nav ul > li > ul > li > a {
  padding-left: 70px;
}

/* .nav ul li:first-child {
				padding-top: 20px;
			} */

.nav ul li:last-child {
  padding-bottom: 0;
}

.nav > ul li a:hover {
  cursor: pointer;
  background-color: rgba(0, 132, 255, 0.567);
}

a:active,
a:focus,
a.selected {
  background-color: rgba(0, 132, 255, 0.567);
}
</style>
