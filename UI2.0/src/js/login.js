import { defineComponent, ref } from "vue";
import axios from "./utils/AxiosConfig";
import CryptoJS from "crypto-js";

export default defineComponent({
    data() {
        return {
            hint: "",
            user: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        onUserClick() {
            if (this.user.email == "" || this.user.password == "") {
                this.hint = "用户邮箱或密码不能为空"
                return
            }
            this.user.password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(this.user.password));
            axios("/v1/UI/user/login", this.user, "post")
                .then(res => {
                    res = JSON.parse(res)
                    if (res.login) {
                        this.$store.commit("changeUserName", res.user_name)
                        this.$router.push({
                            path: "/user",
                        });
                    } else {
                        this.hint = "账号或密码不正确"
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        onRegisterClick() {
            this.$router.push({
                path: "/register",
            });
        },
    },
});