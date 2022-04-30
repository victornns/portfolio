import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import CoolLightBox from 'vue-cool-lightbox';
import VueScrollactive from 'vue-scrollactive';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/main.scss'

Vue.config.productionTip = false;
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')