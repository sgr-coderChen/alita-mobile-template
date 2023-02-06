## 基于 Alita 的 移动端H5模板

### 技术栈

- ts + react + react hook + Alita架构
- [umi@4 文档](https://umijs.org/docs/tutorials/getting-started)
- [antd-mobile-v5](https://mobile.ant.design/zh/components/icon)
- [Alita框架文档](https://alitajs.com/zh-CN/docs/tutorials/getting-started)

### 注意点
- Alita内置的umi@4，umi@3和umi@4路由这块有比较大的改动
- 约定式路由不支持[id].tsx, 要写成$index.tsx(看demo-list的例子)
- 状态管理使用了内置的dva
- 该项目用于移动端，需要自定义配置布局 见app.tsx
- 页面标题，这里貌似没法通过路由静态属性配合onRouteChange 来动态设置title。需要自己配置每个页面的title在app.tsx的 titleList配置

### 数据共享API （useModel）

- 没怎么用过，目前我的理解是类似vue的observable即小型状态管理器


### [umi@3的模板](https://github.com/sgr-coderChen/antd-mobile-h5-template)