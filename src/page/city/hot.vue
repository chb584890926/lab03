<template>
  <div>
    <div class="first">
      <div class="first-header">热门城市</div>
      <ul class="first-item">
        <li
          class="first-list"
          v-for="item in hotCities "
          :key="item.id"
          @click="fanhui"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="second">
      <div class="second-header">字母排序</div>
      <ul class="second-item">
        <li
          class="second-list"
          v-for="(item,index) in cities"
          :key="index"
          @click="fanhui"
        >{{index}}</li>
      </ul>
    </div>
    <div class="third" v-for="(item,index) in cities" :key="index">
      <div class="third-header">{{index}}</div>
      <ul class="third-item">
        <li class="third-list" v-for="list in item" :key="list.id" @click="fanhui">{{list.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotCities", "cities"],
  name: "hot",
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
.first-header {
  background: #f3f2f2;
  font-size: 0.24rem;
  margin: 0.24rem 0.3rem 0rem 0.3rem;
  font-size: 0.24rem;
  line-height: 0.3rem;
  padding-bottom: 0.1rem;
  height: 0.4rem;
}
.first-item {
  background: #fff;
  position: relative;
  overflow: hidden;
}
.first-list {
  font-size: 0.28rem;
  color: #212121;
  width: 33.3333%;
  float: left;
  display: block;
  height: 0.9rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  line-height: 0.8rem;
  position: relative;
}
.first-item:before {
  content: "";
  position: absolute;
  left: 33.33333%;
  width: 33.333%;
  height: 100%;
  border-right: 0.02rem solid #e0e0e0;
  border-left: 0.02rem solid #e0e0e0;
}

.second-header {
  background: #f3f2f2;
  font-size: 0.24rem;
  margin: 0.24rem 0.3rem 0rem 0.3rem;
  font-size: 0.24rem;
  line-height: 0.3rem;
  padding-bottom: 0.1rem;
  height: 0.4rem;
}
.second-item {
  background: #fff;
  position: relative;
  overflow: hidden;
}
.second-list {
  font-size: 0.28rem;
  color: #212121;
  width: 16.66666%;
  float: left;
  display: block;
  height: 0.9rem;
  text-align: center;

  line-height: 0.8rem;
}

.third-header {
  background: #f3f2f2;
  font-size: 0.24rem;
  margin: 0.24rem 0.3rem 0rem 0.3rem;
  font-size: 0.24rem;
  line-height: 0.3rem;
  padding-bottom: 0.1rem;
  height: 0.4rem;
}
.third-item {
  background: #fff;
  position: relative;
  overflow: hidden;
}
.third-list {
  font-size: 0.28rem;
  color: #212121;
  width: 25%;
  float: left;
  display: block;
  height: 0.9rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  line-height: 0.8rem;
  position: relative;
  position: relative;
}
.third-item:before {
  content: "";
  position: absolute;
  left: 25%;
  width: 25%;
  height: 100%;
  border-right: 0.02rem solid #e0e0e0;
  border-left: 0.02rem solid #e0e0e0;
}
.third-item::after {
  content: "";
  position: absolute;
  left: 75%;
  height: 100%;
  border-left: 0.02rem solid #e0e0e0;
}
</style>
