// DOM 结构
<template>
  <div id='mz-header'>
    <div class="l" @click="show">
      <div class="l" >三</div>
      <div class="r">{{title}}</div>
    </div>
    <div class="r">
      <div class="l">长沙</div>
      <div class="r">登录</div>
    </div>
  </div>
</template>

// 需要暴露的组件
<script>
export default {
  data() {
    return {
      title: "卖座电影"
    };
  },
  mounted() {
    eventBus.$on("updatatitle", str => {
      if (str == "首页") {
        this.title = "卖座电影";
        return
      }
      this.title = str;
    });
  },
  methods: {
    show() {
      // 去 store 中 actions 寻找 show 的方法
      this.$store.dispatch("show");
    }
  }
};
</script>

<style>
#mz-header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  background: #282828;
  justify-content: space-between;
  font-size: 14px;
  text-align: center;
  z-index: 9999;
}
#mz-header .l {
  display: flex;
  color: #fff;
  line-height: 50px;
}
#mz-header .l .l {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
}
#mz-header .l .r {
  width: 88px;
  height: 50px;
  padding: 0 15px;
}

#mz-header .r {
  display: flex;
  text-align: center;
  color: #fff;
  line-height: 50px;
}
#mz-header .r .l {
  display: flex;
  justify-content: center;
  width: 55px;
  height: 50px;
}
#mz-header .r .r {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
}
</style>

