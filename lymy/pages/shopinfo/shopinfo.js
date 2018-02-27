Page({
  data: {
    servicedetail:{},
  },
  onLoad: function (options) {
    const i = options.id;
    this.setData({
      servicedetail:{
        "name":"广州利远贸易"+i,
        "city":"广州",
        "tag":"物业管理",
        "imgurl":"http://img.mukewang.com/57fdecf80001fb0406000338-240-135.jpg"
      }
    })
    wx.setNavigationBarTitle({
      title: this.data.servicedetail.name
    })
  }
})
