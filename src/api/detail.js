export function fetchEnterpriseDetails(id) {
  return request({
    url: "/vue-element-template/declar_approval/in_approval",
    method: "get",
    params: { id },
  });
}
