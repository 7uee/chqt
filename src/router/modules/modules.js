import layout from '@/layout/index';
//路由的name不能相同，否则会导致找不到路径
const bigdataRouters={
    path: '/gzqt',
    component: layout,
    // redirect: '/bigdata/index1',
    name: 'gzqt',
    meta: {
        title: '初始化项目',
        icon: 'bigdata'
    },
    children: [
        {
            path: 'index',  //首页
            component: () => import('@/views/index/index'),
            name: 'indexf',
        },
        {
            path: 'list',  //首页
            component: () => import('@/views/list/list'),
            name: 'listf',
        },
    ]
}
export default bigdataRouters;