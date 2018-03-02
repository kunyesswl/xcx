var util = require('../../utils/util.js');
Page({
  data: {
    showsearch:false,   //显示搜索按钮
    searchtext:'',  //搜索文字
    filterdata:{},  //筛选条件数据
    showfilter:false, //是否显示下拉筛选
    showfilterindex:null, //显示哪个筛选类目
    pindex:0,  //一级分类索引
    pid:null,  //一级分类id
    aindex:0,  //一级城市索引
    aid:null,  //一级城市id
    shoplist:[], //服务集市列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchServiceData();
    this.fetchFilterData();
  },
  fetchFilterData:function(){ //获取筛选条件
    this.setData({
      filterdata:{
        "place": [
            {
                "id": 0,
                "title": "全部"
            },
            {
              "id": 1,
              "title": "广场"
            },
            {
              "id": 2,
              "title": "分场"
             
            },
        ],
        "arrear": [
            {
                "id": 0,
                "title": "全部"
            },
            {
              "id": 1,
              "title": "欠费"
            },
            {
              "id": 2,
              "title": "未欠费"
            }
        ],
      }
    })
  },
  fetchServiceData:function(){  //获取城市列表
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
		 "placeType":this.data.pid,
		 "type": this.data.aid,
		 "page":page
	 }
	util.httppost("https://www.kunyesswl.com/wxspl/getShopList",data,function(res){
		//console.log(res);
		if(res.data.code=="0"){
			var newlist = [];
			var reslist = res.data.data;
			 for (var i = 0; i < reslist.length; i++) {
				 newlist.push({
					 "id":reslist[i].id,
					"code":reslist[i].shopCode,
					"arrears":reslist[i].arrearage==1?"欠费":"未欠费",
					"customer":reslist[i].customerName
				})
			 }
			_this.setData({
				shoplist:_this.data.shoplist.concat(newlist)
			})
		}
	});
	/*
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
		var arre = i>3&&i<8?"是":"否";
		var statu = i>6&&i<12?"已租":"空铺";
      newlist.push({
        "code":"A00"+(i+1),
        "statu":statu,
        "arrears":arre,
        "customer":"客户"+(i+1),
        "phone":"138001380000"
      })
    }
    setTimeout(()=>{
      _this.setData({
        shoplist:_this.data.shoplist.concat(newlist)
      })
    },1500)*/
  },
  inputSearch:function(e){  //输入搜索文字
    this.setData({
      showsearch:e.detail.cursor>0,
      searchtext:e.detail.value
    })
  },
  submitSearch:function(){  //提交搜索
    console.log(this.data.searchtext);
	console.log(this.data.shoplist);
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
  setPlaceIndex:function(e){ //服务类别一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      pindex:dataset.pindex,
      pid:dataset.pid
    });
    console.log('广场类别id：-- '+this.data.pid);
	//this.fetchServiceData();
  },
  setArrearIndex:function(e){ //服务城市一级索引
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      aindex:dataset.aindex,
      aid:dataset.aid
    })
    console.log('欠费情况id：一级 -- '+this.data.aid);
//	this.fetchServiceData();
  },
  hideFilter: function(){ //关闭筛选面板
    this.setData({
      showfilter: false,
      showfilterindex: null
    })
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
      shoplist:[]
    })
    this.fetchServiceData();
    this.fetchFilterData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})

