import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
}

//这里为注册写一个网络请求接口
export function signup(data) {
  return request({
    url: "/auth/register",
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

export function logout(token) {
  var data={
    "token":token
  }
  return request({
    url: "/auth/logout",
    method: "post",
    data
  });
}
