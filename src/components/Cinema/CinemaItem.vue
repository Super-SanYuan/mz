<template>
  <ul id='cinemsitem'>
    <li v-for="(item) in cinemas" :key="item.id">
      <div class="name">
        {{ item.name }}
      </div>
      <div class="district">
        {{ item.address }}
      </div>
    </li>
  </ul>
</template>

<script >
export default {
  // 分类 遍历
  props: ["district", "cinema"],
  data() {
    return {
      cinemas: []
    };
  },
  created() {
    // console.log(this.cinema)
    // console.log(this.district)
    this.cinema.forEach(item => {
      if (item.district.name == this.district) {
        this.cinemas.push(item);
      }
    });
  }
};
</script>

<style scoped>
#cinemsitem li {
  border-radius: 5px;
  padding: 10px 0 12px 16px;
  cursor: pointer;
}
#cinemsitem li .name {
  display: inline-block;
  font-size: 16px;
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: text-top;
  max-width: 80%;
}
#cinemsitem li .district {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  color: #ccc;
}
</style>