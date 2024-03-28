import request from "@/utils/request";

// 文件列表
export function getFileList() {
  return request({
    url: "/files",
    method: "get",
  });
}

// 文件信息
export function getFileInfo(id) {
  return request({
    url: "/files/" + id,
    method: "get",
  });
}

// 通过文件id删除文件
export function deleteFile(id) {
  return request({
    url: "/files/" + id,
    method: "delete",
  });
}
