import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
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
  },
  mounted() {

  },
});