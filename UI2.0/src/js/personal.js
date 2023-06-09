import { defineComponent } from "vue";
import axios from "./utils/AxiosConfig";
import {base64Encode} from './utils/utils'

export default defineComponent({
  name: "PageIndex",
  data() {
    return{
      basicInfo: {
        name: "",
        description: ""
      },
      ipInfo: {
        hint: "",
        ipAddrs: "",
        ipPort: "",
        serverUser: "",
        serverPassword: "",
        description: "",
        isConnect: false
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
    popAddIpWin() {
      document.getElementById("card-addIP").style.display = "block";
      document.getElementById("fade").style.display = "block";
    },
    closeAddIpWin() {
      document.getElementById("card-addIP").style.display = "none";
      document.getElementById("fade").style.display = "none";
      this.cleanIpInfo()
    },
    popUpdateIpWin(index) {
      document.getElementById("card-editIP").style.display = "block"
      document.getElementById("fade").style.display = "block";
      this.ipInfo.ipAddrs = this.$store.state.User.ipList[index].ipAddrs
      this.ipInfo.description = this.$store.state.User.ipList[index].description
    },
    closeUpdateIpWin() {
      document.getElementById("card-editIP").style.display = "none"
      document.getElementById("fade").style.display = "none";
      this.cleanIpInfo()
    },
    updateIp() {
      this.$store.dispatch("updateIp", {
        userId: this.$store.state.User.userInfo.userId,
        ipAddrs: this.ipInfo.ipAddrs,
        ipPort: this.ipInfo.ipPort,
        serverUser: this.ipInfo.serverUser,
        serverPassword: base64Encode(this.ipInfo.serverPassword),
        description: this.ipInfo.description
      })
      this.closeUpdateIpWin()
    },
    deleteIp(index) {
      this.$store.dispatch("deleteIp", index)
    },
    testConnect() {
      if(this.ipInfo.ipAddrs == "" || this.ipInfo.ipPort == "" ||
        this.ipInfo.serverUser == "" || this.ipInfo.serverPassword == ""){
          this.ipInfo.hint = "服务器信息请填完整"
      } else {
        axios("/v1/UI/user/testConnect", {
          ipAddrs: this.ipInfo.ipAddrs,
          ipPort: this.ipInfo.ipPort,
          serverUser: this.ipInfo.serverUser,
          serverPassword: base64Encode(this.ipInfo.serverPassword),
        }, "post").then(res => {
          res = JSON.parse(res)
          this.ipInfo.hint = res.msg
          if(res.success) {
            this.ipInfo.isConnect = true
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    addNewIp() {
      this.$store.dispatch("addNewip",{
        userId: this.$store.state.User.userInfo.userId,
        ipAddrs: this.ipInfo.ipAddrs,
        ipPort: this.ipInfo.ipPort,
        serverUser: this.ipInfo.serverUser,
        serverPassword: base64Encode(this.ipInfo.serverPassword),
        description: this.ipInfo.description
      })
      this.closeAddIpWin()
    },
    changeBasicInfo() {
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
    cleanIpInfo() {
      //关闭窗口清空ip信息
      this.ipInfo.hint ="",
      this.ipInfo.ipAddrs = "",
      this.ipInfo.ipPort = "",
      this.ipInfo.serverUser = "",
      this.ipInfo.serverPassword = "",
      this.ipInfo.description = "",
      this.ipInfo.isConnect = false
    }
  },
  
  mounted() {
    this.$store.dispatch("getIpListFromBackend")
    this.basicInfo.name = this.$store.state.User.userInfo.name
    this.basicInfo.description = this.$store.state.User.userInfo.description
    console.log(this.$store.state.User.ipList)
  },
});