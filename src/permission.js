import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import axios from "axios";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login","/signup",]; // no redirect whitelist

//导航守卫，所有路由跳转经过这里
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();
  var valid=false;
  if(hasToken){
    await axios.get('http://localhost:8080/auth/check', {
      params:{
        "token":hasToken
      }
      })  
    .then(response => {  
      // console.log(response.data);
      valid=response.data;
    });
  }
  
  //是否有token
  if (hasToken && valid) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasGetUserInfo = store.getters.name;
      //如果有用户名称
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // get user info
          // await store.dispatch("user/getInfo");

          next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
