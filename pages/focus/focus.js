// pages/focus/focus.js
Page({
  data: {
    hello:"计时中",
    totalSecond: 5,
    formatTime: "",
    timer: null,
    timeStatus: "stop",
    spinStatus: true,
    againView: false
  },
  onShow: function () {
    this.countDown()
  },
  countDown(){
    this.setData({ timeStatus: "start" }) 
    this.setData({ spinStatus: true }) 
    this.setData({ hello: "计时中" }) 
    this.changeTime()  //需要先渲染一遍 不然有问题
    this.timer = setInterval(() => {
      if (this.data.totalSecond <= 1) {
        this.stopTime()
        this.setData({ againView: true })
        this.setData({ hello: "Well done! my friend ~" })
      }
      this.data.totalSecond = this.data.totalSecond - 1
      this.changeTime()
    }, 1000)
  },
  stopTime(){
    clearInterval(this.timer)
    this.timer = null,
    this.setData({ timeStatus: "stop" }) 
    this.setData({ hello: "已暂停" }) 
    this.setData({ spinStatus: false }) 
  },
  againCount(){
    // this.setData({ totalSecond: 1500 })
    this.data.totalSecond = 1500
    this.setData({ againView: false })
    this.countDown()
  },
  changeTime(){
    let m = Math.floor(this.data.totalSecond/60)
    let s = Math.floor(this.data.totalSecond%60)
    if(s===0){
      s = "00"
    }
    if((s+"").length===1){
      s = "0" + s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }
    this.setData({ timer: `${m}:${s}`}) 
  },
  abandonTime(){
    wx.navigateBack({
      to: -1,
    })
  }



})