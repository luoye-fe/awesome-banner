import Vue from 'vue';
import App from './App.vue';
import Nprogress from 'nprogress';
import axios from 'axios';

import './style/normalize.less';
import 'nprogress/nprogress.css';

import { Input, MessageBox, Loading, Button } from 'element-ui';
Vue.use(Input);
Vue.use(Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$loading = Loading.service;

Vue.prototype.$progress = Nprogress;

Vue.prototype.$http = axios;

import store from './vuex/index.js';

new Vue({
	el: '#app',
	template: '<App/>',
	store,
	components: {
		App
	}
});
