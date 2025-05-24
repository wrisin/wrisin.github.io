![Image](https://github.com/user-attachments/assets/3cb21332-2484-4a28-958b-4ec52ed3d356)

话不多说，直接上步骤（以默认模板为例）。

1.编辑index.html，替换`http://gravatar.duoshuo.com`为`//secure.gravatar.com/avatar`

2.编辑i/cmts.js，替换`http://gravatar.duoshuo.com`为`//secure.gravatar.com/avatar`

3.编辑i/md/md.js，替换618行`http`为`https`

4.进入phpmyadmin，打开SQL，执行以下代码

```UPDATE `imouto_article` SET TEXT = REPLACE( TEXT, \'http://ww2.sinaimg.cn\', \'https://tva1.sinaimg.cn\' ) ;```

5.编辑.htaccess，插入以下代码

```RewriteEngine On\nRewriteCond %{HTTP:KERSSL} !on\nRewriteRule ^(.*)$ https://你的域名/$1 [R,L]```
<!-- ##{"timestamp":1485431789}## -->
# 2018年12月8日更新

妹Blog貌似进行了一些小更新，重新发一下更好的解决方法（数字对应原本步骤，其余不变。）

3.编辑i/md/md.js，替换618行`https\\:\\/\\/ww[0-9]{1}\\.sinaimg\\.cn\\/`为`http[s]{0,1}\\:\\/\\/w[a-z][0-9]{1}\\.sinaimg\\.cn\\/`

这样的好处是无论是http的微博图片还是https的微博图片都可以正常显示，同时微博更新了二级域名，不再只是ww2。

# 2019年10月8日更新

（数字对应原本步骤，其余不变。）

3.编辑i/md/md.js，替换618行`http[s]{0,1}\\:\\/\\/w[a-z][0-9]{1}\\.sinaimg\\.cn\\/`为`http[s]{0,1}\\:\\/\\/[/w]{3,4}\\.sinaimg\\.cn\\/`