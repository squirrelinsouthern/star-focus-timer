Page({
  data: {
    show:false,
    contentList:[
      { id: 1, text: "完成一本书", finished: true },
      { id: 2, text: "买鸡蛋、面包、牛奶买鸡蛋、面包、牛奶买鸡蛋、牛奶", finished: true },
      { id: 3, text: "开发票", finished: false },
      { id: 4, text: "买尿布", finished: false },
      { id: 5, text: "写代码", finished: true },
      { id: 1, text: "完成一本书", finished: true },
      { id: 2, text: "买鸡蛋、面包、牛奶买鸡蛋、牛奶买鸡蛋、面包、牛奶", finished: true },
      { id: 3, text: "开发票", finished: true }
    ],
    index:"",
    leftCount:1
  },
  new(){
    this.setData({ show: true })
  },

  xxx(event) {
    let newTodo = { id: this.data.contentList.length + 1, text: event.detail, finished:false }
    if(newTodo){
      this.data.contentList = this.data.contentList.concat(newTodo)
      this.setData({ contentList: this.data.contentList})
    }
    this.setData({ show: false })
  },
  zzz() {
    this.setData({show:false})
  },

  changeCheck(event){
    let index = event.currentTarget.dataset.index
    // console.log(index)
    this.data.contentList[index].finished = !this.data.contentList[index].finished
    this.setData({ contentList: this.data.contentList})
  },
  
  removeTodo(e) {
    let indexdel = e.currentTarget.dataset.indexdel
    console.log(indexdel)
    let newDelList = this.data.contentList.splice(indexdel,1)
    this.setData({ contentList: this.data.contentList})
  },
  
})