<template>
  <div class="home">
    <Header></Header>
    <hot :hotCities="hotCities" :cities="cities"></hot>
  </div>
</template>

<script>
import Header from "./city/Header";
import hot from "./city/hot";
export default {
  name: "city",
  data() {
    return {
      hotCities: []
    };
  },
  mounted() {
    this.$http.get("http://localhost:8080/static/mock/city.json").then(res => {
      const data = res.data.data;
      this.hotCities = data.hotCities;
      this.cities = data.cities;
    });
  },
  components: {
    Header,
    hot
  }
};
</script>


<style scoped>
.home {
  background: #f3f2f2;
}
</style>
