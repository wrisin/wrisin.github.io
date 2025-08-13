前几日终于等到K3梅林固件，虽然不太完美，但是不影响使用。所以就刷了。

但是可能是没刷好，每次重启都无法正常进入路由，捅菊花清nvram后等很长时间才能进。

而且，此固件为原版梅林，不带软件中心，安装软件成了我这样的小白的问题。

所以，决定放弃梅林，刷软件丰富的LEDE。

刷机方法学会之后会发现很简单。

推荐进cfe用tftp的刷法。

关键是刷回来的时候，一定要小心。

我的刷回方法是246root→217root→lede-factory→其它版本的lede

如果你只想回官方，直接刷246root就行了，要注意的是一定要清除nvram。

因为246root中无法web升级lede，所以要降级成217。

网上有人通过重命名打法绕过文件检测直接刷回了217，估计是官方版本的可以。

246root和217root都用cfe+tftp刷，lede-factory（过渡包）直接在后台的“手动升级”上传刷。

其它版本的lede直接在lede-factory里上传更新即可。

仔细阅读下面相关地址里的教程。

《斐讯K3 官方固件root版本 安装插件 entware》将两种刷法说的非常详细了。

lede-factory（过渡包）在《[07.24更新] K3 Lede V2.2 固件发布，内置koolddns等koolshare特..》放出的网盘里可以下载到。

 

相关地址：

[送你们个K3梅林，官方CFE适配,屏幕已关。](http://www.right.com.cn/forum/thread-249788-1-1.html)

[斐讯K3 官方固件root版本 安装插件 entware](http://www.right.com.cn/forum/thread-212725-1-1.html)

[[07.24更新] K3 Lede V2.2 固件发布，内置koolddns等koolshare特..](http://koolshare.cn/thread-104733-1-1.html)
<!-- ##{"timestamp":1503588000}## -->