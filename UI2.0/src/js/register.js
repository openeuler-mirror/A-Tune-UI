import { defineComponent, ref } from "vue";
import axios from "./utils/AxiosConfig";
import CryptoJS from "crypto-js";

export default defineComponent({
    data() {
        return {
            hint: "",
            user: {
                email: "",
                name: "",
                password: "",
                repassword: "",
            }
        }
    },
    mounted() {
        console.log(this.$store.state)
    },
    methods: {
        onRegisterClick() {
            if (this.user.email == "" || this.user.name == "" ||
                this.user.password == "" || this.user.repasword == "") {
                this.hint = "参数不完整，请重新输入"
                return
            }
            if (this.user.password !== this.user.repassword) {
                this.user.password = ""
                this.user.repassword = ""
                this.hint = "两次密码不一致"
                return
            }
            this.user.password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(this.user.password));
            axios("/v1/UI/user/signup", this.user, "get")
                .then(res => {
                    res = JSON.parse(res)
                    if (res.signup) {
                        this.$router.push({
                            path: "/login",
                        })
                    } else {
                        this.hint = "邮箱已注册"
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        onLoginClick() {
            this.$router.push({
                path: "/login",
            });
        }
    },
});