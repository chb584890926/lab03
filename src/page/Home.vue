<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <Localit></Localit>
    <hot></hot>
    <like></like>
    <where></where>
  </div>
</template>

<script>
import Header from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/icons";
import Localit from "./components/localit";
import Activity from "./components/activity";
import hot from "./components/hot";
import like from "./components/like";
import where from "./components/where";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    Localit,
    Activity,
    hot,
    like,
    where
  }
};
</script>


<style scoped>
.home {
  background: #f3f2f2;
}
</style>
