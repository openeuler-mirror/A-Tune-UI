import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    onOfflineClick() {
      this.$router.push({
        path: "/offline",
      });
    },
    onOnlineClick() {
      this.$router.push({
        path: "/online",
      });
    },
  },
});