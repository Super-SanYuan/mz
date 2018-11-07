<template>
  <div id="film">
    <ul class="tab">
      <li :class="{active:type=='now-playing'}" @click="changeType('now-playing')">正在热映</li>
      <li :class="{active:type=='coming-soon'}" @click="changeType('coming-soon')">即将上映</li>
    </ul>
    <ul class="content">
      <FilmItem v-for="item in dataArr" :key="item.id" :film=item :type=type @click.native="updatatitle(item.name)"></FilmItem>
    </ul>
  </div>
</template>

<script>
import FilmItem from "@/components/film/FilmItem";
export default {
  components: {
    FilmItem
  },
  data() {
    return {
      type: "now-playing",
      page: 1,
      dataArr: [],
      flag: true // 是否继续翻页
    };
  },
  mounted() {
    window.onscroll = () => {
      // 页面滑动监听
      // 下滑更新数据
      let bodyH = document.documentElement.scrollHeight; // 页面高度
      let clineH = document.documentElement.clientHeight; // 可视区高度
      let scrollT =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollT + clineH + 100 >= bodyH) {
        if (!this.flag) return;
        this.page++;
        this.flag = false;
        this.getData();
      }
    };
  },
  methods: {
    changeType(type) {
      // 控制 tab 切换
      this.type = type;
    },
    getData() {
      // 获取数据
      // https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
      // https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
      let url = "/dataApi/v4/api/film/" + this.type;
      let params = { page: this.page, count: 7 };
      this.$http.get(url, { params }).then(res => {
        // console.log(res.data.data.films);
        if (res.data.data.films.length == 0) return; // 没有数据了就停止
        this.dataArr = [...this.dataArr, ...res.data.data.films];
        this.flag = true;
      });
    },
    updatatitle(title) {
      eventBus.$emit("updatatitle", title);
    }
  },
  watch: {
    type: {
      // 监听 type 获取不同数据
      handler: function(val, oldVal) {
        this.page = 1;
        this.dataArr = [];
        this.flag = true;
        this.getData();
      },
      immediate: true
    }
  }
};
</script>


<style scoped>
#film {
  padding: 50px 15px 0;
}
#film .tab {
  display: flex;
  border-bottom: 1px solid #fe6e00;
}
#film .tab li {
  flex: 1;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  color: #6a6a6a;
  cursor: pointer;
}
#film .tab li.active {
  border-bottom: 4px solid #fe6e00;
  color: #fe6e00;
}
</style>


