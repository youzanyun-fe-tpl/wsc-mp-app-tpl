import GoodsPage from '../../../youzanyun-sdk/goods-page/index';

Page({
  onLoad() {
    this.getYunSdk().page.__setData('goodsInfo', GoodsPage.openData.goodsInfo);
  },
  data: {
    goodsInfo: {}
  },
  getYunSdk() {
    return getApp().getYouZanYunSdk();
  }
});
