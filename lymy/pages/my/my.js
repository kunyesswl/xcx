//index.js
//获取应用实例
var app = getApp();
var a = app.globalData.persiomsson;
Page({
  data: {
    indexmenu: [],
    imgUrls: []
  },
  onLoad: function () {
    //生命周期函数--监听页面加载
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  
  employeeChannel:function(){
    wx.navigateTo({
      url: "/pages/staffonly/staffonly"

    })
  },
  onReady: function () {
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow: function () {
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide: function () {
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload: function () {
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh: function () {
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom: function () {
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
