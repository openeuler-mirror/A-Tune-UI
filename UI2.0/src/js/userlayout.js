import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  methods: {
    onItemClick() {
      console.log("Clicked.");
    },
    onMainClick() {
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
    onLoginClick() {
      this.$router.push({
        path: "/login",
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
  },
  setup() {
    return {

    };
  },
});