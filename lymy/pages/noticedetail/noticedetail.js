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
  }
})
