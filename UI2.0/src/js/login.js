import { defineComponent, ref } from "vue";

export default defineComponent({
    methods: {
        onSubmit() { },
        onUserClick() {
            this.$router.push({
                path: "/user",
            });
        },
        onRegisterClick() {
            this.$router.push({
                path: "/register",
            });
        },
    },
});