const app = getApp();
const pageLinks = app.getYouZanYunSdk().getPageLinks();
const userService = app.getYouZanYunSdk().getUserService();

Page({
  data: {

  },

  onLoad() {
    console.log('pageLinks', pageLinks);
    userService.fetchPoints().then(res => {
      console.log('fetchPoints', res);
    });
  },
});
