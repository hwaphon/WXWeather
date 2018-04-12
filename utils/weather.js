const Assets = require('../assets/const.js');
const NetWork = require('../utils/network.js');

class Weather {
  constructor () {
    this.location = {};
    this.URL = {
      'FORECAST': 'https://free-api.heweather.com/s6/weather/forecast',
      'NOW': 'https://free-api.heweather.com/s6/weather/now'
    };
  }

  getForecast (location) {
    return NetWork
      .get(this.URL.FORECAST, {
        key: Assets.WEATHERKEY,
        location: `${location.lng},${location.lat}`
      })
      .then((res) => res)
      .catch((res) => res);
  }

  getNow (location) {
    return NetWork
      .get(this.URL.NOW, {
        key: Assets.WEATHERKEY,
        location: `${location.lng},${location.lat}`
      })
      .then((res) => res)
      .catch((res) => res);
  }
}

module.exports = new Weather();