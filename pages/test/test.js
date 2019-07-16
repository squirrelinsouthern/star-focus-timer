// pages/test/test.js
Page({

  data: {
    message:'你好丫丫',
    condition:true,
    array: [1, 2, 3, 4, 5],
    arr:[{
      id:1,
      text: 'hello1'
    },{
      id: 2,
      text: 'hello2'
    }, {
      id: 3,
      text: 'hello3'
    }],
    obj:{
      name:'apple',
      age: 2
    },
    animation: ''
  },

  reverseText(){
    this.setData({message:this.data.message.split('').reverse().join('')})
  },
  ageIncrease(){
    // this.setData({age:3})注意改变对象值的写法
    this.setData({"obj.age":this.data.obj.age+1})
  },
  changeColor(){
    this.setData({ condition: !this.data.condition})
  },
  onShow: function () {
    this.setData({message:'大南瓜瓜'})
  },

  
})