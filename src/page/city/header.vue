<template>
  <div class="city">
    <div class="header-left" @click="fanhui">
      <div class="iconfont">&#xe6ff;</div>
    </div>
    <div class="header-item">城市选择</div>
  </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {};
  },
  methods: {
    fanhui() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.city {
  line-height: 0.86rem;
  display: flex;
  background: #3fb3b3;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
  margin-left: 0.1rem;
}

.header-item {
  flex: 1;
  font-size: 0.32rem;
  text-align: center;
  color: #fff;
  padding-right: 0.5rem;
}
</style>
