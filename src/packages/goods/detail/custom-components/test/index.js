Component({
  behaviors: [],
  properties: {
    goodsInfo: Object
  },
  data: {},
  lifetimes: {
    attached: function attached() {},
    moved: function moved() {},
    detached: function detached() {}
  },
  ready: function ready() {
    const yunSdk = this.getYunSdk();
    console.log('goodsItem: ', yunSdk.page.goodsItem);
  },
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
