<template>
    <div class="success-page text-center">
        <mt-header title="贷款成功" fixed>
            <mt-button icon="back" slot="left" @click.native="$router.back()" class="backicon"></mt-button>
        </mt-header>
        <img src="static/img/success.png" alt="贷款成功" class="success-icon">
        <h3 class="mg-t10 c000">您符合以下平台借款业务：</h3>
        <div class="company-list clearfix text-left">
            <div class="col-6" v-for="item in companyList" :key="item">
                <span class="company c333">{{item}}</span>
            </div>
        </div>
        <p class="lh22 fs16 c999">请等待工作人员与您联系</p>
        <img src="static/img/pufa.png" alt="广告" width="100%" class="mg-t20" @click="pufa()" />
        <img src="static/img/zhongxin2.jpg" alt="广告" width="100%" class="mg-t10" @click="zhongxin()" v-if="eventMarketId==='loan02'" />
        <img src="static/img/zhongxin.png" alt="广告" width="100%" class="mg-t10" @click="zhongxin()" v-else />
    </div>
</template>

<script>
export default {
    data() {
        return {
            companyList: ["助贷网", "卡牛贷款", "房金所", "东方融资", "惠贷网", "百姓网", "菠萝贷", "好贷网"]
        };
    },
    computed: {
        eventMarketId() {
            return idList ? idList.eventMarketId : "";
        }
    },
    methods: {
        pufa() {
            MtaH5.clickStat("6", { channel: idList.channelName + "：" + idList.channelChildName });
            _paq.push(["trackEvent", idList.channelName + "：" + idList.channelChildName, "跳转浦发页面"]);
            window.location.href = "https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=ZF2792263&itemcode=0000000800";
        },
        zhongxin() {
            MtaH5.clickStat("7", { channel: idList.channelName + "：" + idList.channelChildName });
            _paq.push(["trackEvent", idList.channelName + "：" + idList.channelChildName, "跳转中信页面"]);
            window.location.href = "https://creditcard.ecitic.com/h5/shenqing/index.html?sid=SJUGZJB1";
            // window.location.href = "https://creditcard.ecitic.com/citiccard/cardshop-web/apply/toTelShortWapIndex.do?sid=HTFK77";
        }
    },
    mounted() {
        window.sessionStorage.removeItem("userPhone");
        window.sessionStorage.removeItem("userApplyId");
    }
};
</script>
