<template>
	<div id="app">
		<head-component></head-component>
		<div class="main-warp">
			<nav-component></nav-component>
			<main-component></main-component>
			<control-component></control-component>
		</div>
	</div>
</template>
<script>
import HeadComponent from './components/Header.vue';
import NavComponent from './components/Nav.vue';
import MainComponent from './components/Main.vue';
import ControlComponent from './components/Control.vue';

export default {
	name: 'App',
	components: {
		HeadComponent,
		NavComponent,
		MainComponent,
		ControlComponent
	}
}
</script>
<style lang="less">
// inject to nprogress
#nprogress .bar, #nprogress .spinner {
	z-index: 10001;
}

html, body {
	background-color: #f6f6f6;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.main-warp {
	position: absolute;
	height: ~"calc(100% - 60px)";
	width: 100%;
}
</style>
