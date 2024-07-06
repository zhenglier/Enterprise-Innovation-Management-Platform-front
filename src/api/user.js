import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/vue-admin-template/user/login",
    method: "post",
    data,
  });
}

//这里为注册写一个网络请求接口
export function signup(data) {
  return request({
    url: "/vue-admin-template/user/signup",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post",
  });
}
