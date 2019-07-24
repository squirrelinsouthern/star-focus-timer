const { http } = require('../../lib/http.js')
const { formatTimeSimple } = require('../../lib/util-simple.js')

Page({
  today: null,
  data: {
    show:false,
    contentList:[],
    index:"",
    turnOut:true,
    state: '',
    showModify: false,
    updateContent: "",
    updateId: '',
    updateIndex: '',
    bh: "",


  },

// 初始渲染
  onShow(e){
    http.get('/todos?completed=false').then((res)=>{
      console.log(res.response.data.resources)
      this.setData({ contentList: res.response.data.resources})
    })
    var today = formatTimeSimple (new Date())
    this.setData({
      today: today
    })
    this.helloHi()
  },
  
// 创建待办 3操作
  createNew() {
    this.setData({ show: true })
  }, 

  xxxConfirm(event) {
    let content = event.detail
    if (content) {  //最后在外层判断
      http.post('/todos', {
        description: content
      })
      .then((res) => {
        // console.log(res)
        let saveContent = [res.response.data.resource]
        this.data.contentList = saveContent.concat(this.data.contentList)
        this.setData({ contentList: this.data.contentList })
        this.setData({ show: false })
      })
    }
  },

  zzzCancel() {
    this.setData({show:false})
  },


// 隐藏一行列表
  hideTodo(e) {
    let current = e.currentTarget.dataset.index //0
    let id = e.currentTarget.dataset.id         //4201 
    http.put(`/todos/${id}`, { completed: true })
      .then((res) => {
        // console.log(res)
        let statusTodo = res.response.data.resource
        this.data.contentList[current] = statusTodo
        this.setData({ contentList: this.data.contentList })
      })    
    // this.data.contentList[current].completed = true
    // let newDelList = this.data.contentList.splice(current,1)
    // this.setData({ contentList: this.data.contentList})
  },

// 给列表添加样式
  addStyle(e){
    this.setData({
      state: e.currentTarget.dataset.key
    })
  },


// 修改文字内容 3操作
  modifyAgain(e){
    let { content, id, index } = e.currentTarget.dataset
    this.updateId = id
    this.updatIndex = index
    this.setData({ showModify: true, updateContent: content })
  },

  againConfirm(event){
    console.log(event)
    let content = event.detail  //吃什么
    if (content){
      http.put(`/todos/${this.updateId}`, {
        completed: false,
        description: content
    })
      .then((res) => {
        console.log(res)
        let newObj = res.response.data.resource
        this.data.contentList[this.updatIndex] = newObj
        this.setData({ contentList: this.data.contentList })
        this.setData({ showModify: false })
      })
    }
    
  },

  againCancel(){
    this.setData({ showModify: false })
  },
  


helloHi(options) {
  var that = this;
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  // console.log("当前时间戳为：" + timestamp);
  //获取当前时间
  var n = timestamp * 1000;
  var date = new Date(n);
  //获取时
  var h = date.getHours();
  console.log("现在的时间是" + h + "点")

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






