<template>
  <swiper :options="swiperOption" class="wrapper">
    <!-- slides -->
    <swiper-slide>
      <img
        class="swipe-img"
        src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c5e84c198ca6a3e8b7e9946144ebefb5.jpg_750x200_43eebad0.jpg"
      >
    </swiper-slide>
    <swiper-slide>
      <img
        class="swipe-img"
        src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/534106663f424042868365167e4a66ff.jpg_750x200_3ec12f21.jpg"
      >
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "SwiperHome",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>


<style scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26%;
}
.swipe-img {
  width: 100%;
}
</style>
