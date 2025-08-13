# 思路

1.apktool拆包

2.首先更改AndroidManifest.xml里面的包名

3.全局更改com.xxx.xxxx类似的包名

4.全局更改smali类型代码的包名字符串Lcom/xxx/xxxx

5.全局更改所有com/xxx/xxxx文件夹的名称，因为java文件里面要求包名和文件夹路径要对应

6.更改删除app原本的包名或签名校验相关smali代码

7.apktool打包

# 文章参考

[Android逆向之路---改apk包名、达到多开效果](https://blog.csdn.net/hanchaohao2012/article/details/78068158)
<!-- ##{"timestamp":1525411259}## -->