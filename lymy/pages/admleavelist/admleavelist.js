var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    showsearch:false,   //显示搜索按钮
    searchtext:'',  //搜索文字
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
	sortindex:0,  //一级分类索引
    sortid:"0",  //一级分类id
	atText:"待审批",
	approvalTypes:[{"id":"0","title":"待审批"},{"id":"1","title":"已审批"},{"id":"2","title":"已退回"},{"id":"3","title":"未提交"}], //审批状态显示
    perlist:[], //员工权限列表
    scrolltop:null, //滚动位置
	isAppl:{"0":"禁用","1":"启用"},
  isStatus: { "0": "待审", "1": "已通过", "2": "退回", "3": "撤回" },
	openid:"",
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchServiceData();
  },
  fetchServiceData:function(){  //获取报修列表
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
	
	 var data = {
		 "page":page,
		 "approvalType":_this.data.sortid,
     "openid": app.globalData.openId
	 }
   util.httppost("https://www.kunyesswl.com/wxspl/selectLeaveList",data,function(res){
		console.log(res);
		if(res.data.code=="0"){
			var newlst = [];
			var reslist = res.data.data;
			//var reslist = _this.testperlist();
			if(reslist){
				for (var i = 0; i < reslist.length; i++) {
				 newlst.push({
					 "id":reslist[i].id,
					"title":reslist[i].title,
          "isAppl": _this.data.isStatus[reslist[i].approvalStatus],
					"createTime":reslist[i].createTime
				})
			 }
			_this.setData({
				perlist:_this.data.perlist.concat(newlst)
			})
			}
		}
	});
  },
  inputSearch:function(e){  //输入搜索文字
    this.setData({
      showsearch:e.detail.cursor>0,
      searchtext:e.detail.value
    })
  },
  submitSearch:function(){  //提交搜索
    console.log(this.data.searchtext);
	console.log(this.data.perlist);
	this.setData({page:0,perlist:[]});
    this.fetchServiceData();
  },
  setFilterPanel: function(e){ //展开筛选面板
    const d = this.data;
    const i = e.currentTarget.dataset.findex;
    if(d.showfilterindex == i){
      this.setData({
        showfilter: false,
        showfilterindex: null
      })
    }else{    
      this.setData({
        showfilter: true,
        showfilterindex:i,
      })
    }
    console.log(d.showfilterindex);
  },
  hideFilter: function(){ //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
  },
  setSortIndex:function(e){ //服务类别一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid,
	  atText:dataset.sorttext
    })
    console.log('服务类别id：一级--'+this.data.sortid+',二级--'+this.data.subsortid);
	this.hideFilter();
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  newnotice:function(e){
	wx.navigateTo({
      url: '../admleavedetail/admleavedetail'
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchServiceData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    
  }
})

