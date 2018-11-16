import selectCity from "./selectCity"; // 基础mint-ui的城市选择
import linkageCity from "./linkageCity"; // 省市联动选择

const version = '1.0';
const install = function(Vue) {

    if (install.installed) return;

    Vue.component(selectCity.name, selectCity);
    Vue.component(linkageCity.name, linkageCity);

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    version
};

/**
 * 使用方法：
 * 1：将modules文件夹复制到项目的src文件夹中
 * 2：在mainjs里引入 
 *    import Modules from "./modules";
 *    Vue.use(Modules)
 * 3：各组件使用方法请查看各组件的.vue文件的注释
 */