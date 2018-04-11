const Assets = require('../assets/const.js');

function getWeather (city) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: Assets.WEATHER,
      data: {
        city: city
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        resolve(res.data);
      },
      fail: function (res) { reject(res) },
      complete: function (res) { },
    });
  });
}

module.exports = {
  getWeather
}