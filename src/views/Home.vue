<template>
	<div>
		<div class="title">hkanye的博客</div>
		<div class="home">
			<!-- <img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/> -->
			<div></div>
			<div>
				<div class="aCard" v-for="(item) in articalData" :key="item.number" @click="openArtical(item.number)">
					<div class="cardTitle">{{item.title}}</div>
					<div class="cardIntro">或许会有的简介</div>
					<div class="cardTime">{{item.updated_at}}</div>
				</div>
			</div>
			<div></div>
			<div class="aArticalListDiv">
				<div class="aArticalList">
					<p @click="getArticalData('')">全部({{num1}})</p>
					<p @click="getArticalData('技术')">技术({{num2}})</p>
					<p @click="getArticalData('游戏')">游戏({{num3}})</p>
					<p @click="getArticalData('电影')">电影({{num4}})</p>
					<p @click="getArticalData('杂谈')">杂谈({{num5}})</p>
				</div>
			</div>
			<div></div>
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
			articalData: [],
			num1: 0,
			num2: 0,
			num3: 0,
			num4: 0,
			num5: 0
		}
	},
	methods: {
		openArtical(id) {
			this.$router.push({name: 'artical', query:{ id: id }})
		},
		getArticalData (label) {
			api(`/issues?creator=hkanye&labels=${label}`, 'get').then(
				(res) => {
					for (let i = 0; i < res.data.length; i++) {
						res.data[i].updated_at = moment(res.data[i].updated_at).format('YYYY-MM-DD HH:mm:ss')
					}
					this.articalData = res.data
					console.log(this.articalData)
					this.$store.commit('HOME_SAVE_ARTICAL_DATA', res.data)
				}
			)
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
				console.log(this.articalData)
				this.num1 = this.articalData.length
				for (let i = 0; i < this.articalData.length; i++) {
					for (let j = 0; j < this.articalData[i].labels.length; j++) {
						switch (this.articalData[i].labels[j].name) {
							case '技术':
								this.num2 += 1
								break;
							case '游戏':
								this.num3 += 1
								break;
							case '电影':
								this.num4 += 1
								break;
							case '杂谈':
								this.num5 += 1
								break;
							default:
								break;
						}
					}
				}
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
	display: grid;
	grid-template-columns: 2fr 12fr 1fr 4fr 2fr;
}
.title {
	text-align: center;
	margin-bottom: 40px;
	font-size: 42px;
	font-weight: bold;
}
.aCard {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	margin-top: 10px;
	background-color:#1D2935;
	color: white;
	height: 200px;
	width: 1000px;
	border-radius: 12px;
	transition: height 0.3s linear,width 0.3s linear
}
.aArticalList {
	background-color: #1D2935;
	border-radius: 12px;
	padding: 18px;
	margin-top: 10px;
}
.aArticalList p {
	cursor: pointer;
	font-size: 18px;
	margin: 40px
}
.cardTitle {
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
	font-size: 16px;
	margin-top: 24px;
	margin-left: auto;
	margin-right: 30px;
}
.aCard:hover {
	cursor: pointer;
	height: 210px;
	width: 1050px;
}	
</style>

