<template>
	<div :class="{'module-list-con': true, 'close': closeNav}">
		<div class="module-list">
		    <div class="search">
		        <el-input disabled placeholder="输入以搜索" icon="search" :on-icon-click="handleSearch" size="small"></el-input>
		    </div>
		    <div class="list">
		        <ul>
		            <li v-for="item in metaDataAjax" @click="selectModule(item)">
		                <img :src="item.example_img">
		                <div class="info">
		                    <p>{{item.title}}</p>
		                    <p>{{item.desc}}</p>
		                </div>
		            </li>
		        </ul>
		    </div>
		</div>
		<i class="icon el-icon-arrow-right" @click="toggleNav"></i>
	</div>
</template>
<script>
import {
    mapActions,
    mapState
} from 'vuex';

import metaDataAjax from '../metadata.js';

import { isNull } from '../utils.js';

export default {
    name: 'Nav',
    data() {
        return {
            metaDataAjax,
            loadingInstance: null,
            closeNav: false
        }
    },
    computed: {
    	...mapState({
    		metaData: 'metaData'
    	})
    },
    methods: {
        ...mapActions(['updateMetaData']),
        handleSearch(ev) {
            console.log(ev);
        },
        downloadFonts(fontsList) {
        	return new Promise((resolve, reject) => {
        		this.loadingInstance = this.$loading({
        			fullscreed: true,
        			text: '正在拼命下载所需字体，时间略长请稍后...'
        		});
        		this.$progress.start();
        		const promiseList = [];
        		fontsList.forEach(item => {
        			promiseList.push(this.$http.get(item));
        		});
        		Promise
        			.all(promiseList)
        			.then(() => {
        				this.$progress.done();
        				setTimeout(() => {
        					this.loadingInstance.close();
        					resolve();
        				}, 500)
        			})
        			.catch(e => reject(e));
        	});
        },
        selectModule(module) {
        	let fontsList = [];
        	module.fonts.forEach(item => {
        		fontsList = fontsList.concat(item.src);
        	});
            if (!isNull(this.metaData)) {
                this.$confirm('操作台已有模版，是否替换?', '注意', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                	this.downloadFonts(fontsList)
                })
                .then(() => {
                	this.updateMetaData(module);
                })
                .catch(() => {})
            } else {
            	this.downloadFonts(fontsList)
	            	.then(() => {
	            		this.updateMetaData(module);
	            	})
            }
        },
        toggleNav() {
        	this.closeNav = !this.closeNav;
        }
    }
}
</script>
<style scoped lang="less">
.module-list-con {
	width: 350px;
	position: absolute;
	height: 100%;
	left: 0;
	top: 0;
	transition: all ease 0.2s;
}
.module-list-con.close {
	left: -350px;
}

.module-list {
	width: 350px;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #293e50;
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.3);
    overflow-y: hidden;
    overflow-x: visible;
    z-index: 99;
}

.search {
    width: 100%;
    margin-top: 18px;
    float: left;
    >div {
        display: block;
        margin: 0 auto;
        width: 93%;
    }
}

.list {
    float: left;
    height: 100%;
    width: 100%;
    overflow: auto;
    margin-top: 10px;
    ul {
        width: 100%;
        padding: 0;
        margin: 0;
        font-size: 0;
        padding: 0 8px;
        box-sizing: border-box;
        padding-bottom: 60px;
        li {
            display: inline-block;
            vertical-align: middle;
            width: 49%;
            cursor: pointer;
            margin-top: 10px;
            &:nth-child(2n) {
                margin-left: 2%;
            }
            img {
                width: 100%;
                border-radius: 2px 2px 0 0;
            }
            .info {
                color: #333;
                background-color: #fff;
                border-radius: 0 0 2px 2px;
                p {
                    font-size: 14px;
                    padding: 0;
                    margin: 0;
                }
            }
        }
    }
}
.icon {
	position: absolute;
	right: -25px;
	top: 5px;
	cursor: pointer;
	font-size: 18px;
	color: #333;
	z-index: 99;
}
</style>
