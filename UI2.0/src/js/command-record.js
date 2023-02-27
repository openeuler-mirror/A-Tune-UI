import { defineComponent } from "vue";
import axios from "./utils/AxiosConfig";

export default defineComponent({
  data() {
    return{
      curPage: 1,
      recordNum: 0,
      recordList: [],
      recordType: 'command',
      descriptionList: []
    }
  },
  methods: {
    getRecordNum(type) {
      var url = '/v1/UI/' + type + '/initialPage'
      axios(url, {
        uid: this.$store.state.User.userInfo.userId,
      }, "get").then(res => {
        res = JSON.parse(res)
        this.recordNum = res.count
      })
    },
    getRecordList(type) {
      var url = '/v1/UI/' + type + '/getList'
      axios(url, {
        uid: this.$store.state.User.userInfo.userId,
        pageNum: this.curPage,
        pageSize: 15
      }, "get").then(res => {
        res = JSON.parse(res)
        this.recordList = res.data
        for(var i = 0; i < this.recordList.length; i++){
          this.descriptionList[i] = this.recordList[i].description
        }
      })
    },
    getRecord(type) {
      this.getRecordNum(type)
      this.getRecordList(type)
      this.recordType = type
      this.curPage = 1
    },
    getRecordDetail(type, id, mid) {
      if(typeof(type) == 'undefined'){
        if(this.recordType == 2) {
          this.$router.push({
            path: "/offline",
            query: {id: id}
          });
        }else {
          this.$router.push({
            path: "/online",
            query: {id: id}
          });
        }
      }else if(type == 'tuning') {
        this.$router.push({
          path: "/offline",
          query: {id: mid}
        });
      }else {
        this.$router.push({
          path: "/online",
          query: {id: mid}
        });
      }
    },
    updateRecordDescription(index, id) {
      if(this.recordList[index].description == this.descriptionList[index]) {
        return
      }
      var url = '/v1/UI/' + this.recordType + '/updateDescription'
      if(this.recordType == 'tuning'){
        axios(url, {
          tid: id,
          description: this.descriptionList[index]
        }, "get").then(res => {
          res = JSON.parse(res)
          if(res.status) {
            this.recordList[index].description = this.descriptionList[index]
          }else {
            this.descriptionList[index] = this.recordList[index].description
          }
        })
      }else {
        axios(url, {
          cid: id,
          description: this.descriptionList[index]
        }, "get").then(res => {
          res = JSON.parse(res)
          if(res.status) {
            this.recordList[index].description = this.descriptionList[index]
          }else {
            this.descriptionList[index] = this.recordList[index].description
          }
        })
      }
    }
  },
  watch:{
    curPage: function(){
      this.getRecord(this.recordType)
    }
  },
  mounted() {
    this.getRecord('command')
  }
});