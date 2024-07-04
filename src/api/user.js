import request from '@/utils/request'

export async function login(data) {
  const ttt = await request({
    url: '/auth/login',
    method: 'post',
    data
  });
  console.log(ttt);
  return ttt;
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function signup(token) {
  return request({
    url: '/vue-admin-template/signup',
    method: 'get',
    params: { token }
  })
}

export async function logout(data) {
  console.log(data)
  data={
    "token":data
  }
  return request({
    url: '/auth/logout',
    method: 'post',
    data
  })
}
