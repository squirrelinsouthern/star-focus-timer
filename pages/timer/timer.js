const { formatTimeSimple } = require('../../lib/util-simple.js')

Page({
  data: {
    bh: "",
    content: ""
  },

  // 初始渲染
  onShow(e) {
    let today = formatTimeSimple(new Date())
    this.setData({
      today: today
    })
    this.helloHi()
  },

  helloHi(options) {
    let that = this;
    let timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);
    //获取当前时间
    let n = timestamp * 1000;
    let date = new Date(n);
    //获取时
    let h = date.getHours();
    if (0 < h && h <= 6) {
      that.setData({
        bh: '晚上好!'
      })
    } else if (6 <= h && h < 8) {
      that.setData({
        bh: '早上好!'
      })
    }
    else if (8 <= h && h <= 11) {
      that.setData({
        bh: '上午好!'
      })
    } else if (11 <= h && h <= 14) {
      that.setData({
        bh: '中午好！'
      })
    } else if (14 <= h && h <= 16) {
      that.setData({
        bh: '下午好!'
      })
    }
    else if (16 <= h && h <= 24) {
      that.setData({
        bh: '晚上好!'
      })
    }
    else {
      that.setData({
        bh: '晚上好!'
      })
    }
  },



})