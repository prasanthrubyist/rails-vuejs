/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'
// import TurbolinksAdapter from 'vue-turbolinks'
// document.addEventListener('turbolinks:load', () => {
//    var el = document.body.appendChild(document.createElement('hello'))
//     if (el != null){
// 	 var app = new Vue({
// 	    el,
// 	    render: h => h(App),
// 	  })

// 	  console.log(app)
//     }
// })

//For nested form ex

import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'

document.addEventListener('turbolinks:load', () => {
	// Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
	var element = document.getElementById("area-form")
	if (element != null) {
		var id = element.dataset.id
    var area = JSON.parse(element.dataset.area)
    var sub_areas_attributes = JSON.parse(element.dataset.sub_areasAttributes)
    sub_areas_attributes.forEach(function(sub_area) { sub_area._destroy = null })
    area.sub_areas_attributes = sub_areas_attributes

    var app = new Vue({
    	el: element,
    	mixins: [TurbolinksAdapter],
    	data: function(){
    		return {id: id, area: area}
    	},
    	methods: {
    		addSubArea: function() {
          this.area.sub_areas_attributes.push({
          	id: null,
          	name: "",
          	_destroy: null
          })
    		},

    		removeSubArea: function(){
    			var sub_area = this.area.sub_areas_attributes[index]
    			if(sub_area.id == null){
    				this.area.sub_areas_attributes.splice(index, 1)

    			}else{
    				this.area.sub_areas_attributes[index]._destroy = "1"
    			}
    		}

    		// saveArea: function(){
    		// 	//create new area
    		// 	if(this.id == null){
    		// 		this.$http.post('/areas', {area: this.area}).then(response => {
    		// 			Turbolinks.visit('/areas/${response.body.id}')
    		// 		}
    		// 	}
    		// }
    	}
    })
	}
})
// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
