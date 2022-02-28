<template>
  <div>
    <Header />
    <!-- 指定路由展示位置 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action，获取商品分类三级列表
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
