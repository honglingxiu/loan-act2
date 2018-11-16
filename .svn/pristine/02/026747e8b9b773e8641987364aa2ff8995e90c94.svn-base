<template>
    <div>
        <img src="static/img/product.jpg" alt="产品介绍" width="100%" height="100%">
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer1: ""
        };
    },
    mounted() {
        this.$nextTick(function() {
            this.timer1 = setTimeout(() => {
                MtaH5.clickStat("3", { channel: idList.channelName + "：" + idList.channelChildName });
                _paq.push(["trackEvent", idList.channelName + "：" + idList.channelChildName, "跳转H5", this.$route.params.url]);
                this.$router.push("/iframe/" + encodeURIComponent(this.$route.params.url));
            }, 2000);
        });
    },
    destroyed() {
        window.clearTimeout(this.timer1);
    }
};
</script>
