<template>
  <div id="movie">
    <ul class="movielist">
      <!-- :to="{name:'Detail',param:{id:item.id}}" -->
      <router-link tag='li' :to="{name:'Detail',params:{id:item.id}}" v-for="item in contentList" :key="item.id">
        <img :src="item.cover.origin" alt="">
        <div class="content">
          <div class="content-l" >
            <div class="moviename">{{item.name}}</div>
            <div class="count" v-if="type=='now-playing'">
              <span>{{item.cinemaCount}}家影院上映</span>
              <span>{{item.watchCount}}人购买</span>
            </div>
          </div>
          <div class="grade" v-if="type=='now-playing'" >{{item.grade}}</div>
					<div class="filmdate" v-else>{{item.premiereAt | foramDate}}上映</div>
        </div>
      </router-link>
    </ul>
    <router-link class="more" tag="div" to="/Film">{{ more }}</router-link>
  </div>
</template>

<script >
export default {
  props: ["type"],
  data() {
    return {
      // 根据两个请求地址参数分析 需要 count 数据
      count: 5,
      contentList: []
    };
  },
  created() {
    // https://m.maizuo.com/v4/api/film/now-playing?__t=1541505072242&page=1&count=5
    // https://m.maizuo.com/v4/api/film/coming-soon?__t=1541505072245&page=1&count=3
    let url = "/dataApi/v4/api/film/" + this.type;
    this.count = this.type === "now-playing" ? 5 : 3;
    let param = { __t: Date.now(), page: 1, count: this.count };
    this.$http.get(url, { param }).then(res => {
      // console.log(res.data.data.films);
      this.contentList = res.data.data.films;
    });
  },
  computed: {
    more() {
      return this.type == "now-playing" ? "更多热映" : "更多即将上映";
    }
  }
};
</script>

<style scoped>
/* #movie {
} */
#movie .movielist {
  margin: 0;
  padding: 0;
  padding-top: 20px;
}
#movie .movielist li {
  list-style: none;
  margin: 0 17px 17px 17px;
  background-color: #f9f9f9;
  box-shadow: 0.5px 0.5px 1px #a8a8a8;
  cursor: pointer;
  background-color: #f9f9f9;
}
#movie .movielist li img {
  width: 100%;
  display: block;
}
#movie .movielist li .content {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
}
#movie .content-l .moviename {
  font-size: 12px;
  line-height: 15px;
}
#movie .content-l .count {
  font-size: 8px;
  color: #9a9a9a;
  line-height: 15px;
}
#movie .content .grade {
  color: #f78360;
  display: inline-block;
  margin-right: 15px;
  font-size: 18px;
}
#movie .content .filmdate {
  font-size: 10px;
  color: RGB(245, 162, 125);
}
#movie .more {
  width: 160px;
  height: 30px;
  border: 1px solid #aaa;
  border-radius: 15px;
  margin: 10px auto 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #616161;
  cursor: pointer;
}
</style>

