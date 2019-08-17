/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [
	[{
			"basic": true,
			"name": "2016单曲集",
			"singer": "许嵩",
			"img": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
		},
		{
			"name": "Syrup",
			"singer": "Stwo",
			"img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Tf7Kg3YR68X.jpg?max_age=2592000",
			"src": "http://puv6112u1.bkt.clouddn.com/Syrup.m4a",
			"lrc": "[ti:今年勇]\n[ar:许嵩]\n[al:今年勇]\n[by:]\n[offset:0]\n[00:00.22]今年勇 - 许嵩\n[00:00.42]词：许嵩\n[00:00.55]曲：许嵩\n[00:00.69]制作人：许嵩\n[00:01.10]\n[00:24.56]功名桥\n[00:26.27]世俗道\n[00:27.82]年少难免走一遭\n[00:30.86]\n[00:31.82]有人哭\n[00:33.75]有人笑\n[00:35.16]笑的也不见得逍遥\n[00:38.19]\n[00:39.15]迹晦光韬\n[00:41.34]不代表\n[00:43.22]豪情已折耗\n[00:45.32]\n[00:46.22]拿得起当年勇\n[00:47.93]\n[00:48.58]傲视群雄\n[00:50.08]\n[00:50.65]不足道\n[00:53.39]\n[00:54.53]今朝有酒醉\n[00:55.72]醉庆同袍沙场归\n[00:57.44]\n[00:58.11]天公爱作美\n[00:59.47]清风皓月任我飞\n[01:01.75]受命于临危\n[01:03.19]自揄功成身不退\n[01:05.54]神武走一回\n[01:08.64]\n[01:32.11]功名桥\n[01:33.11]\n[01:33.87]世俗道\n[01:35.31]年少难免走一遭\n[01:38.65]\n[01:39.39]有人哭\n[01:40.70]\n[01:41.31]有人笑\n[01:42.71]笑的也不见得逍遥\n[01:45.71]\n[01:46.79]迹晦光韬\n[01:48.04]\n[01:48.65]不代表\n[01:50.04]\n[01:50.59]豪情已折耗\n[01:52.99]\n[01:53.79]拿得起当年勇\n[01:55.32]\n[01:56.10]傲视群雄\n[01:57.41]\n[01:58.09]不足道\n[02:01.13]\n[02:02.00]今朝有酒醉\n[02:03.23]醉庆同袍沙场归\n[02:04.94]\n[02:05.56]天公爱作美\n[02:07.00]清风皓月任我飞\n[02:08.76]\n[02:09.29]受命于临危\n[02:10.68]自揄功成身不退\n[02:13.04]神武走一回\n[02:16.16]\n[02:16.81]今朝有酒醉\n[02:18.16]醉庆同袍沙场归\n[02:20.58]天公爱作美\n[02:21.92]清风皓月任我飞\n[02:24.31]受命于临危\n[02:25.64]自揄功成身不退\n[02:28.08]神武走一回\n[02:30.89]\n[02:46.99]今朝有酒醉\n[02:48.23]醉庆同袍沙场归\n[02:50.59]天公爱作美\n[02:51.93]清风皓月任我飞\n[02:53.85]\n[02:54.39]受命于临危\n[02:55.66]自揄功成身不退\n[02:58.09]神武走一回\n[03:01.08]\n[03:01.84]今朝有酒醉\n[03:03.24]醉庆同袍沙场归\n[03:04.99]\n[03:05.59]天公爱作美\n[03:06.94]清风皓月任我飞\n[03:09.30]受命于临危\n[03:10.63]自揄功成身不退\n[03:13.08]神武走一回\n[03:16.19]\n[03:16.88]神武走一回"
		},
		{
			"name": "漫步人生路",
			"singer": "邓丽君",
			"img": "http://puv6112u1.bkt.clouddn.com/%E9%82%93%E4%B8%BD%E5%90%9B.jpg",
			"src": "http://puv6112u1.bkt.clouddn.com/%E6%BC%AB%E6%AD%A5%E4%BA%BA%E7%94%9F%E8%B7%AF.mp3",
			"lrc": "[ti:今年勇]\n[ar:许嵩]\n[al:今年勇]\n[by:]\n[offset:0]\n[00:00.22]今年勇 - 许嵩\n[00:00.42]词：许嵩\n[00:00.55]曲：许嵩\n[00:00.69]制作人：许嵩\n[00:01.10]\n[00:24.56]功名桥\n[00:26.27]世俗道\n[00:27.82]年少难免走一遭\n[00:30.86]\n[00:31.82]有人哭\n[00:33.75]有人笑\n[00:35.16]笑的也不见得逍遥\n[00:38.19]\n[00:39.15]迹晦光韬\n[00:41.34]不代表\n[00:43.22]豪情已折耗\n[00:45.32]\n[00:46.22]拿得起当年勇\n[00:47.93]\n[00:48.58]傲视群雄\n[00:50.08]\n[00:50.65]不足道\n[00:53.39]\n[00:54.53]今朝有酒醉\n[00:55.72]醉庆同袍沙场归\n[00:57.44]\n[00:58.11]天公爱作美\n[00:59.47]清风皓月任我飞\n[01:01.75]受命于临危\n[01:03.19]自揄功成身不退\n[01:05.54]神武走一回\n[01:08.64]\n[01:32.11]功名桥\n[01:33.11]\n[01:33.87]世俗道\n[01:35.31]年少难免走一遭\n[01:38.65]\n[01:39.39]有人哭\n[01:40.70]\n[01:41.31]有人笑\n[01:42.71]笑的也不见得逍遥\n[01:45.71]\n[01:46.79]迹晦光韬\n[01:48.04]\n[01:48.65]不代表\n[01:50.04]\n[01:50.59]豪情已折耗\n[01:52.99]\n[01:53.79]拿得起当年勇\n[01:55.32]\n[01:56.10]傲视群雄\n[01:57.41]\n[01:58.09]不足道\n[02:01.13]\n[02:02.00]今朝有酒醉\n[02:03.23]醉庆同袍沙场归\n[02:04.94]\n[02:05.56]天公爱作美\n[02:07.00]清风皓月任我飞\n[02:08.76]\n[02:09.29]受命于临危\n[02:10.68]自揄功成身不退\n[02:13.04]神武走一回\n[02:16.16]\n[02:16.81]今朝有酒醉\n[02:18.16]醉庆同袍沙场归\n[02:20.58]天公爱作美\n[02:21.92]清风皓月任我飞\n[02:24.31]受命于临危\n[02:25.64]自揄功成身不退\n[02:28.08]神武走一回\n[02:30.89]\n[02:46.99]今朝有酒醉\n[02:48.23]醉庆同袍沙场归\n[02:50.59]天公爱作美\n[02:51.93]清风皓月任我飞\n[02:53.85]\n[02:54.39]受命于临危\n[02:55.66]自揄功成身不退\n[02:58.09]神武走一回\n[03:01.08]\n[03:01.84]今朝有酒醉\n[03:03.24]醉庆同袍沙场归\n[03:04.99]\n[03:05.59]天公爱作美\n[03:06.94]清风皓月任我飞\n[03:09.30]受命于临危\n[03:10.63]自揄功成身不退\n[03:13.08]神武走一回\n[03:16.19]\n[03:16.88]神武走一回"
		},
		{
			"name": "法国十三天",
			"singer":"Paul Mauriat",
			"src": "http://puv6112u1.bkt.clouddn.com/%E6%B3%95%E5%9B%BD%E5%8D%81%E4%B8%89%E5%A4%A9.m4a",
			"img": "https://y.gtimg.cn/music/photo_new/T002R300x300M000000quhm00n7rtK.jpg?max_age=2592000",
			"lrc": "[ti:江湖（网剧《画江湖之不良人》主题曲）][ar:许嵩][al:江湖][by:许嵩][offset:0][00:00.08]江湖 （《画江湖之不良人》超级网剧主题曲） - 许嵩[00:10.00]词：许嵩[00:11.00]曲：许嵩[00:43.55]今夕是何夕[00:46.76]晚风过花庭[00:49.10]飘零 予人乐后飘零[00:56.41]故地是何地[00:59.44]死生不复回[01:02.12]热血 风干在旧恨里[01:08.16]衣锦夜行[01:10.20]当一生尘埃落定[01:14.19]飞鸽来急[01:16.56]那落款沾染血迹[01:21.07]夜半嘱小徒复信[01:24.99]言师已故去[01:27.88]星云沉默江湖里[01:34.83]孤雁飞去 红颜来相许[01:40.24]待到酒清醒[01:42.61]她无影 原来是梦里[01:47.52]恩怨散去[01:50.65]刀剑已归隐[01:53.07]敬属江上雨[01:55.45]寒舟里 我独饮[02:24.99]衣锦夜行[02:27.06]当一生尘埃落定[02:31.03]飞鸽来急[02:33.43]那落款沾染血迹[02:37.81]夜半嘱小徒复信[02:41.81]言师已故去[02:44.65]星云沉默江湖里[02:51.64]孤雁飞去 红颜来相许[02:57.11]待到酒清醒[02:59.35]她无影 原来是梦里[03:04.28]恩怨散去[03:07.48]刀剑已归隐[03:09.81]敬属江上雨[03:12.27]寒舟里 我独饮[03:36.42]孤雁飞去 红颜来相许[03:41.71]待到酒清醒[03:44.16]她无影 原来是梦里[03:48.96]恩怨散去[03:52.22]刀剑已归隐[03:54.51]敬属江上雨[03:56.97]寒舟里 我独饮[04:04.73]我独饮"
		}
	],
	[{
			"basic": true,
			"name": "不如吃茶去",
			"singer": "许嵩",
			"img": "http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_644097_0.jpg"
		},
		{
			"name": "等到烟火清凉",
			"src": "http://ws.stream.qqmusic.qq.com/7214464.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:等到烟火清凉]\n[00:01.30]等到烟火清凉\n[00:03.35]作词：许嵩 \n[00:05.20]作曲：许嵩\n[00:07.05]演唱：许嵩\n[01:23.62]天干物燥\n[01:26.96]小心火烛\n[01:30.32]天干物燥\n[01:33.64]小心火烛\n[01:37.29]天干物燥\n[01:40.57]小心火烛\n[01:43.97]天干物燥\n[01:47.43]小心火烛\n[01:51.03]天干物燥\n[01:54.42]小心火烛\n[01:57.76]天干物燥\n[02:01.01]小心火烛\n[02:04.73]天干物燥\n[02:07.97]小心火烛\n[02:11.39]天干物燥\n[02:15.01]小心火烛\n[02:45.75]天干物燥\n[02:49.10]小心火烛\n[02:52.65]小心火烛"
		},
		{
			"name": "山水之间",
			"src": "http://ws.stream.qqmusic.qq.com/7062415.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:山水之间]\n[00:38.02]昨夜同门云集 推杯又换盏\n[00:43.82]清朝茶凉酒寒 豪言成笑谈\n[00:49.57]半生累尽徒然\n[00:52.52]碑文完美有谁看\n[00:55.42]隐居山水之间誓与浮名散\n[01:03.84]湖畔青石板上一把油纸伞\n[01:09.79]旅人停步折花淋湿了绸缎\n[01:15.59]满树玉瓣多傲然\n[01:18.49]江南烟雨却痴缠\n[01:21.39]花飞雨追一如尘缘理还乱\n[01:27.34]落花雨 你飘摇的美丽\n[01:32.89]花香氤 把往日情勾起\n[01:38.70]我愿意 化浮萍躺湖心\n[01:44.50]只陪你 泛岁月的涟漪\n[02:16.55]古木檀香小筑经文诵得缓\n[02:22.10]锦服华裳一炬粗袖如心宽\n[02:27.90]林中抚琴曲委婉\n[02:30.75]群山听懂我悲欢\n[02:33.65]泪如雨落才知过往剪不断\n[02:39.52]落花雨 你飘摇的美丽\n[02:45.22]花香氤 把往日情勾起\n[02:51.07]我愿意 化浮萍躺湖心\n[02:56.77]只陪你 泛岁月的涟漪\n[03:28.53]落花雨 你飘摇的美丽\n[03:34.37]花香氤 把往日情勾起\n[03:40.23]我愿意 化浮萍躺湖心\n[03:45.93]只陪你 泛岁月的涟漪\n[03:51.83]落花雨 你飘摇在天地\n[03:57.43]晚风急 吹皱芳华太无情\n[04:03.28]我愿意 化流沙躺湖堤\n[04:09.09]只陪你 恭候春夏的轮替\n[04:14.99]落花雨水深藏山水里\n[04:20.61]落花雨水深藏在我心"
		},
		{
			"name": "七夕",
			"src": "http://ws.stream.qqmusic.qq.com/7117101.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:七夕]\n[00:22.58]江畔暮雨纷纷 \n[00:24.53]夕阳西沉\n[00:26.39]津渡烛影深深 \n[00:28.15]是我在等\n[00:30.00]你歌声犹绕耳 \n[00:32.00]清风在侧\n[00:33.18]恍然发觉 \n[00:33.78]琴案已蒙尘\n[00:52.74]当日罗带轻分缘定今生\n[00:56.24]时光一去如梭似你穿针\n[01:00.22]魁星未拜 \n[01:00.92]禅门苔上屐痕\n[01:03.26]到访三五痴心人\n[01:11.50]夜幕垂鹊桥会 \n[01:13.15]七夕的念想\n[01:15.05]皎月归我轻随 \n[01:16.85]烟火对影赏\n[01:18.81]小城老街上 \n[01:20.67]有情人执手同徜徉\n[01:26.27]夜幕垂鹊桥会 \n[01:28.18]七夕的念想\n[01:30.06]你没归我独醉 \n[01:31.91]情话无人讲\n[01:33.81]也就不用讲 \n[01:35.62]且把浓情化作诗两行 \n[01:56.27]江畔暮雨纷纷 \n[01:58.18]夕阳西沉\n[01:59.98]津渡烛影深深 \n[02:01.78]是我在等\n[02:03.73]你歌声犹绕耳 \n[02:05.89]清风在侧\n[02:07.04]恍然发觉 \n[02:07.94]琴案已蒙尘\n[02:11.20]当日罗带轻分缘定今生\n[02:15.05]时光一去如梭似你穿针\n[02:18.76]魁星未拜 \n[02:19.71]禅门苔上屐痕\n[02:22.45]到访三五痴心人\n[02:30.26]夜幕垂鹊桥会 \n[02:31.76]七夕的念想\n[02:33.76]皎月归我轻随 \n[02:35.66]烟火对影赏\n[02:37.51]小城老街上 \n[02:39.56]有情人执手同徜徉\n[02:44.91]夜幕垂鹊桥会 \n[02:46.92]七夕的念想\n[02:48.77]你没归我独醉 \n[02:50.67]情话无人讲\n[02:52.52]也就不用讲 \n[02:54.37]且把浓情化作诗两行 \n[02:59.92]夜幕垂鹊桥会 \n[03:01.92]七夕的念想\n[03:03.72]皎月归我轻随 \n[03:05.81]烟火对影赏\n[03:07.53]小城老街上 \n[03:09.38]有情人执手同徜徉\n[03:14.84]夜幕垂鹊桥会 \n[03:16.94]七夕的念想\n[03:18.80]你没归我独醉 \n[03:20.70]情话无人讲\n[03:22.55]也就不用讲 \n[03:24.41]且把浓情化作诗两行"
		},
		{
			"name": "有桃花",
			"src": "http://ws.stream.qqmusic.qq.com/7214465.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:有桃花]\n[00:01.99](一朵溜溜的云哟\n[00:05.51]一朵溜溜的云哟\n[00:08.52]端端溜溜的照在\n[00:11.52]康定溜溜的城哟)\n[00:14.65](有桃花 有桃花\n[00:18.05]谁是谁的桃花\n[00:21.05]有桃花 有桃花)\n[00:27.17]赏花赋月不是我本领\n[00:33.27]也不如人家有型阔气\n[00:39.32]好多朋友都劝我\n[00:42.03]别再追随你\n[00:44.67]别做一条爱上沙漠的鱼\n[00:51.49]可我知道他们都不懂你\n[00:57.55]我也没那么容易放弃\n[01:03.66]在茫茫人海之中\n[01:06.31]有一颗真心\n[01:09.01]要不要选择权在你\n[01:15.76]是差点运气\n[01:18.11]可我一直在努力\n[01:21.38]每次见到你\n[01:22.78]都加固爱的决心\n[01:26.78]请爱我 \n[01:28.90]哪怕你心中还有点困惑\n[01:32.86]请爱我 \n[01:34.98]我乐意给你我有的所有\n[01:38.93]请爱我 \n[01:41.08]别再花脑细胞用理性思索\n[01:45.63]时间会证明你没有看错\n[01:55.34]可我知道他们都不懂你\n[02:01.39]我也没那么容易放弃\n[02:07.40]在茫茫人海之中\n[02:10.10]有一颗真心\n[02:12.83]要不要选择权在你\n[02:19.51]是差点运气\n[02:21.86]可我一直在努力\n[02:25.13]每次见到你\n[02:26.58]都加固爱的决心\n[02:30.64]请爱我 \n[02:32.71]哪怕你心中还有点困惑\n[02:36.61]请爱我 \n[02:38.85]我乐意给你我有的所有\n[02:42.75]请爱我 \n[02:44.93]别再花脑细胞用理性思索\n[02:49.55]时间会证明你没有看错\n[02:56.12]映日荷花别样红\n[02:58.75]映日桃花别笑春风\n[03:02.14]谁是谁的桃花还很难说\n[03:06.27]我太主动\n[03:10.05]请爱我 \n[03:12.32]哪怕你心中还有点困惑\n[03:16.17]请爱我 \n[03:18.33]我乐意给你我有的所有\n[03:22.23]请爱我 \n[03:24.48]别再花脑细胞用理性思索\n[03:28.95]时间会证明你没有看错\n[03:44.26](有桃花 有桃花\n[03:47.67]谁是谁的桃花\n[03:50.72]有桃花 有桃花)"
		},
		{
			"name": "惊鸿一面",
			"singer": "许嵩 & 黄龄",
			"src": "http://ws.stream.qqmusic.qq.com/7102716.m4a?fromtag=46",
			"lrc": "[ar:许嵩、黄龄]\n[ti:惊鸿一面]\n[00:21.50]翻手为云覆手为雨\n[00:26.12]金盆洗手止风雨\n[00:30.43]不恋红尘却难舍回忆\n[00:34.70]每一段都有你\n[00:41.43]年少初遇常在我心\n[00:45.89]多年不减你深情\n[00:49.94]江山如画又怎能比拟\n[00:54.28]你送我的风景\n[00:58.81]柳下闻瑶琴起舞和一曲\n[01:03.23]仿佛映当年翩若惊鸿影\n[01:07.55]谁三言两语撩拨了情意\n[01:11.92]谁一颦一笑摇曳了星云\n[01:16.22]纸扇藏伏笔玄机诗文里\n[01:20.79]紫烟燃心语留香候人寻\n[01:25.00]史书列豪杰功过有几许\n[01:29.37]我今生何求惟你\n[01:57.46] \n[02:08.67]年少初遇常在我心\n[02:12.88]多年不减你深情\n[02:17.51]江山如画又怎能比拟\n[02:21.42]你送我的风景\n[02:26.14]柳下闻瑶琴起舞和一曲\n[02:30.38]仿佛映当年翩若惊鸿影\n[02:34.77]谁三言两语撩拨了情意\n[02:39.20]谁一颦一笑摇曳了星云\n[02:43.39]纸扇藏伏笔玄机诗文里\n[02:48.06]紫烟燃心语留香候人寻\n[02:52.39]史书列豪杰功过有几许\n[02:56.58]我今生何求惟你\n[03:01.62]远山传来清晨悠然的曲笛\n[03:04.98]晓风掠走光阴\n[03:07.26]残月沉霜鬓里\n[03:09.99]有了你\n[03:12.16]恩怨都似飞鸿踏雪泥\n[03:14.35]飞鸿踏雪泥\n[03:18.60]柳下闻瑶琴起舞和一曲\n[03:22.95]仿佛映当年翩若惊鸿影\n[03:27.30]谁三言两语撩拨了情意\n[03:31.42]谁一颦一笑摇曳了星云\n[03:35.83]纸扇藏伏笔玄机诗文里\n[03:40.21]紫烟燃心语留香候人寻\n[03:44.83]史书列豪杰功过有几许\n[03:49.18]我今生何求惟你\n[03:53.72]我今生何求惟你"
		},
		{
			"name": "隐隐约约",
			"src": "http://ws.stream.qqmusic.qq.com/7214466.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:隐隐约约]\n[00:02.11]许嵩 - 隐隐约约\n[00:04.41]词/曲：许嵩\n[00:21.33]枕边 如此隐隐约约\n[00:24.79]发香绵延\n[00:26.54]好似江水连天\n[00:28.24]指尖 如此隐隐约约\n[00:31.83]肩上红线\n[00:33.59]忽明忽暗的坠跌 坠跌 坠跌\n[00:49.55]许愿 如此隐隐约约\n[00:53.04]落款未签\n[00:54.74]日出之后变脸\n[00:56.54]有眼 如此隐隐约约\n[01:00.06]记录一切\n[01:01.81]鱼死网破的决裂 决裂 决裂\n[01:17.87]隐隐约约\n[01:21.28]哑巴吃黄连\n[01:24.73]隐隐约约\n[01:28.23]上不了台面\n[01:31.87]隐隐约约\n[01:35.34]乌云想遮天\n[01:38.93]隐隐约约\n[01:42.42]故事到此忽然了结\n[02:35.43]隐隐约约\n[02:38.93]哑巴吃黄连\n[02:42.47]隐隐约约\n[02:46.01]上不了台面\n[02:49.56]隐隐约约\n[02:53.01]乌云想遮天\n[02:56.58]隐隐约约\n[03:00.16]故事到此忽然了结\n[03:09.78] "
		},
		{
			"name": "宇宙之大",
			"src": "http://ws.stream.qqmusic.qq.com/7214467.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:宇宙之大]\n[00:35.97]你的脾气那么温驯\n[00:39.13]如湖畔的风景\n[00:43.94]可能南极下一场雪\n[00:47.25]让人很难留意\n[00:52.07]我的脾气那么隐秘\n[00:55.23]如黑夜的骤雨\n[00:58.54]有时急 有时宁 \n[01:06.26]有时烦人心\n[01:12.03]我欠你的不只是\n[01:14.13]一句对不起\n[01:19.94]你欠我的不只是\n[01:22.09]一场远途旅行\n[01:27.85]我在南极拍下了\n[01:30.11]企鹅与冰川的剪影\n[01:34.36]宇宙之大 每个生命 \n[01:38.37]都在孤寂\n[02:00.12]你的脾气那么温驯\n[02:03.12]如湖畔的风景\n[02:07.98]可能南极下一场雪\n[02:11.09]让人很难留意\n[02:16.07]我的脾气那么隐秘\n[02:19.03]如黑夜的骤雨\n[02:22.33]有时急 有时宁 \n[02:30.26]有时烦人心\n[02:35.87]我欠你的不只是\n[02:38.12]一句对不起\n[02:43.93]你欠我的不只是\n[02:46.03]一场远途旅行\n[02:51.83]我在南极拍下了\n[02:53.99]企鹅与冰川的剪影\n[02:58.29]宇宙之大 每个生命 \n[03:02.30]都在孤寂\n[03:08.35]我走遍天涯海角\n[03:11.26]看潮起日落\n[03:16.34]也看过一张张脸\n[03:19.15]幸福或落魄\n[03:22.91]如果能再一次\n[03:26.68]把你拥入怀中\n[03:31.00]我会不会能假装\n[03:33.90]并非一无所有\n[03:44.07]我欠你的不只是\n[03:46.07]一句对不起\n[03:52.02]你欠我的不只是\n[03:54.03]一场人生旅行\n[03:59.79]我在南极经受了孤单\n[04:03.00]与严寒的洗礼\n[04:06.26]却受不起 温润如你 \n[04:14.55]断了音讯"
		},
		{
			"name": "梧桐灯",
			"src": "http://ws.stream.qqmusic.qq.com/7214468.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:梧桐灯]\n[00:02.00]许嵩 - 梧桐灯\n[00:04.25]词/曲：许嵩\n[00:22.97]梧桐树荫了整条街\n[00:29.31]灯火穿透了她的叶\n[00:35.66]窗外夜风裹走时间\n[00:42.12]后退的景谁在流连\n[00:48.53]一个人开车去赴宴\n[00:54.94]右座有张烫金喜帖\n[01:01.24]新娘的名字好亲切\n[01:07.68]搞不好曾梦里出现\n[01:13.74]孤单坐进一桌陌生人里面\n[01:20.09]主持人在进行热场的环节\n[01:25.70]你和他含情脉脉对视了一眼\n[01:32.11]回忆陪我躲在角落没露面\n[01:39.39]当时的我想不到今天\n[01:45.59]错过的人回不到从前\n[01:52.12]当时的你静静坐在我的左手边\n[01:57.70]梧桐灯下是你静美的侧脸\n[02:24.51]一个人开车去赴宴\n[02:30.90]右座有张烫金喜帖\n[02:37.26]新娘的名字好亲切\n[02:43.69]搞不好曾梦里出现\n[02:49.67]孤单坐进一桌陌生人里面\n[02:56.07]主持人在进行热场的环节\n[03:01.82]你和他含情脉脉对视了一眼\n[03:08.61]我和回忆缩在角落没露面\n[03:15.42]当时的我想不到今天\n[03:21.60]错过的人回不到从前\n[03:28.09]当时的你静静坐在我的左手边\n[03:33.74]梧桐灯下是你静美的侧脸\n[03:40.87]当时的我想不到今天\n[03:47.27]错过的人回不到从前\n[03:53.69]灰色的我怔怔留在没你的世界\n[03:59.31]梧桐灯下是我熄灯的双眼\n[04:06.97]梧桐树荫了整条街\n[04:13.30]灯火穿透了"
		},
		{
			"name": "弹指一挥间",
			"src": "http://ws.stream.qqmusic.qq.com/7183015.m4a?fromtag=46",
			"lrc": "[ar:许嵩]\n[ti:弹指一挥间]\n[00:41.50]雨掸霜叶掸落一地过往\n[00:49.32]云遮秋雁遮住十载月光 \n[00:57.11]我推开窗满手回忆沙沙作响 \n[01:03.18]枕簟凉残烛晃人惆怅 \n[01:12.43]离愁别恨是心的溃疡 \n[01:20.29]戴月披星是你在流浪 \n[01:27.96]你推开窗花灯随烟波铺江上 \n[01:34.16]露水凉老船晃人惆怅 \n[01:41.18]弹指一挥间你竟已遥远 \n[01:48.96]沧海成荒野真情永不灭 \n[01:56.79]弹指一挥间红尘已缈远 \n[02:04.56]青丝蘸白雪来路生云烟\n[02:33.68]离愁别恨是心的溃疡 \n[02:41.66]戴月披星是你在流浪 \n[02:49.04]你推开窗花灯随烟波铺江上 \n[02:55.45]露水凉老船晃人惆怅 \n[03:02.48]弹指一挥间你竟已遥远 \n[03:10.31]沧海成荒野真情永不灭 \n[03:18.09]弹指一挥间红尘已缈远 \n[03:25.86]青丝蘸白雪来路生云烟\n[03:49.13]弹指一挥间你竟已遥远 \n[03:56.70]沧海成荒野真情永不灭 \n[04:04.38]弹指一挥间红尘已缈远 \n[04:12.36]青丝蘸白雪来路生云烟"
		}
	]
];