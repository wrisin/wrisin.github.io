笔记记录形式，尽量详尽。

笔记中所使用的工具会贴在下面。

修复的问题模型类型：模型缺少贴图，但materials文件夹中有贴图材质，我从gamebanana下载的模型多半是这种。

一、反编译

1.打开L4D2模型反编译文件夹里的Crowbar.exe。

<img width="580" height="194" alt="Image" src="https://github.com/user-attachments/assets/d3406067-d784-47a0-8dd3-852090c71ff6" />

2.在MDL File选项点Browse，找到model文件夹下的xxx.mdl。

<img width="278" height="115" alt="Image" src="https://github.com/user-attachments/assets/2f10f9de-8896-49d6-83b2-19b8ba0c9221" />

<img width="580" height="146" alt="Image" src="https://github.com/user-attachments/assets/1a2e969a-90d3-4dd3-b641-40b29b5646e4" />

3.在选好MDL文件之后点Decompile MDL File，然后会出现一个日志，这说明已经反编译成功了。

<img width="490" height="200" alt="Image" src="https://github.com/user-attachments/assets/3cd3b010-1c07-49df-8345-1d3bb80de552" />

注：看到这些SMD和两个文件夹吧，logs是记录反编译的日志，而anims是反编出来的动作，那么可以尽情享受来用这些模型吧！

<img width="563" height="372" alt="Image" src="https://github.com/user-attachments/assets/35af63a5-1c8b-4534-9120-9d110aac5b27" />

二、修复贴图

1.打开你的MS3D(Milk shape 3D的简称). 点击 “File---import----half-life SMD”导入你反编译好的SMD文件。

<img width="940" height="384" alt="Image" src="https://github.com/user-attachments/assets/b69fd5d8-656b-433d-b8a8-b4f31ed4337e" />

2.贴上正确的贴图

<img width="334" height="299" alt="Image" src="https://github.com/user-attachments/assets/7d52ca44-25a9-40d9-aad7-3cd66c0861a8" />

<img width="253" height="469" alt="Image" src="https://github.com/user-attachments/assets/92e91b26-f892-4aa7-a001-a4b1f47ed847" />

选择materials文件夹里的vtf文件，这时发现右下角的模型已经正常显示了。

3.“File---export----half-life SMD”导出并覆盖原来的SMD文件。

三、编译

打开L4D2模型反编译文件夹里的Crowbar.exe，切换到Compile选项。Game to compile for选择如图所示，QC file of the custom model选项点Browse，找到model文件夹下的xxx.qc。（如果反编译时输出文件夹是你自己填的另外一个文件夹，那么选择输出文件夹中的QC文件，如果你没动输出文件夹选项，请无视）在选好QC文件之后点Compile for Model，然后会出现一个日志，编译成功（如果失败请查看日志提示）。此时编译好的模型会输出到你的游戏文件夹中，参考：X:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Source\\cstrike，从models和materials文件夹拷贝出即可。

<img width="782" height="562" alt="Image" src="https://github.com/user-attachments/assets/6a48b220-f9e2-48bd-8ae1-cc3c2f45f7b6" />

(文章内容整理自下方帖子)

相关链接：

[【工具分享】L4D2武器模型反编译工具](https://tieba.baidu.com/p/2803593599)

[【教程贴】CSO新枪的手臂修复,贴图修正](https://tieba.baidu.com/p/1867955796)

[【教程】------------------MS3D拼抢图文教程---------------------](https://tieba.baidu.com/p/1041960867)

[游戏模型3D制作软件(Milkshape 3D)1.8.5汉化版](http://www.pc6.com/softview/SoftView_89313.html)

<!-- ##{"timestamp":1517940810}## -->