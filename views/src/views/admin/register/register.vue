<template>
  <Main>
    <div slot="form">
      <div class="form">
        <div class="group">
          <div class="group-ipt">
            <el-input v-model="form.username" placeholder="用户名"></el-input>
          </div>
          <div class="group-ipt">
            <el-input v-model="form.password" placeholder="密码"></el-input>
          </div>
          <div class="group-ipt">
            <el-input v-model="form.password1" placeholder="确认密码"></el-input>
          </div>
        </div>
      </div>
      <div class="button">
        <el-button type="primary" @click="register">注册</el-button>
      </div>
    </div>
  </Main>
</template>

<script>
import Main from './../main';
import user from './../../../api/user';

export default {
    components: {
        Main,
    },
    data() {
        return {
            form: {
                username: '',
                password: '',
                password1: '',
            },
        };
    },
    methods: {
        register() {
            user.register(this.form).then(res => {
                console.log(res);
            });
        },
    },
};
</script>

<style lang="scss">
  @import './../../../assets/style/scss/admin';
</style>
