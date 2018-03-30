var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
	  id:"",
	  openid:app.globalData.openId,
	  apprAble:false,
	  title:"",
	  content:"",
	  contactor:"",
	  shopcode:"",
	  approval_status:"",
	  approver:"",
	  approval_content:"",
	  approvalObj:{"0":"待审批","1":"已审批","2":"已退回"},
	  imgs:[],
	  mobile:""
  },
  onLoad: function (option) {
	 console.log(option)
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
	 util.httppost("https://www.kunyesswl.com/wxspl/func/complaintsDetail/",{id:_id},function(res){
		  console.log(res);
			if(res.data.code=="000"){
			var detail = res.data.detail;
			_this.setData({
				id:detail.id,
				title:detail.title,
				content:detail.content,
				contactor:detail.contactor,
				imgs:detail.imgUrls,
				shopcode:detail.shopCode,
				mobile:detail.mobile,
				approval_status:_this.data.approvalObj[detail.approval_status],
				apprAble:detail.approval_status=="0",
				approver:detail.approver,
				approval_content:detail.approval_content
			});
		}
	});
  },
  formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	util.httppost("https://www.kunyesswl.com/wxspl/submitQuestion",data,function(res){
		console.log(res);
	  if(res.data.code=="000"){
			util.alertWindow("提交成功");
		  }else{
			util.alertWindowlose("提交失败");
		  }
	  });
  }
})
