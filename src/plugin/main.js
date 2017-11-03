import axios from '@/plugin/axios'
import Vue from 'vue'

let tip = new Vue({})

export default {
  get_list(obj){
    let p = obj.list.current || 1
    let rows = obj.list.rows || 10
    axios.get(obj.url).then(res=>{
      if(res.data.errcode=='0'){
        let res_data = res.data.data
        if(typeof obj.callback === 'function') {
          obj.callback(res.data, obj.model)
        }else {
          obj.list.data = []
          for(let key in res_data) {
            obj.list.data.push(new obj.model(res_data[key]))
          }
          if(typeof obj.resultCallback === 'function') {
            obj.resultCallback(obj.list, obj.model)
          }
        }
        obj.list.pages = res.data && res.data.page && res.data.page.total_pages ? res.data.page.total_pages : 1
      }else{
        tip.$messagebox.alert(res.data.msg)
      }
    }).catch(err=>{
      console.log(err)
    })
  },
  GetQueryString(name,data) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    data = data||''
    let r = window.location.hash.replace(`#/${data}?`, '').match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}
