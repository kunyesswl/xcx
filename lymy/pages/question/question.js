var util = require('../../utils/util.js');
var areaId = "";
Page({
  data: {
    areas: [
      { id: '2', name: '是', isSelect: 'true' },
      { id: '1', name: '否' },
    ],
    showtab:0,  //顶部选项卡索引
    showtabtype:'', //选中类型
    showfootertab:0,  //底部标签页索引
    tabnav:{},  //顶部选项卡数据
    questionsall:[],  //所有问题
    questions:[], //问题列表
    showquestionindex:null, //查看问题索引,
    uploadimgs:[], //上传图片列表
    editable: false, //是否可编辑
    showView: false
  },
  onLoad: function () { 
    this.setData({
      tabnav:{
        tabnum:5,
        tabitem:[
          {
            "id":0,
            "type":"",
            "text":"全部"
          },
          {
            "id":1,
            "type":"A",
            "text":"服务咨询"
          },
          {
            "id":2,
            "type":"B",
            "text":"空间查询"
          },
          {
            "id":3,
            "type":"C",
            "text":"活动咨询"
          },
          {
            "id":4,
            "type":"D",
            "text":"入驻信息"
          }
        ]
      },
      uploadimgs:[]
    })
    this.fetchQuestions();
  },
  //选择区域
  selectAreaOk: function (event) {
    var selectAreaId = event.target.dataset.areaid;
    var that = this
    areaId = selectAreaId
    if (selectAreaId == 1) {
      that.setData({
        showView: (that.data.showView = true)
      })
    } else {
      that.setData({
        showView: (that.data.showView = false)
      })
    }
    for (var i = 0; i < this.data.areas.length; i++) {
      if (this.data.areas[i].id == selectAreaId) {
        this.data.areas[i].isSelect = true
      } else {
        this.data.areas[i].isSelect = false
      }
    }
    this.setData({
      areas: this.data.areas,
      skus: [],
      hideArea: true
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }, 
  chooseImage:function() {
	let _this = this;
    util.chooseImage(function(res){
		_this.setData({
			uploadimgs: _this.data.uploadimgs.concat(res.tempFilePaths)
		});
	});
  },
  editImage:function(){
    this.setData({
      editable: !this.data.editable
    })
  },
  deleteImg:function(e){
    console.log(e.currentTarget.dataset.index);
    const imgs = this.data.uploadimgs
	imgs.splice(e.currentTarget.dataset.index,1)
    this.setData({
      uploadimgs:imgs
    });
  },
  questionSubmit:function(){

  },
  fetchQuestions:function(){  //获取问题列表
    const newquestions = [];
    for (let i = 0; i < 50; i++) {
      newquestions.push({
        "id":i+1,
        "type": util.getRandomArrayElement(["A","B","C","D"]),
        "q":"意外保护服务内容是什么-"+(i+1)+"？",
        "a":"服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在正常使用过程中由于不慎将产品坠落、挤压、碰撞，而产生的硬件故障，本服务将免费提供硬件维修或更换，使产品重新恢复正常运行。12个月购机满30天后开始生效摔碰管修两年笔记本、数码相机、摄像机、手机、小数码"
      })
    }
    this.setData({
      questions:newquestions,
      questionsall:newquestions
    })
  },
  setTab:function(e){ //设置选项卡选中索引
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: edata.tabindex,
      showtabtype: edata.type,
      questions: !edata.type ? this.data.questionsall:this.data.questionsall.filter(l=>l.type === edata.type),
      showquestionindex: this.data.showtab==edata.tabindex?this.data.showquestionindex:null
    })
  },
  showTab:function(e){  //切换选项卡
    const eindex = e.currentTarget.dataset.index;
    if(eindex==1&&!this.data.questions){
      console.log("text");
    }
    wx.setNavigationBarTitle({
      title:eindex==1?"常见问题":"问题反馈"
    })
    this.setData({
      showfootertab:eindex
    });
  },
  foldQuestion:function(e){ //展开收起问题
    const eindex = e.currentTarget.dataset.qindex;
    const oldqindex = this.data.showquestionindex;
    this.setData({
      showquestionindex: eindex===oldqindex?null:eindex
    })
  },
  callContact: function(e){  //拨打电话
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.ponenumber
    })
  },
  formSubmit: function(e){ //表单提交
	  var _this = this;
	  var data = e.detail.value; //表单里面的数据，以name 为key ,value w为值
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
      data.funcType = "0";
		  util.httppost("https://www.kunyesswl.com/wxspl/func/submitComplaints/",data,function(res){
			console.log(res);
		  if(res.data.code=="000"){
        util.alertWindow("感谢您对我市场的支持。");
		  }else{
        util.alertWindowlose("提交失败");
		  }
		  });
	  }); //上传图片同时提交表单信息 function(r) 为回调函数
  }
})
