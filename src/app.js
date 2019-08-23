/** <!-- version: 0.0.1 --> */
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
