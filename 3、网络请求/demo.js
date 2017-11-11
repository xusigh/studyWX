var app = getApp()
Page({
  data: {

  },
  onLoad: function (opt) {
    //console.log(opt.name)  
    app.func.req('/api/get_data', {}, function (res) {
      console.log(res)
    });
  }
})  