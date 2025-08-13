镜像：CentOS 7.2 64bit

工具：putty,WinSCP

不同于传统的手动搭建，我使用的是Linux Game Server Managers提供的一键安装，此方法更适合新手，不容易出现各种各样的问题，而且自带各种命令，很方便。

安装步骤参考Game Server Managers的官网。

注意：在执行完2. Download and run the script.这一步骤后，请修改linuxgsm.sh里面的相关配置，比如房间名，默认地图，最大玩家人数等，这些配置在安装后更改较为困难，所以要提前修改。人数可设置为为16，32，48，64。

由于天朝网络问题，可能会安装失败，我的方法是切换回最高权限，删除用户以及目录下所有文件重新安装。

```
su - root
userdel -r cssserver
```

当成功安装后，执行命令启动服务器，就可以登陆游戏了。公网IP后面加上":27015"即可。

接下来是安装插件，我们要用到WinSCP。

用WinSCP可以像FTP一样直接拖动和修改文件，比putty方便。

我要搭建的是僵尸暴动服，那么他就需要安装插件来实现，而这些插件都是需要平台支持，那就是sourcemod和metamod:source。

安装方法很简单，在文件夹/home/cssserver/serverfiles/cstrike下新建addons，将sourcemod和metamod:source拖进去即可。

到此，插件平台安装完毕。

下篇，我会推荐一些插件，并介绍它们的使用方法。

相关地址：

[Game Server Managers](https://gameservermanagers.com)

[SourceMod](http://www.sourcemod.net)

[Mebamod:Source](http://metamodsource.net)
<!-- ##{"timestamp":1502197860}## -->