import Vue from 'vue/dist/vue.js'
import Vuesax from 'vuesax'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)
Vue.use(VueResource)
document.addEventListener('turbolinks:load', () => {
	var element = document.getElementById("vue-app")
	  new Vue({
	    el: element
	  })
}) 