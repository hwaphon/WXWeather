// components/weather-info.js
const Icon = require('../assets/icon.js');
const Util = require('../utils/utils.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      observer: function (weather) {
        this.setData({
          icon: weather.cond_code_d,
          date: this.formateDate(weather.date),
          tmp_max: weather.tmp_max,
          tmp_min: weather.tmp_min
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon: '999',
    date: '',
    tmp_max: 0,
    tmp_min: 0
  },
  methods: {
    formateDate (dateStr) {
      let date = new Date(dateStr);
      return Util.getWeek(date.getDay());
    }
  }
})
