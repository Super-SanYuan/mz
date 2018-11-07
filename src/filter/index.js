import Vue from 'vue'

Vue.filter('foramDate', (data) => {
  let oDate = new Date(data)
  return oDate.getMonth() + 1 + '月' + oDate.getDate() + '日'
})

Vue.filter('getDate', (data) => {
  let oDate = new Date(data)
  return oDate.getMonth() + 1 + '月' + oDate.getDate() + '日' + "    " + "星期" + "天一二三四五六 ".charAt(oDate.getDay())
})

Vue.filter('rmb', (num) => {
  return '￥' +num.toFixed(2)
})
