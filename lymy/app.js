//app.js
App({
  onLaunch: function () {
    //小程序初始化完成只执行一次
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
	  this.getUserInfo();
  },
  onShow: function(){
    //启动小程序或者从后台进入前台
  },
  onHide: function(){
    //从前台进入后台
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (req) {
          var code = req.code;
          wx.getUserInfo({
            success: function (r1) {
				 wx.request({  
           url: 'https://www.kunyesswl.com/wxspl/getOpenId', 
           header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
           data: { code: code, encryptedData:r1.encryptedData,iv:r1.iv },
           method: 'POST',
				  success: function(res) {  
          //that.globalData.openId = res.data.openId;
					wx.request({
					  url: "https://www.kunyesswl.com/wxspl/selectEmployeePower",  
					  header: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
					  data: {openid:res.data.openId},  
					  method: 'POST',  
					  success:function(r2) {
              wx.request({
                url: "https://www.kunyesswl.com/wxspl/saveAccessUser",
                header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
                data: { 
                  openid: res.data.openId,
                  headUrl: r1.userInfo.avatarUrl,
                  nickName: r1.userInfo.nickName,
                  mobile:""
                 },
                method: 'POST',
                success: function (r3) {
                },
                fail: function (r3) {
                }
              });
            if (r2.data.code=="0"){
              if(!r2.data.data){
                
              }else{
                that.globalData.persiomsson = r2.data.data;
              }

              

						  }else{
							   
						  }
					  },  
					  fail:function(r2){
						  
					  }
					});  
				  }  
				})
              that.globalData.userInfo = r1.userInfo
			  console.log(r1.userInfo)
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    //全局信息
    userInfo:null,
    openId:"openidtest123",
    persiomsson: []
  }
})