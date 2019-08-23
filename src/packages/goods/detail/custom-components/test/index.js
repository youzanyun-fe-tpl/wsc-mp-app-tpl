Component({
  behaviors: [],
  properties: {
    goodsInfo: Object
  },
  data: {},
  lifetimes: {
    attached: function attached() {
      const yunSdk = this.getYunSdk();
      console.log('goodsItem: ', yunSdk.page.goodsItem);
    },
    moved: function moved() {},
    detached: function detached() {}
  },
  ready: function ready() {},
  pageLifetimes: {
    show: function show() {}
  },
  methods: {
    getYunSdk() {
      return getApp().getYouZanYunSdk();
    },
    showSKU() {
      console.log('goodsItem: ', this.getYunSdk().page.goodsItem);
      const showSKU = this.getYunSdk().page.getProcess('showSKU');
      showSKU('selectSku').then(() => {
        console.log('已经弹起');
      });
    }
  }
});
