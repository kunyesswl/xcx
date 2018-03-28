var app = getApp();
Page({
  data: {
    servicedetail:{},
  },
  onLoad: function (options) {
    const i = options.id;
    this.setData({
      shopdetail:{
        "name":"广州市利远贸易有限公司",
        "city":"广州市",
		"address":"广州越秀区永福路45号利远广场7楼管理处",
		"no":"YY00100212",
        "imgurl":"http://img.mukewang.com/57fdecf80001fb0406000338-240-135.jpg"
      },
	  staffinfo:{
		  "role":"店长",
		  "id":"YG001001"
	  },
    //staffonlymenu: app.globalData.persiomsson
	staffonlymenu:[{"id":"5","icon":"./../../images/icon_38.png","url":"contractlist","text":"合同签署"},
	{"id":"1","icon":"./../../images/icon_35.png","url":"staffnoticelist","text":"公告列表"}
	,{"id":"6","icon":"./../../images/icon_32.png","url":"admpropertylist","text":"报修查看"}]
    })
    wx.setNavigationBarTitle({
      title: this.data.shopdetail.name
    })
  },

lookId:function(){
  wx.showModal({
    title: '小程序ID',
    content: app.globalData.openId,
    confirmText:'复制',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.setClipboardData({
          data: app.globalData.openId,
          success: function (res) {
            wx.showToast({
              title: '成功',
              icon: 'succes',
              duration: 1000,
              mask: true
            })
          }
        });
      }
    }
  })
}

})
