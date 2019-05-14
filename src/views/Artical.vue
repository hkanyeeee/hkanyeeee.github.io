<template>
	<div class="about">
		<div v-html="articalContent"></div>
		<el-button @click="back" style="width:500px;margin-top:24px">返回</el-button>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import api from '../utils/api'
import marked from 'marked'
export default {
	name: 'artical',
	data() {
		return {
			articalContent:''
		}
	},
	methods: {
		back() {
			console.log(this.$store.state.homeArticalData)
			this.$router.push({name: 'home'})
		}
	},
	computed: {
		articalID(){
			return this.$route.query.id
		}
	},
	mounted() {
		let temp = this.$store.state.homeArticalData
		this.articalContent = marked(temp[temp.length - this.$route.query.id].body)
		console.log(this.articalContent)
	},
}

</script>
