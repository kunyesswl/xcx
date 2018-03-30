var util = require('../../utils/util.js');
Page({
  data: {
    showsearch:false,   //显示搜索按钮
    searchtext:'',  //搜索文字
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
	sortindex:0,  //审批类型索引
    sortid:null,  //审批类型id
	atText:"待审批",
	bussiindex:0,  //业务类型索引
    bussiid:null,  //业务类型id
	bussiText:"请假调休",
	approvalTypes:[{"id":"0","title":"待审批"},{"id":"1","title":"已审批"},{"id":"2","title":"已退回"}], //审批状态显示
	bussiTypes:[{"id":"0","title":"请假调休"},{"id":"1","title":"报事报修"},{"id":"2","title":"投诉建议"}],
    perlist:[], //员工权限列表
    scrolltop:null, //滚动位置
	isAppl:{"0":"禁用","1":"启用"},
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
		 "type":_this.data.bussiid,
		 "approvalType":_this.data.sortid
	 }
	util.httppost("https://www.kunyesswl.com/wxspl/selectApprovalList",data,function(res){
		console.log(res);
		if(res.data.code=="000"){
			var newlst = [];
			var reslist = res.data.list;
			//var reslist = _this.testperlist();
			if(reslist){
				for (var i = 0; i < reslist.length; i++) {
				 newlst.push({
					 "id":reslist[i].id,
					"title":reslist[i].title,
					"submitUser":reslist[i].submitUser,
					"submitTime":reslist[i].submitTime
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
  setSortIndex:function(e){ //审批类型
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid,
	  atText:dataset.sorttext
    })
    console.log('服务类别id：一级--'+this.data.sortid+',二级--'+this.data.subsortid);
	this.hideFilter();
	this.fetchServiceData();
  },
  setBusinessIndex:function(e){ //业务类型
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      bussiindex:dataset.sortindex,
      bussiid:dataset.sortid,
	  bussiText:dataset.sorttext
    })
	this.hideFilter();
	this.fetchServiceData();
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  newnotice:function(e){
	wx.navigateTo({
      url: '../admapprovaldetail/admapprovaldetail?id=1&type=0'
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
    this.setData({
      page:0,
      perlist:[]
    })
    this.fetchServiceData();
    this.fetchFilterData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})

