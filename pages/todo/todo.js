const { http } = require('../../lib/http.js')

Page({
  data: {
    show:false,
    contentList:[],
    index:"",
    turnOut:true,
    state: ''
  },


  // 创建待办  
  createNew(){
    this.setData({ show: true })
  },

  onShow(e){
    http.get('/todos?completed=false').then((res)=>{
      console.log(res.response.data.resources)
      this.setData({ contentList: res.response.data.resources})
    })
    // http.get('/todos').then((res) => {
    //   console.log(res.response.data.resources)
    //   this.setData({ contentList: res.response.data.resources })
    // })
  },
  
  // 确定按钮 接口params: { description: "" }
  xxxConfirm(event) {
    let content = event.detail
    if (content) {  //最后在外层判断
      http.post('/todos', {
        description: content
      })
      .then((res) => {
        // console.log(res)
        let saveContent = {
          id: res.response.data.resource.id,
          description: res.response.data.resource.description,
          completed: res.response.data.resource.completed
        }
        this.data.contentList = this.data.contentList.concat(saveContent)
        this.setData({ contentList: this.data.contentList })
        this.setData({ show: false })
      })
    }
  },

  zzzCancel() {
    this.setData({show:false})
  },


  // 隐藏一个列表
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


  // class="item {{state===index?'active-tag':''}">
  aaa(e){
    let state = e.currentTarget.dataset.xxx
    console.log(e.currentTarget)
    this.setData({
      state: e.currentTarget.dataset.key
      })
  }
  
})