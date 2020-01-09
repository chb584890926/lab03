<template>
  <div class="localion border-top">
    <div class="localion-item border-right">
      <span class="iconfont">&#xe61b;</span>
      定位失败
    </div>
    <div class="localion-item">
      <span class="iconfont">&#xe662;</span>
      必游榜单
    </div>
  </div>
</template>

<script>
export default {
  name: "localit",
  data() {
    return {};
  }
};
</script>


<style scoped>
.localion {
  display: flex;
  position: relative;
  background: #ffffff;
}
.localion .localion-item {
  flex: 1;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
}
</style>
