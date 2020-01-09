<template>
  <div class="mp-group-title">
    <div class="mp-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span class="mp-title-l">本周热门榜单</span>
      <span class="mp-title-r">全部榜单 ></span>
    </div>
    <ul class="mp-hotsale-list">
      <li class="mp-hotsale-item" v-for="item in hotlist" :key="item.id">
        <img :src="item.imgurl">
        <p>{{item.title}}</p>
        <p>
          <span class="mark">{{item.markl}}</span>元起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hotlist: [
        {
          id: "01",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg",
          title: "故宫",
          markl: "$60"
        },
        {
          id: "02",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
          title: "八达岭长城",
          markl: "$10"
        },
        {
          id: "03",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_250x250_090a42b6.jpg",
          title: "什么海",
          markl: "$180"
        },
        {
          id: "04",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg",
          title: "颐和园",
          markl: "$38"
        },
        {
          id: "05",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_250x250_12e8154c.jpg",
          title: "鸟巢",
          markl: "$372"
        },
        {
          id: "06",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_250x250_ecfa0df2.jpg",
          title: "水立方",
          markl: "$49"
        }
      ]
    };
  }
};
</script>


<style scoped>
.mp-group-title {
  margin-top: 0.2rem;
  background: #ffffff;
  padding: 0.2rem;
  position: relative;
}
.mp-title img {
  width: 0.35rem;
  height: 0.35rem;
}
.mp-title-l {
  height: 0.44rem;
  color: #212121;
  font-size: 0.32rem;
  line-height: 0.44rem;
}
.mp-title-r {
  position: absolute;
  right: 0.1rem;
  top: 0.36rem;
  color: #616161;
  font-size: 0.24rem;
}
.mp-hotsale-list {
  overflow-x: scroll;
  white-space: nowrap;
  height: 3rem;
}
.mp-hotsale-item {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  padding-right: 0.2rem;
}
.mp-hotsale-item img {
  width: 100%;
  height: 100%;
}
.mp-hotsale-item p {
  text-align: center;
  margin-top: 0.12rem;
  color: #212121;
  font-size: 0.24rem;
  line-height: 0.32rem;
}
.mark {
  color: #ff8300;
  font-size: 0.32rem;
}
</style>
