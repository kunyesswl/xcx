/*小程序不支持同步请求，所以暂时不从服务器拿数据
const getAllPermission = (cb) => {
	 var pers = wx.getStorageSync('allPers')
	if(pers){
      typeof cb == "function" && cb(pers)
    }else{ 
		wx.request({  
          url: "https://www.kunyesswl.com/wxspl/selectFunctionList",  
		  header: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
          data: {},  
          method: 'POST',  
          success:function(res) { 
			  console.log("success");
			  console.log(res);		  
			//if(res.data.code=="0"){
				//wx.setStorageSync('allPers', res.data.data);
				wx.setStorageSync('allPers', [ {"id":1,"functionName":"合同签署"},{"id":2,"functionName":"商铺信息"},{"id":3,"functionName":"请假申请"},{"id":4,"functionName":"调休申请"},{"id":5,"functionName":"公告查看"},{"id":6,"functionName":"请假调班审批"},{"id":7,"functionName":"员工权限配置"},{"id":8,"functionName":"客服咨询查看"},{"id":9,"functionName":"报事报修查看"},{"id":10,"functionName":"广告配置"}]);
				typeof cb == "function" && cb(res.data.data)
			//}
          },  
          fail:function(res){
			  console.log("fail...");
			  console.log(res);
          }
      });  
	}
}
*/
const getAllPermission = () => {
  return [{ "id": 1, "functionName": "内部公告" }, { "id": 2, "functionName": "商铺信息" }, { "id": 3, "functionName": "请假调休" }, { "id": 4, "functionName": "审批查询" }, { "id": 5, "functionName": "合同签署" }, { "id": 6, "functionName": "报修查看" }, { "id": 7, "functionName": "意见反馈" }, { "id": 8, "functionName": "公告发布" }, { "id": 9, "functionName": "员工权限" }, { "id": 10, "functionName": "登录查询" }];
}
module.exports = {
	getAllPermission:getAllPermission
}