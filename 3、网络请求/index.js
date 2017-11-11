Page({
  data:{
    info:"",
    info2:""
  },
  onLoad:function(e){
    var that = this;
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log("网络请求成功");
        console.log(res);
        //console.log(res.data);             //开发者服务器返回的数据
        //console.log(res.statusCode);       //开发者服务器返回的 HTTP 状态码
        //console.log(res.header);           //开发者服务器返回的 HTTP Response Header
        var data = res.data.data;
        if(res.statusCode == 200){
          that.setData({
            info: data
          })
        }else{
          console.log("数据返回错误，状态码："+res.statusCode);
        }
      },
      fail:function(res){
        console.log("网络请求失败");
      },
      complete:function(res){
        console.log("网络请求动作完成");
      }
    });
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
      method: 'POST',
      data: {},
      header:{"Content-Type": "application/x-www-form-urlencoded"},
      success: function (res) {
        console.log("网络请求成功");
        console.log(res);
        //console.log(res.data);             //开发者服务器返回的数据
        //console.log(res.statusCode);       //开发者服务器返回的 HTTP 状态码
        //console.log(res.header);           //开发者服务器返回的 HTTP Response Header
        var data = res.data.data;
        if (res.statusCode == 200) {
          that.setData({
            info2: data
          })
        } else {
          console.log("数据返回错误，状态码：" + res.statusCode);
        }
      },
      fail: function (res) {
        console.log("网络请求失败");
      },
      complete: function (res) {
        console.log("网络请求动作完成");
      }
    });
  }
})