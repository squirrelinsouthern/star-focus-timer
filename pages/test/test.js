// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finish:true
  },

  changeColor(){
    this.setData({
      finish:!this.data.finish
    })
  },

  
  changeColor2() {
    this.setData({ condition: !this.data.condition })
  }


})