export default [{
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }, {
    	"key": "p2",
    	"value": "尚新"
    }, {
    	"key": "p3",
    	"value": "春装尚新时"
    }, {
    	"key": "span1",
    	"value": "2.15"
    }, {
    	"key": "span2",
    	"value": "DAY"
    }],
    "fonts": [{
        "name": "造字工房悦圆",
        "src": [
        	"http://oojaru6ad.bkt.clouddn.com/%E9%80%A0%E5%AD%97%E5%B7%A5%E6%88%BF%E6%82%A6%E5%9C%86.otf"
        ]
    }, {
        "name": "方正兰亭细黑简体",
        "src": [
        	"http://oojaru6ad.bkt.clouddn.com/%E6%96%B9%E6%AD%A3%E5%85%B0%E4%BA%AD%E7%BB%86%E9%BB%91%E7%AE%80%E4%BD%93.TTF"
        ]
    }, {
        "name": "方正细圆简体",
        "src": [
        	"http://oojaru6ad.bkt.clouddn.com/%E6%96%B9%E6%AD%A3%E7%BB%86%E5%9C%86%E7%AE%80%E4%BD%93.ttf"
        ]
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `
    @font-face {
    	font-family: "造字工房悦圆";
    	src: url("http://oojaru6ad.bkt.clouddn.com/%E9%80%A0%E5%AD%97%E5%B7%A5%E6%88%BF%E6%82%A6%E5%9C%86.otf")
    }
    @font-face {
    	font-family: "方正兰亭细黑简体";
    	src: url("http://oojaru6ad.bkt.clouddn.com/%E6%96%B9%E6%AD%A3%E5%85%B0%E4%BA%AD%E7%BB%86%E9%BB%91%E7%AE%80%E4%BD%93.TTF")
    }
    @font-face {
    	font-family: "方正细圆简体";
    	src: url("http://oojaru6ad.bkt.clouddn.com/%E6%96%B9%E6%AD%A3%E7%BB%86%E5%9C%86%E7%AE%80%E4%BD%93.ttf")
    }
    .con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "造字工房悦圆";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "方正细圆简体";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "方正兰亭细黑简体";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        text-align: center;
    }
    .time > span {
        display: inline-block;
        width: 100%;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
        margin-top: 15px;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}, {
    "id": "1",
    "title": "标题",
    "desc": "这个模块的描述文本",
    "tag": ["甜美控"],
    "fields": [{
        "key": "p1",
        "value": "甜妹"
    }],
    "fonts": [{
        "name": "",
        "src": ""
    }],
    "example_img": "https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png",
    "template":
    `<div class="con" style="background: url('https://s10.mogucdn.com/mlcdn/c45406/170619_7id3lc87cac32gcdgl9816h2liebk_750x390.png')">
        <img src="https://s10.mogucdn.com/mlcdn/c45406/170619_858ibhhbgl70a26765a55ikc4h0ai_425x358.png" class="modelmodule">
        <p class="p1">{{p1}}</p>
        <p class="p2">{{p2}}</p>
        <p class="p3">{{p3}}</p>
        <div class="time">
            <span class="span1">{{span1}}</span>
            <span class="span2">{{span2}}</span>
        </div>
    </div>`,
    "style":
    `.con {
        width: 750px;
        height: 390px;
        background-size: 750px 390px;
        position: relative;
    }

    .modelmodule {
        display: block;
        position: absolute;
        bottom: 0;
        left: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .p1 {
        font-size: 92px;
        color: #fff;
        font-family: "RTWS YueRoundedGothic Demo";
        position: absolute;
        left: 78px;
        top: 140px;
        line-height: 1;
    }

    .p2 {
        font-size: 92px;
        color: #fff;
        font-family: "FZXiYuan-M01S";
        position: absolute;
        line-height: 1;
        left: 78px;
        top: 235px;
    }

    .p3 {
        font-size: 20px;
        font-family: "FZLanTingHeiS-L-GB";
        position: absolute;
        line-height: 1;
        left: 80px;
        top: 332px;
        color: #d75c10;
        letter-spacing: 18px;
    }

    .time {
        position: absolute;
        background-color: rgba(72, 91, 226, 0.95);
        border-radius: 100%;
        color: #fff;
        top: 282px;
        left: 500px;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .span1 {
        font-size: 26px;
        font-family: 'Avenir Next Condensed';
        font-weight: bold;
    }

    .span2 {
        font-size: 18px;
        font-family: 'Avenir';
    }`
}]
