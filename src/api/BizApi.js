import request from "@/utils/request";

// 业务id与文件绑定
export function bindFile(data) {
  return request({
    url: "/files/bind",
    method: "post",
    data: data,
  });
}

// 通过业务id删除文件
export function deleteFileByBizId(bizId) {
  return request({
    url: "/files/biz/" + bizId,
    method: "delete",
  });
}
