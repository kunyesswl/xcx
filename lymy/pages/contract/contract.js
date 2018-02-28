var util = require('../../utils/util.js');
Page({
  data: {
	ctobj:{"1":"利远广场合同","2":"利远分场合同","3":"补充协议"},
	contractType:0,
	startDate:"2018-01-01",
	endDate:"2018-01-01",
	shopNo:"",	//铺位号
	shoparea:"", //面积
	floorarry:["请选择楼层","首","二","三","四","五","六","七","八"],
	floorindex:0,
	shopquaarry:["请选择铺间数","壹","贰","叁","肆","伍","陆","柒","捌","玖"],
	shopquaindex:0,
	scopearry:["请选择经营范围","汽车用品","汽车配件"],
	scopeindex:0,
	leasearry:["请选择租凭期年数","一","二","三","四","五","六","七","八","九","十"],
	leaseindex:0
	
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
  bindInputChange: function(e){
	  //console.log(e);
	  var id = e.currentTarget.id;
	  switch (id) {
      case 'shopCode':
		this.setData({
			shopNo:e.detail.value
		});
	  break;
	  case 'shoparea':
		this.setData({
			shoparea:e.detail.value
		});
	  break;
	   }
  },
  bindSelect: function(e) {
	  var id = e.currentTarget.id;
	  switch (id) {
      case 'floor':
		this.setData({
			floorindex:e.detail.value
		});
	  break;
	  case 'shopQuantity':
		this.setData({
			shopquaindex:e.detail.value
		});
		break;
	 case 'businessScope':
		this.setData({
			scopeindex:e.detail.value
		});
		break;
	 case 'leaseAmount':
		this.setData({
			leaseindex:e.detail.value
		});
	  break;
	   }
  },
  formSubmit:function(e){
	  var data = e.detail.value;
	  console.log(data);
	  var contractCode = data.contractCode;
	  var shopCode = data.shopCode;
	 /* if(contractCode == ""){
		  util.msg("请输入合同编号");
		  return;
	  }*/
	  if(shopCode == ""){
		  util.msg("请输入铺位编号");
		  return;
	  }
	 // util.httppost("https://www.kunyesswl.com/wxspl/getSquarePDF",data,"请求成功");
	 var pdfurl = "https://www.kunyesswl.com/wxspl/getSquarePDF";
	 //util.download(pdfurl);
	// util.viewdoc(pdfurl,"pdf");
	 util.msg("提交成功","success");
	
  }
})
