var util = require('../../utils/util.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:""
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
				id:_data.id,
				title:_data.title,
				content:_data.content
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
		  util.httppost("https://www.kunyesswl.com/wxspl/func/noticeDel/",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="0"){
			  util.msg("删除成功","success",function(){
				  wx.navigateTo({
				  url: '../admnoticelist/admnoticelist'
				})
			  }); 
		  }else{
			  util.msg("删除失败");
		  }
	  });
	  });
  },
  formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	  if(data.title==""){
		  util.msg("请输入标题");
		  return;
	  }else if(data.content==""){
		  util.msg("请输入公告内容");
		  return;
	  }
	  util.httppost("https://www.kunyesswl.com/wxspl/func/sendNotice/",data,function(res){
		  console.log(res);
		  if(res.data.code=="000"){
			  util.msg("提交成功","success",function(){
				   wx.navigateTo({
				  url: '../admnoticelist/admnoticelist'
				});
			  });
		  }else{
			  util.msg("提交失败");
		  }
	  });
	  console.log(data);
  }
})
