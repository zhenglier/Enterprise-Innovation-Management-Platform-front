import request from "@/utils/request";

export function searchUser(name) {
  return request({
    url: "/vue-element-template/search/user",
    method: "get",
    params: { name },
  });
}

export function transactionList(query) {
  return request({
    url: "/vue-element-template/transaction/list",
    method: "get",
    params: query,
  });
}
