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
	 util.httppost("https://www.kunyesswl.com/wxspl/func/repairDetail/",{id:_id},function(res){
		  console.log(res);
			//if(res.data.code=="0"){
			//var reslist = res.data.detail;
			
			_this.setData({
				id:"abc123",
				title:"叫外卖",
				content:"请问这里怎么叫外卖？",
				contactor:"焦友军",
				imgs:["http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg","http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"],
				mobile:"13800138000"
			});
		});
  }
})
