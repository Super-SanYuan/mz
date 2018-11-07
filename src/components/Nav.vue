// DOM 结构
<template>
  <div id="mz-nav" @click="show">
    <transition name="slideLeft">
    <ul v-show="bShow" class="navlist">
      <router-link tag="li" v-for="item in navList"  :key="item.id" :to="item.path" @click.native="updatatitle(item.name)">{{ item.name }}{{item.path}}</router-link>
    </ul>

    </transition>
    <transition name="fade" >
      <div class="mask" v-show="bShow">

      </div>
    </transition>
  </div>
</template>

// 需要暴露的组件
<script>
export default {
  data() {
    return {
      navList: [
        { id: 1, path: "/", name: "首页" },
        { id: 2, path: "/film", name: "影片" },
        { id: 3, path: "/cinema", name: "影院" },
        { id: 4, path: "/shop", name: "商城" },
        { id: 5, path: "/mine", name: "我的" },
        { id: 6, path: "/card", name: "卖座卡" }
      ]
    };
  },
  methods: {
    show() {
      this.$store.dispatch("show");
    },
    updatatitle(title) {
      eventBus.$emit('updatatitle',title)
    }
  },
  computed: {
    bShow() {
      return this.$store.state.show;
    }
  }
};
</script>

<style>
.navlist {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 110px;
  background: #282828;
  border-top: solid #333 1px;
  z-index: 8000;
}

#mz-nav ul {
  width: 300px;
  height: 680px;
  margin: 0;
  padding: 0;
  background: #282828;
  border-top: 1px solid #999;
  color: #999;
}
#mz-nav ul li {
  list-style: none;
  line-height: 50px;
  padding-left: 15px;
  border-bottom: 1px solid #999;
}
.mask {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 7999;
}
</style>

