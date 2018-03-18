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
        success: function () {
          wx.getUserInfo({
            success: function (r1) {
				console.log("user info : ");
				console.log(r1);
				 wx.request({  
				  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx58f70447cc29e783&secret=0afe36dace22f9cc42d2c6459765c30c&grant_type=authorization_code&js_code='+r1.code,  
				  header: {  
					  'content-type': 'application/json'  
				  },  
				  success: function(res) {  
					console.log(res.data.openid) //获取openid  
					wx.request({  
					  url: "https://www.kunyesswl.com/wxspl/selectEmployeePower",  
					  header: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
					  data: {openid:res.data.openid},  
					  method: 'POST',  
					  success:function(r2) {  
						console.log(r2)
						 if(res.data.code=="0"){
							  r1.userInfo.permissions = res.data.data;
						  }else{
							   r1.userInfo.permissions =[ {"id":1,"text":"合同签署","checked":0},{"id":2,"text":"请假","checked":0},{"id":3,"text":"调休","checked":0},{"id":4,"text":"商铺信息","checked":0},{"id":5,"text":"员工权限","checked":0}];
							   r1.userInfo.openid="openid1239102412";
						  }
					  },  
					  fail:function(r2){
						  r1.userInfo.permissions =[ {"id":1,"text":"合同签署","checked":0},{"id":2,"text":"请假","checked":0},{"id":3,"text":"调休","checked":0},{"id":4,"text":"商铺信息","checked":0},{"id":5,"text":"员工权限","checked":0}];
						  r1.userInfo.openid="openid1239102412";
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
    userInfo:null
  }
})