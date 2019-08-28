import adaptorComponents from 'constants/adaptor-components';

const app = getApp();

/**
 * 获取用户信息
 */
export function fetchUserInfo() {
  return this.app.request({
    path: '/wscuser/membercenter/userInfo.json',
    method: 'GET',
  })
    .then(res => {
      return Promise.resolve({
        avatar: res.avatar,
        nickName: res.avatar
      });
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 获取签到状态
 */
export function fetchCheckInStatus() {
  return app.request({
    path: 'wscuser/membercenter/checkInStatus.json',
    method: 'GET',
  });
}

/**
 * 获取用户等级信息
 */
export function fetchUserLevel(shopType) {
  return app.request({
    path: 'wscuser/membercenter/level.json',
    method: 'GET',
    query: {
      shopType,
    }
  });
}

/**
 * 获取团长基本信息及店铺的团长加入设置
 */
export function fetchGroupCenterInfo() {
  return app.request({
    path: 'wscuser/membercenter/groupCenterInfo.json',
    method: 'GET',
  });
}

/**
 * 获取用户积分信息
 * @returns{
 *  currentPoints // 当前可用积分
 *  expiredPoints // 已过期的积分
 *  protectedPoints // 保护期内的积分
 *  realPoints // 前端展示的客户'总'积分(可用+保护期)
 *  totalPoints // 历史累计总积分
 *  usedPoints // 已使用的积分
 *  willExpiredInThirtyDaysPoints // 30天内到期的积分
 * }
 */
export function fetchPoints(flag) {
  return app.request({
    path: 'wscuser/membercenter/points.json',
    method: 'GET',
  });
}

/**
 * 获取升级到下一个等级需要的积分
 */
export function fetchNextLevelPoints() {
  return app.request({
    path: 'wscuser/membercenter/nextLevelPoints.json',
    method: 'GET',
  });
}

/**
 * 获取店铺退货地址
 * @returns{
 *  "id":"1111",
 *  "contact_name":"姓名",
 *  "kdt_id":"11111111",
 *  "phone1":"0571",
 *  "phone2":"13333333333",
 *  "area": "浙江省杭州市西湖区",
 *  "county_id":"330106",
 *  "address":"黄龙万科中心",
 *  "notice_mobile":"18733333333",
 *  "show_notice_mobile":"1",
 *  "notice_phone1":"0572",
 *  "notice_phone2":"400123123",
 *  "no_prompt":"1"
 * }
 */
export function fetchCustomerService() {
  return app.carmen({
    api: 'weapp.wsc.shop.returnaddress/1.0.0/get',
  });
}

/**
 * 获取分销员信息
 */
export function fetchSalesmanData() {
  return app.carmen({
    api: 'youzan.salesman.wap.account/1.0.0/get',
  });
}

/**
 * 签到
 */
export function handleCheckIn() {
  return app.request({
    path: 'wscuser/membercenter/checkIn.json',
    method: 'POST',
  })
}

/**
 * 获取状态信息
 * @returns{
 *  stats:{
 *    "points": 6381,  // 金币
 *    "cards": 1,  // 卡
 *    "coupons": 0,  // 券码
 *  }
 * }
 */
export function fetchStats() {
  return app.request({
    path: '/wscuser/membercenter/stats.json',
    method: 'get',
    data: {
      version: app.getVersion() || '',
    }
  });
}

/**
 * 获取余额信息
 */
export function fetchBalance() {
  return app.request({
    path: '/wscuser/membercenter/balance.json',
    method: 'get'
  });
}

/**
 * 获取订单信息
 * @returns{
 *  "confirm": 0,
 *  "paid": 11,  // 待发货
 *  "toPay": 0,  // 待付款
 *  "sent": 0,  // 待收货
 * }
 */
export function fetchOrders() {
  return app.request({
    path: '/wscuser/membercenter/orders.json',
    method: 'get'
  });
}

/**
 * 获取用户购物车商品数量
 * @returns 0
 */
export function fetchCartNum() {
  return app.request({
    path: '/wscuser/membercenter/cart.json',
    method: 'get',
  });
}

/**
 * 获取用户未领取赠品的数量
 * @returns 0
 */
export function fetchPresentCount() {
  return app.request({
    path: '/wscuser/membercenter/present.json',
    method: 'get',
  });
}

/**
 * 获取店铺售后联系方式
 */
export function fetchContact() {
  return app.request({
    path: '/wscuser/membercenter/contact.json',
    method: 'get',
  });
}
