import { defineComponent, ref } from "vue";

export default defineComponent({
    methods: {
        onSubmit() { },
        onLoginClick() {
            this.$router.push({
                path: "/login",
            });
        },
    },
});