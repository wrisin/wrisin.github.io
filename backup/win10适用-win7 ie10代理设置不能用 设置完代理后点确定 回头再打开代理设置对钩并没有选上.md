（开55R和V2都代理不了，手机上能用，电脑上就用不了，于是找解决方法，所有方法用尽了，只有这个方法有效。）

IE代理服务器设置失效，比如勾选上了代理设置，或者改了代理服务器的端口，改好后关闭重新打开，发现没有更改设置，

可以注册表里cmd运行窗口输入`regedit`

HKEY_CURRENT_USER/Software/Microsoft/Windows/CurrentVersion/Internet Settings/Connections

把整个connections文件夹删除

---

版权声明：本文为CSDN博主「AddisonJ」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/AddisonDing/article/details/79895059

<!-- ##{"timestamp":1569207402}## -->