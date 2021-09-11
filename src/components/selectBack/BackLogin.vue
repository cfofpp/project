<template>
  <div class="backLogin" @click="backLogin">
      退出登录
  </div>
</template>

<script>
export default {
    methods:{
        backLogin(){
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
.backLogin{
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    color: black;
    width: 130px;
    height: 40px;
    background-color: gainsboro;
}
.backLogin:hover{
    cursor: pointer;
}
</style>