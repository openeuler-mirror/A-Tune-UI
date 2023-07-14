import { defineComponent } from "vue";

export default defineComponent({
    name: 'About',
    data() {
        return {
            selectedTab: "learn",
            tabs: [
                {name: "learn", label: "认识A-Tune"},
                {name: "install", label: "安装与部署"},
                {name: "instructions", label: "使用方法"},
                {name: "question", label: "常见问题与解决方法"},
                {name: "appendix", label: "附录"}
            ],
            splitterModel: 0,
        };
    },
    methods: {

    },
});