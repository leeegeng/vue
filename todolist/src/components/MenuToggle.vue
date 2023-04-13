<template>
  <div id="navigation" class="flex flex-direction-column">
    <!-- 一级菜单 开始 -->
    <div v-for="firstLevel in menus" :key="firstLevel.title">
      <div class="menu-item first-level" @click="changeExpand(firstLevel)">
        <!-- <img :src="firstLevel.icon" alt="" /> -->
        <span>{{ firstLevel.title }}</span>
      </div>
      <!-- 二级菜单 开始 -->
      <collapse-transition>
        <div class="second-level-container" v-show="firstLevel.isExpand">
          <div
            class="menu-item second-level"
            v-for="secondLevel in firstLevel.children"
            :key="secondLevel.title"
          >
            <!-- <img src="../assets/images/dot_unselected.png" alt="" /> -->
            {{ secondLevel.title }}
          </div>
        </div>
      </collapse-transition>
      <!-- 二级菜单 结束 -->
    </div>
    <!-- 一级菜单 结束 -->
  </div>
</template>

<script>
// import axios from 'axios'
// 引入伸缩效果组件
import collapseTransition from './collapseTransition'
export default {
  data() {
    return {
      isActive: false,
      menus: [
        {
          title: '终端',
          icon: '/static/images/icon_1.png',
          isExpand: true,
          children: [
            {
              title: '智能物联网边缘计算',
            },
            {
              title: '终端融合能力',
            },
          ],
        },
        {
          title: '网络',
          icon: '/static/images/icon_2.png',
          isExpand: true,
          children: [
            {
              title: '客户侧内部组织网',
            },
          ],
        },
      ],
    }
  },
  components: {
    collapseTransition,
  },
  methods: {
    //展开收起按钮点击
    changeExpand(menu) {
      menu.isExpand = !menu.isExpand
      console.log(menu.isExpand)
    },
  },
}
</script>
<style scoped>
#navigation {
  background-color: #e7e7e7;
}

.menu-item {
  width: 327px;
  height: 49px;
  line-height: 49px;
  font-size: 14px;
  border-bottom: solid 1px #c4c4c4;
  color: #3d3d3d;
  cursor: pointer;
}

.first-level {
  /* background: url(../assets/images/first_level_menu_bg.png); */
  font-weight: bold;
}

.first-level img:first-child {
  vertical-align: middle;
  margin-left: 20px;
  margin-right: 15px;
}

.first-level span {
  width: 230px;
  display: inline-block;
}

.second-level {
  width: 320px;
  border-left: solid 7px #e7e7e7;
}

.second-level:hover {
  background-color: #ffffff;
  color: #13a3a9;
  border-left: solid 7px #f6ab36;
}

.second-level img:first-child {
  vertical-align: middle;
  margin-left: 61px;
  margin-right: 10px;
}
</style>
