var util = require('../../utils/util.js');
var comm = require('../../utils/comm.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:"",
	  shopcode:"",
	  mobile:""
  },
  onLoad: function (option) {
	this.setData({
		id:option.id?option.id:""
	});
    this.fetchData()
  },
  fetchData: function(){
	  var _id = this.data.id;
	  var _this = this;
	 //util.httppost("https://www.kunyesswl.com/wxspl/func/repairDetail/",{id:_id},function(res){
	//	  console.log(res);
			//if(res.data.code=="0"){
			//var reslist = res.data.detail;
			_this.setData({
				id:"abc123",
				title:"水电报修",
				content:"水表漏水了，赶紧过来修啊！",
				shopcode:"A009214",
				mobile:"13800138000"
			});
		//});
  }
})
