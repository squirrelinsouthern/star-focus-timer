Page({
  data: {
    dates: [{
        "data_name": "30",
        "name": "十三"
      },
      {
        "data_name": "1",
        "name": "十四"
      },
      {
        "data_name": "2",
        "name": "十五"
      },
      {
        "data_name": "3",
        "name": "十六"
      },
      {
        "data_name": "4",
        "name": "十七"
      },
      {
        "data_name": "5",
        "name": "十八"
      },
      {
        "data_name": "6",
        "name": "十九"
      },
      {
        "data_name": "7",
        "name": "二十"
      },
      {
        "data_name": "8",
        "name": "廿一"
      },
      {
        "data_name": "9",
        "name": "廿二"
      },
      {
        "data_name": "10",
        "name": "廿三"
      },
      {
        "data_name": "11",
        "name": "廿四"
      },
      {
        "data_name": "12",
        "name": "廿五"
      },
      {
        "data_name": "13",
        "name": "廿六"
      },
      {
        "data_name": "14",
        "name": "廿七"
      }
    ],
    state: ''
  },
  //选择日期后加样式  
  select_date: function(e) {
    console.log(e.currentTarget.dataset)
    this.setData({
      state: e.currentTarget.dataset.key,
    });
  },
})