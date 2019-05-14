import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		homeArticalData: []
	},
	mutations: {
		HOME_SAVE_ARTICAL_DATA(state, data) {
			state.homeArticalData = data
		}
	},
	actions: {

	}
})
