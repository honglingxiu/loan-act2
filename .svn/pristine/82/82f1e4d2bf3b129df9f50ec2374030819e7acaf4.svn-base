<template>
    <mt-popup v-model="popupCity" position="right" :modal='false' class="page-popup">
        <mt-header title="选择城市" fixed>
            <mt-button icon="back" slot="left" @click="close()" class="backicon"></mt-button>
        </mt-header>
        <div class="container">
            <mt-index-list :height="height" v-show="provincePage">
                <mt-index-section v-for="item in allcitys" :key="item.letter" :index="item.letter">
                    <mt-cell v-for="(cell,key) in item.citys" :key="key" :title="cell.province" @click.native="selectProvince(cell)"></mt-cell>
                </mt-index-section>
            </mt-index-list>
            <ul class="cityPage bgfff" v-show="!provincePage">
                <li v-for="(city,key) in cityItem" :key="key" @click="selectCity(city)">{{city}}</li>
            </ul>
        </div>
    </mt-popup>
</template>

<script>
/**
 * 使用方法
 * <input type="text" v-model="formData.city" @click="$refs.citypage.open()" readonly onfocus="this.blur()" placeholder="请选择城市">
 * <jb-linkageCity v-model="formData.city" ref="citypage"></jb-linkageCity>
 * 打开城市选择页面  $refs.citypage.open()
 * 选中后返回所选城市名称
 * 注意：依赖框架  mint-ui （可以重写覆盖mint-ui的class改样式）
 */
import allcitys from "./city.json";
export default {
    name: "jb-linkageCity",
    props: {
        value: {
            type: String,
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
            allcitys: allcitys,
            popupCity: false,
            height: document.documentElement.clientHeight - 50,
            provincePage: true,
            cityItem: [],
            province: ""
        };
    },
    methods: {
        open() {
            this.popupCity = true;
        },
        close() {
            if (!this.provincePage) {
                this.provincePage = true;
                return;
            }
            this.popupCity = false;
        },
        selectCity(city) {
            // this.province !== city ? (this.model = this.province + city) : (this.model = city);  //返回  省份+城市
            this.model = city;  //返回  城市
            this.popupCity = false;
        },
        selectProvince(cell) {
            this.province = cell.province;
            this.cityItem = cell.cityItem;
            this.provincePage = false;
        }
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
.cityPage li {
    padding: 0.15rem;
    border-bottom: 1px solid #eee;
}
</style>

