var appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppGroupBuy/GetGroupBuyOrderInfo',
      data: {
        order_id:options.id
      },
      success: function (data) {
        //console.log(data);
        _this.setData({ list: data.data });
      }
    })
  },
  onShareAppMessage: function (e) {
    let id = e.target.dataset.detail,
        url = '/pages/groupGoodsDetail/groupGoodsDetail?detail=' + id;
    return appInstance.shareAppMessage({ path: url });
  },
  //支付
  pay: function (e) {
    let _this = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/GetWxWebappPaymentCode',
      data: {
        order_id: e.target.dataset.id
      },
      success: function (res) {
        var param = res.data,
          orderId = e.target.dataset.id;

        param.orderId = orderId;
        param.goodsType = e.target.dataset.type;
        param.success = function () {
          setTimeout(function () {
            appInstance.turnToPage('/pages/groupOrderDetail/groupOrderDetail?id=' + orderId);
          }, 1500);
        };
        appInstance.wxPay(param);
      }
    })
  },

  //确认收到退款
  retrieveMoney: function (e) {
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/ComfirmRefund',
      data: {
        order_id: e.target.dataset.id
      },
      success: function (data) {
        if (data.status === 0) {
          wx.showToast({
            title: '确认成功',
          })
        }
      }
    })
  },

  //再拼一次
  onceMore: function (e) {
    let id = e.currentTarget.dataset.id;
    appInstance.turnToPage('/pages/groupGoodsDetail/groupGoodsDetail?detail=' + id);
  },

  goToOrderDetail: function () {
    appInstance.turnToPage('/pages/myOrder/myOrder');
  }
})
