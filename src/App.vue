<template>
	<div id="app">
		<div class="header">
			<div class="header-content">
				<div class="no-wrap">Jessica Radin</div><div class="ampersand">&</div><div class="no-wrap">Jack Brennan</div>
				<div class="sub-header no-wrap">August 23rd, 2020</div>
			</div>
			<nav-bar></nav-bar>
		</div>
		<div class="mobile-header">
			<div class="mobile-header-content">J + J  -  <span class="mobile-header-date">Aug. 23rd</span></div>
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
	margin-bottom: 30px;
	background-image: url('./assets/images/background.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
}

#app {
	.mobile-header {
		display: none;

		.mobile-header-content {
			font-family: 'Allura', sans-serif;
			font-size: 40px;
			margin-left: 20px;

			.mobile-header-date {
				font-size: 30px;
			}
		}
	}

	.header {
		text-align: center;

		.header-content {
			color: #2a7e92;
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

			.sub-header {
				display: block;
				font-size: 40px;
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
		text-align:center;
		box-shadow: inset 0px 0px 100px #d9ffff;
		box-shadow: 0 0 20px #999;
		border-radius: 5px;
		font-family: 'Quattrocento', serif;
		letter-spacing: 2px;
		color: black;
		background-color: #b7d4b7;
		line-height: 1.3;

		.page-content {
			padding: 20px;
			text-align: left;

			h3 {
				margin-top: 0px;
				text-align: center;
				font-family: 'Raleway', sans-serif;
			}
		}

		.no-padding {
			padding: 0px;
		}
	}
}


@media (max-device-width : 1500px) {
	#app {
		.body {
			width: 75%;
		}
	}
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 850px) {
	#app {
		.header {
			.header-content {
				font-size: 58px;
			}
		}
	}
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 700px) {
	body {
		background-image: none;
		margin-bottom: 0px;
	}

	#app {
		.header {
			display: none;
		}

		.mobile-header {
			display: block;
			height: 50px;
		}

		.body {
			width: 100%;
			border-radius: 0px;
			margin-top: 0px;
			box-shadow: none;
			min-height: 700px;

			background-image: url('./assets/images/background.png');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
		}
	}
}
</style>
