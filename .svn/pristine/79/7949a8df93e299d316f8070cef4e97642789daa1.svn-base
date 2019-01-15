<template>
    <div>
        <mt-popup v-model="popupCity" position="right" :modal='false' class="page-popup">
            <mt-header title="选择城市" fixed>
                <mt-button icon="back" slot="left" @click="close()" class="backicon"></mt-button>
            </mt-header>
            <div class="container">
                <div class="wrap-search">
                    <img src="./img/search.png" width="16" height="16" alt="">
                    <input type="search" placeholder="请输入城市名称或者拼音" class="input-search" v-model="keyword" @input="search" @focus="searching=true" @blur="searching=false">
                </div>
                <div v-show="searching">
                    <ul class="search-result" v-show="searchResult.length>0">
                        <li v-for="(item,key) in searchResult" :key="key" @click="selectCity(item)">{{item.cityName}}</li>
                    </ul>
                    <p class="no-result" v-show="searchResult.length===0&&!firstload">暂无搜索结果</p>
                </div>
                <div v-show="!searching">
                    <div class="cur-city">
                        当前定位城市：
                        <span class="c333 mg-l10 flex-auto" @click="selectCity()">{{currentCity.cityName}}</span>
                        <img src="./img/refresh.png" class="refresh" :class="{'rotate360':rotate}" alt="刷新定位" @click="location">
                    </div>
                    <h3 class="hot-city-title">热门城市</h3>
                    <ul class="hot-city">
                        <li class="hot-city-item" v-for="item in citys.hotCityItem" :key="item.cityCode" @click="selectCity(item)">{{item.cityName}}</li>
                    </ul>
                    <h3 class="all-city-title">全部城市</h3>
                    <mt-index-list :height="height">
                        <mt-index-section v-for="item in citys.cityInfo" :key="item.letter" :index="item.letter">
                            <mt-cell v-for="cell in item.cityItem" :key="cell.cityCode" :title="cell.cityName" @click.native="selectCity(cell)"></mt-cell>
                        </mt-index-section>
                    </mt-index-list>
                </div>
            </div>
        </mt-popup>

    </div>
</template>

<script>
/**
 * 使用方法
 * <input type="text" v-model="formData.city" @click="$refs.citypage.open()" readonly onfocus="this.blur()" placeholder="请选择城市">
 * <jb-selectCity v-model="formData.city" cityName ref="citypage"></jb-selectCity>
 * 打开城市选择页面  $refs.citypage.open()
 * cityName       // formData.city 只返回所选城市
 * cityCode       // formData.city 只返回所选城市编码
 * 两者全有或全无  // formData.city 返回城市和编码对象 {cityName:所选城市,cityCode:所选城市编码}
 * 注意：
 * 依赖框架  mint-ui （可以重写覆盖mint-ui的class改样式）
 * 因为是通过vkc调用后台接口(http://api.junjue888.com/)，所以依赖jq
 * 定位用的是搜狐的，记得在页面引入<script src="http://pv.sohu.com/cityjson?ie=utf-8">< /script>
 */
export default {
    name: "jb-selectCity",
    props: {
        cityName: Boolean,
        cityCode: Boolean,
        value: {
            type: [String, Object],
            default: ""
        }
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            }
        }
    },
    data() {
        return {
            popupCity: false,
            height: document.documentElement.clientHeight - 50,
            rotate: false,
            keyword: "",
            searching: false,
            firstload: true,
            searchResult: [],
            currentCity: {
                cityName: "",
                cityCode: ""
            },
            citys: {
                currentCityName: "",
                currentCityCode: "",
                hotCityItem: [],
                cityInfo: []
            }
        };
    },
    methods: {
        open() {
            this.popupCity = true;
        },
        close() {
            this.popupCity = false;
        },
        location() {
            this.rotate = true;
            this.$api.vkcPost("supermarketloan/other/localcity", { param: { ip: returnCitySN.cip } }).then(res => {
                setTimeout(() => {
                    this.currentCity.cityName = res.currentCityName;
                    this.currentCity.cityCode = res.currentCityCode;
                    this.rotate = false;
                }, 500);
            });
        },
        search() {
            if (this.keyword === "") {
                this.searchResult = [];
                return;
            }
            this.$api.vkcPost("supermarketloan/other/searchcity", { param: { searchKeyword: this.keyword } }).then(res => {
                this.searchResult = res;
                if (this.firstload) this.firstload = false;
            });
        },
        selectCity(cell) {
            let cityobj;
            if (cell) {
                cityobj = cell;
            } else {
                this.currentCity.cityName = this.citys.currentCityName;
                this.currentCity.cityCode = this.citys.currentCityCode;
                cityobj = this.currentCity;
            }
            this.model = cityobj;
            if (this.cityName) this.model = cityobj.cityName;
            if (this.cityCode) this.model = cityobj.cityCode;
            if (this.cityName && this.cityCode) this.model = cityobj;
            this.keyword = "";
            this.popupCity = false;
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.$api.vkcPost("supermarketloan/other/cityinfohome", { param: { ip: returnCitySN.cip } }).then(res => {
                this.currentCity.cityName = res.currentCityName;
                this.currentCity.cityCode = res.currentCityCode;
                this.citys = res;
            });
        });

    }
};
</script>

<style scoped>
.page-popup {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
}
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    height: calc(100% - 50px);
    overflow: auto;
    top: 50px;
    left: 0;
}
.wrap-search {
    display: flex;
    align-items: center;
    border-radius: 0.07rem;
    margin: 0.1rem;
    background: #fff;
    padding: 0.15rem;
}
.input-search {
    flex: auto;
    -ms-flex: auto;
    -webkit-box-flex: 1;
    border-radius: 0;
    border: 0;
    outline: 0;
    min-width: 0.5rem;
    margin-left: 0.1rem;
}
.search-result {
    background: #fff;
    padding: 0 0.15rem;
}
.search-result > li {
    padding: 0.15rem 0.2rem;
    border-bottom: 1px solid #eee;
}
.search-result > li:last-child {
    border-bottom: none;
}
.no-result {
    padding-top: 0.15rem;
    color: #666;
    text-align: center;
}
.cur-city {
    display: flex;
    align-items: center;
    padding: 0.2rem;
    background-color: #fff;
    color: #999;
    font-size: 0.14rem;
}
.refresh {
    width: 0.2rem;
    height: 0.2rem;
}
.refresh.rotate360 {
    animation: rotate360 0.8s linear infinite;
    -ms-animation: rotate360 0.8s linear infinite; /* IE 9 */
    -moz-animation: rotate360 0.8s linear infinite; /* Firefox */
    -webkit-animation: rotate360 0.8s linear infinite; /* Safari 和 Chrome */
    -o-animation: rotate360 0.8s linear infinite; /* Opera */
}
.hot-city-title,
.all-city-title {
    padding: 0.15rem 0.2rem;
    color: #999;
    font-size: 0.16rem;
}
.hot-city {
    position: relative;
    width: 100%;
    text-align: center;
    background: #fff;
    overflow: hidden;
}
.hot-city:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
}
.hot-city-item {
    float: left;
    width: 33.333%;
    padding: 0.2rem;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
/*动画类*/

@keyframes rotate360 {
    from {
        transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        /* IE 9 */
        -moz-transform: rotate(0deg);
        /* Firefox */
        -webkit-transform: rotate(0deg);
        /* Safari 和 Chrome */
        -o-transform: rotate(0deg);
        /* Opera */
    }
    to {
        transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        /* IE 9 */
        -moz-transform: rotate(-360deg);
        /* Firefox */
        -webkit-transform: rotate(-360deg);
        /* Safari 和 Chrome */
        -o-transform: rotate(-360deg);
        /* Opera */
    }
}
</style>

