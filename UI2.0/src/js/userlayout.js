import { defineComponent, ref } from "vue";
import axios from "./utils/AxiosConfig";

export default defineComponent({
  name: "MainLayout",

  components: {},

  methods: {
    onMainClick() {
      localStorage.clear()
      this.$router.push({
        path: "/",
      });
    },
    onAboutClick() {
      this.$router.push({
        path: "/about",
      });
    },
    onContactClick() {
      this.$router.push({
        path: "/contact",
      });
    },
    onRecordClick() {
      this.$router.push({
        path: "/record",
      });
    },
    onInformationClick() {
      this.$router.push({
        path: "/information",
      });
    },
    onCommandClick() {
      this.$router.push({
        path: "/command",
      });
    },
    onUserClick() {
      this.$router.push({
        path: "/user",
      });
    },
    onPersonalClick() {
      this.$router.push({
        path: "/personal",
      });
    },
    showSearchInput() {
      document.getElementById("search-input").style.display = "block";
    },
    verifyToken() {
      if(this.$store.state.User.userInfo.userId == 0 || !localStorage.getItem("token")){
        this.$router.push({
          path: "/"
        })
        return
      }
      axios("/v1/UI/user/userVerify", {
        userId: this.$store.state.User.userInfo.userId
      },"get").then(res => {
        res = JSON.parse(res)
        console.log(res)
        if(!res.vaild) {
          this.$router.push({
            path: "/"
          })
        }
      })
    },
  },
  mounted() {
    this.$store.dispatch("getUserInfoFromBackend")
    this.verifyToken()
  },
  setup() {
    return {

    };
  },
});