import axios from 'axios'

let service = axios.create({
  headers: {}
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Accept-Language'] = store.state.language
  if(localStorage.getItem('AccessToken')){
    config.headers['AccessToken'] = localStorage.getItem('AccessToken')
    if (localStorage.getItem('userId') ){
      config.headers['Authorization'] = localStorage.getItem('userId')
    }
  }else{
    config.headers['RequestToken'] = store.state.accessToken.RequestToken
    config.headers['ClientType'] = store.state.accessToken.ClientType
    config.headers['ClientId'] = store.state.accessToken.ClientId
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const AppId = 'swisstimevip';
  const AppSecret = '469d8b353e271ea4750793fb656cc331d8fd6bc1';
  const ClientType = 3;
  let ClientId;
  let AppDigest;
  let TokenHeaders;
  if(response.data.errcode=='40001'){
    //如果token过期重新请求
    AppDigest   = SHA1(AppId + AppSecret);
    ClientId    = SHA1(new Date().getTime() + Math.floor(Math.random()*9999));
    TokenHeaders = {'RequestToken': AppDigest, 'ClientType':ClientType, 'ClientId':ClientId};
    //如果没有accessToken请求一次
    store.state.accessToken = TokenHeaders
    this.$http.get(`${process.env.API.USER}/login`).then(item=>{
      if(item.data.errcode=='0'){
        let accessToken = res.data.AccessToken
        localStorage.setItem('AccessToken',res.data.AccessToken)
        TokenHeaders = {'AccessToken': accessToken};
      }if(item.data.errcode=='40004'){
        localStorage.removeItem('userId')
        window.location.href = `${process.env.URL.USER}/#/login`
      }
    }).catch(err=>{
      console.log(err)
    })
  }else if(response.data.errcode=='40004'){
    localStorage.removeItem('userId')
    window.location.href = `${process.env.URL.USER}/#/login`
  }else if(response.data.errcode=='40023'){
    localStorage.removeItem('userId')
    window.location.href = `${process.env.URL.USER}/#/login`
  }
  store.state.accessToken = TokenHeaders
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
