Component({
  behaviors: [],
  data: {},
  lifetimes: {
    attached: function attached() {
      const yunSdk = this.getYunSdk();
      console.log('delivery: ', yunSdk.page.delivery);
    },
    moved: function moved() {},
    detached: function detached() {}
  },

  ready: function ready() {},

  pageLifetimes: {
    show: function show() {}
  },

  methods: {
    doBuy() {
      console.log('click doBuy');

      const createOrder = this.getYunSdk().page.getProcess('createOrder');
      const getPayWays = this.getYunSdk().page.getProcess('getPayWays');
      const startPay = this.getYunSdk().page.getProcess('startPay');

      // 创建订单
      createOrder().then(() => {
        console.log('onCreateOrderCallback');

        // 创建订单后调用获取支付方式
        getPayWays().then(payWays => {
          console.log('supported payWays', payWays);

          // 准备发起支付
          startPay({ payChannel: 'WX_APPLET' });
        });
      });
    },
    getYunSdk() {
      return getApp().getYouZanYunSdk();
    }
  }
});
