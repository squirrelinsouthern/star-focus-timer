const { http } = require('../../lib/http.js')

Page({
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
  },

// 初始渲染
  onShow(e){
    http.get('/todos?completed=false').then((res)=>{
      console.log(res.response.data.resources)
      this.setData({ contentList: res.response.data.resources})
    })
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
  }
  
})