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
	rentalPerMonth1:"",
	leaseArea:"",
	chargePerMonthPerSq:"",
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
			shoparea:e.detail.value,
			leaseArea:e.detail.value
		});
	  break;
	  case 'rentalPerMonth1':
		this.setData({
			rentalPerMonth1:e.detail.value
		});
	  break;
	  case 'leaseArea':
		this.setData({
			leaseArea:e.detail.value
		});
	  break;
	  case 'chargePerMonthPerSq':
		this.setData({
			chargePerMonthPerSq:e.detail.value
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
  cleartext:function(e){
	  console.log(e);
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
