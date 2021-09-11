<template>
<div class="MassegeLogin">
  <div class="login">
    <div class="head">
      <i @click="back" class="el-icon-arrow-left i"></i>
      验证码登录
    </div>
    <el-form :model="msgLoginForm" label-width="0" :rules="msgLoginFormrules" ref="ruleForm" class="msgForm demo-ruleForm">
      <el-form-item prop="phone">
        <el-input v-model="msgLoginForm.phone" type='tel' placeholder="请输入手机号" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <div class="reg" @click="send"><a class="A" href="javascript:void(0)">发送验证码</a></div>
      <!-- 验证码 -->
      <el-form-item prop='msg'>
        <el-input v-model="msgLoginForm.captcha" placeholder="验证码" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msgLoginForm: {
        phone: null,
        captcha: null
      },
      msgLoginFormrules: {
        phone: [{
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          {
            min: 11,
            max: 11,
            message: '长度为 11 个字符',
            trigger: 'blur'
          }
        ],
        captcha: [{
            required: true,
            message: '请输验证码',
            trigger: 'blur'
          },
          {
            min: 4,
            max: 4,
            message: '长度为 4 个字符',
            trigger: 'blur'
          }
        ]

      }
    }
  },
  methods: {
    //发送验证码
    async send() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // console.log(typeof this.msgLoginForm.phone);
          let phone = Number(this.msgLoginForm.phone)
          //获取a标签内容
          let msg = document.querySelector("a")
          console.log(msg.innerHTML);
          // msg.disabled=true
          //倒计时60s
          var time = 60
          var timer = setInterval(fun, 1000)

          function fun() {
            time--
            if (time >= 0) {
              msg.innerHTML = time + 's后重新发送'
            } else {
              msg.innerHTML = '重新发送验证码'
              clearInterval(timer)
              time = 60
            }
          }

          this.$http.get(`/captcha/sent?phone=${phone}`).then(reg => {
            console.log(reg);
            if (reg.data.code === 400) {
              this.$message.error("发送验证码超过限制:每个手机号一天只能发5条验证码")
            } else {
              this.$message.success("发送成功")
            }
          })

        }
      })
    },
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let phone = Number(this.msgLoginForm.phone)
          let captcha = Number(this.msgLoginForm.captcha)
          //  console.log(msgLoginForm);
          this.$http.post("/captcha/verify", {
            phone,
            captcha
          }).then(res => {
            console.log(res);
            if (res.data.data) {
              console.log(res);
              this.$message.success("登陆成功！");
              return this.$router.push("/home/findPage/gexin");
              //token只应在当前网站打开期间生效,所以将token保存在sessionStorage中
              // window.sessionStorage.setItem("token", res.data.token);
            } else {
              return this.$message.error(
                "登陆失败,您输入的手机号或密码有误，请重新输入！"
              );
            }
          })

        }
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.MassegeLogin {}

.el-form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  text-align: center;
  vertical-align: middle;
}

.reg {
  position: absolute;
  top: 70px;
  right: 75px;
  font-size: 13px;
}

.el-form-item {
  width: 300px;
  text-align: center;
  vertical-align: middle;
}

.el-form .el-input {
  width: 300px;
}

.login {
  margin-top: -60px;
  width: 450px;
  height: 300px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* background-color: #eee;
  border: 3px solid #ccc; */
  box-shadow: 0 0 10px #ddd;
}

.head {
  text-align: center;
  border-radius: 10px 10px 0 0;
  width: 100%;
  position: relative;
  color: white;
  font-weight: bold;
  line-height: 40px;
  background-color: #FB3D00;
  /* background-color: rgb(247, 107, 107); */
}

.i {

  font-size: 19px;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translate(0, -50%);
}

.i:hover {
  color: cornsilk;
}
</style>
