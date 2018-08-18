<template>
    <div>
        <div id="box"></div>
        <div class="cent-box register-box">
            <div class="cent-box-header">
                <h1 class="main-title">我的社区</h1>
                <h2 class="sub-title">生活热爱分享 - Thousands Find</h2>
            </div>

            <div class="cont-main clearfix">
                <div class="index-tab">
                    <div class="index-slide-nav">
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register">注册</router-link>
                        <div class="slide-bar slide-bar1"></div>
                    </div>
                </div>
                <slot name="form"></slot>
            </div>
        </div>

        <div class="footer">
            <p>千寻 - Thousands Find</p>
            <p>Designed By ZengRong & <a href="zrong.me">zrong.me</a> 2016</p>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss">
    @import './../../assets/style/scss/admin';
</style>
