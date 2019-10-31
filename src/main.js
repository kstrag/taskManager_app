import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import animateCss from 'animate.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    animateCss,
    render: h => h(App)
}).$mount('#app')
