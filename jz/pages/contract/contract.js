var util = require('../../utils/util.js');
Page({
  data: {
	ctobj:{"1":"利远广场合同","2":"利远分场合同"},
	contractType:0,
	startDate:"2018-01-01",
	endDate:"2018-01-01"
  },
  onLoad: function (option) {
	this.setData({
		contractType:option._type
    });
	wx.setNavigationBarTitle({
        title: this.data.ctobj[option._type]
      })
  },
  bindDayChange: function(e){ //下拉选择
  //  util.bingDateChange(e,this);
	//console.log(this.data);
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
	  var data = e.detail.value;
	  var contractCode = data.contractCode;
	  var shopCode = data.shopCode;
	  if(contractCode == ""){
		  util.msg("请输入合同编号");
		  return;
	  }
	  if(shopCode == ""){
		  util.msg("请输入铺位编号");
		  return;
	  }
	 util.httppost("https://www.kunyesswl.com/wxspl/getSquarePDF",data,"请求成功");
	 var pdfurl = "https://www.kunyesswl.com/wxspl/getSquarePDF";
	 //util.download(pdfurl);
	// util.viewdoc(pdfurl,"pdf");
	 util.msg("提交成功","success");
	
  }
})
