// pages/buycar/buycar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thebookid:0,
    getbookslist: [],
    getuserlist: [],
    thebookmoneys:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      thebookid:options.bookid,
      getuserlist: app.globalData.users,
      getbookslist: app.globalData.books,
    },function() {
      let cmp = 0;
      for (let a of this.data.getbookslist )
      {
        if(a.id == this.data.thebookid)
        {
          cmp = a.money
        }
      }
      this.setData({
        thebookmoneys: cmp
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})