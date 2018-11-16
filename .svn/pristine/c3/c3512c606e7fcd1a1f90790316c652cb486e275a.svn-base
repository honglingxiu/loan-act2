<template>
    <div>
        <mt-popup v-model="popupCity" position="right" :modal='false' class="page-popup">
            <mt-header title="选择城市" fixed>
                <mt-button icon="back" slot="left" @click="popupCity=false" class="backicon"></mt-button>
            </mt-header>
            <div class="container">
                <!-- <h5 class="text-center bgfff pd20 c333">选择城市</h5> -->
                <div class="wrap-search flex align-middle">
                    <img src="../assets/img/search.png" width="16" height="16" alt="">
                    <input type="search" placeholder="请输入城市名称或者拼音" class="mg-l10 flex-auto form-item-input" v-model="keyword" @input="search" @focus="searching=true" @blur="searching=false">
                </div>
                <div v-show="searching">
                    <ul class="search-result" v-show="searchResult.length>0">
                        <li v-for="(item,key) in searchResult" :key="key" @click="selectCity(item)">{{item.cityName}}</li>
                    </ul>
                    <p class="text-center pd-t15 c666" v-show="searchResult.length===0&&!firstload">暂无搜索结果</p>
                </div>
                <div v-show="!searching">
                    <div class="flex align-middle c999 fs14 pd20 bgfff">
                        当前定位城市：
                        <span class="c333 mg-l10 flex-auto" @click="selectCity()">{{currentCity.cityName}}</span>
                        <img src="../assets/img/refresh.png" class="refresh" :class="{'rotate360':rotate}" alt="刷新定位" @click="location">
                    </div>
                    <h5 class="pd20 c999">热门城市</h5>
                    <ul class="hot-city">
                        <li class="hot-city-item" v-for="item in citys.hotCityItem" :key="item.cityCode" @click="selectCity(item)">{{item.cityName}}</li>
                    </ul>
                    <h5 class="pd20 c999">全部城市</h5>
                    <mt-index-list>
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
// @keyup="submit($event)"
// submit(e){
// var presskey = e.keyCode || e.which;
// if(presskey===13){
//     this.$messagebox('提示',this.keyword);
// }
// },
// @input="submit($event)"
// 设置input autocomplete="off"去掉弹出的下拉框；
//     将默认的“x”隐藏掉：
// input[type="search"]::-webkit-search-cancel-button{
//     display: none;
// }
//     针对ios 设置样式, 去除ios下input 椭圆形:
// -webkit-appearance: none;
// 同时别忘记，如果提交搜索时想使用ajax，那么可以阻止表单的默认行为：
// container.on('submit', '.input-kw-form', function(event){
//     event.preventDefault();
// })
//
export default {
    data() {
        return {
            popupCity: false,
            rotate: false,
            keyword: "",
            searching: false,
            firstload: true,
            searchResult: [],
            position: "",
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
            this.$emit("setCity", cityobj);
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
                $(".mint-indexlist-content").height($(".mint-indexlist-content").height() - 50);
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
    border-radius: 0.07rem;
    margin: 0.1rem;
    background: #fff;
    padding: 0.15rem;
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
</style>
