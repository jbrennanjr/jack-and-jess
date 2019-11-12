<template>
	<div id="app">
		<div class="header">
			<div class="header-content">
				<div class="no-wrap">Jessica Radin</div><div class="ampersand">&</div><div class="no-wrap">Jack Brennan</div>
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
html {
	overflow-y: scroll;
}

body {
	margin: 0px;
	background-image: url('./assets/images/background.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
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
			
			div {
				display: inline-block;
			}

			.ampersand {
				margin: 0px 20px;
    			font-size: 50px;
			}
		}
	}

	.body {
		position: relative;
		width: 55%;
		min-height: 600px;
		background-color: #fff;
		margin-left: auto;
		margin-right: auto;
		margin-top: 16px;
		margin-bottom: 20px;
		text-align:center;
		box-shadow: inset 0px 0px 100px #d9ffff;
		box-shadow: 0 0 20px #999;
		border-radius: 5px;
		font-family: 'Raleway', sans-serif;
		letter-spacing: 2px;
		color: #174e2f;
	}
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 300px) and (max-device-width : 480px) {
	#app {
		.header {
			.header-content {
				font-size: 50px;
				padding: 0px;
				padding-top: 60px;

				div {
					display: block;
				}

				.ampersand {
					margin: 0px 15px;
					font-size: 35px;
				}
				
				.no-wrap {
					white-space: nowrap;
				}
			}
		}

		.body {
			width: 100%;
			border-radius: 0px;
		}
	}
}

/* Tablets (portrait and landscape) ----------- */
@media only screen and (min-device-width : 480px) and (max-device-width : 1024px) {
    
}
</style>
