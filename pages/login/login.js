// const app = getApp()
const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData

Page({
  data: {
  },
  onShow() {
    http.get('/todos')
    // http.post('/sign_in/mini_program_user', {
    // })
  },
  
  login(event){
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    let code
    wx.login({
      success:(res) => {
        code = res.code
        http.post('/sign_in/mini_program_user', {
          code,
          iv,
          encrypted_data,
          app_id,
          app_secret,
        })
        .then(res => {
            console.log(res)
            wx.setStorageSync('me',res.response.data.resource)
            wx.setStorageSync('X-token', res.response.header['X-token'])
            wx.reLaunch({
              url: '/pages/timer/timer',
            })
        })
      }
    })
  }
  // login(e){
  //   wx.login({
  //     success:response=>this.onGetCode({ ...response, ...e.detail }),
  //     fail: error => this.onError(error)
  //   })
  // },
  // onGetCode({ code, encryptedData, iv}){
  //   http.post('/sign_in/mini_program_user', {
  //         code,
  //         iv,
  //         encrypted_data: encryptedData,
  //         app_id,
  //         app_secret,
  //       })
  //       .then(response => {
  //           me = response.data.resource
  //       })
  // }




  
})