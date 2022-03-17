import EssentialLink from "components/EssentialLink.vue";
import { defineComponent, ref } from "vue";

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