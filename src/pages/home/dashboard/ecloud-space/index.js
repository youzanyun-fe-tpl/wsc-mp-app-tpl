export default function (sdk) {
  const user = sdk.app.user;

  sdk.page.on('beforeFetchHomepage', alias => {
    startJudgeUserNavigate(alias);

    // 阻止正常首页加载，为自定义页面做准备
    return { stop: false };
  });

  /**
   * 根据用户状态做跳转
   */
  function startJudgeUserNavigate() {
    // 已登录
    console.log('-------startJudgeUserNavigate', user.openId);
    if (user.openId) {
      judgeUserNavigate(user);
    } else {
      sdk.app.on('ecloud:login:success', userInfo => {
        judgeUserNavigate(userInfo);
      });
    }
  }

  function judgeUserNavigate(userInfo) {
    console.log('-------judgeUserNavigate', userInfo.mobile);
    // 如果是已注册
    if (userInfo.mobile) {
      // 模拟商家获取alias逻辑
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('dtRwe2jwlt');
        }, 100);
      }).then(alias => {
        sdk.page
          .getProcess('fetchSpecificAlias')(alias);
      }).catch(() => {
        // 如果没有获取到alias, 那就返回空的alias，会继续请求首页
        sdk.page
          .getProcess('fetchSpecificAlias')('');
      });
    } else {
      // 跳转登录页
      sdk.navigate('login', { redirectUrl: '/pages/home/feature/index?alias=dtRwe2jwlt' });
    }
  }
}
