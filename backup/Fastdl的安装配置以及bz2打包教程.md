上一篇中提及了Fastdl，但是并未讲Fastdl是干什么用的。

正如它的名字，Fastdl全名Fast DownLoad，即快速下载。

因为游戏下载地图和素材时会限速，所以绕过游戏内下载，转而连接到游戏外来下载素材和地图，加快进入游戏的速度。

Fastdl其实没有那么神秘高深，它只是一个名词，原理就是建立一个可以访问的站点，压缩打包好的素材和地图放入站点，然后服务器指向这个站点来进行下载，所以谈不上安装。

我们接下来要做的，就是建立一个站点。

`yum -y install httpd`

等安装完成以后，打开网页看看是否已经生效。

生效后，放一边，我们先来打包素材和地图。

gameserver自带了一个命令来打包素材和地图。

`./cssserver fastdl`

静静等待打包结束，打开winscp，然后会在/home/cssserver文件夹中看到public_html文件夹，里面会有一个fastdl文件夹，所有打包好的东西都在里面。

接下来，修改/etc/httpd/conf/httpd.conf，将第119行，124行，131行的路径修改成/home/cssserver/public_html。

119行：

`DocumentRoot \"/home/cssserver/public_html\"`

124行：

`<Directory \"/home/cssserver/public_html\">`

131行

`<Directory \"/home/cssserver/public_html\">`

putty登录服务器，输入命令重启httpd

`service httpd restart`

重启完后，打开网址，看看是否已经可以访问fastdl文件夹。

最后，修改/home/cssserver/serverfiles/cstrike/cfg/css-server.cfg，sv_allowdownload设置为0，sv_downloadurl后填上你的网址+fastdl文件夹路径。

示例：

```
sv_allowdownload 0
sv_downloadurl "http://xxx.xxx.xxx.xxx/fastdl/"
```

然后更换游戏地图或者重启游戏服务器使更改生效。

到此Fastdl配置完成。

但是，自带的Fastdl打包，并不能打包sound文件夹，而且Fastdl只支持bz2格式的压缩包。

所以，这就需要我们自己打包。

我们需要用到bz2打包工具，这里我推荐Peazip。

右键所需打包的文件，Peazip>Add to archive，格式选择BZip2，其它保持默认选项，然后点击确定就打包完成了。

注意：文件需要一一打包，不是整体选中打包。目前没有找到批量打包的方法，所以只能一个一个打包。

把打包好的文件上传到站点。要保持下载文件的路径与服务器上的一致。

今天就讲到这里吧。

相关地址：

[PeaZip](http://www.peazip.org)
<!-- ##{"timestamp":1502985660}## -->