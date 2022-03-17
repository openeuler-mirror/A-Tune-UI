import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            num: 0,
        };
    },
    methods: {
        descInput() {
            var txtVal = this.desc.length;
            this.num = 0 + txtVal;
        },
        openAlert() {
            document.getElementById("submit-alert").style.display = "block";
        },
        closeAlert() {
            document.getElementById("submit-alert").style.display = "none";
        },
    },
});