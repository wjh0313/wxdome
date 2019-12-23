//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    thefenleilist:[],
    thewriterlist:[],
    thebookslist:[],
    thehostlist:[],
  },
  // getimage:function() {
  //   var that = this
  //   wx.request({
  //     url: 'https://wujunhui.xyz/personimages',
  //     // header: { "Content-Type": "application/x-www-form-urlencoded" },
  //     method: "get",
  //     data: {
  //       "yourtelphone": '13123733417'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         theurl: res.data[0].touxiang
  //       })
  //       console.log(res.data[0].touxiang);
  //     }
  //   })
  // },
  onLoad: function (options) {
    var that = this;
    app.GetfenleiData().then((res) => {
      that.setData({
        thefenleilist: app.globalData.fenlei
      });
    });
    app.GetwriterData().then((res) => {
      that.setData({
        thewriterlist: app.globalData.writer
      });
    });
    app.GetbooksData().then((res) => {
      that.setData({
        thebookslist: app.globalData.books
      });
    });
    app.GethostData().then((res) => {
      that.setData({
        thehostlist: app.globalData.host
      });
    });

    // app.GetusersData().then((res) => {
    //   that.setData({
    //     theuserlist: app.globalData.users
    //   });
    // });
    /**
     * 获取用户信息
     */
    // var that = this;
    // wx.getUserInfo({
    //   success: function (res) {
    //     // console.log(res.userInfo);
    //     wx.request({
    //       url: 'https://wujunhui.xyz/landreg',
    //       // header: { "Content-Type": "application/x-www-form-urlencoded" },
    //       method: "get",
    //       data: {
    //         'name': res.userInfo.nickName,
    //         'theurl': res.userInfo.avatarUrl,
    //         'city': res.userInfo.city,
    //         'country': res.userInfo.country,
    //         'gender': res.userInfo.gender,
    //         //yourtelphone,将作为您自己的唯一身份，每个人都不一样
    //         //微信小程序可以获取到微信小程序微信用户的唯一opendid，但是比较麻烦，我们就用电话号码作为唯一索引，该号码不再进行验证格式，希望大家填写正确的电话号码，以便区分身份
    //         "yourtelphone": '13123733417'
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //       }
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://wujunhui.xyz/getfenleilist',
    //   // header: { "Content-Type": "application/x-www-form-urlencoded" },
    //   method: "get",
    //   data: {
    //   },
    //   success: function (res) {
    //     var thefenleilist = 'thefenleilist'
    //     that.setData({
    //       [thefenleilist]:res.data
    //     })
    //     // console.log(res.data);
    //   }
    // })
    // wx.request({
    //   url: 'https://wujunhui.xyz/getwriters',
    //   // header: { "Content-Type": "application/x-www-form-urlencoded" },
    //   method: "get",
    //   data: {
    //   },
    //   success: function (res) {
    //     var thewriterlist = 'thewriterlist'
    //     that.setData({
    //       [thewriterlist]: res.data
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://wujunhui.xyz/getbooks',
    //   // header: { "Content-Type": "application/x-www-form-urlencoded" },
    //   method: "get",
    //   data: {
    //   },
    //   success: function (res) {
    //     var thebookslist = 'thebookslist'
    //     that.setData({
    //       [thebookslist]: res.data
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://wujunhui.xyz/gethostser',
    //   // header: { "Content-Type": "application/x-www-form-urlencoded" },
    //   method: "get",
    //   data: {
    //   },
    //   success: function (res) {
    //     var thehostlist = 'thehostlist'
    //     that.setData({
    //       [thehostlist]: res.data
    //     })
    //   }
    // })
    
  },
  onShow:function () {

  }
})
