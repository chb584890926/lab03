<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="ite in page" :key="ite.id">
        <div class="icon" v-for="i in ite" :key="i.id">
          <img :src="i. imgUrl">
          <p>{{i.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      iconlist: [
        {
          id: "01",
          title: "景点文化",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "02",
          title: "北京一日游",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png"
        },
        {
          id: "03",
          title: "北京必玩",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
        },
        {
          id: "04",
          title: "溜娃儿",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"
        },
        {
          id: "05",
          title: "爬长城",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png"
        },
        {
          id: "06",
          title: "故宫",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"
        },
        {
          id: "07",
          title: "北京欢乐谷",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png"
        },
        {
          id: "08",
          title: "京城赏花",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png"
        },
        {
          id: "09",
          title: "温州海洋馆",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png"
        },
        {
          id: "10",
          title: "踏青赏花",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"
        }
      ]
    };
  },
  computed: {
    page() {
      let pages = [];
      this.iconlist.forEach((m, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) pages[idx] = [];
        pages[idx].push(m);
      });
      return pages;
    }
  }
};
</script>


<style scoped>
.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #fff;
}
.icon {
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.1rem;
}
.icon p {
  font-size: 0.3rem;
  text-align: center;
}
</style>
