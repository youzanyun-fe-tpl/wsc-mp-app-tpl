Page({
  data: {

  },
  onLoad(query) {
    // 不同场景获取订单号方式有区别
    const orderNo = query.order_no || query.orderNo;
  },
});
