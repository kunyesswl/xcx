var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
	  id:"",
	  type:"",
	  isAggree:[{"id":"0","text":"同意"},{"id":"1","text":"不同意"}],
	  isAggreeIndex:0,
	  obj:{},
	  detailurl:{"0":"selectLeaveById","1":"func/repairDetail","2":"func/complaintsDetail"},
	  apprurl:{"0":"approvalLeave","1":"func/approvalProperty","2":"func/approvalQuestion"},
	  openid:app.globalData.openId
  },
  onLoad: function (option) {
	  console.log(option);
	this.setData({
		id:option.id?option.id:"",
		type:option.type?option.type:""
	});
    this.fetchData()
  },
  fetchData: function(){
	  var _this = this;
	 if(this.data.id){
		var durl = this.data.detailurl[this.data.type]
		util.httppost("https://www.kunyesswl.com/"+durl,{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="000"){
			  var _data = res.data.detail;
			  _this.setData({
				  obj:_data,
				isApplIndex: isNaN(_data.leaveOff)?0:parseInt(_data.leaveOff)
			}) 
		  }
	  });	
	}
  },
  bindSelect: function(e) {
	  this.setData({
		  isAggreeIndex:e.detail.value
	  });
  },
  formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	  
	 var aurl = this.data.apprurl[this.data.type]
	util.httppost("https://www.kunyesswl.com/wxspl/"+aurl,data,function(res){
		console.log(res);
	  if(res.data.code=="000"){
			util.alertWindow("审批成功","admapprovallist");
		  }else{
			util.alertWindowlose("审批失败");
		  }
	  });
  }
})
