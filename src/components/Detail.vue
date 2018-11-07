<template>
	<div class="detail">
		<div class="ontent" v-for="item in arr" :key="item.id">
			<div class="img">
				<img :src="item.cover.origin">
			</div>
			<div class="txt">
				<h3>影片简介</h3>
				<p>导演：{{item.director}}</p>
				<p>主演：<span v-for="(name,index) in names" :key="index">{{name.name}}|</span></p>
				<p>地区语言：{{item.nation}}（{{item.language}}）</p>
				<p>类型：{{item.category}}</p>
				<p>上映日期：{{item.premiereAt | foramDate}}</p>
				<div class="textarea">{{item.synopsis}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ["id", "name"],
  data() {
    return {
      arr: [],
      names: [],
      title:''
    };
  },
  created() {
    // https://m.maizuo.com/v4/api/film/4439?__t=1541509705833
    let url = "/dataApi/v4/api/film/" + this.id + "?__t=" + Date.now();
    this.$http.get(url).then(res => {
      this.arr.push(res.data.data.film);
      this.names = res.data.data.film.actors;
    });
  },
  methods: {
  }
};
</script>

<style>
.detail {
  padding-top: 50px;
}
.detail .ontent .img img {
  width: 100%;
  display: block;
}
.detail .ontent h3 {
  margin: 16px auto;
  border-left: 16px solid RGB(228, 200, 156);
  font-size: 16px;
  padding-left: 4px;
  font-weight: inherit;
}
.detail .ontent .txt p {
  height: 18px;
  overflow: hidden;
  margin-bottom: 10px;
  padding-left: 20px;
}
.detail .ontent .txt .textarea {
  text-overflow: ellipsis;
  margin-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>