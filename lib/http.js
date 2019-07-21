const { host, t_app_id, t_app_secret } = getApp().globalData

const _http = (url,method,data) => {
  return new Promise((resolve,reject) => {
    // console.log(method)
    wx.request({
      data,
      method,
      dataType: 'json',
      url: `${host}${url}`,
      header: {
        Authorization:`Bearer ${wx.getStorageSync('X-token')}`,
        "t-app-id": t_app_id,
        "t-app-secret": t_app_secret
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
  post: (url, params) => _http(url, "POST", params),
  // put: (url, params) => _http(url, "PUT", params),
  put: (url, data) => _http(url, "PUT", data),
  delete: (url, params) => _http(url, "DELETE", data)
}

module.exports = {
  http
}
