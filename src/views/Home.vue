<template>
	<div>
		<div class="title">hkanye的博客</div>
		<div class="home">
			<!-- <img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/> -->
			<div class="aCard" v-for="(item) in articalData" :key="item.number" @click="openArtical(item.number)">
				<div class="cardTitle">{{item.title}}</div>
				<div class="cardIntro">或许会有的简介</div>
				<div class="cardTime">{{item.updated_at}}</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import api from '../utils/api'
import moment from 'moment'
export default {
	name: 'home',
	data() {
		return {
			articalData: []
		}
	},
	methods: {
		openArtical(id) {
			this.$router.push({name: 'artical', query:{ id: id }})
		}
	},
	components: {
		// HelloWorld
	},
	mounted() {
		api('/issues?creator=hkanye&labels=', 'get').then(
			(res) => {
				for (let i = 0; i < res.data.length; i++) {
					res.data[i].updated_at = moment(res.data[i].updated_at).format('YYYY-MM-DD HH:mm:ss')
				}
				this.articalData = res.data
				this.$store.commit('HOME_SAVE_ARTICAL_DATA', res.data)
			}
		)
	},
	computed: {
	}
}
</script>

<style>
.home {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.title {
	text-align: left;
	margin-left: 555px;
	margin-bottom: 40px;
	font-size: 42px;
	font-weight: bold;
}
.aCard {
	margin-top: 10px;
	background-color:#1D2935;
	color: white;
	height: 200px;
	width: 1000px;
	border-radius: 12px;
	transition: height 0.3s linear,width 0.3s linear
}
.cardTitle {
	margin-top: 32px;
	margin-left: 32px;
	text-align: left;
	font-size: 28px;
}
.cardIntro {
	margin-top: 18px;
	margin-left: 32px;
	text-align: left;
	font-size: 18px;
}
.cardTime {
	text-align: right;
	font-size: 16px;
	margin-right: 18px;
	margin-top: 24px;
}
.aCard:hover {
	cursor: pointer;
	height: 210px;
	width: 1050px;
}	
</style>

