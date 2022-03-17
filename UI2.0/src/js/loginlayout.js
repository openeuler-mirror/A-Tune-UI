import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginLayout",
  components: {},
  methods: {
    onItemClick() {
    },
    onMainClick() {
      this.$router.push({
        path: "/",
      });
    },
  },
  setup() { },
});