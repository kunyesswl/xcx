Page({
  data: {
    activitydata:{},
    spaceimgs:[],
	shopinfo:{},
	relation:[],
    currentIndex:1
  },
  onLoad: function (options) {
    console.log(options);
	var _this = this;
	util.httppost("https://www.kunyesswl.com/wxspl/getShopDetail",{"id":options.id},function(res){
		console.log(res);
		if(res.data.code=="0"){
			var obj = res.data.data;
			_this.setData({
				relation:obj.correlation,
				shopinfo:obj
			});
			wx.setNavigationBarTitle({
				title: obj.shopCode
			})
		}
	});
	/*
    this.setData({
      shopinfo:{
        "code": "A0001",
        "statu": "已租",
        "arrearsStatu":"否",
		"relations":"A0002",
        "customer":"路人甲",
        "phone":"13800138000",
        "prearrears": "0",
		"rent":"3000",
		"wecost":"200",
		"arrears":"0",
		"arrearsMonth":"",
		"carcount":"",
		"carnumbers":"",
		"ybcarfee":"800",
		"ybcararrears":"",
		"arrearsamount":"",
		"deposit":"2000",
		"contractperiod":"2018-01-01至2019-01-01"
      }
    })*/
    // setTimeout(()=>{
   
    // },1000)
  }
  /*
  setCurrent: function(e){
    this.setData({
      currentIndex:e.detail.current+1
    })
  },
  reserveHandle: function(){
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  }*/
  // formateNumber:function(n){
  //   return n>9?n:'0'+n
  // }
})
