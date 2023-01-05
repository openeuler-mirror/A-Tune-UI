import EssentialLink from "components/EssentialLink.vue";
import { defineComponent, ref } from "vue";
import axios from "./utils/AxiosConfig";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
];
export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  data() {
    return {
      DBCollect: false,
    }
  },
  mounted() {
    this.connectDatabase()
  },
  methods: {
    onItemClick() {
      console.log("Clicked.");
    },
    onMainClick() {
      this.$router.push({
        path: "/",
      });
    },
    onLoginClick() {
      this.$router.push({
        path: "/login",
      });
    },
    onRegisterClick() {
      this.$router.push({
        path: "/register",
      });
    },
    onUserClick() {
      this.$router.push({
        path: "/user",
      });
    },
    showSearchInput() {
      document.getElementById("search-input").style.display = "block";
    },
    connectDatabase() {
      axios("/v1/UI/user/initialPage", {}, "get")
        .then(res => {
          res = JSON.parse(res)
          if (res.connectDB) {
            this.DBCollect = true
          } else {
            this.DBCollect = false
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});