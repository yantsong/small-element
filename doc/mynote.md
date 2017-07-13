# Learn React
#### init
* npm init 
* npm install webpack webpack-dev-devserver --save-dev
* npm i react和reactdom 或者通过webpack的extrenals项来指定[例子](http://www.zhufengpeixun.com/qianduanjishuziliao/Nodejishuziliao/2017-01-17/693.html)
##### --save和--save-dev差别
 --save-dev 是你开发时候依赖的东西，在devDependencies;
 --save 是你发布之后还依赖的东西，在dependencies。
#### npm简写设置
* 设置在package.json中,script字段下
#### 一些语法
* 循环

```
.map((item.index)=>{
    return <tag>{item}</tag>
})
```
#### 生命周期
##### 实例化阶段
* getDefaultProps
设置默认props值，只调用一次
```
相当于在构造函数中继承父级的propos以及执行上下文环境，即等同于:
constructor(props,context){
  super(props,context);
  this.state = xxx//原来的 getinitialstate()
}
```
* getInitalState
初始化state值,实例创建调用一次,已可访问props
PS:在ES6中被取消...需要在constructor中设置
* componentWillMount
将要渲染
* render
  必选的方法，创建虚拟DOM，该方法具有特殊的规则：

  * 只能通过this.props和this.state访问数据
  * 可以返回null、false或任何React组件
  * 只能出现一个顶级组件（不能返回数组）
  * 不能改变组件的状态
  * 不能修改DOM的输出
* componentDidmount
  真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。
**实例化完成后如果有更新则不在执行getDefalutProps,只执行剩下的几个**
##### 存在阶段
* componentWillReceiveProps
  组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state
* shouldComponentUpdate
组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
* componentWillUpdate
接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。(以免造成死循环）
* componentDidUpdata
数据渲染完成
##### 销毁阶段
* componentWillUnmount
组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。

####React性能检测工具
* npminstall **react-addons-perf**
* import 这个工具
* if(_dev_)//在测试环境的话 window.Perf = Perf
* Chrome调试里面Perf.start启动
* 一番疯狂操作
* Perf.stop()结束,就可以看到结果
####React优化插件
* npminstall react-addons-pure-render-mixin,并引用
* 初始化的时候,使用该插件的shouldConponentUpdata覆盖原shouldConponentUpdata,自动检测新值与原值有没有不同
```
getDefaultProps(){
  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdata.bind(this);
}
```
* immutable.js优化
##### 一些ES6
* 通过filter来删除
* 通过数组的length来给数组中的元素动态添加id
#####  redux

应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
惟一改变 state 的办法是触发 action，一个描述发生什么的对象。
为了描述 action 如何改变 state 树，你需要编写 reducers。

基本流程:
0. import creatStore from redux
1. 定义规则 即reducer ,即定义一个函数fn
2. 根据规则生成store,即 let store = createStrore(fn);
3. 定义数据变化后的函数即 store.subscribe(fn)
4. 触发数据变化,即store.dispatch

操作流程:
npm i redux redux-react
####Promise
...
...
#### Fetch
需要安装 wahtwg-fetch,以及 es6-promise
路由转发:webpack中增加:
```
devServer: {  
        //其实很简单的，只要配置这个参数就可以了  
        proxy: {  
            '/engineer/*': {  
                target: 'http://dws.XXXXX.com',  
                secure: false  
            }  
        }  
    }  
```
#### react-router
* install,import { Router,Route,IndexRoute} from 'react-router';
* 配置路由文件
#### 数据传递
父组件写在子组件标签上的名字直接作为子组件的props名 无需定义 
```
父组件:<NowLive courseNow={this.state.data}></NowLive>
子组件:  {this.props.courseNow.length}

```
#### 循环
```
  {this.props.courseNow.map( (item,index) => {
                    return   <div key={index}>//这里加key reactdom比较需要,免报错
                <div className="courselist col-md-3">
                    {item.xx}
                </div>
            </div>
```
 