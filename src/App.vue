<template>
  <div id="app">
    <mz-header></mz-header>
    <mz-nav></mz-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header'
import nav from '@/components/nav'

export default {
  name: 'App',
  components:{
    'mz-header':header,
    'mz-nav':nav,
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
ul{
  padding: 0;
  margin: 0;
}
</style>
