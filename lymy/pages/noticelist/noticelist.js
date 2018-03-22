var util = require('../../utils/util.js');
Page({
  data: {
    showsearch:false,   //显示搜索按钮
    searchtext:'',  //搜索文字
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
    perlist:[], //员工权限列表
    scrolltop:null, //滚动位置
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
		 "page":page
	 }
	util.httppost("https://www.kunyesswl.com/wxspl/func/noticeQuery/pageList?isAbout=1",data,function(res){
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
					"creator":reslist[i].creator,
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
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
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

