1、新建页面，需重新`npm run dev`才可以正常访问新建的页面。

2、`npm run dev`将会自动在浏览器打开页面，如未正常打开，请访问完整的路径`http:// localhost:8091/views/home/list.html`

3、直接使用 cnpm可能会导致依赖不正确。强烈建议给 npm 设置 taobao 的 registry。

npm install --registry=https://registry.npm.taobao.org

``` bash
# 安装依赖
npm install

# 调试环境
npm run dev

# 生产环境
npm run build

```
本地默认访问端口为8091.


在`view`里二级文件夹，一个文件夹就是一个html，`js``vue``html` 都统一放在当前文件夹里，当然你也可以继续放其他的资源，例如css、图片等，webpack会打包到当前模块里。


还有一点要注意的，所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。

## Lib.js库使用

多页面开发，那肯定会涉及到全局都能调用的公共库，或者是把别人封装的库也一起打包在全局公共模块里。

所以在`*.vue`页面里，都统一import了一个文件

```
import Lib from 'assets/js/Lib';
```

这就是全局统一公共模块，我们先看看`Lib.js`里的代码

``` bash
# 导入全局的css
require('assets/css/common.css');
# 导入全局的站点配置文件
import C from './conf';
# 导入全局的共用事件
import M from './common';


```
在`Lib.js`的`M`、`C`都是事件调用简写。如果想调用APP的名称，在`.vue`里可以这么写

``` bash
import Lib from 'assets/js/Lib';
Lib.C.appname;  #蓝橙绿
```

只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
当然你还可以在Lib做一些程序判断，例如权限判断等。

## 公共模块
我们通常会把常用的库都打包成公共模块，`CommonsChunkPlugin` 插件，是一个可选的用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块。最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。这个带来速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。

不同的项目，使用到的插件库数量有所不同，我们可以调整`minChunks`以达到公共模块的大小，文件路径为`/build/webpack.prod.conf.js`，cart+F查找`minChunks`参数，`minChunks: 4` 意思代表为至少被4个页面引用了，就打包进入公共模块，具体的使用方法，可以再详细了解`webpack`中文文档。http://www.css88.com/doc/webpack2/plugins/commons-chunk-plugin/

## 存在的问题
1、多页面可以使用vue-router路由，但是无法使用按需加载，即懒加载，研究过在多页面的路由里按需加载，但从未成功。