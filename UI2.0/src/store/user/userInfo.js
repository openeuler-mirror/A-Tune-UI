import axios from "src/js/utils/AxiosConfig"

const User = {
    state(){
        return {
            userInfo: {
                name: "游客",
                userId: 0,
                description: "长风破浪会有时，直挂云帆济沧海",
            },
        }
    },
    mutations: {
        setUserInfo(state, user) {
            state.userInfo.userId = user.userId
            state.userInfo.name = user.name
            state.userInfo.description = user.description
        },
    },
    actions: {
        getUserInfoFromBackend({state, commit}) {
            //通过userId获取用户完整信息
            axios("/v1/UI/user/getBasicInfo",{
                userId: state.userInfo.userId
            }, "post").then(res => {
                res = JSON.parse(res)
                commit("setUserInfo",{
                    userId: state.userInfo.userId,
                    name: res.name,
                    description: res.description
                })
            })
        }   
    }
}

export default User