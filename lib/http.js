const { host } = getApp().globalData

const _http = (url,method,data) => {
  return new Promise((resolve,reject)=>{
    wx.request({
      data,
      method,
      dataType: 'json',
      url: `${host}${url}`,
      header: {
        Authorization:`Bearer ${wx.getStorageSync('X-token')}`,
        // "t-app-id": t_app_id,
        // "t-app-secret": t_app_secret
        "t-app-id": "SkWgamSkRoLoFJi7w9ruVt4M",
        "t-app-secret": "eqrSw7b8mcQSwoAuLTGFcx4f"
      },
      success: (response) => {
        let statusCode = response.statusCode
        if (statusCode >= 400){
          reject({ statusCode, response })
        }else{
          resolve({ statusCode, response })
        }
      },
      fail: (errors) => {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        })
        reject(errors)
      }
    })
  })
}

const http = {
  get: (url, params) => _http(url,"GET", params),
  post: (url, params) => _http(url, "POST", data),
  put: (url, params) => _http(url, "PUT", data),
  delete: (url, params) => _http(url, "DELETE", data)
}

module.exports = {
  http
}
