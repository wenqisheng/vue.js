import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(function(){
  $('ul li:odd').css('background','red')
  $('ul li:even').css('background','blue')
})



// -----------------------------------------------
import Vue from 'vue'
// 导入单文件组件
import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})



