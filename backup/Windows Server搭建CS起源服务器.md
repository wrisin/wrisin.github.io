最近华为云的服务器到期，要把CS起源服务器搬家到京东云。

本来以为在windows server上搭建CS起源服务器很复杂，其实很简单，比linux简单。

1.在服务器上创建个文件夹，比如我在c盘创建文件夹，命名为steamcmd。下载steamcmd.zip，解压，把steamcmd.exe丢进steamcmd文件夹。

2.点开steamcmd.exe，第一次运行后会下载一些必备文件，下载完后输入

```
login anonymous
```

等待登录成功

输入

```
force_install_dir ./css/
```

输入

```
app_update 232330 validate
```

等待下载完毕，估计时间不会短，毕竟天朝网络不太好

等一切就绪后，打开css文件夹，新建一个文本文件，在里面输入

```
c:steamcmdcsssrcds.exe -console -port 27015 -game cstrike +map de_dust2 -maxplayers 10 +sv_pure 1
```

保存，改txt后缀为bat。

到目前为止，服务器基本建成。

运行bat文件启动服务器。

此时可以进游戏看看是否可以搜索到服务器。

没什么技术含量，作为笔记记录一下。

感谢国际友人[@FreLee54](https://www.youtube.com/user/FreLee54)的热心帮助。

参考资料：

[【求精教程】如何建立属于你自己的服务器，如何添加插件！！](https://tieba.baidu.com/p/2897958874)

[steamcmd-css-2013-04-20.pdf](http://www.leemann.se/fredrik/tutorials/steamcmd-css-2013-04-20.pdf)

[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)
<!-- ##{"timestamp":1511621460}## -->