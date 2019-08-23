Component({
  behaviors: [],
  properties: {
    goodsInfo: Object
  },
  data: {},
  lifetimes: {
    attached: function attached() {
      debugger
      const yunSdk = this.getYunSdk();
      console.log('goodsInfo: ', yunSdk.page.goodsInfo);
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
    }
  }
});
