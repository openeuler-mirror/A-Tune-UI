import axios from "src/js/utils/AxiosConfig"

const User = {
    state(){
        return {
            userInfo: {
                name: "游客",
                userId: 0,
                description: "长风破浪会有时，直挂云帆济沧海",
            },
            ipList: [],
        }
    },
    mutations: {
        setUserInfo(state, user) {
            state.userInfo.userId = user.userId
            state.userInfo.name = user.name
            state.userInfo.description = user.description
        },
        setIpList(state, ipList) {
            state.ipList = ipList
        }
    },
    actions: {
        getUserInfoFromBackend({state, commit}) {
            //通过userId获取用户完整信息
            axios("/v1/UI/user/getBasicInfo", {
                userId: state.userInfo.userId
            }, "post").then(res => {
                res = JSON.parse(res)
                commit("setUserInfo",{
                    userId: state.userInfo.userId,
                    name: res.name,
                    description: res.description,
                })
            })  
        },
        getIpListFromBackend({state, commit}) {
            axios("/v1/UI/user/ipList", {userId: state.userInfo.userId}, "get").then(res => {
                res = JSON.parse(res)
                console.log(res)
                commit("setIpList", res.ipList)
            })
        },
        addNewip({dispatch}, ipinfo) {
            axios("/v1/UI/user/addNewIp", ipinfo, "post").then(res => {
                res = JSON.parse(res)
                if(res.success) {
                    dispatch("getIpListFromBackend")
                }
            })
        },
        updateIp({dispatch}, ipInfo) {
            axios("/v1/UI/user/updateIp", ipInfo, "post").then(res => {
                res = JSON.parse(res)
                if(res.success) {
                    dispatch("getIpListFromBackend")
                }
            })
        },
        deleteIp({state, dispatch}, index) {
            axios("/v1/UI/user/deleteIp", {
                userId: state.userInfo.userId,
                ipAddrs: state.ipList[index].ipAddrs
            }, "get").then(res => {
                res = JSON.parse(res)
                if(res.success) {
                    dispatch("getIpListFromBackend")
                }
            })
        }
    }
}

export default User