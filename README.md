此小程序已经在发布，可以在小程序中搜索简悦天气进行访问，也可以扫描下面的二维码进行访问。于2018.04.15已停止开发。

## 介绍

简悦天气目前支持查看未来七天的天气情况，不过暂不支持 pm2.5，空气质量等其他信息。本程序的数据来自[和风天气]http://www.heweather.com/()，申请认证开发者账户后一天可免费调用接口1w+次，且可以获得七天内的天气情况，出行建议等信息，预览图如下所示：

![image](http://p70i67yyb.bkt.clouddn.com/preview2.jpg)

## 相关技术

下面介绍一些在开发过程中遇到的问题，技术，总结等。

#### 关于 Navigation 自定义

问题：由于本程序的上半部分是一张图片，为了让 `Navigation` 的背景一致，将 `navigationStyle` 设置为 `custom`。虽说是自定义，但是微信会保留右上角胶囊状按钮，所以涉及一个问题，如果我们想要在原来的 `NavigationTitle` 位置放置城市信息（与右上角胶囊状保持垂直对齐），该怎么设置？

解决方法：在 `onLoad` 声明周期内调用 `getSystemInfo()` 拿到 `statusBarHeight`，然后为包含城市信息的 `view` 设置 `margin-top: statusBarHeight`，最后为该 `view` 设置高度，调整居中效果。

#### 使用 Promise

问题：关于位置信息的获取，天气信息的获取，不应该将这些功能放置在某个页面下，而是应该提取出来作为辅助函数，只需要引入就可以直接使用。因为上述功能都是需要异步获取数据的，在 `ES5` 中我们需要使用传递回调函数的方法，在 `ES6` 中可以使用 `Promise`，之后又可以使用 `Async/Await`。小程序开发工具中有一项设置可以将 `ES6` 代码转 `ES5`。

解决方法：直接在函数中 `return new Promise((resolve) => {})`, 然后将具体的方法放在大括号内，成功则调用 `resolve()` 即可。

#### 位置信息的获取

问题：微信自带的省市区选择器得到的结果是一个包含位置信息的数组，但是如果想获取天气信息，最好能使用地址的经纬度信息，如何转换呢？

解决方法：采用腾讯位置服务提供的[地址解析](http://lbs.qq.com/qqmap_wx_jssdk/method-geocoder.html)

#### 数据处理

问题：在组件的 `{{}}` 不能调用方法对传入的数据进行处理。

解决方法：`observer` 方法会在输入传入成功的时候调用，在这个方法内可以对数据进行处理，然后将处理过后的数据设置在 `data` 里。
