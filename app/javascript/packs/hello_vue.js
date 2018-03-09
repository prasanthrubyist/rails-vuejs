//For nested form ex

import Vue from 'vue/dist/vue.esm'
import TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'
import PictureInput from 'vue-picture-input'
Vue.use(VueResource)
document.addEventListener('turbolinks:load', () => {
    Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    var element = document.getElementById("area-form")
    if (element != null) {
        var id = element.dataset.id
        // console.log(element.dataset)
        var area = JSON.parse(element.dataset.area)
        var sub_areas_attributes = JSON.parse(element.dataset.subAreasAttributes)
        sub_areas_attributes.forEach(function(sub_area) { sub_area._destroy = null })
        area.sub_areas_attributes = sub_areas_attributes
        // console.log(element)
        var app = new Vue({
          el: element,
          // mixins: [TurbolinksAdapter],
          data: function() {
            return { id: id, area: area }
          },
            components: {
                PictureInput
            },
            methods: {
                addSubArea: function() {
                  this.area.sub_areas_attributes.push({
                    id: null,
                    name: "",
                    //position: "",
                    _destroy: null
                  })
                },

                removeSubArea: function(index) {
                  var sub_area = this.area.sub_areas_attributes[index]
                  if (sub_area.id == null) {
                    this.area.sub_areas_attributes.splice(index, 1)
                  } else {
                    this.area.sub_areas_attributes[index]._destroy = "1"
                  }
                },

                undoRemove: function(index) {
                  this.area.sub_areas_attributes[index]._destroy = null
                },

                saveArea: function() {
                  // Create a new area
                  if (this.id == null) {
                    var form = new FormData()
                    form.append('image', this.image);
                    form.append('area', this.area);
                    alert(JSON.stringify(form));
                    this.$http.post('/areas',form, {emulateJSON: true }).then(response => {
                      Turbolinks.visit(`/areas/${response.body.id}`)
                    }, response => {
                      console.log(response)
                    })

                  // Edit an existing area
                  } else {
                    this.$http.put(`/areas/${this.id}`, { area: this.area }).then(response => {
                      Turbolinks.visit(`/areas/${response.body.id}`)
                    }, response => {
                      console.log(response)
                    })
                  }
                },

                existingArea: function() {
                  return this.area.id != null
                },

                onChange (image) {
                  console.log('New picture selected!')
                  if (image) {
                    console.log('Picture loaded.')
                    this.image = image
                  } else {
                    console.log('FileReader API not supported: use the <form>, Luke!')
                  }
                }
            }
        })
    }
})

// export default {
//       name: 'app',
//       data () {
//         return {
//         }
//       },
//       components: {
//         PictureInput
//       },
//       methods: {
//         onChange (image) {
//           console.log('New picture selected!')
//           if (image) {
//             console.log('Picture loaded.')
//             this.image = image
//           } else {
//             console.log('FileReader API not supported: use the <form>, Luke!')
//           }
//         }
//       }
//     }