<template>
  <div class="swiper-container" id="mz-banner">
    <div class="swiper-wrapper">
      <router-link class='swiper-slide' to="/"  v-for="(item) in bannerList" :key="item.id">
        <img :src="item.imageUrl">
      </router-link>
    </div>
</div>
</template>

<script>
// 需要使用 swiper 插件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    // 跨域需要先配置反向代理
    let url = "/dataApi/v4/api/billboard/home";
    this.$http.get(url, { params: { __t: Date.now() } }).then(res => {
      this.bannerList = res.data.data.billboards;
    });
  },
  updated() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true // 循环模式选项
    });
  }
};
</script>

<style scoped>
  #mz-banner {width: 100%;}
  #mz-banner img{width: 100%;}
</style>
