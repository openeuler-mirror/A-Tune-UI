import { defineComponent, ref } from "vue";
import axios from "./utils/AxiosConfig";

export default defineComponent({
  name: "LoginLayout",
  components: {},
  methods: {
    onMainClick() {
      this.$router.push({
        path: "/",
      });
    },
    verifyToken() {
      if(this.$store.state.User.userInfo.userId == 0 || !localStorage.getItem("token")){
        return
      }
      axios("/v1/UI/user/userVerify", {
        userId: this.$store.state.User.userInfo.userId
      },"get").then(res => {
        res = JSON.parse(res)
        if(res.vaild) {
          this.$router.push({
            path: "/user"
          })
        }
      })
    },
  },
  mounted() {
    this.verifyToken()
  },
  setup() { },
});