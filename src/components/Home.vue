<template>
  <div id="mz-home">
    <div >
      <Banner></Banner>
      <Movie type='now-playing'></Movie>
      <div class="line">
        <div>即将上映</div>
      </div>
      <Movie type='coming-soon'></Movie>
    </div>
  </div>
</template>

<script>
// 导入轮播图与内容组件
import Banner from "@/components/Banner.vue";
import Movie from "@/components/Movie.vue";
// import Loading from "@/components/Loading.vue";
export default {
  components: {
    // 注册组件
    Banner,
    Movie,
    // Loading
  }
};
</script>

<style scoped>
#mz-home {
  padding-top: 50px;
}
#mz-home .line {
  width: 100%;
  border-bottom: 1px solid #a8a8a8;
  position: relative;
  margin: 30px 0;
}
#mz-home .line div {
  width: 65px;
  height: 20px;
  margin: 0 auto;
  margin-bottom: -10px;
  border-radius: 5px;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #eee;
  background-color: #a7a7a7;
}
</style>
