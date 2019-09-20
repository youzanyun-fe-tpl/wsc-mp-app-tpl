import args from 'weapp-ecloud-utils/args';

export default function (sdk) {
  const user = sdk.app.user;

  // test
  // let count = 0;
  // 获取登录参数
  // const launchOptions = sdk.getLaunchOptionsSync();

  sdk.app.on('ecloud:login:success', userInfo => {
    judgeUserNavigate(userInfo);
  });

  function judgeUserNavigate(userInfo) {
    console.log('-------global judgeUserNavigate', userInfo.mobile);
    // 如果是已注册
    if (userInfo.mobile && count === 0) {
      count++;
      let redirectUrl = '';
      if (launchOptions.path) {
        redirectUrl = args.add('/' + launchOptions.path, launchOptions.query);
      }
      sdk.navigate('login', { redirectUrl }, 'redirectTo');
    } else {
      // TODO nothing 正常加载
    }
  }
}
