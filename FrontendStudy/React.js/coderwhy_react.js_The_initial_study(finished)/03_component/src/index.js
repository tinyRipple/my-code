import React from 'react'
import ReactDOM from 'react-dom'

import AppClass from './01_组件的定义方式/AppClass'
import AppFunction from './01_组件的定义方式/AppFunction'
import RenderReturn from './01_组件的定义方式/render函数返回值'
import App02 from './02_组件的生命周期/App'
// import App03 from './03_组件间的通信/01_组件间的嵌套'
// import App03 from './03_组件间的通信/02_父传子通信-类组件'
import App03 from './03_组件间的通信/03_父传子通信-函数组件'
import App04 from './03_组件间的通信/04_父传子通信-属性验证'
import App05 from './03_组件间的通信/05_子传父通信'
import App from './04_组件间的通信案例/App'
import App06 from './05_React实现插槽功能/App'
// import App07 from './06_跨组件通信/01_跨组件通信-props'
// import App07 from './06_跨组件通信/02_跨组件通信-context使用类组件'
// import App07 from './06_跨组件通信/03_跨组件通信-context使用函数组件'
import App07 from './06_跨组件通信/04_跨组件通信-多个context'
// import App08 from './07_setState的使用/01_setState的使用'
// import App08 from './07_setState的使用/02_setState的异步更新'
// import App08 from './07_setState的使用/03_setState的同步更新'
// import App08 from './07_setState的使用/04_setState的数据合并'
// import App08 from './07_setState的使用/05_setState的合并'
import App08 from './07_setState的使用/06_setState的数据不可变性'
// import App09 from './08_React性能优化/01_shouldComponentUpdate'
// import App09 from './08_React性能优化/02_PureComponent'
import App09 from './08_React性能优化/03_memo'
import App10 from './09_全局事件总线events/01_events'
// import App11 from './10_在React中使用ref获取原生DOM元素/01_ref的使用'
// import App11 from './10_在React中使用ref获取原生DOM元素/02_ref的类型'
import App11 from './10_在React中使用ref获取原生DOM元素/03_ref的转发'
// import App12 from './11_受控组件和非受控组件/01_受控组件'
// import App12 from './11_受控组件和非受控组件/02_受控组件select'
// import App12 from './11_受控组件和非受控组件/03_受控组件对多个输入的处理'
import App12 from './11_受控组件和非受控组件/04_非受控组件'
// import App13 from './12_高阶组件/01_高阶组件的定义方式'
// import App13 from './12_高阶组件/02_高阶组件的应用-增强props1'
// import App13 from './12_高阶组件/03_高阶组件的应用-增强props2'
// import App13 from './12_高阶组件/04_高阶组件的应用-渲染判断鉴权'
import App13 from './12_高阶组件/05_高阶组件的应用-生命周期劫持'
import App14 from './13_portals/01_portals'
import App15 from './14_fragment/01_fragment'
import App16 from './15_StrictMode/01_StrictMode'

import './css/index.css'

ReactDOM.render(
  <div>
    <AppClass />
    <AppFunction />
    <RenderReturn />
    <hr />
    <App02 />
    <hr />
    <App03 />
    <hr />
    <App04 />
    <hr />
    <App05 />
    <hr />
    <App />
    <hr />
    <App06 />
    <hr />
    <App07 />
    <hr />
    <App08 />
    <hr />
    <App09 />
    <hr />
    <App10 />
    <hr />
    <App11 />
    <hr />
    <App12 />
    <hr />
    <App13 name="zhengdonghui" />
    <hr />
    <App14 />
    <hr />
    <App15 />
    <hr />
    <App16 />
  </div>,
  document.getElementById('root')
)
