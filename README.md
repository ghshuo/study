# study
学习笔记

# vue官网地址：https://cn.vuejs.org/
vue学习笔记地址： https://ghshuo.github.io/study/vue/vueStudy.html
 生命周期
 ajax、 
 vue实例的属性和方法
 自定义指令
 过度动画
 组件
   
     
       1.自定义  创建组件
            Vue.component('my-component', {
                // 选项
            })
          2* 全局组件，可以在所有vue实例中使用
          Vue.component('my-hello',{
                template:'<---h4>{{name}}<--/h4>',
                data:function(){
                    return {
                        name:'小耿'
                    }
                }
          })
  
          3* 局部组件，只能在当前vue实例中使用
            var appz1=new Vue({
                el:'#appz1',
                data:{
                    name:'tom'
                },
                components: {
                    'my-world':{
                        template:'<--h4>我是一个局部组件<--/h4>'
                    }
                }
            })
  2.引用模板

            奖组件内容放到模板<template></template>中并引用

            <div id="itany">
                <my-hello></my-hello>
                <my-hello></my-hello>
            </div>

            <template id="wbs">
                <!-- <template>必须有且只有一个根元素 -->
                <div>
                    <h3>{{msg}}</h3>
                    <ul>
                        <li v-for="value in arr">{{value}}</li>
                    </ul>
                </div>
            </template>

            <script>
                var vm=new Vue({
                    el:'#itany',
                    components:{
                        'my-hello':{
                            name:'wbs17022',  //指定组件的名称，默认为标签名，可以不设置
                            template:'#wbs',
                            data(){
                                return {
                                    msg:'欢迎来',
                                    arr:['tom','jack','mike']
                                }
                            }
                        }
                        
                    }
                });	
            </script>
        
3.动态组件

              <component :is=""></component> 多个组件使用同一个挂在点，然后动态的在他们之间进行切换
             <keep-alive></keep-alive> 使用keep-alive组件缓存非活动组件，可以保留状态，避免重新渲染，默认每次都会销毁非活动组件并重新创建
            
            <keep-alive>
                <component :is="currentView">
                    <!-- 非活动组件将被缓存！ -->
                </component>
            </keep-alive>


路由
 
# es6学习笔记地址：https://ghshuo.github.io/study/es6/index.html

let
const
变量的解构赋值
symbol
set
weakset
map
Iterator
Promise
箭头函数 = >
class类
