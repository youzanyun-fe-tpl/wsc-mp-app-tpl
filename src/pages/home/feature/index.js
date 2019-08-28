Page({
  data: {
    components: [ // 数组中的item 会作为component-data属性传入组件中， 字段值与pc端保持一致。
      // 修改这部分数据可以进行自定义组件测试开发
      {
        "type": "custom_test",
        "text": "1元抽奖"
      },
      {
        "type": "custom_goods",
        "text": "0元抽奖"
      },
      {
        "type": "custom_goods",
        "text": "5元抽奖"
      }
    ]
  },
  onLoad() {
  },
});
