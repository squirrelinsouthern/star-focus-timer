Page({
  data: {
    choose:"history",
    lists:{
      "本周四":[
        { time: "14:00", text: "规范化发过fdg", id: 3 },
        { time: "15:00", text: "公司发的fdg", id: 1 }
      ],
      "本周五": [
        { time: "11:00", text: "多个地方是个梵蒂冈d多个地方是个梵蒂地方是个梵蒂冈", id: 4 },
        { time: "14:00", text: "斧反倒是规范化就和你", id: 1 },
        { time: "14:00", text: "斧反倒是规范化就和你", id: 1 },
        { time: "14:00", text: "斧反倒是规范化就和你", id: 1 }
      ],
      "本周日": [
        { time: "04:00", text: "多擦个梵蒂冈", id: 4 },
        { time: "14:00", text: "斧反的广泛地你g", id: 1 }
      ]
    }
  },
  changeButton(e){
   console.log(e.currentTarget.dataset.name)
    this.setData({ choose: e.currentTarget.dataset.name})
  }


})