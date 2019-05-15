<template>
	<div id="app">
		<router-view style="margin-bottom: 24px"/>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',
	components: {
	// HelloWorld
	}
}
</script>

<style>
html,body{
	margin:0px;
	height:100%;
	background-color:#304457;
	font-family: Georgia, 'Times New Roman', Times, serif
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	margin-top: 60px;
	height:100%;
}
</style>
