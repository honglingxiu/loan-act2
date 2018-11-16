<template>
    <div id="app">
        <transition name="opacity">
            <router-view class="child-view"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    watch: {
        $route(to, from) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 150);
            this.$indicator.close();
            if (window.sessionStorage.getItem("openFlag")) {
                MtaH5.pgv();
                _paq.push(["setCustomUrl", to.fullPath]);
                _paq.push(["setDocumentTitle", document.title]);
                _paq.push(["trackPageView"]);
                return;
            }
            window.sessionStorage.setItem("openFlag", true);
        }
    },
    created() {
        this.$api.getIdList();
    }
};
</script>

<style>
.child-view {
    width: 100%;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.opacity-enter,
.opacity-leave-active,
.opacity-leave-active,
.opacity-enter {
    position: absolute;
    opacity: 0;
}
</style>
