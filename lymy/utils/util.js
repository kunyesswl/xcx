/**
* 格式化时间 
* @param {String} date 原始时间格式
* 格式后的时间：yyyy/mm/dd hh:mm:ss
**/
const formatTime = (date) => {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  if (day == 1) {
    month = date.getMonth();
    if (month == 2) {
      day = 28;
    } else if (month == 4) {
      day = 30;
    } else if (month == 6) {
      day = 30;
    } else if (month == 9) {
      day = 30;
    } else if (month == 11) {
      day = 30;
    } else {
      day = 31;
    }
  } else {
    month = date.getMonth() + 1;
    day = date.getDate() - 1;
  }
  var year = date.getFullYear();
  return [year, month, day].map(formatNumber).join('-');
}

const formatDate = (date) => {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
}
function formatNumber(n){
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
* 从一个数组中随机取出若干个元素组成数组
* @param {Array} arr 原数组
* @param {Number} count 需要随机取得个数
**/
const getRandomArray = (arr, count) => {
  var shuffled = arr.slice(0),
      i = arr.length, 
      min = i - count, 
      temp, 
      index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function toFixed(num){
	return num.toFixed(2);
}
/**
* 从一个数组中随机取出一个元素
* @param {Array} arr 原数组
**/
const getRandomArrayElement = arr => {
   return arr[Math.floor(Math.random()*arr.length)];
}

function isBlank(str){
  if (Object.prototype.toString.call(str) ==='[object Undefined]'){//空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' || 
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length==0?true:false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str)=='{}'?true:false
  }else{
    return true
  }

}

//是否存在指定函数 
function isExitsFunction(funcName) {
    try {
        if (typeof(eval(funcName)) == "function") {
            return true;
        }
    } catch(e) {}
    return false;
}
//是否存在指定变量 
function isExitsVariable(variableName) {
    try {
        if (typeof(variableName) == "undefined") {
            //alert("value is undefined"); 
            return false;
        } else {
            //alert("value is true"); 
            return true;
        }
    } catch(e) {}
    return false;
}

 function bingDateChange(e,that){//绑定选择时间的函数
	var type = e.currentTarget.dataset.type;
	
	 try {
        if (typeof(that.data.dateobj) == "undefined") {
		that.setData({
			dateobj:{}
		});
        } 
    } catch(e) {
		console.log("read dateobj is catch");
		that.setData({
			dateobj:{}
		});
	}
	that.data.dateobj[type] = formatDate(new Date(e.detail.value));
	that.setData(that.data.dateobj);
}

function sloading(stitle , stime,smask){
	var _title = typeof(stitle) == "undefined"?" ":stitle;
	var _time = typeof(stime) == "undefined"?30:stime;
	var _m = typeof(smask) == "undefined"?true:smask;
	wx.showLoading({
        title: _title,
		mask:_m
      })
      setTimeout(function(){
        wx.hideLoading()
      },_time*1000)
}
function hloading(){
	wx.hideLoading();
}

function msg(mtitle,icon,callback){
	var _icon = typeof(icon) == "undefined"?"loading":icon;
	wx.showToast({  
	title: mtitle,  
	icon: _icon,  
	duration: 2000,
	success: function(res){
		if(typeof(callback) != "undefined"){
		  setTimeout(function () {
			callback(res);
          }, 2000) //延迟时间
			
		}
	}
	})  
	//sloading(mtitle , 3,false);
}
function config(mcontent,callback,failCallback){
	wx.showModal({
            title: '确认消息',
            content: mcontent,
            success: function (res) {
                if (res.confirm) {
                    if(callback)
						callback();
                }else{
                   if(failCallback)
					   failCallback();
                }

            }
        })
}
function httpget(url,callback,failCallback){
	sloading();
	wx.request({  
          url: url,  
          data: {},  
          method: 'GET',  
          success:function(res) {
			var tstr = typeof(callback);
			if(tstr =="function"){
				callback(res);
			}else if(tstr == "string"){
				msg(callback);
			}else{
				msg("请求成功");
			}  
          },  
          fail:function(res){  
			  if(typeof(failCallback) == "undefined"){
				msg("网络请求失败");
				console.error(res); 
			  }else{
			//	hloading();
				failCallback(res);
			  }  
          },
		  complete:function(res){
			  hloading();
		  }
      });  
}

function httppost(url,data,callback,failCallback){
	sloading();
	wx.request({  
          url: url,  
		  header: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'},
          data: json2str(data),  
          method: 'POST',  
          success:function(res) {  
			//  msg("调用成功");
              callback(res); 
          },  
          fail:function(res){
			  if(typeof(failCallback) == "undefined"){
				msg("网络请求失败");
				console.error(res); 
			  }else{
				//hloading();
				failCallback(res);
			  }
          },
		  complete:function(res){
			  //msg("调用完成");
			  hloading(); 
		  }
      });  
}

function download(url){
	 sloading("正在下载...",180);
	 wx.downloadFile({
      url: url,
	  success: function(res){
		  console.log(res);
		  if(res.statusCode==200){
			  var tempFilePath = res.tempFilePath
			   wx.saveFile({
				tempFilePath: tempFilePath,
				success: function(r2) {
					console.log(r2);
				//var savedFilePath = res.savedFilePath
					msg("下载成功","success");
				},
				fail: function(r2){
					console.log(r2);
					msg("下载失败");
				},
				complete: function(r2){
					hloading();
				}
			})
		  }else{
			  msg("下载失败");
			  hloading();
		  }
	  },
	  fail: function(res){
		  console.log(res);
		  hloading();
		  msg("下载失败");
	  },
	  complete: function(res){
	  }
    });
	
}


function viewdoc(path,type){
	 sloading("正在下载...",1800);
	 wx.downloadFile({
      url: path,
	  success: function(res){
		  console.log(res);
		  if(res.statusCode==200){
			  var tempFilePath = res.tempFilePath
			   wx.openDocument({
				filePath: tempFilePath,
				fileType: type,
				success: function(r2) {
					console.log(r2);
				//var savedFilePath = res.savedFilePath
					msg("打开成功","success");
				},
				fail: function(r2){
					console.log(r2);
					msg("打开失败");
				},
				complete: function(r2){
					hloading();
				}
			})
		  }else{
			  msg("下载失败");
			  hloading();
		  }
	  },
	  fail: function(res){
		  console.log(res);
		  hloading();
		  msg("下载失败");
	  },
	  complete: function(res){
	  }
    });
}

function json2str(json) {
	var str = [];
		for (var p in json) {
		str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
	}
	return str.join("&");
}

const str2json = (str) =>{
	if(typeof str!= 'object'){
	  str= str.replace(/\ufeff/g,"");//重点
	  return JSON.parse(str);
    }
}

const chooseImage = (_cb) =>{
	wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#f7982a",
      success: function(res1) {
        if (!res1.cancel) {
			var _type ='';
          if(res1.tapIndex == 0){
			_type = 'album';
          }else if(res1.tapIndex == 1){
			_type = 'camera';
          }
		  wx.chooseImage({
		  sizeType: ['original', 'compressed'],
		  sourceType: [_type],
		  success: function (res2) {
			  typeof _cb == "function" && _cb(res2)
			}
		})
        }
      }
    });
}
const uploadFiles = (_url,_formData,_filePaths,_sb,_cb) =>{
	sloading();
	_uploadFile(_url,_formData,_filePaths,{},_sb,_cb)
}
const _uploadFile = (_url,_formData,_filePaths,_data,_sb,_cb) =>{
	 var i=_data.i?_data.i:0;//当前上传的哪张图片
     var success=_data.success?_data.success:0;//上传成功的个数
     var fail=_data.fail?_data.fail:0;//上传失败的个数
	wx.uploadFile({
                    url: _url, 
                    filePath: _filePaths[i],
                    name: 'fileData',
                    formData:_formData,
                    success: (resp) => {
                        success++;//图片上传成功，图片上传成功的变量+1
						 typeof _sb == "function" && _sb(resp);
                    },
                    fail: (res) => {
                        fail++;//图片上传失败，图片上传失败的变量+1
                    },
                    complete: () => {
                        i ++;                        
                        if(i == _filePaths.length)
                        {                      
                          console.log('总共'+success+'张上传成功,'+fail+'张上传失败！');
						  hloading();
						  typeof _cb == "function" && _cb({total:_filePaths.length,success:success,fail:fail});
                        }
                        else
                        {  
						  _data.i=i;
						  _data.success=success;
						  _data.fail=fail;
                          _uploadFile(_url,_formData,_filePaths,_data,_sb,_cb);
                        }
                    },
                });
}

module.exports = {
  formatTime: formatTime,
  formatDate:formatDate,
  getRandomArray: getRandomArray,
  getRandomArrayElement: getRandomArrayElement,
  isBlank:isBlank,
  isExitsFunction:isExitsFunction,
  isExitsVariable:isExitsVariable,
  bingDateChange:bingDateChange,
  sloading:sloading,
  hloading:hloading,
  msg:msg,
  config:config,
  httpget:httpget,
  httppost:httppost,
  download:download,
  viewdoc:viewdoc,
  json2str:json2str,
  str2json:str2json,
  chooseImage:chooseImage,
  uploadFiles:uploadFiles
}
