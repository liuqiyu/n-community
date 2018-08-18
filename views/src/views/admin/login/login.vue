<template>
    <Main>
        <div slot="form">
            <div class="login form">
                <div class="group">
                    <div class="group-ipt">
                        <input type="email" name="email" class="ipt" placeholder="用户名" required>
                    </div>
                    <div class="group-ipt">
                        <input type="password" name="password" class="ipt" placeholder="密码" required>
                    </div>
                </div>
            </div>
            <div class="button">
                <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </Main>
</template>

<script>
import Main from './../main';

export default {
    components: {
        Main,
    },
    methods: {
        login() {
            console.log(321);
        },
    },
};
</script>

<style lang="scss">
    @import './../../../assets/style/scss/admin';
</style>
