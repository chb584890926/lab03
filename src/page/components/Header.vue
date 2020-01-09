<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe6ff;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6f4;</span>
      输入城市/景点/游玩主题
    </div><router-link to="/city">
    <div class="header-right">
      <span class="iconfont">&#xe64b;</span>
      城市
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
.header {
  line-height: 0.86rem;
  display: flex;
  background: #3fb3b3;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
}
.back-icon {
  text-align: center;
  font-size: 0.4rem;
}
.header-input {
  flex: 1;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-left: 0.2rem;
  color: #ccc;
}
.header-right {
  min-width: 1.04rem;
  padding: 0 0.1rem;
  float: right;
  text-align: center;
  color: white;
}
</style>