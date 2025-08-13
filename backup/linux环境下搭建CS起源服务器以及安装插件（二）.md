上篇我们说了怎么搭建服务器以及安装插件平台，这一篇我会列出一些插件和它们的使用方法。

1.cheer!

这是一个嘲笑的插件。当你按J时，会发出笑声或者别的声音。

如果你能看懂英语的话，可以看原帖的使用说明。我这里只说怎么修改嘲笑的音频。

首先，在服务器的sound文件夹中新建文件夹，命名为cheer。将准备好的音频文件上传到cheer文件夹中。

解压文件以后，你可以在addonssourcemodconfigs中找到cheersoundlist.cfg文件，编辑此文件。
```
"CheerSoundsList"
{
"cheer sounds"
{
"cheer sound 1"		"bot/whoo.wav"
"cheer sound 2"		"bot/whoo2.wav"
"cheer sound 3"		"bot/great.wav"
"cheer sound 4"		"bot/oh_yea.wav"
"cheer sound 5"		"bot/oh_yea2.wav"
"cheer sound 6"		"bot/owned.wav"
"cheer sound 7"		"bot/thats_the_way_this_is_done.wav"
"cheer sound 8"		"bot/very_nice.wav"
"cheer sound 9"		"bot/yea_baby.wav"
"cheer sound 10"	"bot/yea_ok.wav"
"cheer sound 11"	"bot/yesss.wav"
"cheer sound 12"	"bot/yesss2.wav"
}
"jeer sounds"
{
"jeer sound 1"		"bot/pain10.wav"
"jeer sound 2"		"bot/pain10.wav"
"jeer sound 3"		"bot/pain10.wav"
"jeer sound 4"		"bot/pain10.wav"
"jeer sound 5"		"bot/pain10.wav"
"jeer sound 6"		"bot/pain10.wav"
"jeer sound 7"		"bot/pain10.wav"
"jeer sound 8"		"bot/pain10.wav"
"jeer sound 9"		"bot/pain10.wav"
"jeer sound 10"		"bot/pain10.wav"
"jeer sound 11"		"bot/pain10.wav"
"jeer sound 12"		"bot/pain10.wav"
}
}
```

修改后面的文件路径为你准备好的音频文件路径。注意：无需加上"sound/"。

示例：

```
"CheerSoundsList"
{
"cheer sounds"
{
"cheer sound 1"		"cheer/cheer_1.wav"
"cheer sound 2"		"cheer/cheer_2.wav"
"cheer sound 3"		"cheer/cheer_3.wav"
"cheer sound 4"		"cheer/cheer_4.wav"
"cheer sound 5"		"cheer/cheer_5.wav"
"cheer sound 6"		"cheer/cheer_6.wav"
"cheer sound 7"		"cheer/cheer_7.wav"
"cheer sound 8"		"cheer/cheer_8.wav"
"cheer sound 9"		"cheer/cheer_9.wav"
"cheer sound 10"	"cheer/cheer_10.wav"
"cheer sound 11"	"cheer/cheer_11.wav"
"cheer sound 12"	"cheer/cheer_12.wav"
"cheer sound 13"	"cheer/cheer_13.wav"
"cheer sound 14"	"cheer/cheer_14.wav"
"cheer sound 15"	"cheer/cheer_15.wav"
}
"jeer sounds"
{
"jeer sound 1"		"cheer/cheer_1.wav"
"jeer sound 2"		"cheer/cheer_2.wav"
"jeer sound 3"		"cheer/cheer_3.wav"
"jeer sound 4"		"cheer/cheer_4.wav"
"jeer sound 5"		"cheer/cheer_5.wav"
"jeer sound 6"		"cheer/cheer_6.wav"
"jeer sound 7"		"cheer/cheer_7.wav"
"jeer sound 8"		"cheer/cheer_8.wav"
"jeer sound 9"		"cheer/cheer_9.wav"
"jeer sound 10"		"cheer/cheer_10.wav"
"jeer sound 11"		"cheer/cheer_11.wav"
"jeer sound 12"		"cheer/cheer_12.wav"
"jeer sound 13"		"cheer/cheer_13.wav"
"jeer sound 14"		"cheer/cheer_14.wav"
"jeer sound 15"		"cheer/cheer_15.wav"
}
}
```

其中，cheer sound是活着的时候发出的声音，jeer sound是死后发出的声音。

然后大功告成，更换地图或重启服务器使插件生效。

2.market

这是一个武器菜单，玩家可以输入!market来购买武器。

编辑addonssourcemodconfigsmarketweapons.txt文件，修改购买菜单，包括武器名称，武器价格，弹药以及弹药价格。

3.thc_rpg

这是一款可以使游戏具有极大趣味性的插件，你可以通过击杀敌人获得经验来升级，升级会获得技能点，你可以使用技能点来升级技能，比如吸血，轻功，远跳等等。

但是作者已经停更并在帖子中删除这款插件，转而开始开发新的RPG插件--smrpg。但是对于cs起源僵尸的老玩家而言，旧版的thc_rpg相对于smrpg更加的简洁，耐玩性更强。如果你追求更丰富的功能，请留意smrpg这款插件。

由于作者删掉了这款插件，我费了千辛万苦在毛子的网站上找到了这个插件，我会贴在下面。

技能的配置文件在addonssourcemodconfigs	hc_rpg目录中，可以禁用技能，限制使用的队伍，技能最大等级，升级技能所需点数等。

disable后的0改为1，即可禁用技能。比如，空间互换这个技能就比较变态，我想禁用，就可以修改positionswap.txt中"disable"后的"0"为"1"。

由于我使用的是插件的默认配置，并未仔细研究，所以这个软件的食用方法以后更新。

(2017.11.27更新)

忘记了重要的一步，就是在addons/sourcemod/configs/databases.cfg中加入以下代码来连接数据库。

```
"thc_rpg"
	{
		"driver"			"sqlite"
		"database"			"thc_rpg"
	}
```
4.sm_skinchooser（推荐2.7版本）

这款插件可以让你在游戏中更换人物模型。

所以我要讲一下如何添加模型。

以2.7版本为例：

首先，我们要找到一款想要添加的模型。

我建议下载模型作者打包好的模型。这里我推荐一个模型下载网站gamebanana，我会把打包模型的下载地址贴在下面。

下载好模型包后，解压打开。其中gameserver中的文件是要上传到服务器的，而downloadserver中的文件，是要传到fastdl文件夹的。

（可能你不懂fastdl是什么，我会再写一篇文章详细的说明fastdl怎么安装配置）

打开addonssourcemodconfigssm_skinchooserskinchooserdownloads.ini，将所需下载的模型文件路径全部添加到这里（打包模型文件里会有一个.txt文本文件，其中会列出所有的路径，你可以直接从中复制所有文件的路径到这里）

打开addonssourcemodconfigssm_skinchooserskins.ini，修改.mdl文件的路径为你的模型的.mdl文件的路径。（打包模型文件里会有一个.txt文本文件，其中会列出所有的路径，你可以直接从中复制.mdl文件的路径到skins.ini里）

可以参考一下我的修改。

原版

```
//Configure your menu here
"Models"
{
"Admin Models"
{
"Admin" "t"
"Team1"
{
"Snowtrooper"
{
"path" "modelsplayer/4p/4p_snowtrooper/4p_snowtrooper.mdl"
}
}
"Team2"
{
"Rodian"
{
"path" "modelsplayer/4p/4p_rodian/4p_rodian.mdl"
}
}
}
"Public Models"
{
"Admin" ""
"Team1"
{
"Tusken"
{
"path" "modelsplayer/4p/4p_tusken/4p_tusken.mdl"
}
"Stormt"
{
"path" "modelsplayer/4p/4p_stormt/4p_stormt.mdl"
}
"Imperial"
{
"path" "modelsplayer/4p/4p_imperial/4p_imperial.mdl"
}
"Chewbacca"
{
"path" "modelsplayer/4p/4p_chewbacca/4p_chewbacca.mdl"
}
}
"Team2"
{
"Rebel"
{
"path" "modelsplayer/4p/4p_rebel/4p_rebel.mdl"
}
"Jawa"
{
"path" "modelsplayer/4p/4p_jawa/4p_jawa.mdl"
}
"C3PO"
{
"path" "modelsplayer/4p/4p_c3po/4p_c3po.mdl"
}
"Bobafett"
{
"path" "modelsplayer/4p/4p_bobafett/4p_bobafett.mdl"
}
}
}
"Reserved Models"
{
"Admin" "Member"
"Team1"
{
"Yoda"
{
"path" "modelsplayer/4p/4p_yoda/4p_yoda.mdl"
}
}
"Team2"
{
"Darth Vader"
{
"path" "modelsplayer/4p/4p_vader/4p_vader.mdl"
}
}
}
}
//If you use Fastdownload make sure all your model and material files are on your webserver!!!
```

修改后：

```
//Configure your menu here
"Models"
{
"Admin Models"
{
"Admin" "t"
"Team1"
{
"Snow Miku V2"
{
"path" "models/player/knifelemon/snow_miku_v2.mdl"
}
}
"Team2"
{
"Snow Miku V2"
{
"path" "models/player/knifelemon/snow_miku_v2.mdl"
}
}
}
"Public Models"
{
"Admin" ""
"Team1"
{
"Smith"
{
"path" "models/player/pil/agent_smith/smith.mdl"
}
}
"Team2"
{
"Hatsune Miku"
{
"path" "models/player/knifelemon/miku.mdl"
}
"Sea Miku"
{
"path" "models/player/knifelemon/sea_miku.mdl"
}
"Snow Miku"
{
"path" "models/player/knifelemon/snow_miku_v2.mdl"
}
"Neo"
{
"path" "models/player/techknow/neo_v2/neo_v2.mdl"
}
}
}
"Reserved Models"
{
"Admin" "Member"
"Team1"
{
"Yoda"
{
"path" "models/player/4p/4p_yoda/4p_yoda.mdl"
}
}
"Team2"
{
"Darth Vader"
{
"path" "models/player/4p/4p_vader/4p_vader.mdl"
}
}
}
}
//If you use Fastdownload make sure all your model and material files are on your webserver!!!
```

Public Models是公共模型，Admin Models是管理员模型。如果不是管理员，管理员模型的选项不会在模型菜单显示。

Team1是恐怖分子家，Team2是反恐精英家。

"Team1"{ }，中括号内千万不能留空，不然会出现未知错误。

插件就先介绍这么多。下一篇将讲到如何安装配置fastdl。

相关地址：

[cheer!](https://forums.alliedmods.net/showthread.php?p=522416)

[market](https://forums.alliedmods.net/showthread.php?p=648749)

[thc_rpg作者页](https://forums.alliedmods.net/showthread.php?t=123596)

[thc_rpg下载页](http://www.valve-server.ru/css/cssplugins/981-thc-rpg-mod-v086-stable.html)

[sm_skinchooser](https://forums.alliedmods.net/showthread.php?p=780243)

[gamebanana](http://gamebanana.com/skins/cats/678)
<!-- ##{"timestamp":1502902320}## -->