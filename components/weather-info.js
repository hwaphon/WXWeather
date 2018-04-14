// components/weather-info.js
const Icon = require('../assets/icon.js');
const animation = require('../animations/slideDown.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      observer: function (weather) {
        console.log(weather);
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
    tmp_min: 0,
    collapse: true,
    animationData: {}
  },
  methods: {
    formateDate (dateStr) {
      let date = new Date(dateStr);
      let now = new Date();
      if (now.getFullYear() === date.getFullYear() &&
          now.getMonth() === date.getMonth() &&
          now.getDate() === date.getDate()) {
            return '今天';
      }
      return `${date.getMonth()}月${date.getDate()}日`;
    },
    toggleCollapse () {
      if (this.data.collapse) {
        animation.height('280rpx').step();
        this.setData({
          collapse: !this.data.collapse,
          animationData: animation.export()
        });
      } else {
        animation.height('0rpx').step();
        this.setData({
          collapse: !this.data.collapse,
          animationData: animation.export()
        });
      }
    }
  }
})
