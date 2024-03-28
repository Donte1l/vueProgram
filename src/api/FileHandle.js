import request from "@/utils/request";

// 下载文件
export function installFile(id) {
  return request({
    url: "/files/download/" + id,
    method: "get",
  });
}
