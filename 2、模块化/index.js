var check = require('../../utils/check.js');
Page({
  data:{
    userinfo:{
      id: 110,
      username: "Nike"
    }
  },
  clickTap:function(e){
    var name = this.data.userinfo.username;
    check.sayHi(name);
    check.sayNo();
  }
})