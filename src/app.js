// app.js
import YouZanYunSdk from './youzanyun-sdk/index';

App({
  onLaunch() {
    const youZanYunSdk = new YouZanYunSdk(this);
    this.getYouZanYunSdk = function () {
      return youZanYunSdk;
    };
  },
  globalData: {
  }
});
