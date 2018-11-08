<template>
  <div id="cinema">
    <ul>
      <li class="district" v-for="(item, index) in district" :key="index" @click="changedistrict(item)">
        <div>{{item}}</div>
        <CinemaItem :district='item' :cinema='cinema' v-show="item==tmpname"></CinemaItem>
      </li>
    </ul>
  </div>
</template>


<script>
import CinemaItem from '@/components/cinema/CinemaItem'
export default {
  // https://m.maizuo.com/v4/api/cinema?__t=1541575893231
  data() {
    return {
      cinema:[], // 全部信息
      district: [], // 地址
      tmpname:'浏阳市',
      falg:false,
    };
  },
  components:{
    CinemaItem
  },
  methods: {
    changedistrict(name){
      if(this.tmpname = name ){

      }
    }
  },
  created() {
    let url = "/dataApi/v4/api/cinema"
    this.$http.get(url, { params: { __t: Date.now() } }).then(res => {
      this.cinema = res.data.data.cinemas
      this.district = [
        ...new Set(
          res.data.data.cinemas.map(item => {
            return item.district.name;
          })
        )
      ]
    })
  }
};
</script>


<style scoped>
#cinema {
  padding-top: 50px;
}
#cinema .district div{
  line-height: 40px;
  font-size: 14px;
  padding-left: 16px;
  background: #e1e1e1;
  margin-bottom: 1px;
  color: #636363;
  cursor: pointer;
}
</style>

