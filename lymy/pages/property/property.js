var util = require('../../utils/util.js');
var areaId = "";
Page({
  data: {
    areas: [
      { id: '2', name: '是' },
      { id: '1', name: '否' }
    ],
    checitems:[],
    // selected:null,
    selectedid: null,
    showView: false,
    uploadimgs: [], //上传图片列表
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
          "text":"空调"
        },
        {
          "id":3,
          "text":"电梯"
        },
        {
          "id":4,
          "text":"门"
        },
        {
          "id":5,
          "text":"墙面"
        },
        {
          "id":6,
          "text":"窗户"
        },
        {
          "id":7,
          "text":"天花板"
        },
        {
          "id":8,
          "text":"其他"
        }
      ],
      uploadimgs: []
    })
  },
  radioChange: function (e) {
    var that = this;
	const index = e.currentTarget.dataset.index;
    that.setData({
      showView: index=="0"
    })
  },
  chooseImage: function () {
    let _this = this;
    util.chooseImage(function (res) {
      _this.setData({
        uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
      });
    });
  },
  editImage: function () {
    this.setData({
      editable: !this.data.editable
    })
  },
  deleteImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
	imgs.splice(e.currentTarget.dataset.index,1)
    this.setData({
      uploadimgs:imgs
    });
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
	  var data = e.detail.value; //表单里面的数据，以name 为key ,value w为值
	   if(data.content==""){
		  util.msg("请输入报修内容");
		  return;
	  }else if(data.title==""){
		  util.msg("请选择报修事项");
		  return;
	  }else if(data.description==""){
		  util.msg("请输入故障位置");
		  return;
	  }
	  var imageid=""
	  util.uploadFiles("https://www.kunyesswl.com/wxspl/uploadPhone.do",{imgFile:_this.data.uploadimgs[0]},_this.data.uploadimgs,function(sr){
		  console.log("success ");
		  console.log(sr);
		  var _srdata = util.str2json(sr.data)
		  if(_srdata.code=="000"){
			  imageid+=_srdata.id+","
		  }
	  },function(r){
		  console.log(r)
		  if(imageid.length>0){
			  imageid = imageid.substr(0,imageid.length-1);
		  }
		  data.phones =imageid;
		  util.httppost("https://www.kunyesswl.com/wxspl/func/submitRepair/",data,function(res){
			console.log(res);
		  if(res.data.code=="000"){
        util.alertWindow("感谢您及时反馈的建议。");
		  }else{
			  util.msg("提交失败");
		  }
		  });
	  }); //上传图片同时提交表单信息 function(r) 为回调函数
  }
})
