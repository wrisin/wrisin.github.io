博客的图片挂了好几个月了，也无心打理，今天有空折腾了一下。

百度了一下，tva1前缀还没有防盗链，准备tva1前缀撑一阵子。

建议开始前看看这篇https://auauau.cn/#!28 操作方法相似。

1.编辑i/md/md.js，替换618行

```
 http[s]{0,1}\\:\\/\\/w[a-z][0-9]{1}.sinaimg.cn\\/ 
```

为

```
http[s]{0,1}\\:\\/\\/[\\w]{3,4}\\.sinaimg\\.cn\\/
```

因为原来的代码只支持w开头的两字母一数字的匹配，例如ww2，不支持像tva1这样三字母一数字的，更改完的代码支持所有形式的前缀了，不知道这样有没有缺点，能用就先用着。

2.进入phpmyadmin，打开SQL，依次执行以下代码：

```
UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://ws3.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://wx1.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://ws4.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://wx3.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://wx3.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://wx2.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://ws1.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://ws2.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )

UPDATE imouto_article SET TEXT = REPLACE( TEXT, \'https://ww2.sinaimg.cn\', \'https://tva1.sinaimg.cn\' )
```

我本来想用正则一步到位，但是一下子代码出错把所有文章里的\"0\"替换成了链接，最后绞尽脑汁才想到办法恢复回来。所以老老实实一个一个改。以此类推，把上面没有而你在用的前缀替换到上面的语句执行。

然后万事大吉。

# 2019年10月12日更新

1.编辑i/md/md.js

替换618行

```
http[s]{0,1}\\:\\/\\/[\\w]{3,4}\\.sinaimg\\.cn\\/
```

为

```
http[s]{0,1}\\:\\/\\/[\\w]{3,5}\\.sinaimg\\.cn\\/
```

前缀tva3,tvax4,tva2,tvax1目前均处于奔放状态。

<!-- ##{"timestamp":1570537675}## -->