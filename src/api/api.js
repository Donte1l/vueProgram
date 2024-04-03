import request from "@/utils/request";

// 多条件统计全服/玩家/筛选/分页宝可梦信息接口
// 调用此接口,可以获得玩家/捕捉/统计信息。
export function maxPokeCatchCount(params) {
  return request({
    url: "/GaoPoke/api/maxPokeCatchCount",
    method: "get",
    params: params,
  });
}

// 统计服务器上下线次数/全服捕捉次数/今日捕捉次数/信息接口
export function sumPokeCount(params) {
  return request({
    url: "/GaoPoke/api/sumPokeCount",
    method: "get",
    params: params,
  });
}

// 服务器状态监控/在线玩家列表/MOTD/VERSION/调度接口
// 调用此接口,可以获得玩家/捕捉/统计信息。
export function timeGetServerInfo(params) {
  return request({
    url: "/GaoPoke/api/timeGetServerInfo",
    method: "get",
    params: params,
  });
}

// 玩家上下线记录/日期/玩家名称/分页查询接口
export function serverOnlineQuitMsg(params) {
  return request({
    url: "/GaoPoke/api/serverOnlineQuitMsg",
    method: "get",
    params: params,
  });
}

export function serverInfoCheck() {
  return request({
    url: "/GaoPoke/api/serverInfoCheck",
    method: "get",
  });
}
