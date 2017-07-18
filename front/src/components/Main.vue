<template>
    <div class="main">
        <div class="module-con">
            <div class="module-style" v-html="formatedCss"></div>
            <div class="module-html" ref="module-con" v-html="formatedTpl"></div>
        </div>
        <div class="control" v-show="metaData">
            <el-button type="primary" @click="clear">清空模板</el-button>
            <el-button type="success" @click="downloadImg">下载图片</el-button>
        </div>
    </div>
</template>
<script>
import {
    mapState,
    mapActions
} from 'vuex';

import {
    isNull
} from '../utils.js';

import less from 'less';

export default {
    name: 'Main',
    data() {
        return {
            formatedCss: '',
            loadingInstance: null
        }
    },
    computed: {
        ...mapState({
            metaData: 'metaData'
        }),
        formatedTpl() {
            if (isNull(this.metaData)) return '<div></div>';
            let tpl = this.metaData.template;
            this.metaData.fields.forEach(item => {
                tpl = tpl.replace('{{' + item.key + '}}', item.value);
            });
            return tpl;
        }
    },
    methods: {
        ...mapActions(['updateMetaData']),
        clear() {
            this.updateMetaData(null);
        },
        downloadImg() {
            const resultTpl =
                `
			<!DOCTYPE html>
			<html lang="en">

			<head>
			    <meta charset="UTF-8">
			    <title>Document</title>
			    <style type="text/css">
			    html, body {
			    	margin: 0;
			    	padding: 0;
			    }
			    ${this.metaData.style}
			    </style>
			</head>
			<body>
				${this.formatedTpl}
			</body>
			`;
			this.loadingInstance = this.$loading({
				fullscreed: true,
				text: '正在生成图片，请稍后...'
			});
			this.$progress.start();
            this.$http.post('http://api.luoyefe.com/phantom/render', {
                    html: resultTpl,
                    format: 'png',
                    quality: 100
                })
                .then(response => {
                	this.$progress.done();
                    let link = document.createElement('a');
                    link.href = response.data.url;
                    link.download = response.data.url.match(/[\s\S]+\/(.*)/)[1];
                    link.click();
                    setTimeout(() => {
                    	this.loadingInstance.close();
                    }, 500)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    watch: {
        metaData() {
            if (isNull(this.metaData) || this.formatedCss) return;
            less.render(`.module-html { ${this.metaData.style} }`, {}, (e, out) => {
                this.formatedCss = `<style type="text/css">${out.css}</style>`;
            });
        }
    }
}
</script>
<style scoped>
.main {
    position: relative;
    overflow: hidden;
}

.module-html {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
    width: 750px;
    height: 390px;
    overflow: hidden;
}

.control {
    text-align: center;
    margin-top: 410px;
}
</style>
