import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import { DateTime } from 'luxon';
import VueQrcodeReader from 'vue-qrcode-reader';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});
Vue.use(VueQrcodeReader);
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);

Vue.filter('formatDate', value =>
  DateTime.fromISO(value.toISOString()).toLocaleString(DateTime.DATETIME_MED));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
