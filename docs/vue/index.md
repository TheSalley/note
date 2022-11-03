# Vue 

## 1、生命周期

| Vue2 | Vue3 | 描述 |
| --- | :---: | --- |
| beforeCreate | - |  实例创建前 |
| created | - | 实例创建后 |
| beforeMount | onBeforeMount | DOM  挂载前调用 |
| mounted | onMounted | DOM挂载完成调用 |
| beforeUpdate | onBeforeUpdate | 数据更新之前调用 |
| updated | onUpdated | 数据更新后调用 |
| beforeDestroy | onBeforeUnmount | 组件销毁前调用 |
| destroted | onUnmounted | 组件销毁完成调用 |

> 流程图
    
![](../imgs/vue/lifecycle.png)

## 2、语法

+ 插值表达式

+ 指令

    + `v-text`
    + `v-html`
    + `v-on` 支持修饰符
    + `v-bind`
    
+ computed 和 watch
    
    + `computed` 是计算属性，用于当一个元素受到多个元素影响的情况。
    + `watch` 是侦听器，用于对某个属性变化需要做出一些处理的时候使用。
    + `computed` 有缓存。
    + `watch` 在页面首次加载时不执行，需要设置立即监听才会执行。设置深度监听才会监听多层级属性变化。

+ class 和 style 绑定

+ 条件渲染（`v-if`）、列表渲染（`v-for`）  

    1. `v-show` 和 `v-if` 的区别

        + `v-show` 通过控制DOM 元素的display 属性，而`v-if` 则是DOM 元素是否创建。
        + 频繁切换状态的地方使用`v-show` 较好。
    2. `v-if` 和 `v-for` 的优先级

        + Vue2 中`v-for` 的优先级更高，同时使用的话会先循环、再判断，导致无论是否需要展示某元素，都会先遍历整个数组。
        + Vue3 中`v-if` 的优先级会更高，同时使用的话会报错。因为`v-if` 先执行的时候还没有拿到这个数组。

+ 表单输入绑定

    + `v-model`

## 3、概念

+ 组件

+ 插槽

+ 插件

+ mixin

+ 深入响应式原理

+ 不同构建版本的Vue

## 4、Vue2 和 Vue3 的区别

+ 写法上：

    + Vue2 采用 `options Api`，Vue3 则是 `composition Api`。

    `options Api` 中`methods`、`data`等都是分散的。而 `composition Api`中根据逻辑功能来组织，我们可以将一个功能所定义的`methods`、`data`等会放在一起。

    + Vue2 中响应式数据放在 `data` 函数里,Vue3 使用`ref`和 `reactive` 将数据声明为响应式。

+ 响应式原理：

    + Vue2 是通过`Object.defineProperty` 对数据进行劫持实现。而Vue3 是通过使用`Proxy` 对数据代理实现的。

+ 生命周期：

    + Vue3 将`beforeCreate` 和 `created` 合并到了`setup` 函数里。

+ 根节点：

    + Vue2 只允许有一个根节点,Vue3 不做要求。

+ 内置组件

    + Vue3 新增了传送组件`Teleport` 和异步依赖处理组件`Supense`


## 5、组件通信

| 方式 | Vue2 | Vue3 |
| --- | --- | --- |
| 父传子 | props | props |
| 子传父 | $emit | emits |
| 父传子 | $attr | attrs |
| 子传父 | $listeners | -（合并到attr） |
| 祖先传子孙 | provide/inject | provide/inject |
| 子组件访问父组件 | $parent | - |
| 父组件访问子组件 | $children | - |
| 访问组件 | $ref | ref |
| 跨组件 | EventBus | mitt |

## 6、插槽

## 7、自定义指令

## 8、nextTick

+ Vue 官方解释：

    在下次DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。

+ 理解：

    Vue 修改`data` 并不会立即触发DOM 更新，而是把需要更新的`watcher` 加入到队列中，然后在合适的时机在`nextTick`中调用这些`watcher` 的更新函数进行DOM 更新。所以在`data` 刚被修改的时候，用户是获取不到更新后的DOM 的，这时候便需要调用`nextTick` 函数获取更新后的DOM。

## 9、Vue2响应式原理

1. Vue2 的响应式原理是根据`Object.defineProperty` 这个api 来对数据进行**劫持**并结合**发布者-订阅者**模式实现的。

2. 首先会使用`Object.defineProperty` 的`get` 函数来对Vue 中的`data` 中的所有属性进行访问劫持，中间会涉及到`data` 中更深层次的属性需要递归调用劫持方法。这里是通过一个`Observer` 类实现的。

3. 劫持到每一个属性后会给这个属性绑定多个订阅者`watcher`，因为一个属性可能被用在很多地方；而这个`watcher` 中则包含更新视图的函数`update`。

4. 