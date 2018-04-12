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
    locationIcon: Icon.LOCATION,
    province: Map.PROVINCE
  },
  onLoad: function () {
    Location
      .getLocation()
      .then((res) => {
        return { lng: res.longitude, lat: res.latitude };
      })
      .then((location) => {
        return this.updateWeather(location);
      })
      // 获取 statusbar 高度
      let _this = this;
      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            statusBarHeight: res.statusBarHeight
          });
        },
      });
  },
  cityChange: function (event) {
    let address = event.detail.value.join('');
    this.updateWeather(address);
  },
  onShareAppMessage: function () {
    return {
      title: '简悦天气，提供简单的天气信息',
      path: '/pages/index/index'
    };
  },
  updateWeather: function (location) {
    return Weather.getNow(location)
      .then((res) => {
        let data = res.data.HeWeather6[0];
        this.setData({
          weatherInfo: {
            tmp: data.now.tmp,
            city: data.basic.parent_city,
            cond_text: data.now.cond_txt
          }
        })
      })
      // 获取未来天气
      .then(() => {
        return Weather.getForecast(location);
      })
      .then((res) => {
        this.setData({
          weatherForecast: res.data.HeWeather6[0].daily_forecast
        });
      });
  }
});
