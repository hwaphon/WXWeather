const qqMapWX = require('../libs/qqmap-wx-jssdk.min.js');
const Assets = require('../assets/const.js');

const map = new qqMapWX({
  key: Assets.LKEY
});

function getLocation () {
  return new Promise((resolve) => {
    wx.getLocation({
      success: function(res) {
        resolve(res)
      }
    });
  });
}

function getLocationLngLat (address) {
  return new Promise((resolve, reject) => {
    map.geocoder({
      address: address,
      success: function (res) {
        resolve(res);
      },
      fall: function (res) {
        reject(res);
      }
    });    
  });
}

module.exports = {
  getLocation,
  getLocationLngLat
}