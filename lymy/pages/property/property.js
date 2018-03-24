var util = require('../../utils/util.js');
Page({
  data: {
    items: [
      { name: '1', value: '显示' },
      { name: '2', value: '隐藏', checked: 'true' },
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
    that.setData({
      showView: (!that.data.showView)
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
	  var data = e.detail.value;
	  var url = "https://www.kunyesswl.com/wxspl/func/submitRepair/";
	  
	  if(data.content==""){
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
