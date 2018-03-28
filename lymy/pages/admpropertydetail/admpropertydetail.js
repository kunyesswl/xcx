var util = require('../../utils/util.js');
var comm = require('../../utils/comm.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:"",
	  shopcode:"",
	  username:"",
	  description:"",
	  imgs:[],
	  mobile:""
  },
  onLoad: function (option) {
	this.setData({
		id:option.id?option.id:""
	});
    this.fetchData()
  },
  //图片点击事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  fetchData: function(){
	  var _id = this.data.id;
	  var _this = this;
		util.httppost("https://www.kunyesswl.com/wxspl/func/repairDetail/",{id:_id},function(res){
		  console.log(res);
			if(res.data.code=="000"){
			var detail = res.data.detail;
			_this.setData({
				id:detail.id,
				title:detail.title,
				content:detail.content,
				shopcode:detail.shopCode,
				imgs:detail.imgUrls,
				username:detail.username,
				description:detail.rDescription,
				mobile:detail.mobile
			});
		   }
		});
  }
})
