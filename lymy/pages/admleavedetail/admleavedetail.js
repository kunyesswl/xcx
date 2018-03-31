var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
	  title:"",
	  content:"",
	  createTime:"",
	  editAble:true,
	  isApplIndex:0,
	  days:0,
	  leaveOff:"",
	  startDate:util.formatDate(new Date()),
    endDate: util.formatDate(new Date()),
	  openid:app.globalData.openId,
	  approvalObj:{"0":"待审批","1":"已审批","2":"已退回"},
	  approver:"",
	  approvalContent:"",
	  approval_status:"",
	  isApplArray: [{"id":"0","text":"年假"},{"id":"1","text":"事假"},{"id":"2","text":"病假"},{"id":"3","text":"调休"},{"id":"4","text":"产假"},{"id":"5","text":"陪产假"},{"id":"6","text":"婚假"},{"id":"7","text":"例假"},{"id":"8","text":"丧假"}],
	  isApplObj:{"0":"年假","1":"事假","2":"病假","3":"调休","4":"产假","5":"陪产假","6":"婚假","7":"例假","8":"丧假"}
  },
  onLoad: function (option) {
	this.setData({
    openid:app.globalData.openId,
		id:option.id?option.id:""
	});
    this.fetchData()
  },
  fetchData: function(){
	  var _this = this;
	 if(this.data.id){
		util.httppost("https://www.kunyesswl.com/wxspl/selectLeaveById",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="0"){
			  var _data = res.data.data[0];
			  _this.setData({
				editAble:_data.approval_status=="0",
				id:_data.id,
				title:_data.title,
				content:_data.content,
				days:_data.days,
				startTime:_data.startTime,
				endTime:_data.endTime,
        leaveOff: _this.data.isApplObj[_data.leaveOff],
				approver:_data.approver,
        approvalContent: _data.approverContent,
        approval_status: _this.data.approvalObj[_data.approvalStatus],
				createTime:_data.createTime,
				isApplIndex: isNaN(_data.leaveOff)?0:parseInt(_data.leaveOff)
			}) 
		  }
	  });	
	}
  },
  onDelete: function(e){
	  const _this = this;
	  if(!_this.data.id) return ;//没有id 不做任何操作。
	  util.config("确定删除该申请吗？",function(){
		  console.log("删除了"+_this.data.id)
		  util.httppost("https://www.kunyesswl.com/wxspl/deleteLeave",{id:_this.data.id},function(res){
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
		  isApplIndex:e.detail.value
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
  onCancel: function(e){
	  const _this = this;
	  if(!_this.data.id) return ;//没有id 不做任何操作。
	  util.config("确定撤销该申请吗？",function(){
		  console.log("撤销了"+_this.data.id)
		  util.httppost("https://www.kunyesswl.com/wxspl/revokeLeave",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="000"){
			util.alertWindow("撤销成功","admleavelist");
			
		  }else{
			util.alertWindowlose("撤销失败");
		  }
	  });
	  });
  },
  formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	  if(data.content==""){
		  util.msg("请输入请假事由");
		  return;
	  }
	util.httppost("https://www.kunyesswl.com/wxspl/applicationLeave",data,function(res){
		console.log(res);
	  if(res.data.code=="000"){
			util.alertWindow("提交成功","admleavelist");
		  }else{
			util.alertWindowlose("提交失败");
		  }
	  });
  }
})
