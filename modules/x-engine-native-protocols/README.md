## desc
protocols 组件是一个纯接口集合.为了解决藕系统内冲突的功能所设计.
所有引擎里用到的第三方库都需要做为 protocols 接口.

当组件开发人员需要重写系统使用的接口时,则需要继承并覆写.

注意:

被复写的组件js api层对外暴露的接口应该保持一样.

实现了相同 protocol 的组件只有一个会被初始化.
