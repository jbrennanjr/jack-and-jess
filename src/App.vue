<template>
	<div id="app">
		<div class="header">
			<div class="header-content">
				Jessica Radin & Jack Brennan
			</div>
			<nav-bar></nav-bar>
		</div>
		<div class="body">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
	name: 'app',
	components: {
		NavBar
	}
}
</script>

<style lang="less">
body {
	margin: 0px;
	background-image: url('./assets/images/background.jpg');
	background-size: cover;
}

#app {
	.header {
		text-align: center;

		.header-content {
			color: #fff;
			text-align: center;
			font-size: 70px;
			padding: 30px;
			font-family: 'Allura', sans-serif;
		}
	}

	.body {
		width: 55%;
		background-color: #fff;
		opacity: 0.85;
		padding: 10px;
		height: 700px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 16px;
		margin-bottom: 20px;

		box-shadow: inset 0px 0px 100px #d9ffff;
		box-shadow: 0 0 20px #999;
		border-radius: 5px;
	}
}
</style>
