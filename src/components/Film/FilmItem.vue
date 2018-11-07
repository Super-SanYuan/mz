<template>
  <router-link :to="{name:'Detail',params:{id:film.id}}" tag="li" id="filmitem">
    <div class="pic">
      <img :src="film.poster.origin" alt="">
    </div>
    <div class="content">
      <div class="title">
        <span class="name">{{film.name}}</span>
        <span class="grade" v-if="type=='now-playing'">{{film.grade}}</span>
      </div>
      <div class="intro">{{film.intro}}</div>
      <div class="info" v-if="type=='now-playing'">
        <span class="cinemaCount">{{film.cinemaCount}}家影院上映</span>
        <span class="watchCount">{{film.watchCount}}人购票</span>
      </div>
      <div class="date" v-else>{{film.premiereAt | getDate(film.premiereAt)}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["film", "type"]
}
</script>


<style scoped>
#filmitem {
  display: flex;
  padding: 20px 0;
  border-bottom: dashed 1px #c9c9c9;
  cursor: pointer;
}
#filmitem .pic {
  width: 60px;
}
#filmitem .pic img {
  width: 100%;
  display: block;
}
#filmitem .content {
  flex: 1;
  padding-left: 15px;
}
#filmitem .title {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  line-height: 32px;
  font-size: 16px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#filmitem .grade {
  color: #fc7103;
}
#filmitem .intro {
  height: 24px;
  line-height: 24px;
  color: #8e8e8e;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  display: inline-block;
}
#filmitem .info {
  line-height: 24px;
  color: #8e8e8e;
  font-size: 12px;
}
#filmitem .info .cinemaCount {
  margin-right: 20px;
}
#filmitem .date {
  line-height: 24px;
  color: #ffb375;
  font-size: 12px;
}
</style>


