Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
  },
  data:{
    value:''
  },
  methods:{
    confirm(){
      this.triggerEvent('onconfirm', this.data.value)
    },
    cancel(){
      this.triggerEvent('oncancel', this.data.value)
    },
    watchValue(e){
      this.data.value = e.detail.value
    }
  }
  
})