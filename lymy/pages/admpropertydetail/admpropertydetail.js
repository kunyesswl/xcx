var util = require('../../utils/util.js');
var comm = require('../../utils/comm.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:"",
	  shopcode:"",
	  username:"",
	  imgs:[],
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
		util.httppost("https://www.kunyesswl.com/wxspl/func/repairDetail/",{id:_id},function(res){
		  console.log(res);
			if(res.data.code=="000"){
			var detail = res.data.detail;
			_this.setData({
				id:detail.id,
				title:detail.title,
				content:detail.content,
				shopcode:detail.shopCode,
				imgs:detail.imgUrls.split(","),
				username:detail.username,
				mobile:detail.mobile
			});
		   }
		});
  }
})
