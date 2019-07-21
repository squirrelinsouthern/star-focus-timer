const {http} = require('../../lib/http.js')

Page({
  data: {
    choose:"history",
    history:{},
    tomato:{}
  },

   onShow(){
     this.fetchHistory()
     this.fetchTomato()
   },

  fetchHistory(event){
     http.get('/todos', { is_group: "yes" }).then((res) => {
       console.log(res)
       this.setData({ history: res.response.data.resources })
     })
   },
  fetchTomato(event) {
    http.get('/tomatoes', { is_group: "yes" }).then((res) => {
      console.log(res)
      this.setData({ tomatoe: res.response.data.resources })
    })
  },





//按钮切换
  changeButton(e){
    this.setData({ choose: e.currentTarget.dataset.name})
  }


})