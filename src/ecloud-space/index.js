export default function (sdk) {
  const user = sdk.app.user;

  sdk.app.on('ecloud:login:success', userInfo => {
    judgeUserNavigate(userInfo);
  });

  function judgeUserNavigate(userInfo) {
    console.log('-------global judgeUserNavigate', userInfo.mobile);
    // 如果是已注册
    if (userInfo.mobile) {
      let redirectUrl = '';
      sdk.navigate('login', { redirectUrl }, 'redirectTo');
    } else {
      // TODO nothing 正常加载
    }
  }
}
