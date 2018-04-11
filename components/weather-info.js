// components/weather-info.js
const Icon = require('../assets/icon.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      observer: function (weather) {
        let icon;
        if (weather.type.includes('雨')) {
          icon = Icon.RAINY;
        } else if (weather.type.includes('阴')) {
          icon = Icon.CLOUD;
        } else {
          icon = Icon.SUNNY;
        }
        this.setData({
          'icon': icon
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
