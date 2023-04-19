<template>
  <div class="outer">
    <div class="page-header">
      <div class="menu-control">
        <span class="control" @click="showMenu">|||</span>
        <span>{{ menuName }}</span>
      </div>
      <div class="user-helper">
        <div class="more-application">
          <span>更多应用</span>
          <span class="app-direction">v</span>
        </div>
        <div class="other">
          <span><router-link to="/content">content</router-link></span>
          <span><router-link to="/about">About</router-link></span>
          <span>注销</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import { bus } from './common/common-bus'
export default {
  name: 'PageHeader',
  data() {
    return {
      menuName: '',
      // ...this.$store.state,
    }
  },
  computed: {
    // 对象写法
    // ...mapState({ menuShow: 'menuShow' }),

    // 数组写法
    ...mapState(['menuShow']),
  },
  methods: {
    showMenu(event) {
      this.CHANGEMENU(3)
      event.target.innerText = this.menuShow ? 'lll' : '三'
      // console.log('$$$$', event)
    },
    ...mapMutations({ CHANGEMENU: 'CHANGEMENU' }),
    // showMenu() {
    //   // this.menuShow = !this.menuShow
    //   // console.log('menuShow:', this.menuShow)
    //   this.$store.dispatch('changeMenu', 2)
    //   // console.log('state 的值为：', this.$store.state.menuShow)
    //   console.log('state 的值为：', this.menuShow)
    // },
  },
  mounted() {
    console.log('@@', this)
    this.$bus.$on('menu-event', (message) => {
      this.menuName = message
    })
  },
}
</script>

<style scoped>
.outer {
  display: block;
  width: 100%;
}
.page-header {
  display: flex;
  /* width: 100%; */
  height: 80px;
  flex-direction: row;
  align-items: center;
  background-color: wheat;
  flex-grow: 1;
  justify-content: space-between;
}

.page-header .menu-control > span {
  padding-right: 10px;
}

.page-header .menu-control {
  padding-left: 5px;
  width: 200px;
}

.page-header .menu-control .control {
  cursor: pointer;
}

.page-header .user-helper {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
}
.page-header .user-helper {
  width: 450px;
}

.page-header .user-helper .other > span:last-child {
  padding-right: 20px;
}
</style>
