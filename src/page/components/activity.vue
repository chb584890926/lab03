<template>
  <div class="activity border-top">
    <div class="activity-item border-right">
      <span class="iconfont">&#xe61b;</span>
      定位失败
    </div>
    <div class="activity-item">
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
.activity {
  display: flex;
  position: relative;
}
.activity .activity-item {
  flex: 1;
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
}
</style>
