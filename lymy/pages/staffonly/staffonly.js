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
          'text':'商铺信息',
          'url':'shoplist'
        },
        {
          'icon':'./../../images/icon_13.png',
          'text':'请假申请',
          'url':'apply'
        },
		{
          'icon':'./../../images/icon_11.png',
          'text':'调班申请',
          'url':'staffonly'
        }
      ]
    })
    wx.setNavigationBarTitle({
      title: this.data.shopdetail.name
    })
  }
})
