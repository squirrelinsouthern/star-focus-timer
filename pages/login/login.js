Page({
  data: {
    avatar: '',
    name: ''
  },

  onShow() {
    
  },
  
  navTo(){
    wx.reLaunch({
      url: '/pages/timer/timer',
    })
  }
  
})

