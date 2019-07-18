const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData

Page({
  data: {
  },

  onShow() {
    // http.get('/todos')
  },
  
  login(event){
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    let code
    wx.login({
      success(res) {
        code = res.code
        console.log(code)
        console.log(app_id)
        http.post('/sign_in/mini_program_user', {
          code,
          iv,
          encrypted_data,
          app_id,
          app_secret,
        })
        .then(response => {
            wx.setStorageSync('me',response.data.resource)
        })
      }
    })
  
  }
  
})