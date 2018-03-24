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
	  staffonlymenu:[
        {
          'icon':'./../../images/icon_01.png',
          'text':'合同签署',
          'url':'contractlist'
        },
        {
          'icon':'./../../images/icon_25.png',
          'text':'商铺信息'
        },
        {
          'icon':'./../../images/icon_13.png',
          'text':'请假申请'
        },
		{
          'icon':'./../../images/icon_11.png',
          'text':'调班申请'
        },
		{
          'icon':'./../../images/icon_27.png',
          'text':'员工权限',
		  'url':'permissionlist'
        },
		{
          'icon':'./../../images/icon_27.png',
          'text':'公告发布',
		  'url':'permissionlist'
        },
		{
          'icon':'./../../images/icon_27.png',
          'text':'报修查询',
		  'url':'admpropertylist'
        },
		{
          'icon':'./../../images/icon_27.png',
          'text':'咨询查询',
		  'url':'admquestionlist'
        }
      ]
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
