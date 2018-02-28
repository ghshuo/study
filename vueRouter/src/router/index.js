import Vue from 'vue' // 引入vue
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld' //引入vue-router
import Second from '@/components/second'
import Third from '@/components/third'
import Fourth from '@/components/fourth'

Vue.use(Router) // Vue全局使用Router

export default new Router({
    routes: [{ // 每一个链接都是一个对象
        path: '/', // 链接路径
        name: 'HelloWorld', // 路由名称，
        component: HelloWorld // 对应的组件模板
    }, {
        path: '/Second',
        component: Second,
        children: [
            { path: '/', name: 'HelloWorld/Second', component: Second },
            { path: 'third', name: 'Third', component: Third },
            { path: 'Fourth', name: 'Fourth', component: Fourth }

        ]
    }]
})