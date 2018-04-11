//index.js
const Location = require('../../utils/location.js');
const Weather = require('../../utils/weather.js');
const Icon = require('../../assets/icon.js');

Page({
  data: {
    bg: 'http://p70i67yyb.bkt.clouddn.com/pexels-photo-454498.jpeg',
    statusBarHeight: 0,
    weatherInfo: {},
    weatherForecast: [],
    locationIcon: Icon.LOCATION
  },
  onLoad: function () {
    let _this = this;
    Location.
      getLocationName().
      then((res) => {
        return res;
      }).
      then((res) => {
        Weather.getWeather(res).then((res) => {
          _this.setData({
            weatherInfo: res,
            weatherForecast: _this.formateData(res.data.forecast)
          });
        });
      });

      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            statusBarHeight: res.statusBarHeight
          });
        },
      });
  },
  formateData: function (infos) {
    let { length } = infos;
    let result = [];
    let reg = /\d+/g;
    for (let i = 0; i < length; i++) {
      result.push({
        date: infos[i].date.slice(-3),
        type: infos[i].type,
        low: (infos[i].low.match(reg))[0],
        high: (infos[i].high.match(reg))[0]
      });
    }
    return result;
  },
  selectCity: function () {
    console.log('select');
  }
});
