import service from '@/utils/request'
//获取菜单
export function getMenu() {
    return service({
        url: '/index/menu',
        method: 'get'
    });
}
//获取下一级地区信息
export function getDistByLevel(params) { 
    return service({
      url: '/dist',
      method: 'get',
      params
    })
}
//获取首页数据
export function getIndex() {
    return service({
        url: '/index',
        method: 'get'
    });
}
//获取筛选项
export function getFilter(moduleNo) {
    return service({
        url: '/index/contentList/filter/'+moduleNo,
        method: 'get'
    });
}

//获取列表菜单tab
export function contentListTabs(moduleNo) {
    return service({
        url: '/index/contentListTabs/'+moduleNo,
        method: 'get'
    });
}
//获取当前地区
export function getDistInfo(distNo) {
    return service({
        url: '/index/distInfo/'+distNo,
        method: 'get',
    })
}
//获取卡片信息
export function getCardInfo(keyword,distNo) {
    return service({
        url: '/index/card/'+keyword+'/'+distNo,
        method: 'get',
    })
}

//获取列表页
export function getList(data,params ) {
    data.pageNum=data.pageNum===undefined?1:data.pageNum;
    data.pageSize=data.pageSize===undefined?20:data.pageSize
    return service({
        url: '/index/contentList/' + data.moduleNo + "/" + data.pageNum+ "/" + data.pageSize,
        method: 'get',
        params
    })
}
//获取详细数据
export function getDetails(id) {
    return service({
        url: `/index/detail/${id} `,
        method: 'get',
    })
}
//获取地区
export function getdist() {
    return service({
        url: '/dist',
        method: 'get',
    })
}

// 财务公开
export function getCwgkDetails(id) {
    return service({
        url: `/index/openReportRecord/${id} `,
        method: 'get',
    })
}

export function getOrderDetails(params) { //详细页
    return service({
      url: '/index/detail'+'/'+params.moduleNo+'/'+params.id,
      method: 'get'
    })
}