var util = require('../../utils/util.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:"",
	  creator:"",
	  creatTime:"",
	  imgs:[]
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
	  var _this = this;
	 if(this.data.id){
		util.httppost("https://www.kunyesswl.com/wxspl/func/noticeDetail/",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="000"){
			  var _data = res.data.detail;
			  _this.setData({
				id:_data.id,
				title:_data.title,
				content:_data.content,
				creator:_data.creator,
				creatTime:_data.createTime,
				//creator:"创建人1",
				//creatTime:"2018-03-01",
				imgs:_data.imgUrls
			}) 
		  }
	  });	
	}
  }
})
