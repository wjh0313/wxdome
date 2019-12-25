// pages/indexwriter/indexwriter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theid:0,
    getwriterlist:[],
    getbooklist:[],
    thebooks:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      theid: options.id-1,
      getwriterlist: app.globalData.writer,
      getbooklist:app.globalData.books,
    },function() {
      let num = 0;
      for (let a of this.data.getbooklist  )
      {
        if (a.writername == this.data.getwriterlist[this.data.theid].name)
        {
          num++;
        }
      }
      this.setData({
        thebooks:num
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