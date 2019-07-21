Component({
  properties: {  //入口
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
    value:{
      type:String,
      value: ""
    }
  },
  data:{
    _value: ''  //出口
  },
  lifetimes: {
    attached() {
      if (this.properties.value){
        this.properties.value = this.data._value
      }
    }
  },
  methods:{
    confirm(){
      this.triggerEvent('onconfirm', this.data._value)
    },
    cancel(){
      this.triggerEvent('oncancel', this.data._value)
    },
    //监听输入内容
    watchValue(e){
      this.data._value = e.detail.value
    }
  }
  
})