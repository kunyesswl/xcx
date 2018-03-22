var util = require('../../utils/util.js');
Page({
  data: {
    checitems:[],
    // selected:null,
    selectedid: null,
	title:""
  },
  onLoad: function () {
    this.setData({
      checitems:[
        {
          "id":1,
          "text":"灯"
        },
        {
          "id":2,
          "text":"电路"
        },
        {
          "id":3,
          "text":"空调"
        },
        {
          "id":4,
          "text":"消防"
        },
        {
          "id":5,
          "text":"电梯"
        },
        {
          "id":6,
          "text":"门"
        },
        {
          "id":7,
          "text":"下水道"
        },
        {
          "id":8,
          "text":"墙面"
        },
        {
          "id":9,
          "text":"窗户"
        },
        {
          "id":10,
          "text":"天花板"
        },
        {
          "id":11,
          "text":"其他"
        }
      ]
    })
  },
  onSelectTag: function(e){
    const eid = e.currentTarget.dataset.id;
	const title = e.currentTarget.dataset.text;
    const selected = this.data.selected;
    this.setData({
      // selected:selected.indexOf(eid)>-1?selected.filter(i=>i!=eid):selected.concat(eid)
      selectedid:eid,
	  title:title
    })
    console.log(this.data.selectedid);
  },formSubmit:function(e){
	  var _this = this;
	  var data = e.detail.value;
	  var url = "https://www.kunyesswl.com/wxspl/func/submitRepair/";
	  
	  if(data.shopCode==""){
		  util.msg("请输入商户号");
		  return;
	  }else if(data.mobile==""){
		  util.msg("请输入手机号码");
		  return;
	  }else if(data.content==""){
		  util.msg("请输入报修内容");
		  return;
	  }else if(data.title==""){
		  util.msg("请选择报修事项");
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
