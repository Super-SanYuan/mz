<template>
  <div id="shop">
    <ul>
      <li v-for="item in cart" :key="item.id">
        <div class="l">
          <div class="name">商品：{{item.name}}</div>
          <div class="price">价格：{{item.price | rmb}}</div>
          <div class="info">信息：{{item.info}}</div>
        </div>
        <div class="r">
          <input type="button" value="+" @click="add(item.id)">
          <span class="count">{{item.count}}</span>
          <input type="button" value="-" @click="sub(item.id)">
        </div>
      </li>
    </ul>
    <div class="sum">
      <p>总价：{{ sum | rmb}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    add(id) {
      this.$store.commit("add", id);
    },
    sub(id) {
      this.$store.commit("sub", id);
    }
  },
  created() {
    this.cart = this.$store.state.cart;
  },
  computed: {
    sum() {
      return this.$store.getters.sum
    }
  }
};
</script>

<style scoped>
#shop {
  padding-top: 50px;
}
#shop ul {
  padding: 15px;
}
#shop li {
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  background: #c3c3c3;
}
#shop li .l div {
  line-height: 28px;
}
#shop li .r p {
  line-height: 28px;
}
#shop .sum {
  width: 100%;
  height: 45px;
  background: #282828;
  position: fixed;
  bottom: 0;
  z-index: 9;
  padding: 15px;
}
#shop .sum p {
  font-size: 16px;
  color: beige;
}
</style>

