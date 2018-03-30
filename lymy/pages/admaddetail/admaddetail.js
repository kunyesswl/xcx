var util = require('../../utils/util.js');
Page({
  data: {
	  id:"",
	  title:"",
	  uploadimgs:[], //上传图片列表
	  content:"",
	  createTime:"",
	  editAble:true,
	  isApplIndex:0,
	  startDate:util.formatDate(new Date()),
	  endDate:util.formatDate(new Date()),
	  isApplArray: ["启用", "禁用"]
  },
  onLoad: function (option) {
	this.setData({
		id:option.id?option.id:""
	});
    this.fetchData()
  },
  fetchData: function(){
	  var _this = this;
	 if(this.data.id){
		util.httppost("https://www.kunyesswl.com/wxspl/func/noticeDetail/",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="000"){
			  var _data = res.data.detail;
			  _this.setData({
				editAble:false,
				id:_data.id,
				title:_data.title,
				content:_data.content,
				createTime:_data.createTime,
				isApplIndex: isNaN(_data.isEnable)?0:parseInt(_data.isEnable),
				uploadimgs:_data.imgUrls
			}) 
		  }
	  });	
	}
  },
  onDelete: function(e){
	  const _this = this;
	  if(!_this.data.id) return ;//没有id 不做任何操作。
	  util.config("确定删除该公告吗？",function(){
		  console.log("删除了"+_this.data.id)
		  util.httppost("https://www.kunyesswl.com/wxspl/index/advertDel",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="000"){
        util.alertWindow("删除成功");
		  }else{
        util.alertWindowlose("删除失败");
		  }
	  });
	  });
  },
  bindSelect: function(e) {
	  this.setData({
		  isAboutIndex:e.detail.value
	  });
  },
  chooseImage:function() {
	let _this = this;
    util.chooseImage(function(res){
		_this.setData({
			uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
		});
	});
  },
  deleteImg:function(e){
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
	imgs.splice(e.currentTarget.dataset.index,1)
    this.setData({
      uploadimgs:imgs
    });
  },
  bindDayChange: function(e){ //下拉选择
	var type = e.currentTarget.dataset.type;
    switch (type) {
      case '1':
		this.setData({
			startDate:e.detail.value
		});
		break;
      case '2':
		this.setData({
			endDate:e.detail.value
		});
		break;
	}
  },
  formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	  if(data.title==""){
		  util.msg("请输入标题");
		  return;
	  }else if(_this.data.uploadimgs.length<1){
		  util.msg("请上传广告图片");
		  return;
	  }
	  var imageid=""
	  util.uploadFiles("https://www.kunyesswl.com/wxspl/uploadPhone.do",{phone:_this.data.uploadimgs[0]},_this.data.uploadimgs,function(sr){
		  console.log("success ");
		  console.log(sr);
		  var _srdata = util.str2json(sr.data)
		  if(_srdata.code=="000"){
			  imageid+=_srdata.id+","
		  }
	  },function(r){
		  console.log(r)
		  if(imageid.length>0){
			  imageid = imageid.substr(0,imageid.length-1);
		  }
		  data.phones =imageid;
		  util.httppost("https://www.kunyesswl.com/wxspl/index/submitAdvert",data,function(res){
			console.log(res);
		  if(res.data.code=="000"){
        util.alertWindow("提交成功");
		  }else{
        util.alertWindowlose("提交失败");
		  }
		  });
	  }); //上传图片同时提交表单信息 function(r) 为回调函数
  }
})
