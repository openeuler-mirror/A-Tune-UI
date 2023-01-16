import { defineComponent } from "vue";
import axios from "./utils/AxiosConfig";
import base64Encode from './utils/utils'

export default defineComponent({
  name: "PageIndex",
  data() {
    return{
      basicInfo: {
        name: "",
        description: ""
      },
      password: {
        hint: "",
        oldPassword: "",
        newPassword: "",
        renewPassword: ""
      }
    }
  },
  methods: {
    popWin() {
      document.getElementById("light").style.display = "block";
      document.getElementById("fade").style.display = "block";
    },
    closeWin() {
      document.getElementById("light").style.display = "none";
      document.getElementById("fade").style.display = "none";
    },
    popWinpass() {
      document.getElementById("card-password").style.display = "block";
      document.getElementById("fade").style.display = "block";
    },
    closeWinpass() {
      document.getElementById("card-password").style.display = "none";
      document.getElementById("fade").style.display = "none";
    },
    changeBasicInfo(){
      if(this.basicInfo.name == this.$store.state.User.userInfo.name && 
        this.basicInfo.description == this.$store.state.User.userInfo.description) {
          this.closeWin()
      }else{
        this.$store.commit("setUserInfo", {
          userId: this.$store.state.User.userInfo.userId,
          name: this.basicInfo.name,
          description: this.basicInfo.description
        })
        axios("/v1/UI/user/changeBasicInfo", {
          userId: this.$store.state.User.userInfo.userId,
          name: this.basicInfo.name,
          description: this.basicInfo.description,
        }, "post").then(res => {
          res = JSON.parse(res)
          if(!res.success) {
            console.log("修改失败")
          } else {
            console.log("修改成功")
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    changePwd() {
      if(this.password.oldPassword == "" || this.password.newPassword == "" || this.password.renewPassword == ""){
        this.password.hint = "上述参数必须填写完整"
        return
      }
      if(this.password.newPassword != this.password.renewPassword) {
        this.password.hint = "两次输入的新密码不同"
        return
      }
      if(this.password.newPassword == this.password.oldPassword) {
        this.password.hint = "新密码不能和旧密码一致"
        return
      }
      console.log(base64Encode(this.password.oldPassword))
      axios("/v1/UI/user/changePasswd", {
        userId: this.$store.state.User.userInfo.userId,
        password: base64Encode(this.password.oldPassword),
        newPasswd: base64Encode(this.password.newPassword)
      }, "post").then(res => {
        res = JSON.parse(res)
        if(!res.oldMatch) {
          this.password.hint = "旧密码错误，请重新输入"
          this.password.oldPassword = ""
          this.password.newPassword = ""
          this.password.renewPassword = ""
          return
        }else{
          this.password.hint = "密码修改成功，下次登陆生效"
        }
      }).catch(err => {
        console.log(err)
      })
    },
  },
  
  mounted() {
    this.basicInfo.name = this.$store.state.User.userInfo.name
    this.basicInfo.description = this.$store.state.User.userInfo.description
  },
});