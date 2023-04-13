<template>
  <div class="page-content">
    <div class="box">
      <div class="box-header">
        <span class="titile">设备周增量</span>
        <div class="control">
          <span class="refresh">刷新</span>
          <span class="fullscreen">全屏</span>
        </div>
      </div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
    <div class="box">
      <div class="box-header"></div>
      <div class="box-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageContent',
}
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  align-content: flex-start;
}
.page-content .box {
  width: 300px;
  height: 330px;
  background-color: blueviolet;
  border: 1px solid black;
  margin: 1px;
  box-sizing: border-box;
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
