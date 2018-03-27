var WxParse = require('../../wxParse/wxParse.js');
var cc = require('contracthtml.js');
Page({
  data: {
    spacedata:{},
    spaceimgs:[],
    currentIndex:1,
	contractdata:["利远广场合同","利远分场合同"]
  },
  onLoad: function (options) {

	WxParse.wxParse('contract_content', 'html', cc.contract_gc, this, 5);
    this.setData({
    });
    wx.setNavigationBarTitle({
      title: this.data.contractdata[options._type]
    });
  },
  reserveHandle: function(){
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  }
  // formateNumber:function(n){
  //   return n>9?n:'0'+n
  // }
})
