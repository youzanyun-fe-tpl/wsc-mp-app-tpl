/** <!-- version: 0.0.1 --> */
// app.js
import YouZanYunSdk from './youzanyun-sdk/index';
import { SyncEvent } from './youzanyun-sdk/events';
import EcloudSpaceBiz from './ecloud-space';

App({
  onLaunch() {
    const youZanYunSdk = new YouZanYunSdk(this);
    this.getYouZanYunSdk = function() {
      return youZanYunSdk;
    };

    // 注册登录成功事件
    youZanYunSdk.app.__setEvent('ecloud:login:success', new SyncEvent());

    // 执行定制代码
    EcloudSpaceBiz && EcloudSpaceBiz(youZanYunSdk);

    setTimeout(() => {
      youZanYunSdk.app.trigger('ecloud:login:success', {});
    }, 500);
  },
  globalData: {}
});
