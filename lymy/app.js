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
				console.log("user info : ");
				console.log(r1);
				 wx.request({  
           url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxd6664994d418b5d5&secret=819e21505c50447d3a498f5bd71d09e4&js_code=' + code + '&grant_type=authorization_code',  
				  header: {  
					  'content-type': 'application/json'  
				  },  
				  success: function(res) {  
          that.globalData.openId = res.data.openid;
					wx.request({
					  url: "https://www.kunyesswl.com/wxspl/selectEmployeePower",  
					  header: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
					  data: {openid:res.data.openid},  
					  method: 'POST',  
					  success:function(r2) {
              wx.request({
                url: "https://www.kunyesswl.com/wxspl/saveAccessUser",
                header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
                data: { 
                  openid: res.data.openid,
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

              
                if (this.employIdCallback) {
                  this.employIdCallback(employId);
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
    openId:null,
    persiomsson: []
  }
})