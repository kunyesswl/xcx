//index.js
//获取应用实例
var util = require('../../utils/util.js');
var app = getApp();
var a = app.globalData.persiomsson;
Page({
  data: {
    indexmenu:[],
    imgUrls: []
  },
  onLoad:function(){
    //生命周期函数--监听页面加载
    this.fetchData();
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  fetchData:function(){
    var _this = this;
    util.httppost("https://www.kunyesswl.com/wxspl/index/advertQuery/", {}, function (res) {
      console.log(res);
      if (res.data.code == "000") {
        var _data = res.data.list;
        _this.setData({
          indexmenu: [
            {
              'icon': './../../images/icon_35.png',
              'text': '通知公告',
              'url': 'noticelist'
            },
            {
              'icon': './../../images/icon_36.png',
              'text': '报事报修',
              'url': 'property'
            },
            {
              'icon': './../../images/icon_32.png',
              'text': '投诉建议',
              'url': 'question'
            },
            {
              'icon': './../../images/icon_42.png',
              'text': '费用查询',
            }
          ],
          imgUrls: _data
        })
      } else {
        _this.setData({
          indexmenu: [
            {
              'icon': './../../images/icon_35.png',
              'text': '通知公告',
              'url': 'noticelist'
            },
            {
              'icon': './../../images/icon_36.png',
              'text': '报事报修',
              'url': 'property'
            },
            {
              'icon': './../../images/icon_32.png',
              'text': '投诉建议',
              'url': 'question'
            },
            {
              'icon': './../../images/icon_42.png',
              'text': '费用查询',
            }
          ],
          imgUrls: [
            '../../images/gg1.jpg',
            '../../images/gg2.jpg',
            '../../images/gg3.jpg'
          ]
        })
      }
    });
  },
  changeRoute:function(url){
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  },
  onReady:function(){
    //生命周期函数--监听页面初次渲染完成
    // console.log('onReady');
  },
  onShow :function(){
    //生命周期函数--监听页面显示
    // console.log('onShow');
  },
  onHide :function(){
    //生命周期函数--监听页面隐藏
    // console.log('onHide');
  },
  onUnload :function(){
    //生命周期函数--监听页面卸载
    // console.log('onUnload');
  },
  onPullDownRefresh:function(){
    //页面相关事件处理函数--监听用户下拉动作
    // console.log('onPullDownRefresh');
  },
  onReachBottom:function(){
    //页面上拉触底事件的处理函数
    // console.log('onReachBottom');
  }
})
