笔记记录形式，尽量详尽。

笔记中所使用的工具会贴在下面。

修复的问题模型类型：模型缺少贴图，但materials文件夹中有贴图材质，我从gamebanana下载的模型多半是这种。

一、反编译

1.打开L4D2模型反编译文件夹里的Crowbar.exe。

![a15b4afegy1fo83zfggtjj20g405emye.jpeg](http://img.juihsin.wang/images/664e6f6f7ee92044555ebe60dc4b1830e1f814b4.jpeg)

2.在MDL File选项点Browse，找到model文件夹下的xxx.mdl。

![a15b4afegy1fo840is9mgj207q037we9.jpeg](http://img.juihsin.wang/images/168b4006ea7c34b88a0f5035a9cf580e4cd4febe.jpeg)

![a15b4afegy1fo8417cenhj20g4042ab3.jpeg](http://img.juihsin.wang/images/63fea59c0b1553bd379e4a082c5a7016580d5b81.jpeg)

3.在选好MDL文件之后点Decompile MDL File，然后会出现一个日志，这说明已经反编译成功了。

![a15b4afegy1fo841yf607j20dm05k0sk.jpeg](http://img.juihsin.wang/images/10377ac9e6acf1b4301ea852cb6d0dc986ed8ece.jpeg)

注：看到这些SMD和两个文件夹吧，logs是记录反编译的日志，而anims是反编出来的动作，那么可以尽情享受来用这些模型吧！

![a15b4afegy1fo843f013uj20fn0ac3yo.jpeg](http://img.juihsin.wang/images/a185a1ea8347c6a84ec7dcc80cc520187721a25d.jpeg)

二、修复贴图

1.打开你的MS3D(Milk shape 3D的简称). 点击 “File---import----half-life SMD”导入你反编译好的SMD文件。

![a15b4afegy1fo848n0j05j20q40aogm1.jpeg](http://img.juihsin.wang/images/6af9f1e3f132e894adeecb1e01c189c99c3a9c57.jpeg)

2.贴上正确的贴图

![a15b4afegy1fo83ksr3e2j209a08bmx1.jpeg](http://img.juihsin.wang/images/ebea252e921726b47b5bde59c5c3e5aa06bbb4f1.jpeg)

![a15b4afegy1fo83lqn3ytj20710d174h.jpeg](http://img.juihsin.wang/images/164779decdd21e880387fd8bf0074d809ce7e24f.jpeg)

选择materials文件夹里的vtf文件，这时发现右下角的模型已经正常显示了。

3.“File---export----half-life SMD”导出并覆盖原来的SMD文件。

三、编译

打开L4D2模型反编译文件夹里的Crowbar.exe，切换到Compile选项。Game to compile for选择如图所示，QC file of the custom model选项点Browse，找到model文件夹下的xxx.qc。（如果反编译时输出文件夹是你自己填的另外一个文件夹，那么选择输出文件夹中的QC文件，如果你没动输出文件夹选项，请无视）在选好QC文件之后点Compile for Model，然后会出现一个日志，编译成功（如果失败请查看日志提示）。此时编译好的模型会输出到你的游戏文件夹中，参考：X:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Source\\cstrike，从models和materials文件夹拷贝出即可。

![a15b4afegy1fo84cdd86gj20lq0fmq3r.jpeg](http://img.juihsin.wang/images/9ca13fd9b52d9a6374bae65261f65428aa0acfd8.jpeg)

(文章内容整理自下方帖子)

相关链接：

[【工具分享】L4D2武器模型反编译工具](https://tieba.baidu.com/p/2803593599)

[【教程贴】CSO新枪的手臂修复,贴图修正](https://tieba.baidu.com/p/1867955796)

[【教程】------------------MS3D拼抢图文教程---------------------](https://tieba.baidu.com/p/1041960867)

[游戏模型3D制作软件(Milkshape 3D)1.8.5汉化版](http://www.pc6.com/softview/SoftView_89313.html)

<!-- ##{"timestamp":1517940810}## -->