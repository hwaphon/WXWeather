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

function getLocationName () {
  return new Promise((resolve) => {
    getLocation().then((res) => {
      map.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        success: function (result) {
          resolve(result.result.address_component.city)
        }
      });
    })
  });
}

module.exports = {
  getLocation: getLocation,
  getLocationName: getLocationName
}