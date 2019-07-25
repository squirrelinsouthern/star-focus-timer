// const { http } = require('../../lib/http.js')
const { formatTimeSimple } = require('../../lib/util-simple.js')

Page({
  today: null,
  data: {
    show:false,
    contentList: [],
    index:"",
    turnOut:true,
    state: '',
    showModify: false,
    updateContent: "",
    updateId: '',
    updateIndex: '',
    bh: "",
    content:""
  },

// 初始渲染
  onShow(e){
    let todos = wx.getStorageSync('todos') || [];   // || []精髓啊
    this.data.contentList = todos //前后端关联起来
    this.setData({ contentList: this.data.contentList })

    let today = formatTimeSimple (new Date())
    this.setData({
      today: today
    })
    this.helloHi()
  },
  
// 创建待办 3操作
  createNew() {
    this.setData({ show: true })
  }, 

  xxxConfirm(e) {
    let todos = wx.getStorageSync('todos') || [];

    let content = e.detail
    this.setData({ content: this.data.content })
    let todo = {
      content: content,
      finished: false,
    }
    // console.log(todo)
    todos.push(todo);
    wx.setStorageSync('todos', todos);
    
    this.data.contentList = this.data.contentList.concat(todo)
    // console.log(this.data.contentList)
    this.setData({ contentList: this.data.contentList })
    this.setData({ show: false })
  },

  zzzCancel() {
    this.setData({show:false})
  },


// 删除列表
  delTodo(e) {
    let current = e.currentTarget.dataset.index //0
    let todos = wx.getStorageSync('todos') || []
    let remove = todos.splice(current, 1)[0]
    wx.setStorageSync('todos', todos)
    let delcontent = this.data.contentList.splice(current, 1)[0]
    this.setData({
      contentList: this.data.contentList
    });
  },


// 给item添加class
  addStyle(e){
    this.setData({
      state: e.currentTarget.dataset.key  //{ key: 1 }
    })
  },


// 改为完成class ,finished:true
  changeStatus(e){
    let current = e.currentTarget.dataset.index
    let todos = wx.getStorageSync('todos') || []
    let todo = todos[current]
    this.setData({
      contentList: this.data.contentList,
    })
    todo.finished = !todo.finished
    wx.setStorageSync('todos', todos)
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
  }else if (11 <= h && h <= 14) {
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






