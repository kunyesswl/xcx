var util = require('../../utils/util.js');
var comm = require('../../utils/comm.js');
Page({
  data: {
	  id:"",
	  openid:"",
	  userName:"",
	  mobile:"",
	  peritems:[],
	  perindex:{}
  },
  onLoad: function (option) {
	this.setData({
		id:option.id?option.id:""
	});
    this.fetchData()
  },
  fetchData: function(){
	  var _this = this;
	  var allPers=comm.getAllPermission();
	  var indexs = {};
	  for(var i=0;i<allPers.length;i++){ //初始化权限列表
		  allPers[i].checked =0;
		  indexs[allPers[i].id] =i;
	  }
	 if(this.data.id){
		_this.getEmployeePermission(_this.data.id,function(pres){
			var lstr  = "_";
      var functionList = pres[0].functionList[0];
      for (var i = 0; i < functionList.length;i++){
        lstr += functionList[i].id+"_";
			}
			for(var i=0;i<allPers.length;i++){
				var _ele = allPers[i];
				if(lstr.indexOf("_"+_ele.id+"_")>-1){
					_ele.checked =1;
				}
			}
			_this.setData({
        id: _this.data.id,
				openid:pres[0].openId,
				userName:pres[0].userName,
				mobile:pres[0].mobile,
				peritems:allPers
			}) 
		});
	}else{ //初始化权限数据
		this.setData({
		peritems:allPers
		}) 
	}
	_this.setData({
		perindex:indexs
	});
  },
  getEmployeePermission: function(_id,_cb){ //获取员工权限
	  util.httppost("https://www.kunyesswl.com/wxspl/selectEmployeeById",{id:_id},function(res){
		  console.log(res);
		 if(res.data.code=="0"){ 
				_cb(res.data.data)
			}
			
		});
  },
  onSelectTag: function(e){
    const eid = e.currentTarget.dataset.id;
    const selected = this.data.selected;
	const index = this.data.perindex[eid];
	var ele = this.data.peritems[index];
	const chk = ele.checked==1?0:1;
	var elestr = "peritems["+index+"].checked";
    this.setData({
		[elestr]:chk
    })
  },
  onDelete: function(e){
	  const _this = this;
	  if(!_this.data.id) return ;//没有id 不做任何操作。
	  util.config("确定删除该员工信息吗？",function(){
		  console.log("删除了"+_this.data.id)
		   util.httppost("https://www.kunyesswl.com/wxspl/deleteEmployee",{id:_this.data.id},function(res){
		  console.log(res);
		  if(res.data.code=="0"){
			  util.msg("删除成功","success",function(){
				  wx.navigateTo({
				  url: '../permissionlist/permissionlist'
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
    var a = this.data.peritems;
    var functionList = [];
    var j=0;
    for (var i = 0; i < a.length; i++){
      if(a[i].checked == 1){
        functionList[j] = a[i].id;
        j = j+1;
      }
    }
	  var data = e.detail.value;
    data.functionList = functionList;
	  var url ;
	  if(!_this.data.id){
		  url = "https://www.kunyesswl.com/wxspl/saveEmployee";
	  }else{
		  url = "https://www.kunyesswl.com/wxspl/updateEmployee"
	  }
	  if(data.openid==""){
		  util.msg("请输入小程序ID");
		  return;
	  }else if(data.mobile==""){
		  util.msg("请输入手机号码");
		  return;
	  }else if(data.userName==""){
		  util.msg("请输入员工姓名");
		  return;
	  }
	  util.httppost(url,data,function(res){
		  console.log(res);
		  if(res.data.code=="0"){
			  util.msg("提交成功");
		  }else{
			  util.msg("提交失败");
		  }
	  });
	  console.log(data);
  }
})
