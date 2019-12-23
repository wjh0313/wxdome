//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.getUserInfo({
      success: function (res) {
        // console.log(res.userInfo);
        wx.request({
          url: 'https://wujunhui.xyz/landreg',
          // header: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "get",
          data: {
            'name': res.userInfo.nickName,
            'theurl': res.userInfo.avatarUrl,
            'city': res.userInfo.city,
            'country': res.userInfo.country,
            'gender': res.userInfo.gender,
            //yourtelphone,将作为您自己的唯一身份，每个人都不一样
            //微信小程序可以获取到微信小程序微信用户的唯一opendid，但是比较麻烦，我们就用电话号码作为唯一索引，该号码不再进行验证格式，希望大家填写正确的电话号码，以便区分身份
            "yourtelphone": '13123733417'
          },
          success: function (res) {
            console.log(res.data);
          }
        })
      }
    })
  },
  globalData: {

  },
  GetfenleiData: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/getfenleilist',
        method: 'get',
        data: {},
        success: function (res) {
          that.globalData.fenlei = res.data;
          resolve();
        }
      });
    });
  },
  GetwriterData: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/getwriters',
        method: 'get',
        data: {},
        success: function (res) {
          that.globalData.writer = res.data;
          resolve();
        }
      });
    });
  },
  GetbooksData: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/getbooks',
        method: 'get',
        data: {},
        success: function (res) {
          that.globalData.books = res.data;
          resolve();
        }
      });
    });
  },
  GetusersData: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/personimages',
        method: 'get',
        data: {
          "yourtelphone": '13123733417'
        },
        success: function (res) {
          that.globalData.users = res.data;
          resolve();
        }
      });
    });
  },
  GethostData: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/gethostser',
        method: 'get',
        data: {
        },
        success: function (res) {
          that.globalData.host = res.data;
          resolve();
        }
      });
    });
  },
})