import Vue from 'vue'
import Buntpapier from '../src/'
import Vuelidate from '../src/vuelidate'
import App from './App'

Vue.use(Buntpapier)
Vue.use(Vuelidate)

new Vue(App).$mount('#app')
