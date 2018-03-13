var util = require('../../utils/util.js');
var verify = require('../../utils/validate.js');
Page({
  data: {
	ctobj:{"1":"利远广场合同","2":"利远分场合同","3":"补充协议"},
	contractType:0,
	startDate:"2018-01-01",
	endDate:"2018-01-01",
	shopNo:"",	//铺位号
	shoparea:"", //面积
	rentalPer:"",
	leaseArea:"",
	chargePerMonthPerSq:"",
	floorarry:["请选择楼层","首","二","三","四","五","六","七","八"],
	floorindex:0,
	shopquaarry:["请选择铺间数","壹","贰","叁","肆","伍","陆","柒","捌","玖"],
	shopquaindex:0,
	scopearry:["请选择经营范围","汽车用品","汽车配件"],
	scopeindex:0,
	leasearry:["请选择租凭期年数","一","二","三","四","五","六","七","八","九","十"],
	leaseindex:0,
	rentalPerMonth1:0,
	rentalPerMonth2:0,
	rentalPerMonth3:0,
	rentalPerMonth4:0,
	rentalPerMonth5:0,
	chargePerMonthY1:0,
	chargePerMonthY2:0,
	chargePerMonthY3:0,
	chargePerMonthY4:0,
	chargePerMonthY5:0
  },
  onLoad: function (option) {
	this.validate = new verify.WxValidate(
		{
			partyb:{
				required:true
			},shopNo:{
				required:true
			},floor:{
				required:true
			},shopArea:{
				required:true
			},shopQuantity:{
				required:true
			},businessScope:{
				required:true
			},leaseAmount:{
				required:true
			},leaseArea:{
				required:true
			}
		},{
			partyb:{
				required:"请输入承租人"
			},shopNo:{
				required:"请输入商铺号"
			},floor:{
				required:"请输入楼层"
			},shopArea:{
				required:"请输入建筑面积"
			},shopQuantity:{
				required:"请输入铺位间数"
			},businessScope:{
				required:"请输入经营范围"
			},leaseAmount:{
				required:"请输入租赁期"
			},leaseArea:{
				required:"请输入承租面积"
			},
		}
	)
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
		var date = new Date(e.detail.value);
		date.setFullYear(date.getFullYear()+parseInt(this.data.leaseindex))
		this.setData({
			startDate:e.detail.value,
			endDate:util.formatDate(date)
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
			shoparea:e.detail.value,
			leaseArea:e.detail.value
		});
	  break;
	  case 'rentalPer':
		this.setData({
			rentalPer:e.detail.value
		});
		var v0 = e.detail.value*this.data.leaseArea;
		this.countYAS(1,v0,this);
	  break;
	  case 'leaseArea':
		this.setData({
			leaseArea:e.detail.value
		});
		if(this.data.rentalPer){
			var v0 = e.detail.value*this.data.rentalPer;
			this.countYAS(1,v0,this);
		}
		if(this.data.chargePerMonthPerSq){
			var v0 = e.detail.value*this.data.chargePerMonthPerSq;
			this.countYAS(2,v0,this);
		}
	  break;
	  case 'rentalAmonth':
		var v0 = e.detail.value;
		this.countYAS(1,v0,this);
	  break;
	  case 'chargePerMonthPerSq':
		this.setData({
			chargePerMonthPerSq:e.detail.value
		});
		var v0 = e.detail.value*this.data.leaseArea;
		this.countYAS(2,v0,this);
	  break;
	  case 'chargePerMonthY1':
		var v0 = e.detail.value;
		this.countYAS(2,v0,this);
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
		var date = new Date(this.data.startDate);
		date.setFullYear(date.getFullYear()+parseInt(e.detail.value))
		this.setData({
			leaseindex:e.detail.value,
			endDate:util.formatDate(date)
		});
	  break;
	   }
  },
  cleartext:function(e){
	console.log(e);
	var type = e.currentTarget.dataset.type;
    switch (type) {
      case '1':
		this.setData({
			rentalPerMonth2:""
		});
		break;
      case '2':
		this.setData({
			rentalPerMonth3:""
		});
		break;
	  case '3':
		this.setData({
			rentalPerMonth4:""
		});
		break;
	  case '4':
		this.setData({
			rentalPerMonth5:""
		});
		break;
	  case '5':
		this.setData({
			chargePerMonthY2:""
		});
		break;
	  case '6':
		this.setData({
			chargePerMonthY3:""
		});
		break;
	  case '7':
		this.setData({
			chargePerMonthY4:""
		});
		break;
	  case '8':
		this.setData({
			chargePerMonthY5:""
		});
		break;
	}
  },
  countYAS:function(_t,_v0,_this){
	  var v0 = parseInt(_v0);
	   if(_t==1){
		  _this.setData({
			  rentalPerMonth1:v0,
			  rentalPerMonth2:v0*1.05,
			  rentalPerMonth3:v0*1.05*1.05,
			  rentalPerMonth4:v0*1.05*1.05*1.05,
			  rentalPerMonth5:v0*1.05*1.05*1.05*1.05});
	  }else if(_t==2){
		 _this.setData({
			  chargePerMonthY1:v0,
			  chargePerMonthY2:v0*1.05,
			  chargePerMonthY3:v0*1.05*1.05,
			  chargePerMonthY4:v0*1.05*1.05*1.05,
			  chargePerMonthY5:v0*1.05*1.05*1.05*1.05});
	  }
	  
  },
  formSubmit:function(e){
	  var data = e.detail.value;
	  console.log(data);
	  if(!this.validate.checkForm(e)){
		  const error = this.validate.errorList[0];
		  util.msg(error.msg);
		  return;
	  }
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
	  var contractType = this.data.contractType;
	  var url ="";
	  if(contractType=="1"){
		  url = "https://www.kunyesswl.com/wxspl/getSquarePDF";
	  }else if(contractType=="2"){
		  url = "https://www.kunyesswl.com/wxspl/getParvialFieldPDF";
	  }else if(contractType=="3"){
		  url = "https://www.kunyesswl.com/wxspl/getSideAgreementPDF";
	  }
	  util.httppost(url,data,function(res){
		  if(res.data.code=="0"){
			  util.msg("提交成功");
		  }else{
			  util.msg("提交失败");
		  }
	  });
	 //util.download(pdfurl);
	// util.viewdoc(pdfurl,"pdf");
	
  }
})
