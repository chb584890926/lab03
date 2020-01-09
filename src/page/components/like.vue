<template>
  <div class="like">
    <div class="like-s">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="like-list border-bottom" v-for="item in likelist" :key="item.id">
        <div class="like-l">
          <img :src="item.imgurl">
        </div>
        <div class="like-r">
          <div class="like-title">{{item.title}}</div>
          <div class="like-num">{{item.num}}</div>
          <div class="like-map">
            <span>
              <b class="markl">$</b>
              <b class="mark">{{item.mark}}</b>起
            </span>
            <span class="like-f">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "like",
  data() {
    return {
      likelist: [
        {
          id: "01",
          title: "世界花卉大观园",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1604/1e/1e75f8e1af9fe81f90.img.jpg_200x200_0ded2b1b.jpg",
          msg: "5217条评论",
          mark: "60",
          map: "丰台区"
        },
        {
          id: "02",
          title: "八达岭长城",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg",
          msg: "47553条评论",
          mark: "170",
          map: "延庆县"
        },
        {
          id: "03",
          title: "故宫",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
          msg: "52147条评论",
          mark: "327",
          map: "东城区"
        },
        {
          id: "04",
          title: "远去的恐龙",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg",
          msg: "52117条评论",
          mark: "604",
          map: "朝阳区"
        },
        {
          id: "05",
          title: "古北水镇",
          imgurl:
            "http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg",
          msg: "54217条评论",
          mark: "452",
          map: "密云县"
        }
      ]
    };
  }
};
</script>


<style scoped>
.like {
  margin-top: 0.2rem;
  background: #fff;
}
.like-s {
  padding: 0.24rem 0 0.26rem;
}
.like-s img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.2rem;
  padding-bottom: 0.1rem;
}
.like-s span {
  margin-left: 0.08rem;
  height: 0.44rem;
  color: #212121;
  font-size: 0.32rem;
  line-height: 0.44rem;
}
.like-list {
  padding: 0.2rem 0;
  margin: 0 0.2rem;
  position: relative;
  overflow: hidden;
}
.like-l {
  float: left;
}
.like-l img {
  width: 2rem;
  height: 2rem;
}
.like-r {
  overflow: hidden;
  padding-left: 0.22rem;
  position: relative;
}
.like-title {
  font-size: 0.32rem;
  color: #212121;
  margin: 0.35rem 0 0;
}
.like-num {
  color: #616161;
  font-size: 0.24rem;
  line-height: 0.34rem;
  margin-top: 0.3rem;
}
.like-map {
  margin-top: 0.3rem;
}
.mark {
  color: #ff8300;
  font-size: 0.36rem;
}
.markl {
  color: #ff8300;
  font-size: 0.3rem;
}
.like-f {
  position: absolute;
  right: 0;
  font-size: 0.24rem;
}
</style>
