import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    showClickmode() {
      document.getElementById("click-mode").style.display = "block";
      document.getElementById("node-mode").style.display = "none";
      document.getElementById("cluster-mode").style.display = "none";
    },
    showNodemode() {
      document.getElementById("click-mode").style.display = "none";
      document.getElementById("node-mode").style.display = "block";
      document.getElementById("cluster-mode").style.display = "none";
    },
    showClustermode() {
      document.getElementById("click-mode").style.display = "none";
      document.getElementById("node-mode").style.display = "none";
      document.getElementById("cluster-mode").style.display = "block";
    },
    showAddparameter() {
      document.getElementById("add-parameter-1").style.display = "block";
      document.getElementById("tunning-select").style.display = "none";
    },
    closeAddparameter() {
      document.getElementById("add-parameter-1").style.display = "none";
      document.getElementById("tunning-select").style.display = "none";
    },
    showTunningselect() {
      document.getElementById("tunning-select").style.display = "block";
      document.getElementById("add-parameter-1").style.display = "none";
    },
  },
});