<template>
    <mt-popup v-model="dialogVisible" popup-transition="popup-fade" :closeOnClickModal='false' class="message-box">
        <div>
            <h3 class="title">提示</h3>
            <h5 class="text-center c666 mg-b20">{{message}}</h5>
            <footer class="flex">
                <div class="footer-btn cancel flex-auto" @click="skipTo()">确定</div>
                <div class="footer-btn confirm flex-auto" @click="skipTo()">推荐更多</div>
            </footer>
        </div>
    </mt-popup>
</template>

<script>
    /**
     写备注组件
     使用例子
     var _this=this;
     this.$repeatMessageBox.open(
     {
         message: res.msg,
         callback: () => {
             //重复提单后跳转
             this.$repeatMessageBox.close();
             this.$api.skipTo(res, _this.$route.fullPath);
         }
     }
     );
     1.message：弹框信息
     2.callback：点击后的回调

     */
    export default {
       /* props: {
            value: {
                type: String,
                default: "请勿重复提交订单"
            }
        },*/
        data() {
            return {
                callback: null,
                message:"请勿重复提交订单",
                dialogVisible: false,
            };
        },
        methods: {
            skipTo(){
                this.callback();
            }
        }
    };
</script>

<style scoped>
    .message-box {
        border: 4px solid #5b5b5b;
        padding: 0.15rem;
    }
    .title {
        color: #2c86de;
        text-align: center;
        margin-bottom: 0.15rem;
    }

    .footer-btn {
        text-align: center;
        line-height: 0.4rem;
        color: #fff;
        border-radius: 0.05rem;
    }
    .footer-btn:active {
        opacity: 0.8;
        transition: 0.2s;
    }
    .footer-btn.confirm {
        background: #3d9bef;
    }
    .footer-btn.cancel {
        background: #828e9e;
        margin-right: 0.15rem;
    }
</style>

