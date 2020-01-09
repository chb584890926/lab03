<template>
  <div id="app">
    <transition name="fadeInUp" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

  .fadeInUp-enter-active {
    animation: fadeInUp 1s;
  }


</style>
