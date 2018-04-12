class NetWork {
  request (url, data, method) {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        method,
        dataType: 'json',
        success: function (res) {
          resolve(res);
        },
        fail: function (res) {
          reject(res);
        }
      });
    });
  }

  get (url, data) {
    return this.request(url, data, 'GET');
  }
}

module.exports = new NetWork();