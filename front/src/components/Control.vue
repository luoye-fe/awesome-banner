<template>
	<div class="control-con" :style="{right: closeNav ? 0 : '-350px'}">
		<div class="main" ref="control-con" v-if="copyData">
			<p>请填写相应的值以预览效果</p>
			<el-input class="input-item" size="small" v-for="item, index in copyData.fields" v-model="item.value" :key="item.key" placeholder="请输入内容查看效果" @change="holdInputChange"></el-input>
		</div>
		<i v-show="metaData" class="icon el-icon-arrow-left" @click="toggleNav"></i>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { isNull } from '../utils.js';
export default {
	name: 'Control',
	data() {
		return {
			copyData: null,
			closeNav: false
		}
	},
	computed: {
		...mapState(['metaData'])
	},
	mounted() {

	},
	methods: {
		...mapActions(['updateMetaData']),
		holdInputChange() {
			this.updateMetaData(this.copyData);
		},
		toggleNav() {
			if (isNull(this.metaData)) return;
			this.closeNav = !this.closeNav;
		}
	},
	watch: {
		metaData() {
			if (isNull(this.metaData)) return this.closeNav = false;
			this.closeNav = true;
			this.copyData = JSON.parse(JSON.stringify(this.metaData));
		}
	}
}
</script>
<style scoped lang="less">
.control-con {
	width: 350px;
	position: absolute;
	height: 100%;
	top: 0;
	right: -350px;
	transition: all ease 0.2s;
}
.main {
	width: 350px;
	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	padding-bottom: 20px;
	background-color: #293e50;
	box-shadow: -2px -1px 10px rgba(0, 0, 0, 0.3);
	overflow: auto;
	transition: all ease 0.2s;
	box-sizing: border-box;
	z-index: 99;
	>p {
		color: #fff;
		font-size: 14px;
		text-indent: 10px;
	}
}
.animate {
	animation: showDrawer 1s ease;
}
@keyframes showDrawer{
	0% {
		right: -350px;
	}
	100% {
		right: 0;
	}
}
.input-item {
	width: 93%;
	display: block;
	margin: 10px auto 0;
}
.icon {
	position: absolute;
	left: -25px;
	top: 5px;
	cursor: pointer;
	font-size: 18px;
	color: #333;
	z-index: 99;
}
</style>
