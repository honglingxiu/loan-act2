import Vue from 'vue';
import Profile from "./repeatMessageBox.vue";

const RepeatMessageBox = Vue.extend(Profile); // 创建构造器

let instance;

export default {
    //打开组件方法
    open(options = {}) {
        if (!instance) {
            // 创建 RepeatMessageBox 实例，并挂载到一个元素上。
            instance = new RepeatMessageBox({
                el: document.createElement('div')
            });
        }
        if (instance.dialogVisible) return;
        /*if (typeof options === 'string') {
            options.id = options;
        }*/
        instance.message = options.message || '请勿重复提交订单';
        if (typeof options.callback === 'function') {
            instance.callback = options.callback;
        }
        document.body.appendChild(instance.$el); //添加到页面中

        //页面dom元素加载完成后显示组件
        Vue.nextTick(() => {
            instance.dialogVisible = true;
        });
    },
    //关闭组件方法
    close() {
        if (instance) {
            instance.dialogVisible = false;
        }
    }
}