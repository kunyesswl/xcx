var util = require('../../utils/util.js');
Page({
  data: {
	  id:"",
	  title:"",
	  content:"",
	  contactor:"",
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
				imgs:["http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg","http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"],
				mobile:detail.mobile
			});
		}
	});
  }
})
