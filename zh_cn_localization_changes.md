# Simplified Chinese Localization Changes

- Baseline: `3b9a331e5982fd7bf55e8c6cd747ededf354e873`
- Updated: `cd6ef02df65e54092163d8335fc208d82ffa01b0`
- Source: `text/events.csv` (`KEY`, `en`, `zh-cn`)
- JSON-style Unicode escapes were decoded before comparison.
- Zero-width characters were removed before comparison.

## Summary

- Added: 0
- Changed: 508
- Removed: 0

## Added

None.

## Changed

| Key | English | 原简体中文 | 新简体中文 |
| --- | --- | --- | --- |
| `ABILITY_BALLOFSPIDERS_NAME` | Ball of Spiders | 一团蜘蛛 | 天降蛛群 |
| `ABILITY_BATTERUP_NAME` | Batter Up | 打出去！ | 击球手准备 |
| `ABILITY_CONTROLAIR_NAME` | Control Air | 控风 | 操控风相 |
| `ABILITY_ENLARGE_NAME` | Enlarge | 变大 | 变巨术 |
| `ABILITY_FORBIDDENFAMINE2_DESC` | Inflict Leech 2, Weakness 5, Poison 2, and Madness 2 on all enemies.<br>There are permanent consequences for casting this spell… but maybe not for you. <br>[s:.7](Castable once per battle.)[/s] | 对所有敌人施加2层【水蛭】、5层【虚弱】、2层【中毒】和2层【癫狂】。<br>施放这个法术会造成长久的后果……但或许不会影响你。<br>[s:.7]（每场战斗可以施放1次。）[/s] | 对所有敌人施加2层【水蛭】、5层【虚弱】、2层【中毒】和2层【癫狂】。<br>施放这个法术会造成永久的后果……但或许不会影响你。<br>[s:.7]（每场战斗可以施放1次。）[/s] |
| `ABILITY_FORBIDDENFAMINE_DESC` | Inflict Weakness 5, Poison 2, and Madness 2 on all enemies.<br>There are permanent consequences for casting this spell… but maybe not for you. <br>[s:.7](Castable once per battle.)[/s] | 对所有敌人施加5层【虚弱】、2层【中毒】和2层【癫狂】。<br>施放这个法术会造成长久的后果……但或许不会影响你。<br>[s:.7]（每场战斗可以施放1次。）[/s] | 对所有敌人施加5层【虚弱】、2层【中毒】和2层【癫狂】。<br>施放这个法术会造成永久的后果……但或许不会影响你。<br>[s:.7]（每场战斗可以施放1次。）[/s] |
| `ABILITY_FORBIDDENFLAME2_DESC` | Heavily damage and inflict Burn 10 on all enemies and light the map on fire. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 对所有敌人造成大量伤害、施加10层【灼烧】，同时点燃整张地图。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 对所有敌人造成大量伤害、施加10层【灼烧】，同时点燃整张地图。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFLAME_DESC` | Damage and inflict Burn 7 on all enemies and light the map on fire. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 对所有敌人造成伤害、施加7层【灼烧】，同时点燃整张地图。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 对所有敌人造成伤害、施加7层【灼烧】，同时点燃整张地图。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFLOOD2_DESC` | Knock back and damage all enemies, heal all allies, then flood the entire map. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 击退并伤害所有敌人，治疗所有友方，然后淹没整张地图。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 击退并伤害所有敌人，治疗所有友方，然后淹没整张地图。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFLOOD_DESC` | Knock back and damage all enemies, then flood the entire map. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 击退并伤害所有敌人，然后淹没整张地图。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 击退并伤害所有敌人，然后淹没整张地图。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFROST2_DESC` | Apply Freeze 2 to each unit except for yourself and 1 other chosen unit.<br>Deal 15 Damage to enemies and fully heal each ally.<br>There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 除自身和你选定的另外1个单位之外，对所有单位施加2层【冻住】。<br>对敌人造成15点伤害，同时令每个友方完全恢复生命。<br>施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 除自身和你选定的另外1个单位之外，对所有单位施加2层【冻住】。<br>对敌人造成15点伤害，同时令每个友方完全恢复生命。<br>施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFROST_DESC` | Apply Freeze 2 to each unit except for yourself and 1 other chosen unit.<br>Deal 10 Damage to enemies and heal each ally 10 HP.<br>There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 除自身和你选定的另外1个单位之外，对所有单位施加2层【冻住】。<br>对敌人造成10点伤害，同时令每个友方恢复10点生命。<br>施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 除自身和你选定的另外1个单位之外，对所有单位施加2层【冻住】。<br>对敌人造成10点伤害，同时令每个友方恢复10点生命。<br>施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFULMINATION2_DESC` | Strike all enemies with lightning, inflicting Stun 2. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 降下闪电，击中所有敌人，施加2层【眩晕】。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 降下闪电，击中所有敌人，施加2层【眩晕】。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORBIDDENFULMINATION_DESC` | Strike all enemies with lightning, inflicting Stun. There will be permanent consequences for casting this spell…<br>[s:.7](Castable once per battle.)[/s] | 降下闪电，击中所有敌人，施加【眩晕】。施放这个法术会有长久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] | 降下闪电，击中所有敌人，施加【眩晕】。施放这个法术会有永久的后果……<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_FORRBIDDENFART_NAME` | Forbidden Fart | 禁术·放屁 | 禁忌臭屁 |
| `ABILITY_MAXTELEPORT_NAME` | Teleport | 传送 | 传送术 |
| `ABILITY_MINDCONTROL_NAME` | Mind Control | 心灵控制 | 心灵操控 |
| `ABILITY_PASS_NAME` | Pass | 给 | 过 |
| `ABILITY_SHOCKWAVE_NAME` | Shockwave | 冲击波 | 电击波 |
| `ABILITY_TELEPORTMAGE_NAME` | Teleport | 传送 | 传送术 |
| `ABILITY_TELEPORT_NAME` | Teleport | 传送 | 传送术 |
| `ABILITY_UNLOCK_HUNTER` | Hunters can now learn "Ball of Spiders"! | 猎手可以学“一团蜘蛛”了！ | 猎手可以学“天降蛛群”了！ |
| `ARMOR_CONFUSINGHAT_NAME` | Confusing Hat | 凌乱的帽子 | 混乱帽子 |
| `ARMOR_FANNYPACK_NAME` | Fanny Pack | 腰包 | 挎包 |
| `ARMOR_PACKOFBLADES_DESC` | Whenever you backstab, gain +1 Serrated Claws. | 每当你背刺时，【锯齿之爪】+1。 | 每当你背刺时，【锯齿利爪】+1。 |
| `BOSS_SPEWER_NAME` | Spewer | 喷喷 | 呕吐宝宝 |
| `BOSS_ZODIAC_NAME` | Zodiac | 黄道十二宫杀手 | 黄道十二宫 |
| `BOSS_ZODIAC_QUOTE_3` | I want you to print this cipher on your tombstone! | 我要你把这串密码刻在你的墓碑上！ | 我要你把这段密语刻在你的墓碑上！ |
| `DISORDER_NECROPHAGE_NAME` | Necrophage | 食尸 | 食尸癖 |
| `DISORDER_SPONTANEOUSCOMBUSTION_NAME` | Spontaneous Combustion | 自燃 | 生体自燃 |
| `EABILITY_MINDCONTROL_NAME` | Mind Control | 心灵控制 | 心灵操控 |
| `ENEMY_ANGELICKITTEN_DESC` | Attracts units. Dooms what kills it.<br>Immune to Holy. Gains All Stats Up when struck with Holy Element. | 会吸引单位。击杀它的单位会获得【毁灭】。<br>免疫神圣元素。被神圣元素命中时，所有属性提升。 | 会吸引单位。击杀它的单位会获得【必死无疑】。<br>免疫神圣元素。被神圣元素命中时，所有属性提升。 |
| `ENEMY_DOVE_NAME` | Dove | 鸽子 | 和平鸽 |
| `ENEMY_FETUSJAR_NAME` | Fötusjar | 弗图司格拉斯 | 弗图斯雅 |
| `ENEMY_FETUSNOJAR_NAME` | Der Fötus | 德·弗图司 | 德·弗图斯 |
| `ENEMY_ORNSTEIN_NAME` | Ornstein | 奥恩斯坦 | 翁斯坦 |
| `ENEMY_PIGEON_NAME` | Pigeon | 粉鸟 | 鸽子 |
| `ENEMY_SCARY_DESC` | Its melee attacks can inflict Fear or Doom!<br>Undead. | 近身攻击有可能施加【害怕】或【毁灭】！<br>亡灵。 | 近身攻击有可能施加【害怕】或【必死无疑】！<br>亡灵。 |
| `ENEMY_SPEWER_NAME` | Spewer | 喷喷 | 呕吐宝宝 |
| `ENEMY_THUMP_NAME` | Thump | 噗通 | 哐当 |
| `EVENT_BOXWITHAHOLE_REW10` | {catname} slides {his} tail into the opening in the cardboard box. A tingly feeling washes over {him} as {his} tail changes shape! | {catname}把尾巴探进了纸箱的洞口。一阵酥酥麻麻的感觉涌遍了{he}全身，{his}尾巴变了个样子！ | {catname}把尾巴伸进了纸箱的洞口。一阵酥酥麻麻的感觉涌遍了{he}全身，{his}尾巴变了个样子！ |
| `FURNITURE_NAME_WALLMOUNTED_BLOCK2` | Question Block | 问号方块 | 问号砖块 |
| `FURNITURE_NAME_WALLMOUNTED_BLOCK3` | Brick Block | 砖头方块 | 砖块 |
| `FURNITURE_NAME_WALLMOUNTED_MASK_BUNNY` | Bunny Mask | 兔子面具 | 兔子头套 |
| `FURNITURE_NAME_WALLMOUNTED_PICTURE_LAMBS` | Silence of the Mice Poster | 《沉默的老鼠》海报 | 《沉默的幼鼠》海报 |
| `ITEM_BALLOFBANDAGES_NAME` | Ball of Bandages | 一团绷带 | 绷带球 |
| `ITEM_BENTSPOON_NAME` | Bent Spoon | 弯勺子 | 弯曲的汤勺 |
| `KEYWORD_CAPTUREDFAMILIAR_NAME` | Captured Familiar | 附录跟班 | 俘虏跟班 |
| `KEYWORD_LATEBLOOMER_NAME` | Late Bloomer | 大器晚成 | 大花晚开 |
| `KEYWORD_LEECHES_DESC_APPLIER` | Drains {stacks} health at the end of {applier's} turn and gives it to {applier}. | 在{applier's}的回合结束时，吸取{stacks}点生命，转给{applier}。 | 在{applier}的回合结束时，吸取{stacks}点生命，转给{applier}。 |
| `KEYWORD_LEECHES_NAME_APPLIER` | {applier's} Leeches. | {applier's}的水蛭。 | {applier}的水蛭。 |
| `KEYWORD_MANALEECHES_DESC_APPLIER` | Drains {stacks} mana at the end of {applier's} turn and gives it to {applier}. | 在{applier's}的回合结束时，吸取{stacks}点魔能，转给{applier}。 | 在{applier}的回合结束时，吸取{stacks}点魔能，转给{applier}。 |
| `KEYWORD_MANALEECHES_NAME_APPLIER` | {applier's} Mana Leeches | {applier's}的魔能水蛭 | {applier}的魔能水蛭 |
| `KEYWORD_RANGEUP_DESC` | Range increased by {stacks}. | 范围阔大{stacks}。 | 范围扩大{stacks}。 |
| `KEYWORD_TEMPINITDOWN_DESC` | You take your turn later in the round. | 你这一轮的回合延后。 | 你在这一轮的回合延后。 |
| `NPCOFFICE_NAME_ORGANGRINDER` | {organname}'s Box | {organname}的箱子 | [f:EdmundM]{organname}[/f]的箱子 |
| `NPC_BUTCH_CLASS_UNLOCK_THIEF_4` | [m:questioning]Need some extra cash?<br><br>[m:happy]Well you know the Thief's got sticky fingers! | [m:questioning]缺钱花了？<br><br>[m:happy]你也知道盗贼顺东西有多麻利！ | [m:questioning]缺钱花了？<br><br>[m:happy]你也知道盗贼手上经常不干净！ |
| `NPC_FRANK_ALSO_1` | Also... | 还有…… | [s:.8]还有……[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_1` | [m:scared]Frank is scared... | [m:scared]弗兰克害怕…… | [s:.8][m:scared]弗兰克害怕……[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_10` | [m:spacedout]............ | [m:spacedout]………… | [s:.8][m:spacedout]…………[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_11` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_12` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_13` | [m:default]Frank needs a nap... | [m:default]弗兰克需要打个盹…… | [s:.8][m:default]弗兰克需要打个盹……[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_2` | [m:shocked]The Cave are a dark spooky thing...<br>Frank was a dead guy in that place once! | [m:shocked]山洞黑漆漆瘆人……<br>弗兰克以前是那儿的死人！ | [s:.8][m:shocked]山洞黑漆漆瘆人……<br>弗兰克以前是那儿的死人！[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_3` | [m:happy]But don't worry, we got so smart and builded a new Frank out of the old one! | [m:happy]不过别怕，我们变得很聪明，用原来的弗兰克造了个新的弗兰克！ | [s:.8][m:happy]不过别怕，我们变得很聪明，用原来的弗兰克造了个新的弗兰克！[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_4` | Good as new, right?<br>Look at how we can make this one dance! | 是不是跟新的一样？<br>我们可以用这个身体跳舞！很灵活！ | [s:.8]是不是跟新的一样？<br>我们可以用这个身体跳舞！很灵活！[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_5` | [m:spacedout]............ | [m:spacedout]………… | [s:.8][m:spacedout]…………[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_6` | [m:spacedout]............ | [m:spacedout]………… | [s:.8][m:spacedout]…………[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_7` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_8` | [m:happy]Frank can't dance like old Frank can... but look again! | [m:happy]新的弗兰克没有原来的弗兰克跳得好……但你再看！ | [s:.8][m:happy]新的弗兰克没有原来的弗兰克跳得好……但你再看！[/s] |
| `NPC_FRANK_FRANK_CAVES_INTRO_9` | [m:spacedout]............ | [m:spacedout]………… | [s:.8][m:spacedout]…………[/s] |
| `NPC_FRANK_FRANK_ENDING_1` | [m:happy]Hey mommy! Look!<br>Look what we did! | [m:happy]诶，妈咪！快看！<br>看看我们厉不厉害！ | [m:happy]诶，妈咪！快看！<br>看看我们厉不厉害！[/s] |
| `NPC_FRANK_FRANK_ENDING_10` | [m:shocked]!!! | [m:shocked]！！！ | [s:.8][m:shocked]！！！[/s] |
| `NPC_FRANK_FRANK_ENDING_11` | [m:veryhappy]Holy Molar!! | [m:veryhappy]磨的牙啊！！ | [s:.8][m:veryhappy]磨的牙啊！！[/s] |
| `NPC_FRANK_FRANK_ENDING_12` | [m:happy]Frank gotted our wish!<br>A mommy AND not being dead! | [m:happy]弗兰克愿望成真啦！<br>有妈咪了。而且！他也没死！ | [s:.8][m:happy]弗兰克愿望成真啦！<br>有妈咪了。而且！他也没死！[/s] |
| `NPC_FRANK_FRANK_ENDING_13` | [m:veryhappy]This is the best Frankin' day of all times! | [m:veryhappy]今天是弗兰克最“弗翁”的一天！ | [s:.8][m:veryhappy]今天是弗兰克最“弗翁”的一天！[/s] |
| `NPC_FRANK_FRANK_ENDING_14` | [m:happy]Make sure you keep visiting Frank, mommy. | [m:happy]妈咪，记得经常看弗兰克喔。 | [s:.8][m:happy]妈咪，记得经常看弗兰克喔。[/s] |
| `NPC_FRANK_FRANK_ENDING_15` | I gots tons of tips for you! | 还有好多提示、贴士告诉你！ | [s:.8]还有好多提示、贴士告诉你！[/s] |
| `NPC_FRANK_FRANK_ENDING_16` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_ENDING_2` | [m:veryhappy]Frank founded a new body! | [m:veryhappy]弗兰克找到新的身体啦！ | [s:.8][m:veryhappy]弗兰克找到新的身体啦！[/s] |
| `NPC_FRANK_FRANK_ENDING_3` | [m:happy]This one is more better than the old one too! | [m:happy]这个比原来的更要还好！ | [s:.8][m:happy]这个比原来的更要还好！[/s] |
| `NPC_FRANK_FRANK_ENDING_4` | [m:mocking]So many more holes! | [m:mocking]多了好多洞！ | [s:.8][m:mocking]多了好多洞！[/s] |
| `NPC_FRANK_FRANK_ENDING_5` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_ENDING_6` | [m:shocked]Hey did you hear that?<br>Frank called you mommy! | [m:shocked]嘿，听到了吗？<br>弗兰克叫你妈咪！ | [s:.8][m:shocked]嘿，听到了吗？<br>弗兰克叫你妈咪！[/s] |
| `NPC_FRANK_FRANK_ENDING_7` | [m:scared]... | [m:scared]…… | [s:.8][m:scared]……[/s] |
| `NPC_FRANK_FRANK_ENDING_8` | Uhh... umm... | 呃……嗯…… | [s:.8]呃……嗯……[/s] |
| `NPC_FRANK_FRANK_ENDING_9` | [m:questioning]Is that OK?<br>Can Frank call you our mommy? | [m:questioning]可以这样吗？<br>弗兰克能叫你妈咪吗？ | [s:.8][m:questioning]可以这样吗？<br>弗兰克能叫你妈咪吗？[/s] |
| `NPC_FRANK_FRANK_MAX1_1` | [m:happy]Oh yay you are talking to Frank again! | [m:happy]哦耶，又来跟弗兰克说话啦！ | [s:.8][m:happy]哦耶，又来跟弗兰克说话啦！[/s] |
| `NPC_FRANK_FRANK_MAX1_2` | And guess what that is meaning? | 那这是什么意思呢？ | [s:.8]那这是什么意思呢？[/s] |
| `NPC_FRANK_FRANK_MAX1_3` | [m:veryhappy]It's the time for itchies! | [m:veryhappy]痒痒时间到！ | [s:.8][m:veryhappy]痒痒时间到！[/s] |
| `NPC_FRANK_FRANK_MAX1_4` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_MAX1_5` | [m:winking]Here, I got this one from my rumpus!<br>Haha! | [m:winking]给，这一个是我屁屁上抓的！<br>哈哈！ | [s:.8][m:winking]给，这一个是我屁屁上抓的！<br>哈哈！[/s] |
| `NPC_FRANK_FRANK_MAX1_6` | [m:happy]It's a bit little stinky but still the best one I gots! | [m:happy]有点点臭，但这个最痒！ | [s:.8][m:happy]有点点臭，但这个最痒！[/s] |
| `NPC_FRANK_FRANK_MAX1_7` | [m:default]Be happy about it! | [m:default]享受吧！ | [s:.8][m:default]享受吧！[/s] |
| `NPC_FRANK_FRANK_MAX2_1` | [m:happy]Guess what Frank gots!? | [m:happy]猜猜弗兰克发现什么？！ | [s:.8][m:happy]猜猜弗兰克发现什么？！[/s] |
| `NPC_FRANK_FRANK_MAX2_2` | [m:veryhappy]A BIG ITCHY!<br>JUST FOR YOU! | [m:veryhappy]大痒痒！<br>给你的！ | [s:.8][m:veryhappy]大痒痒！<br>给你的！[/s] |
| `NPC_FRANK_FRANK_MAX2_3` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_MAX2_4` | [m:default]This one likes to crawl all over and give you red lumpies! | [m:default]这个喜欢到处爬，还会让你长红疙瘩！ | [s:.8][m:default]这个喜欢到处爬，还会让你长红疙瘩！[/s] |
| `NPC_FRANK_FRANK_MAX2_5` | [m:happy]Take it home with you! | [m:happy]带回去吧！ | [s:.8][m:happy]带回去吧！[/s] |
| `NPC_FRANK_FRANK_MAX2_6` | Bye bye! | 拜拜！ | [s:.8]拜拜！[/s] |
| `NPC_FRANK_FRANK_MAX3_1` | [m:shocked]Oh it you!<br>I thought you were a baby guy... | [m:shocked]哦，是你！<br>我还以为是哪个宝宝…… | [s:.8][m:shocked]哦，是你！<br>我还以为是哪个宝宝……[/s] |
| `NPC_FRANK_FRANK_MAX3_2` | [m:angry]Frank hates those babies! GRRRRR! | [m:angry]弗兰克讨厌那些宝宝！呃啊啊啊啊！ | [s:.8][m:angry]弗兰克讨厌那些宝宝！呃啊啊啊啊！[/s] |
| `NPC_FRANK_FRANK_MAX3_3` | That's what Frank makes when we are mad the GRRRR sounds! | 弗兰克生气的时候，我们就会这样“呃啊啊啊啊”！ | [s:.8]弗兰克生气的时候，我们就会这样“呃啊啊啊啊”！[/s] |
| `NPC_FRANK_FRANK_MAX3_4` | [m:questioning]Hey wait, don't Frank owe you an itchy? | [m:questioning]诶等等，弗兰克不是还欠你一个痒痒？ | [s:.8][m:questioning]诶等等，弗兰克不是还欠你一个痒痒？[/s] |
| `NPC_FRANK_FRANK_MAX3_5` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_MAX3_6` | [m:grossedout]We pulled this one from our throat holes! | [m:grossedout]这个是我们喉咙洞里抠出来的！ | [s:.8][m:grossedout]这个是我们喉咙洞里抠出来的！[/s] |
| `NPC_FRANK_FRANK_MAX3_7` | [m:happy]You get it now! Yay! | [m:happy]现在归你啦！耶！ | [s:.8][m:happy]现在归你啦！耶！[/s] |
| `NPC_FRANK_FRANK_MAX4_1` | [m:scared]Uh oh, guess what?! | [m:scared]呃喔，猜猜怎么着？！ | [s:.8][m:scared]呃喔，猜猜怎么着？！[/s] |
| `NPC_FRANK_FRANK_MAX4_2` | [m:happy]Frank found another itchy! | [m:happy]弗兰克又找到一个痒痒！ | [s:.8][m:happy]弗兰克又找到一个痒痒！[/s] |
| `NPC_FRANK_FRANK_MAX4_3` | [m:winking]Frank won't tell you where this itchy is from though... | [m:winking]不过弗兰克不告诉你是哪儿来的…… | [s:.8][m:winking]不过弗兰克不告诉你是哪儿来的……[/s] |
| `NPC_FRANK_FRANK_MAX4_4` | [m:whispering][s:.5]It's from that secret spot...[/s] | [m:whispering][s:.5]是个秘密位置……[/s] | [s:.8][m:whispering][s:.5]是个秘密位置……[/s] |
| `NPC_FRANK_FRANK_MAX4_5` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_MAX4_6` | [m:happy]That's a hint that only you and Frank can know about! | [m:happy]这个提示只有你和弗兰克知道！ | [s:.8][m:happy]这个提示只有你和弗兰克知道！[/s] |
| `NPC_FRANK_FRANK_MAX4_7` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_MAX5_1` | [m:happy]LOOK AT THIS ONE! | [m:happy]看看这个！ | [s:.8][m:happy]看看这个！[/s] |
| `NPC_FRANK_FRANK_MAX5_2` | [m:veryhappy]ANOTHER ITCHY!<br>And Frank was finding it in Frank's brown town! | [m:veryhappy]另外一个痒痒！<br>而且是弗兰克在弗兰克的棕色小镇找到的！ | [s:.8][m:veryhappy]另外一个痒痒！<br>而且是弗兰克在弗兰克的棕色小镇找到的！[/s] |
| `NPC_FRANK_FRANK_MAX5_3` | [m:winking]Extra sticky just the way you is liking it! | [m:winking]特别黏糊糊，刚好是你喜欢的那样！ | [s:.8][m:winking]特别黏糊糊，刚好是你喜欢的那样！[/s] |
| `NPC_FRANK_FRANK_MAX5_4` | [m:happy]Here take it!<br>We gots lots more! | [m:happy]给你吧！<br>我们还有好多！ | [s:.8][m:happy]给你吧！<br>我们还有好多！[/s] |
| `NPC_FRANK_FRANK_MAX5_5` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_MAX5_6` | [m:veryhappy]Frank is loving this deal we made! | [m:veryhappy]弗兰克喜欢这样！ | [s:.8][m:veryhappy]弗兰克喜欢这样！[/s] |
| `NPC_FRANK_FRANK_MAX5_7` | [m:happy]See you next times! | [m:happy]下次见！ | [s:.8][m:happy]下次见！[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_1` | [m:happy]Hey we didn't die!?<br>What the what!? | [m:happy]咦，我们没死？！<br>什么什么什么？！ | [s:.8][m:happy]咦，我们没死？！<br>什么什么什么？！[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_2` | Holy molar!<br>This one is a great day! | 磨的牙啊！<br>今天是个好日子！ | [s:.8]磨的牙啊！<br>今天是个好日子！[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_3` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_4` | [m:paranoid]Oh but what does Frank gonna do for you now? | [m:paranoid]那弗兰克还能帮你干什么呢？ | [s:.8][m:paranoid]那弗兰克还能帮你干什么呢？[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_5` | [m:pondering]Hmmmm...<br>Wait I know what you need! | [m:pondering]唔……<br>啊，我知道你需要什么！ | [s:.8][m:pondering]唔……<br>啊，我知道你需要什么！[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_6` | [m:veryhappy]ITCHIES! | [m:veryhappy]你要痒痒！ | [s:.8][m:veryhappy]你要痒痒！[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_7` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_MAX_INTRO_8` | [m:happy]Frank got tons of itchies! You just keep sending Frank kitties and you'll see! | [m:happy]弗兰克有超多痒痒！继续送猫过来，你就能知道啦！ | [s:.8][m:happy]弗兰克有超多痒痒！继续送猫过来，你就能知道啦！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_1` | [m:shocked]Did you see there is a silver peepee man making dead stuff all over town? | [m:shocked]看到那个银色小鸡鸡的男的没有？他在这边到处搞死东西！ | [s:.8][m:shocked]看到那个银色小鸡鸡的男的没有？他在这边到处搞死东西！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_10` | Maybe they are just too bad for their mommy... | 可能是他们太坏了，所以妈咪不要他们了…… | [s:.8]可能是他们太坏了，所以妈咪不要他们了……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_11` | [m:veryangry]I bet they cry so much they are always wet... | [m:veryangry]他们肯定会哭得天天身上都湿哒哒…… | [s:.8][m:veryangry]他们肯定会哭得天天身上都湿哒哒……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_12` | [m:pondering]yeah, I bet that is what happens... | [m:pondering]嗯，肯定就是这样…… | [s:.8][m:pondering]嗯，肯定就是这样……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_13` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_14` | [m:sad]... | [m:sad]…… | [s:.8][m:sad]……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_15` | [m:sad][s:.5]Mommy...[/s] | [m:sad][s:.5]妈咪……[/s] | [m:sad][s:.4]妈咪……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_2` | [m:scared]Frank is thinking hes wants to make Frank be a dead body! | [m:scared]弗兰克觉得他想把弗兰克变成尸体！ | [s:.8][m:scared]弗兰克觉得他想把弗兰克变成尸体！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_3` | [m:angry]Someone should tell his mommy on him so she leaves him and makes him so sad and alone! | [m:angry]就该有谁去跟他妈告状，让她不要他了，他就会又难过又孤单！ | [s:.8][m:angry]就该有谁去跟他妈告状，让她不要他了，他就会又难过又孤单！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_4` | [m:questioning]Can you do that?<br>Can you tell on him? | [m:questioning]你能去吗？<br>你能去告状吗？ | [s:.8][m:questioning]你能去吗？<br>你能去告状吗？[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_5` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_6` | [m:angry]Oh I hope his mom gets so mad she leaves so far into space! | [m:angry]啊呀，我希望他妈气到直接飞到太空去！ | [s:.8][m:angry]啊呀，我希望他妈气到直接飞到太空去！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_7` | I bet he will roll into a cave and find some old itchy man to attach to! | 他肯定就会滚进哪个山洞，找到个浑身痒痒的老男人黏上去！ | [s:.8]他肯定就会滚进哪个山洞，找到个浑身痒痒的老男人黏上去！[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_8` | [m:default]and I bet they will get so sad they try and build a house so high they can try to see their mommy... | [m:default]然后他们肯定会难过到想盖一栋超级高的房子，好让他们能看到妈咪…… | [s:.8][m:default]然后他们肯定会难过到想盖一栋超级高的房子，好让他们能看到妈咪……[/s] |
| `NPC_FRANK_FRANK_TERMINATOR2_9` | [m:sad]But their mommy doesn't see them... | [m:sad]可妈咪看不到他们…… | [s:.8][m:sad]可妈咪看不到他们……[/s] |
| `NPC_FRANK_FRANK_TIPS_10_1` | [m:pondering]A tip is a type of hint or something. | [m:pondering]贴士跟提示是差不多的东西。 | [s:.8][m:pondering]贴士跟提示是差不多的东西。[/s] |
| `NPC_FRANK_FRANK_TIPS_10_2` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_TIPS_10_3` | [m:veryhappy]That a tip inside of a tip!<br>What a cool thing I did! | [m:veryhappy]提示里边套提示！<br>我好厉害！ | [s:.8][m:veryhappy]提示里边套提示！<br>我好厉害！[/s] |
| `NPC_FRANK_FRANK_TIPS_10_4` | [m:happy]See ya! | [m:happy]再见！ | [s:.8][m:happy]再见！[/s] |
| `NPC_FRANK_FRANK_TIPS_1_1` | [m:happy]The black part of a pencil! | [m:happy]不是贴士！是贴纸！ | [s:.8][m:happy]不是贴士！是贴纸！[/s] |
| `NPC_FRANK_FRANK_TIPS_1_2` | [m:veryhappy]That's a good tip!<br>People use that to draw! | [m:veryhappy]是不是很漂亮？！<br>贴在哪儿都行！ | [s:.8][m:veryhappy]是不是很漂亮？！<br>贴在哪儿都行！[/s] |
| `NPC_FRANK_FRANK_TIPS_1_3` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_TIPS_1_4` | [m:happy]That's all! | [m:happy]没别的了！ | [s:.8][m:happy]没别的了！[/s] |
| `NPC_FRANK_FRANK_TIPS_2_1` | [m:questioning]Ummm, when Frank stumbles and falls on our hump? | [m:questioning]唔……弗兰克用“嘟嘟”打的那种车叫什么？ | [s:.8][m:questioning]唔……弗兰克用“嘟嘟”打的那种车叫什么？[/s] |
| `NPC_FRANK_FRANK_TIPS_2_2` | [m:pondering]I think that ones called a tip, when we tip and fall? | [m:pondering]是的士吧？不是提示？ | [s:.8][m:pondering]是的士吧？不是提示？[/s] |
| `NPC_FRANK_FRANK_TIPS_2_3` | [m:confused]Is that right? | [m:confused]是的士吗？ | [s:.8][m:confused]是的士吗？[/s] |
| `NPC_FRANK_FRANK_TIPS_3_1` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_TIPS_3_2` | [m:happy]When you eat inside a house and give your mommy money! | [m:happy]去银行拿钱叫提钱，那去厕所拿㞎㞎呢？ | [s:.8][m:happy]去银行拿钱叫提钱，那去厕所拿㞎㞎呢？[/s] |
| `NPC_FRANK_FRANK_TIPS_3_3` | That one is called a tip also! | 提屎吗？提示？提屎！ | [s:.8]提屎吗？提示？提屎！[/s] |
| `NPC_FRANK_FRANK_TIPS_4_1` | [m:paranoid]Stuff that pokes like injectors and stabbers? | [m:paranoid]弗兰克好像踢到尸体了？ | [s:.8][m:paranoid]弗兰克好像踢到尸体了？[/s] |
| `NPC_FRANK_FRANK_TIPS_4_2` | [m:happy]Frank think those have tips too! | [m:happy]嗯，踢尸……体！ | [s:.8][m:happy]嗯，踢尸……体！[/s] |
| `NPC_FRANK_FRANK_TIPS_4_3` | Hope that one helps! | 这个也算提示吧！ | [s:.8]这个也算提示吧！[/s] |
| `NPC_FRANK_FRANK_TIPS_5_1` | [m:default]I hear mom say about Frank... | [m:default]妈妈以前说弗兰克…… | [s:.8][m:default]妈妈以前说弗兰克……[/s] |
| `NPC_FRANK_FRANK_TIPS_5_2` | [m:happy]Frank's scabies is just the tip of the iceberg! | [m:happy]说弗兰克以前的头发像铁丝一样！ | [s:.8][m:happy]说弗兰克以前的头发像铁丝一样！[/s] |
| `NPC_FRANK_FRANK_TIPS_5_3` | [m:sad]We miss her... | [m:sad]我们想她了…… | [s:.8][m:sad]我们想她了……[/s] |
| `NPC_FRANK_FRANK_TIPS_5_4` | [m:pondering]Sometime we look at the stars and talk at her, in our brains. | [m:pondering]有时候我们一边看着星星，一边在脑子里跟她说话。 | [s:.8][m:pondering]有时候我们一边看着星星，一边在脑子里跟她说话。[/s] |
| `NPC_FRANK_FRANK_TIPS_5_5` | [m:sad]I wish she could come back... | [m:sad]好希望她能回来…… | [s:.8][m:sad]好希望她能回来……[/s] |
| `NPC_FRANK_FRANK_TIPS_6_1` | [m:paranoid]When kids push Frank, Frank can tip over! | [m:paranoid]有些石头能吸磁铁，那种石头叫铁石！ | [s:.8][m:paranoid]有些石头能吸磁铁，那种石头叫铁石！[/s] |
| `NPC_FRANK_FRANK_TIPS_6_2` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_FRANK_TIPS_6_3` | [m:happy]That's a very good one! | [m:happy]这个妙！ | [s:.8][m:happy]这个妙！[/s] |
| `NPC_FRANK_FRANK_TIPS_7_1` | [m:shocked]Like when your suit tips? And it shows your bumbum to everyone? | [m:shocked]我能一边尿尿一边写字！ | [s:.8][m:shocked]我能一边尿尿一边写字！[/s] |
| `NPC_FRANK_FRANK_TIPS_7_2` | [m:pondering]We think that's a kind of tip? | [m:pondering]这叫题诗，也算提示吧？ | [s:.8][m:pondering]这叫题诗，也算提示吧？[/s] |
| `NPC_FRANK_FRANK_TIPS_7_3` | [m:questioning]Maybe? | [m:questioning]算吧？ | [s:.8][m:questioning]算吧？[/s] |
| `NPC_FRANK_FRANK_TIPS_8_1` | [m:happy]My finger has a tip! | [m:happy]提示能不能替死？ | [s:.8][m:happy]提示能不能替死？[/s] |
| `NPC_FRANK_FRANK_TIPS_8_2` | [m:veryhappy]Isn't that cool!? | [m:veryhappy]能吧？！ | [s:.8][m:veryhappy]能吧？！[/s] |
| `NPC_FRANK_FRANK_TIPS_8_3` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_FRANK_TIPS_9_1` | [m:happy]Triangle shape has 2 tips! | [m:happy]提示！瑜伽要注意体式！ | [s:.8][m:happy]提示！瑜伽要注意体式！[/s] |
| `NPC_FRANK_FRANK_TIPS_9_2` | [m:happy]Frank is a teacher now! | [m:happy]弗兰克可以教人瑜伽了！ | [s:.8][m:happy]弗兰克可以教人瑜伽了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_1` | [m:shocked]OH NO OH NO! | [m:shocked]坏了坏了！ | [s:.8][m:shocked]坏了坏了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_10` | [s:.6][m:sad]*wimpering*[/s] | [s:.6][m:sad]*呜咽*[/s] | [s:.5][m:sad]*呜咽*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_11` | [m:default]OK, a Frank must do what a Frank does best! | [m:default]好，弗兰克就该做弗兰克最拿手的事情！ | [s:.8][m:default]好，弗兰克就该做弗兰克最拿手的事情！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_12` | [m:happy]We will do it, we will die making your house done! | [m:happy]我们会去盖房子，我们会死在帮你盖房子的时候！ | [s:.8][m:happy]我们会去盖房子，我们会死在帮你盖房子的时候！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_13` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_14` | [m:scared]... | [m:scared]…… | [s:.8][m:scared]……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_15` | [m:happy]When you die will you talk to Frank again? Please? | [m:happy]等你死了，还会来跟弗兰克说话吗？求求你了。 | [s:.8][m:happy]等你死了，还会来跟弗兰克说话吗？求求你了。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_16` | We love you! | 我们爱你！ | [s:.8]我们爱你！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_17` | [m:veryhappy]Bye Bye. | [m:veryhappy]拜拜。 | [s:.8][m:veryhappy]拜拜。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_2` | [m:scared]THIS IS THE LAST BUILDER ONER! | [m:scared]只能再盖这一次啦！ | [s:.8][m:scared]只能再盖这一次啦！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_3` | [m:paranoid]FRANK DON'T KNOW HOW TO MAKE MORE HOUSE THAN THIS ONE! | [m:paranoid]盖完这个，弗兰克就不知道该怎么再继续盖啦！ | [s:.8][m:paranoid]盖完这个，弗兰克就不知道该怎么再继续盖啦！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_4` | [m:scared]If we build this last thing, then Frank will die! | [m:scared]我们盖完最后这一次，弗兰克就要死啦！ | [s:.8][m:scared]我们盖完最后这一次，弗兰克就要死啦！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_5` | [m:sad]And if we die, no one will talk to us again... | [m:sad]我们要是死了，就没人跟我们说话了…… | [s:.8][m:sad]我们要是死了，就没人跟我们说话了……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_6` | [m:scared]AAAAAAHHHH! IM FRANKIN' OUT! | [m:scared]啊呀——！我要“弗翁”啦！ | [s:.8][m:scared]啊呀——！我要“弗翁”啦！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_7` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_8` | [m:paranoid]Listen to us, if we do one more house for you, will we die? | [m:paranoid]听我们说，要是再给你盖一栋房子，我们会死吗？ | [s:.8][m:paranoid]听我们说，要是再给你盖一栋房子，我们会死吗？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_4THROOM_9` | [m:scared]Frank doesn't know about this one! If you stop looking at us do we go invisible? | [m:scared]弗兰克也不懂这个！要是你不看着我们，我们会不会隐形？ | [s:.8][m:scared]弗兰克也不懂这个！要是你不看着我们，我们会不会隐形？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_1` | [m:happy]Oh hey, Frank was just waiting for you down here. | [m:happy]哦，诶，弗兰克就在这儿等你呢。 | [s:.8][m:happy]哦，诶，弗兰克就在这儿等你呢。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_2` | Good job on sending the cat to us!<br>He's slow, so when he runs we can still get him! | 谢谢你送来了那只猫！<br>他动作慢，跑起来我们也追得上！ | [s:.8]谢谢你送来了那只猫！<br>他动作慢，跑起来我们也追得上！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_3` | [m:sad]Franks slow, but no one seems to get us... | [m:sad]弗兰克动作慢，可好像没有谁追我们…… | [s:.8][m:sad]弗兰克动作慢，可好像没有谁追我们……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_4` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_5` | [m:default]Frank's getting so itchy!<br>I think we are ready to build! | [m:default]弗兰克手好痒！<br>我们准备好开工了！ | [s:.8][m:default]弗兰克手好痒！<br>我们准备好开工了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_6` | [m:questioning]You know that house on top of your house?<br>The one with the point on it? | [m:questioning]知道你家上面那个房子吗？<br>尖尖顶的那栋？ | [s:.8][m:questioning]知道你家上面那个房子吗？<br>尖尖顶的那栋？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_7` | [m:happy]Well Franks' gonna go building all over that one! | [m:happy]弗兰克要在那上头再盖一层！ | [s:.8][m:happy]弗兰克要在那上头再盖一层！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_8` | [m:default]You just wait and see!<br>It won't crush you or nothin'! | [m:default]就等着看吧！<br>不会把你们砸成肉饼什么的！ | [s:.8][m:default]就等着看吧！<br>不会把你们砸成肉饼什么的！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_9` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_BASEMENT2_1` | I will build you another basement tonight. | 我晚上再给你挖个地下室。 | [s:.8]我晚上再给你挖个地下室。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_BASEMENT3_1` | I will build you ANOTHER basement tonight. | 我晚上再给你挖个地下室。 | [s:.8]我晚上再给你挖个地下室。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_BASEMENT4_1` | I will build you YET ANOTHER basement tonight. | 我晚上又再再给你挖个地下室。 | [s:.8]我晚上又再再给你挖个地下室。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_BASEMENT5_1` | I will build you another basement tonight. Too many basements. | 我晚上再给你挖个地下室。地下室太多了。 | [s:.8]我晚上再给你挖个地下室。地下室太多了。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_BASEMENT_1` | I will build you a basement tonight. | 我晚上给你挖个地下室。 | [s:.8]我晚上给你挖个地下室。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_1` | [m:happy]You came back to talk to us! | [m:happy]又来跟我们说话啦！ | [s:.8][m:happy]又来跟我们说话啦！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_10` | [m:happy]This one's gonna be adding an<br>"On Topper". | [m:happy]这次要加一个<br>“顶上顶”。 | [s:.8][m:happy]这次要加一个<br>“顶上顶”。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_11` | [m:questioning]It like a double deckers but more better maybe? | [m:questioning]就是双层的，但可能更厉害？ | [s:.8][m:questioning]就是双层的，但可能更厉害？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_12` | [m:happy]Maybe mom will see us building and make a smile! | [m:happy]妈妈说不定会看到我们盖房子，还会笑出来！ | [s:.8][m:happy]妈妈说不定会看到我们盖房子，还会笑出来！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_13` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_2` | [m:pondering]Frank was just wondering how long we have left in this body... | [m:pondering]弗兰克刚刚还在想，这个身体我们还能用多久…… | [s:.8][m:pondering]弗兰克刚刚还在想，这个身体我们还能用多久……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_3` | [m:veryhappy]We like it a lot, so many bumps and curves going over it. | [m:veryhappy]我们可喜欢它了，上面好多凸凸凹凹的地方。 | [s:.8][m:veryhappy]我们可喜欢它了，上面好多凸凸凹凹的地方。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_4` | [m:happy]Even the tiny bumps are fun! Itchy fun! | [m:happy]连那些小疙瘩都很好玩！痒痒得好玩！ | [s:.8][m:happy]连那些小疙瘩都很好玩！痒痒得好玩！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_5` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_6` | [m:questioning]Frank sometime is wondering, when we die where will those bumps go? | [m:questioning]弗兰克有时候就想知道，等我们死了，那些疙瘩会去哪儿？ | [s:.8][m:questioning]弗兰克有时候就想知道，等我们死了，那些疙瘩会去哪儿？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_7` | [m:pondering]Do the bugs take the bumps and wear them like a house!? | [m:pondering]虫子会不会把疙瘩搬走，穿在身上当房子？！ | [s:.8][m:pondering]虫子会不会把疙瘩搬走，穿在身上当房子？！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_8` | [m:happy]Because that makes Frank so happy to dream about! | [m:happy]弗兰克想到这种事情就好开心！ | [s:.8][m:happy]弗兰克想到这种事情就好开心！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_LARGEHOUSE_9` | [m:default]Speaking about Frank dying, looks like it time for Frank to get to work! | [m:default]说到弗兰克要死了这件事情，弗兰克好像该干活了！ | [s:.8][m:default]说到弗兰克要死了这件事情，弗兰克好像该干活了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_1` | [m:sad]Frank made babies cry... it's making Frank so sad to think of! | [m:sad]弗兰克把小宝宝惹哭了……弗兰克好难过。 | [s:.8][m:sad]弗兰克把小宝宝惹哭了……弗兰克好难过。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_10` | [m:scared]Then another baby one comes out of a bush and starts rolling Frank down the street! | [m:scared]然后草丛里又冒出来个宝宝，推着弗兰克滚了一条街！ | [s:.8][m:scared]然后草丛里又冒出来个宝宝，推着弗兰克滚了一条街！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_11` | [m:mocking]"Freaky Frank, Freaky Frank! Has no mom and smells so rank!"<br>They was singing that! | [m:mocking]“怪弗兰，怪弗兰！没妈管，臭翻天！”<br>他们还唱这种东西！ | [s:.8][m:mocking]“怪弗兰，怪弗兰！没妈管，臭翻天！”<br>他们还唱这种东西！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_12` | [m:shocked] ABOUT US!!! | [m:shocked]弗兰就是我们！！！ | [s:.8][m:shocked]弗兰就是我们！！！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_13` | [m:angry]Frank was saying back "We have a mommy! She just lives in space!" | [m:angry]弗兰克顶了他们一句：“我们有妈妈！她只是住在太空！” | [s:.8][m:angry]弗兰克顶了他们一句：“我们有妈妈！她只是住在太空！”[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_14` | [m:shocked]And they was laughing so hard they was crying! | [m:shocked]结果他们笑得眼泪都哭出来了！ | [s:.8][m:shocked]结果他们笑得眼泪都哭出来了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_15` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_16` | We was feeling so bad about making the babies cry, Frank started to cry! | 我们把宝宝惹哭了，难过极了，结果弗兰克也哭了起来！ | [s:.8]我们把宝宝惹哭了，难过极了，结果弗兰克也哭了起来！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_17` | [m:scared]And it was so scary! | [m:scared]超级可怕！ | [s:.8][m:scared]超级可怕！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_18` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_19` | [m:default]I think we are going to add more room to your house tonight. | [m:default]我们今天晚上会让你家变大一点。 | [s:.8][m:default]我们今天晚上会让你家变大一点。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_2` | [m:scared]We was just doing our walks and a baby just jump out and scream! | [m:scared]我们只是出去走了走，结果一个小宝宝突然跳出来吱哇乱叫！ | [s:.8][m:scared]我们只是出去走了走，结果一个小宝宝突然跳出来吱哇乱叫！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_20` | [m:happy]You like us when we make the house stuff right? | [m:happy]你喜欢我们盖房子的吧？ | [s:.8][m:happy]你喜欢我们盖房子的吧？[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_21` | Frank likes when you like us. | 你喜欢我们，弗兰克就高兴。 | [s:.8]你喜欢我们，弗兰克就高兴。[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_3` | [m:shocked]RRRRAAAAAAAAAAAAHHHHHH!!!!! | [m:shocked]啊——————————！！！！ | [s:.8][m:shocked]啊——————————！！！！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_4` | [m:scared]Frank fell back on our hump and couldn't get back on the feet... | [m:scared]弗兰克仰着摔在地上，半天爬不起来…… | [s:.8][m:scared]弗兰克仰着摔在地上，半天爬不起来……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_5` | Then the baby hit Frank... in the little brownies! | 那个宝宝还打了弗兰克……打到了弗兰克的棕色小铃铛！ | [s:.8]那个宝宝还打了弗兰克……打到了弗兰克的棕色小铃铛！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_6` | [m:shocked]AAAAAAHHHH!<br><br>We were saying that so loud! | [m:shocked]啊呀————！<br><br>我们当时说得可大声了！ | [s:.8][m:shocked]啊呀————！<br><br>我们当时说得可大声了！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_7` | ... | …… | [s:.8]……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_8` | GGGAAAAAHHHH!! | 呃啊————！！ | [s:.8]呃啊————！！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_9` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_UNKNOWN_1` | You appear to have unlocked something, but I don't have dialog for it. Congrats. Also fix this. | 你好像解锁什么了，可我没有对应的台词。恭喜了，另外处理一下这个。 | [s:.8]你好像解锁什么了，可我没有对应的台词。恭喜了，另外处理一下这个。[/s] |
| `NPC_FRANK_UNPROMPTED_A_1` | [m:questioning]Hey you aren't our mom?!<br>Right? | [m:questioning]诶，你不是我们妈妈吧？！<br>不是吧？ | [s:.8][m:questioning]诶，你不是我们妈妈吧？！<br>不是吧？[/s] |
| `NPC_FRANK_UNPROMPTED_A_2` | [m:happy]Oh, are you here for one of Frank's big tips!? | [m:happy]哦，你是来听弗兰克讲大贴士的吗！？ | [s:.8][m:happy]哦，你是来听弗兰克讲大贴士的吗！？[/s] |
| `NPC_FRANK_UNPROMPTED_A_3` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [s:.8][m:sad][s:.6]*咳嗽*[/s] |
| `NPC_FRANK_UNPROMPTED_B_1` | [m:happy]Holy molar!<br>You come back to me! | [m:happy]磨的牙啊！<br>又来找我啦！ | [s:.8][m:happy]磨的牙啊！<br>又来找我啦！[/s] |
| `NPC_FRANK_UNPROMPTED_B_2` | Frank thought of a new tip! | 弗兰克又想到提示了！ | [s:.8]弗兰克又想到提示了！[/s] |
| `NPC_FRANK_UNPROMPTED_C_1` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_UNPROMPTED_C_2` | [m:happy]It's time for Frank tips again! | [m:happy]又到了弗兰克大贴士的时间！ | [s:.8][m:happy]又到了弗兰克大贴士的时间！[/s] |
| `NPC_FRANK_UNPROMPTED_D_1` | [m:shocked]Uh oh, you caught us being naughty... | [m:shocked]呃哦，干坏事被你抓到了…… | [s:.8][m:shocked]呃哦，干坏事被你抓到了……[/s] |
| `NPC_FRANK_UNPROMPTED_D_2` | [m:paranoid]If we give tips will you still be our friend? | [m:paranoid]我们给你提示，你还愿意当我们的朋友吗？ | [s:.8][m:paranoid]我们给你提示，你还愿意当我们的朋友吗？[/s] |
| `NPC_FRANK_UNPROMPTED_D_3` | [m:happy]Good!<br>Here listen to this tip! | [m:happy]太好了！<br>听这个提示！ | [s:.8][m:happy]太好了！<br>听这个提示！[/s] |
| `NPC_FRANK_UNPROMPTED_E_1` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_UNPROMPTED_E_2` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_FRANK_UNPROMPTED_E_3` | [m:spacedout]Sorry Frank is dying...<br>[m:default]We better tell you those tips quick! | [m:spacedout]对不起，弗兰克要死了……<br>[m:default]我们要赶快把提示告诉你！ | [s:.8][m:spacedout]对不起，弗兰克要死了……<br>[m:default]我们要赶快把提示告诉你！[/s] |
| `NPC_FRANK_UNPROMPTED_F_1` | [m:veryhappy]Mom?!<br>[m:default]Oh it you. | [m:veryhappy]妈妈？！<br>[m:default]哦，是你。 | [s:.8][m:veryhappy]妈妈？！<br>[m:default]哦，是你。[/s] |
| `NPC_FRANK_UNPROMPTED_F_2` | I bet you want another Frank tip, huh? | 肯定又是来听弗兰克分享贴士的吧？ | [s:.8]肯定又是来听弗兰克分享贴士的吧？[/s] |
| `NPC_FRANK_UNPROMPTED_F_3` | [m:happy]Well open your ear hole big cuz this tip is large! | [m:happy]那就把耳朵眼儿张大，这次的贴士很大！ | [s:.8][m:happy]那就把耳朵眼儿张大，这次的贴士很大！[/s] |
| `NPC_FRANK_UNPROMPTED_G_1` | [m:happy]Hey! | [m:happy]诶！ | [s:.8][m:happy]诶！[/s] |
| `NPC_FRANK_UNPROMPTED_G_2` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_FRANK_UNPROMPTED_G_3` | [m:happy]Frank just come up with a new tips! | [m:happy]弗兰克又想到新的提示啦！ | [s:.8][m:happy]弗兰克又想到新的提示啦！[/s] |
| `NPC_FRANK_UNPROMPTED_H_1` | [m:shocked]What the what!? | [m:shocked]什么什么什么？！ | [s:.8][m:shocked]什么什么什么？！[/s] |
| `NPC_FRANK_UNPROMPTED_H_2` | [m:scared]We thought you were one of those mean babies! | [m:scared]还以为你是那种坏宝宝！ | [s:.8][m:scared]还以为你是那种坏宝宝！[/s] |
| `NPC_FRANK_UNPROMPTED_H_3` | [m:mocking]We was all<br>"WHAT THE WHAT!?" | [m:mocking]我们当时就说<br>“什么什么什么？！” | [s:.8][m:mocking]我们当时就说<br>“什么什么什么？！”[/s] |
| `NPC_FRANK_UNPROMPTED_H_4` | [m:happy]Member that?... | [m:happy]还记得吗……？ | [s:.8][m:happy]还记得吗……？[/s] |
| `NPC_FRANK_UNPROMPTED_H_5` | [m:default]Oh,<br>you are just wanting the tips, huh? | [m:default]哦，<br>你只是来听提示的吧？ | [s:.8][m:default]哦，<br>你只是来听提示的吧？[/s] |
| `NPC_FRANK_UNPROMPTED_I_1` | [m:spacedout]Oh hey, we didn't see you there... | [m:spacedout]哦，刚才没看到你…… | [s:.8][m:spacedout]哦，刚才没看到你……[/s] |
| `NPC_FRANK_UNPROMPTED_I_2` | [m:questioning]Was that you talking to us last night? | [m:questioning]昨天晚上跟我们说话的是你吗？ | [s:.8][m:questioning]昨天晚上跟我们说话的是你吗？[/s] |
| `NPC_FRANK_UNPROMPTED_I_3` | [m:default]We think we heard you telling Frank to do the bad stuff? | [m:default]我们好像听见你让弗兰克做坏事？ | [s:.8][m:default]我们好像听见你让弗兰克做坏事？[/s] |
| `NPC_FRANK_UNPROMPTED_I_4` | [m:angry]Please don't do that, Frank likes being nice now. | [m:angry]千万不要这样，弗兰克现在喜欢做好事。 | [s:.8][m:angry]千万不要这样，弗兰克现在喜欢做好事。[/s] |
| `NPC_FRANK_UNPROMPTED_I_5` | [m:happy]Oh we also come up with a new tip! Listen! | [m:happy]哦，我们也有了个新贴士！你看！ | [s:.8][m:happy]哦，我们也有了个新贴士！你看！[/s] |
| `NPC_JACK_ALSO_1` | Also... | 还有…… | [s:.8]还有……[/s] |
| `NPC_JACK_CANT_AFFORD_1` | [m:questioning]Uhhh, I think you are too poor for that right now... | [m:questioning]呃……你现在太穷了，买不起这个…… | [m:questioning][s:.8]呃……你现在太穷了，买不起这个……[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_1` | [m:happy]Oh hey, it's you!<br>I was just telling my Nona about you! | [m:happy]哦，是你呀！<br>刚刚还在跟阿婆说你！ | [s:.8][m:happy]哦，是你呀！<br>刚刚还在跟阿婆说你！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_10` | [m:default]So I need your help!<br>Buy my treasures and help me save Nona! | [m:default]所以我需要你帮忙！<br>买我的宝贝，帮我救阿婆！ | [s:.8][m:default]所以我需要你帮忙！<br>买我的宝贝，帮我救阿婆！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_11` | [m:spacedout]... | [m:spacedout]…… | [s:.8][m:spacedout]……[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_12` | [m:shocked]Oh, wait!<br>I almost forgot! | [m:shocked]对了，等一下！<br>差点忘了！ | [s:.8][m:shocked]对了，等一下！<br>差点忘了！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_13` | [m:questioning]Can you please send me cats that are all broked up? | [m:questioning]坏了的猫咪能不能送给我？ | [s:.8][m:questioning]坏了的猫咪能不能送给我？[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_14` | [m:pondering]Smashed heads, Breaky bones...<br>I need cats like that. | [m:pondering]脑袋裂开的，骨头断掉的……<br>我需要那样的猫。 | [s:.8][m:pondering]脑袋裂开的，骨头断掉的……<br>我需要那样的猫。[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_15` | [m:happy]I'll tell you why later, it's a secret I just made up! | [m:happy]以后再告诉你为什么，是个秘密，我刚刚编的！ | [s:.8][m:happy]以后再告诉你为什么，是个秘密，我刚刚编的！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_16` | [m:default]See ya! | [m:default]再见！ | [s:.8][m:default]再见！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_2` | [m:default]She thinks you're nice, and I think she's right! | [m:default]她觉得你人很好，我觉得她说得对！ | [s:.8][m:default]她觉得你人很好，我觉得她说得对！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_3` | [m:scared]So umm... | [m:scared]那个…… | [s:.8][m:scared]那个……[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_4` | The other day I done a kick so hard it made all of Nona's treasures fall down! | 我那天一脚没收住，把阿婆的宝贝全都踢倒了！ | [s:.8]我那天一脚没收住，把阿婆的宝贝全都踢倒了！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_5` | [m:sad]Shes been stuck back there for like tons of days now... | [m:sad]她压在底下好多好多天了…… | [s:.8][m:sad]她压在底下好多好多天了……[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_6` | [m:happy]But I'm workin' on getting her out! | [m:happy]我正在想办法救她出来！ | [s:.8][m:happy]我正在想办法救她出来！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_7` | [m:default]I bet if I can sell all the stuff that falled on her I could save her! | [m:default]只要把压住她的东西全卖掉，我肯定就能把她救出来！ | [s:.8][m:default]只要把压住她的东西全卖掉，我肯定就能把她救出来！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_8` | [m:happy]And buy a rocket to the moon! | [m:happy]还能买架火箭去月球！ | [s:.8][m:happy]还能买架火箭去月球！[/s] |
| `NPC_JACK_JACK_BEGIN_ACCEPTING_CATS_9` | [m:veryhappy]Or even a truck to the park! | [m:veryhappy]甚至买辆卡车去公园！ | [s:.8][m:veryhappy]甚至买辆卡车去公园！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_1` | [m:happy]You are gonna go to the desert!? Wowza! The desert is the baddest! | [m:happy]你要去沙漠？！哇噻！沙漠那边超级牛皮！ | [s:.8][m:happy]你要去沙漠？！哇噻！沙漠那边超级牛皮！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_10` | [m:happy]It's called a water bed for a reason, silly! | [m:happy]所以叫水床嘛！ | [s:.8][m:happy]所以叫水床嘛！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_11` | [m:default]Bring me back a snake!<br>If you do, I'll name him BloodVipe! | [m:default]给我带条蛇回来！<br>你要是带来了，我就叫它“血蛇”！ | [s:.8][m:default]给我带条蛇回来！<br>你要是带来了，我就叫它“血蛇”！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_12` | [m:questioning]Pretty rad name, huh? | [m:questioning]名字是不是很带劲？ | [m:questioning][s:.8]名字是不是很带劲？[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_2` | [m:veryhappy]Snakes, scorpions and soooo many bones! | [m:veryhappy]有蛇、蝎子，还有超——多骨头！ | [s:.8][m:veryhappy]有蛇、蝎子，还有超——多骨头！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_3` | [m:shocked]Just be careful, deserts are H.O.T. HOT! | [m:shocked]小心点儿，沙漠热得要死！ | [s:.8][m:shocked]小心点儿，沙漠热得要死！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_4` | [m:winking]Nona says to<br>"Stay hydrated!"<br>And Nona knows stuff! | [m:winking]阿婆说要<br>“多喝水！”<br>阿婆什么都懂！ | [s:.8][m:winking]阿婆说要<br>“多喝水！”<br>阿婆什么都懂！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_5` | [m:whispering][s:.7]Cus' she's so old![/s]<br>Hehe... | [m:whispering][s:.7]因为她年龄超级大！[/s]<br>嘻嘻…… | [s:.8][m:whispering][s:.7]因为她年龄超级大！[/s]<br>嘻嘻……[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_6` | [m:veryangry]No, Nona!<br>We are talking about that other old thing! | [m:veryangry]没有，阿婆！<br>我们在说别的老东西！ | [s:.8][m:veryangry]没有，阿婆！<br>我们在说别的老东西！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_7` | [m:default]But for reals, if you want to heal in the desert, drink water. | [m:default]不过，真的，在沙漠里想恢复，就多喝水。 | [s:.8][m:default]不过，真的，在沙漠里想恢复，就多喝水。[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_8` | [m:happy]Or at least get wet! | [m:happy]或者起码把自己身上弄湿！ | [s:.8][m:happy]或者起码把自己身上弄湿！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_9` | [m:winking]Sometimes I wet my pants just to cool off when I'm sleeping! | [m:winking]我有时候睡觉嫌太热，就把裤子尿湿了降温！ | [s:.8][m:winking]我有时候睡觉嫌太热，就把裤子尿湿了降温！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_1` | [m:shocked]O M G! | [m:shocked]我！的！上！帝！啊！ | [s:.8][m:shocked]我！的！上！帝！啊！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_2` | [m:scared]I heard you got a treasure that was touched by the...<br>NONA CAT! | [m:scared]听说你找到了件宝贝，是……<br>阿婆猫碰过的！ | [s:.8][m:scared]听说你找到了件宝贝，是……<br>阿婆猫碰过的！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_3` | [m:shocked]Look! look at it close. You can see the paw print of the Nona Cat! | [m:shocked]你看！仔细看！这上面有阿婆猫的爪子印！ | [s:.8][m:shocked]你看！仔细看！这上面有阿婆猫的爪子印！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_4` | [m:veryhappy]This is so rare you don't even know! Gotta be worth like 10 hundred cans! | [m:veryhappy]你都不知道这个东西有多稀有！能值10百个易拉罐！ | [s:.8][m:veryhappy]你都不知道这个东西有多稀有！能值10百个易拉罐！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_5` | [m:happy]Good work finding that! Seriously, I only seen like 7 of those things in like ever! | [m:happy]你能找到这个，太厉害了！我这辈子好像才见过七个！ | [s:.8][m:happy]你能找到这个，太厉害了！我这辈子好像才见过七个！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_6` | [m:pondering]I wonder if I still have some in here... | [m:pondering]不知道我这边还有没有…… | [s:.8][m:pondering]不知道我这边还有没有……[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_7` | [m:winking]Anyway these things are<br>[a:shake]" Foil-alt-ultra-mythic-rare!"[/a]<br>And they have like double the effects! | [m:winking]这种东西是<br>[a:shake]“闪卡异画超究极传说秘稀”！[/a]<br>而且是双倍效果！ | [s:.8][m:winking]这种东西是<br>[a:shake]“闪卡异画超究极传说秘稀”！[/a]<br>而且是双倍效果！[/s] |
| `NPC_JACK_JACK_GAINALTFURNITURE_8` | [m:happy]Go find more!<br>You'll look so cool! | [m:happy]再去找！<br>你会变得超级酷！ | [s:.8][m:happy]再去找！<br>你会变得超级酷！[/s] |
| `NPC_JACK_JACK_MAX1_1` | [m:shocked]GUESS WHAT!<br>I think I saw the Nona Cat! | [m:shocked]你绝对想不到！<br>我好像看到阿婆猫了！ | [s:.8][m:shocked]你绝对想不到！<br>我好像看到阿婆猫了！[/s] |
| `NPC_JACK_JACK_MAX1_2` | [m:veryhappy]He was floating around the room last night! I wonder if he touched something! | [m:veryhappy]他昨天晚上在房间里飘来飘去！不知道他有没有碰过什么东西！ | [s:.8][m:veryhappy]他昨天晚上在房间里飘来飘去！不知道他有没有碰过什么东西！[/s] |
| `NPC_JACK_JACK_MAX1_3` | [m:happy]We'll stay on the lookout.  Maybe you'll see something he touched in the shop soon! | [m:happy]我们会多留心的，你说不定这两天就会在店里看到它碰过的东西！ | [s:.8][m:happy]我们会多留心的，你说不定这两天就会在店里看到它碰过的东西！[/s] |
| `NPC_JACK_JACK_MAX2_1` | [m:happy]All these kitties you are sending is making the Nona Cat happy! | [m:happy]你送来了那些猫，阿婆猫好开心！ | [s:.8][m:happy]你送来了那些猫，阿婆猫好开心！[/s] |
| `NPC_JACK_JACK_MAX2_2` | [m:veryhappy]It's crazy for real!<br>I saw him in his little tux.  I swear it touched some treasures! | [m:veryhappy]超级夸张！<br>我看到他穿了小礼服，而且绝对碰了几件宝贝！ | [s:.8][m:veryhappy]超级夸张！<br>我看到他穿了小礼服，而且绝对碰了几件宝贝！[/s] |
| `NPC_JACK_JACK_MAX2_3` | [m:winking]Keep your eyes open wide! There has gotta be some more special treasures coming to the shop soon! | [m:winking]眼睛一定要睁大！店里肯定很快又会上架几件特别的宝贝！ | [s:.8][m:winking]眼睛一定要睁大！店里肯定很快又会上架几件特别的宝贝！[/s] |
| `NPC_JACK_JACK_MAX3_1` | [m:shocked]Look behind you quick! It's the Nona Cat! | [m:shocked]快看你后边！阿婆猫！ | [s:.8][m:shocked]快看你后边！阿婆猫！[/s] |
| `NPC_JACK_JACK_MAX3_2` | [m:veryhappy]HAHAHA!<br>I spooked you good! | [m:veryhappy]哈哈哈哈！<br>吓到了吧？！ | [s:.8][m:veryhappy]哈哈哈哈！<br>吓到了吧？！[/s] |
| `NPC_JACK_JACK_MAX3_3` | [m:happy]I spooked Nona once so bad. She just went to sleep, she was so scared! | [m:happy]我有次把阿婆吓得够呛，吓得她直接睡过去了！ | [s:.8][m:happy]我有次把阿婆吓得够呛，吓得她直接睡过去了！[/s] |
| `NPC_JACK_JACK_MAX3_4` | [m:veryhappy]I'm a spooky hero! | [m:veryhappy]我是吓人大英雄！ | [s:.8][m:veryhappy]我是吓人大英雄！[/s] |
| `NPC_JACK_JACK_MAX3_5` | [m:winking]Also, I think there is even more special treasures coming soon! | [m:winking]而且，我觉得很快还会有更多特别的宝贝！ | [s:.8][m:winking]而且，我觉得很快还会有更多特别的宝贝！[/s] |
| `NPC_JACK_JACK_MAX4_1` | [m:shocked]OMG dude!<br>The Nona Cat was by my bed box last night! | [m:shocked]上帝啊！<br>昨天夜里阿婆猫跑到我床边来了！ | [s:.8][m:shocked]上帝啊！<br>昨天夜里阿婆猫跑到我床边来了！[/s] |
| `NPC_JACK_JACK_MAX4_2` | [m:mocking]He thought I was named Isaac! Isn't that so funny? I'm Jack, duh! | [m:mocking]他以为我叫以撒！是不是很搞笑？我明明是杰克诶！ | [s:.8][m:mocking]他以为我叫以撒！是不是很搞笑？我明明是杰克诶！[/s] |
| `NPC_JACK_JACK_MAX4_3` | [m:happy]Then he went meowing around the room touching stuff! | [m:happy]然后他就喵喵叫，在房间里碰这碰那！ | [s:.8][m:happy]然后他就喵喵叫，在房间里碰这碰那！[/s] |
| `NPC_JACK_JACK_MAX4_4` | [m:winking]Be on the lookout for his paw prints! | [m:winking]记得留心他的爪印！ | [s:.8][m:winking]记得留心他的爪印！[/s] |
| `NPC_JACK_JACK_MAX5_1` | [m:happy]So me and the Nona cat are friends now! | [m:happy]我跟阿婆猫交朋友了！ | [s:.8][m:happy]我跟阿婆猫交朋友了！[/s] |
| `NPC_JACK_JACK_MAX5_2` | [m:paranoid]But when I try and pet him my hand just goes through!<br>Just like the real Nona! | [m:paranoid]可是我想摸他的时候，手直接穿过去了！<br>阿婆也是这样！ | [s:.8][m:paranoid]可是我想摸他的时候，手直接穿过去了！<br>阿婆也是这样！[/s] |
| `NPC_JACK_JACK_MAX5_3` | [m:pondering]I'm thinking they are friends maybe? I dunno... but Jack is on the case again! | [m:pondering]我在想他们两个会不会是朋友？我也说不清楚……杰克又有案子可以调查啦！ | [s:.8][m:pondering]我在想他们两个会不会是朋友？我也说不清楚……杰克又有案子可以调查啦！[/s] |
| `NPC_JACK_JACK_MAX5_4` | [m:winking]Makin' friends and solving crimes! What can't this boy do!? Ha! | [m:winking]交朋友、破案子！还有什么我做不到？！哈！ | [s:.8][m:winking]交朋友、破案子！还有什么我做不到？！哈！[/s] |
| `NPC_JACK_JACK_MAX_INTRO_1` | [m:scared]So uh,<br>I don't have any more space for new treasures up here... | [m:scared]呃……<br>我这边没地方放新宝贝了…… | [s:.8][m:scared]呃……<br>我这边没地方放新宝贝了……[/s] |
| `NPC_JACK_JACK_MAX_INTRO_2` | [m:shocked]There are like 81 hundred things up here now! It's crazy! | [m:shocked]这上边现在有差不多81百个东西了！难以置信！ | [s:.8][m:shocked]这上边现在有差不多81百个东西了！难以置信！[/s] |
| `NPC_JACK_JACK_MAX_INTRO_3` | [m:paranoid]... | [m:paranoid]…… | [s:.8][m:paranoid]……[/s] |
| `NPC_JACK_JACK_MAX_INTRO_4` | [m:shocked]WHAT NONA!?<br>FOR REALS!? | [m:shocked]阿婆你说什么？！<br>真假？！ | [s:.8][m:shocked]阿婆你说什么？！<br>真假？！[/s] |
| `NPC_JACK_JACK_MAX_INTRO_5` | [m:happy]Oh wow, Nona says something special might happen if you keep sending me those bent fluffies! | [m:happy]哇，阿婆说你如果继续送我那些歪七扭八的毛球，有可能发生不一般的事情！ | [s:.8][m:happy]哇，阿婆说你如果继续送我那些歪七扭八的毛球，有可能发生不一般的事情！[/s] |
| `NPC_JACK_JACK_MAX_INTRO_6` | [m:pondering]I wonder what she means... hmmm. | [m:pondering]她是什么意思啊……唔…… | [s:.8][m:pondering]她是什么意思啊……唔……[/s] |
| `NPC_JACK_JACK_MAX_INTRO_7` | [m:winking]So uh, keep sendin' them to me and I guess we will solve this Nona mystery together! | [m:winking]所以呢，继续送吧，我们就能解开阿婆的这道谜语了！ | [s:.8][m:winking]所以呢，继续送吧，我们就能解开阿婆的这道谜语了！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_1` | [m:happy]Oh hey! | [m:happy]诶！ | [s:.8][m:happy]诶！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_10` | [m:mocking]When my eye grows back in I betcha I'm gonna see through walls! | [m:mocking]等眼睛再长出来，我肯定视力就能穿墙了！ | [s:.8][m:mocking]等眼睛再长出来，我肯定视力就能穿墙了！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_11` | [m:happy]Send me more of those broken kitties! | [m:happy]再有残废小猫，就继续送过来！ | [s:.8][m:happy]再有残废小猫，就继续送过来！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_12` | [m:default]The more I have, the more treasures I can put out for you! | [m:default]送得越多，我能卖你的宝贝就越多！ | [s:.8][m:default]送得越多，我能卖你的宝贝就越多！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_13` | [m:questioning]Deal? | [m:questioning]可以吗？ | [m:questioning][s:.8]可以吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_2` | [m:questioning]My Nona says you are super rich!<br>Is that true? | [m:questioning]阿婆说你超级有钱！<br>真的吗？ | [m:questioning][s:.8]阿婆说你超级有钱！<br>真的吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_3` | [m:happy]I bet you could buy all her treasures in no time! | [m:happy]肯定要不了几天就能买光她的宝贝！ | [s:.8][m:happy]肯定要不了几天就能买光她的宝贝！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_4` | [m:questioning]So, you wanna know that secret I made up? | [m:questioning]想知道我编的那个秘密吗？ | [m:questioning][s:.8]想知道我编的那个秘密吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_5` | [m:default]Ya know that thing where when you break all your bones? | [m:default]你知道全身骨头断光的那种感觉吧？ | [s:.8][m:default]你知道全身骨头断光的那种感觉吧？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_6` | [m:pondering]Then they grow back all huge and strong like a daddy guy? | [m:pondering]骨头会长回来，而且长得又粗又壮，像我爸那样。 | [s:.8][m:pondering]骨头会长回来，而且长得又粗又壮，像我爸那样。[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_7` | [m:happy]Well that's what I'm doing to those cats you'd send me! | [m:happy]你给我的猫，我就是把它们的骨头全都弄断了！ | [s:.8][m:happy]你给我的猫，我就是把它们的骨头全都弄断了！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_8` | [m:default]And guess what?! | [m:default]而且，你肯定猜不到！ | [s:.8][m:default]而且，你肯定猜不到！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_9` | [m:veryhappy]I'm doing it to me too! | [m:veryhappy]我自己也要那样！ | [s:.8][m:veryhappy]我自己也要那样！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_1` | [m:angry]Aw dang it...<br>UGH! | [m:angry]啊呀……<br>呃啊！ | [s:.8][m:angry]啊呀……<br>呃啊！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_2` | [m:default]I know I look so strong with these monster muscles... | [m:default]我知道自己现在一身肌肉，看起来超级猛…… | [s:.8][m:default]我知道自己现在一身肌肉，看起来超级猛……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_3` | [m:sad]But with all my smashed up bones and cuts, it hurts to move them boxes around! | [m:sad]可我骨头都碎了，而且身上全是伤，搬那些箱子很疼…… | [s:.8][m:sad]可我骨头都碎了，而且身上全是伤，搬那些箱子很疼……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_4` | [m:pondering]I'm thinking I need more of those meowers.  They can help me move stuff faster! | [m:pondering]我还是需要那些喵喵，再送给我几个，他们能帮我搬东西！ | [s:.8][m:pondering]我还是需要那些喵喵，再送给我几个，他们能帮我搬东西！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_5` | [m:happy]Yeah, I bet if I had a whole army of those guys I could save my Nona so fast, fires would happen! | [m:happy]对！我要是能有一支喵喵大军，那救阿婆肯定超级快，快到起火！ | [s:.8][m:happy]对！我要是能有一支喵喵大军，那救阿婆肯定超级快，快到起火！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_6` | [m:shocked]?!? | [m:shocked]？！？ | [s:.8][m:shocked]？！？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_7` | [m:angry]NO NONA! | [m:angry]没有啊，阿婆! | [s:.8][m:angry]没有啊，阿婆![/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_8` | [m:veryangry]WE DON'T PLAY WITH FIRE ANYMORE!<br><br>GO BACK TO SLEEP! | [m:veryangry]我们不玩火啦！<br><br>快回去睡觉！ | [s:.8][m:veryangry]我们不玩火啦！<br><br>快回去睡觉！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_9` | [m:default]Haha, my Nona is so silly! | [m:default]哈哈，阿婆糊里糊涂的！ | [s:.8][m:default]哈哈，阿婆糊里糊涂的！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_1` | [m:veryangry]NO NONA!<br>I'M NOT DOING THAT!<br>STOP YELLING! | [m:veryangry]阿婆！<br>你冤枉我！<br>不要吼啦！ | [s:.8][m:veryangry]阿婆！<br>你冤枉我！<br>不要吼啦！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_10` | [m:happy]LOL | [m:happy]笑死了 | [s:.8][m:happy]笑死了[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_2` | [m:default]Heh, Nona's being silly...<br>I don't do that stuff anymore. | [m:default]唉，阿婆又犯糊涂了……<br>我早就不那样了。 | [s:.8][m:default]唉，阿婆又犯糊涂了……<br>我早就不那样了。[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_3` | [m:questioning]Say...<br>Can I ask you a favor? | [m:questioning]话说……<br>能帮我个忙吗？ | [m:questioning][s:.8]话说……<br>能帮我个忙吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_4` | If you hear my Nona yelling can you just plug your ears? | 你要是听到阿婆吼，能把耳朵堵上吗？ | [s:.8]你要是听到阿婆吼，能把耳朵堵上吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_5` | [m:angry]She can be a big liar sometimes and it makes it really hard to save her... | [m:angry]她有时候可爱撒谎了，就让我也不知道该怎么救她…… | [s:.8][m:angry]她有时候可爱撒谎了，就让我也不知道该怎么救她……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_6` | [m:happy]Don't worry though, I'm still kicking the walls and pulling her arms! | [m:happy]不过放心，我还在踹墙、拉她胳膊！ | [s:.8][m:happy]不过放心，我还在踹墙、拉她胳膊！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_7` | [m:default]We are gonna get her out! I just need more Kitcats! | [m:default]我们会把她救出来的！我只是还需要小猫！ | [s:.8][m:default]我们会把她救出来的！我只是还需要小猫！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_8` | [m:angry]And for her to [m:veryangry]<br>STOP YELLING!!!! | [m:angry]还有就是，她不能[m:veryangry]<br>再吼啦——！！！ | [s:.8][m:angry]还有就是，她不能[m:veryangry]<br>再吼啦——！！！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_9` | [m:default]Heh, Nona you so crazy! | [m:default]唉，阿婆你是疯了吧？！ | [s:.8][m:default]唉，阿婆你是疯了吧？！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_1` | [m:veryhappy]Oh hey! Guess what?<br>We saved Nona! | [m:veryhappy]哦！你知道吗？<br>阿婆救出来啦！ | [s:.8][m:veryhappy]哦！你知道吗？<br>阿婆救出来啦！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_10` | [m:winking]This pipe mystery is just what this hero needs! | [m:winking]这根管子的谜团才是我这个英雄需要破解的东西！ | [s:.8][m:winking]这根管子的谜团才是我这个英雄需要破解的东西！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_11` | [m:happy]Anyway, keep sending me kitties and I'll give you goodies! | [m:happy]总而言之，继续送我小猫，我就给你好东西！ | [s:.8][m:happy]总而言之，继续送我小猫，我就给你好东西！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_12` | Now I think I gonna poop in the pipe again! | 我又要去拉屎了，拉进那根管子里！ | [s:.8]我又要去拉屎了，拉进那根管子里！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_13` | [m:shocked]! | [m:shocked]！ | [s:.8][m:shocked]！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_14` | [m:angry]NO NONA! I SAID PIPE! | [m:angry]啊呀！阿婆！我说的管子啊！ | [s:.8][m:angry]啊呀！阿婆！我说的管子啊！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_15` | [m:veryangry]PIPE! NO! THE NEW PIPE! STOP YELLING! | [m:veryangry]管子！不是那个！新的管子！别吼啦！ | [s:.8][m:veryangry]管子！不是那个！新的管子！别吼啦！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_16` | [m:bored]I wonder if Nona will fit in that pipe... | [m:bored]那根管子不知道塞不塞得下阿婆…… | [s:.8][m:bored]那根管子不知道塞不塞得下阿婆……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_2` | [m:winking]Just kidding!<br>Even with all those fluffers you sent me...<br>Nona's still back there. | [m:winking]开玩笑的！<br>你送了我那么多毛球……<br>可阿婆还是出不来。 | [s:.8][m:winking]开玩笑的！<br>你送了我那么多毛球……<br>可阿婆还是出不来。[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_3` | [m:sad]Don't be sad though, 'cuz sad kids get something to be sad about! | [m:sad]但是不要难过，不然就真有你难过的了！ | [s:.8][m:sad]但是不要难过，不然就真有你难过的了！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_4` | [m:questioning]I think you just need to keep buying things and then maybe something will happen? | [m:questioning]你只要继续买东西，说不定就会有什么结果？ | [m:questioning][s:.8]你只要继续买东西，说不定就会有什么结果？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_5` | [m:shocked]OH!<br>I almost forgetted!<br>I found a pipe!<br>But this one is different! | [m:shocked]哦！<br>差点给忘了！<br>我发现了一根管子！<br>这根不一样！ | [s:.8][m:shocked]哦！<br>差点给忘了！<br>我发现了一根管子！<br>这根不一样！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_6` | [m:scared]I throwed some cans down inside it and I was hearing people in there! | [m:scared]我往里面丢了几个易拉罐，听到下面居然有人说话！ | [s:.8][m:scared]我往里面丢了几个易拉罐，听到下面居然有人说话！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_7` | [m:pondering]Pretty sure it goes down into the bunker place! What the heck right? | [m:pondering]底下肯定就是地堡那边！是不是很离谱？ | [s:.8][m:pondering]底下肯定就是地堡那边！是不是很离谱？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_8` | [m:happy]That's my new mystery to solve! | [m:happy]我要去破解这个新的谜团！ | [s:.8][m:happy]我要去破解这个新的谜团！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_9` | [m:default]Nona is old news, and I don't even know how to read the newspaper! | [m:default]阿婆已经是旧新闻了，而且我都看不懂报纸！ | [s:.8][m:default]阿婆已经是旧新闻了，而且我都看不懂报纸！[/s] |
| `NPC_JACK_JACK_ZARA_1` | [m:angry]That dumb rock turtle from space just knocked over more treasures! | [m:angry]太空来的那个笨石头乌龟又把宝贝撞倒了！ | [s:.8][m:angry]太空来的那个笨石头乌龟又把宝贝撞倒了！[/s] |
| `NPC_JACK_JACK_ZARA_10` | [m:angry]Stupid rock thing... | [m:angry]蠢石头…… | [s:.8][m:angry]蠢石头……[/s] |
| `NPC_JACK_JACK_ZARA_2` | [m:scared]Nona has been screaming all day! She's even more stuck now! | [m:scared]阿婆喊了一天了！她现在身上压的东西更多了！ | [s:.8][m:scared]阿婆喊了一天了！她现在身上压的东西更多了！[/s] |
| `NPC_JACK_JACK_ZARA_3` | [m:veryangry]I'M WORKING ON IT NONA! | [m:veryangry]阿婆，我在想办法！ | [s:.8][m:veryangry]阿婆，我在想办法！[/s] |
| `NPC_JACK_JACK_ZARA_4` | [m:questioning]Gosh,<br>does a hero's work ever end? | [m:questioning]唉，<br>英雄是不是永远都有事做？ | [m:questioning][s:.8]唉，<br>英雄是不是永远都有事做？[/s] |
| `NPC_JACK_JACK_ZARA_5` | [m:default]Listen, I'd punch that thing if I had time but I gotta stay in the shop! | [m:default]我跟你说，我要是有时间，早就揍那家伙了，可我得看店！ | [s:.8][m:default]我跟你说，我要是有时间，早就揍那家伙了，可我得看店！[/s] |
| `NPC_JACK_JACK_ZARA_6` | [m:questioning]Can you please get that thing in a sleeper hold for me? | [m:questioning]能不能麻烦你替我锁他的喉？ | [m:questioning][s:.8]能不能麻烦你替我锁他的喉？[/s] |
| `NPC_JACK_JACK_ZARA_7` | [m:happy]Really twist his arm when you do it too! | [m:happy]顺便再使劲儿拧他的胳膊！ | [s:.8][m:happy]顺便再使劲儿拧他的胳膊！[/s] |
| `NPC_JACK_JACK_ZARA_8` | [m:angry]Who does she think she is, punching walls?<br>My daddy?! | [m:angry]她以为自己是谁啊，到处砸墙？<br>我爸吗？！ | [s:.8][m:angry]她以为自己是谁啊，到处砸墙？<br>我爸吗？！[/s] |
| `NPC_JACK_JACK_ZARA_9` | [m:veryangry]Well she's not my daddy because my daddy is gone, and hes not a girl! | [m:veryangry]她不是我爸，我爸不在了，而且他又不是女的！ | [s:.8][m:veryangry]她不是我爸，我爸不在了，而且他又不是女的！[/s] |
| `NPC_JACK_OUT_OF_STOCK_1` | Oh, I don't got nothing. Come back Sunday. | 哦，我没东西了，礼拜天再来吧。 | [s:.8]哦，我没东西了，礼拜天再来吧。[/s] |
| `NPC_JACK_PURCHASE_ITEM_1` | [m:happy]Oh cool, money! | [m:happy]好诶，赚钱啦！ | [s:.8][m:happy]好诶，赚钱啦！[/s] |
| `NPC_JACK_SHOP_TOOLTIP` | {name}.<br>{desc} | {name}。<br>{desc} | [s:.8]{name}。<br>{desc}[/s] |
| `NPC_JACK_UNKNOWN_1` | You appear to have unlocked something, but I don't have dialog for it. Congrats. Also fix this. | 你好像解锁什么了，可我没有对应的台词。恭喜了，另外处理一下这个。 | [s:.8]你好像解锁什么了，可我没有对应的台词。恭喜了，另外处理一下这个。[/s] |
| `NPC_JACK_UNPROMPTED_1` | Hey! You like stuff? | 诶！你喜欢东西吗？ | [s:.8]诶！你喜欢东西吗？[/s] |
| `NPC_NAME_ORGANGRINDER` | {organname} | {organname} | [f:NPCFont_OrganGrinder]{organname}[/f] |
| `NPC_ORGANGRINDER_ORGAN_INTRO_10` | [m:shocked]"{organname}?" [m:happy]Wow, I like that name. [m:veryhappy]Actually I think that's my name too! | [m:shocked]“{organname}?”[m:happy]嚯，这个名字不错。[m:veryhappy]我可能也是叫这个！ | [m:shocked]“[f:NPCFont_OrganGrinder]{organname}[/f]?”[m:happy]嚯，这个名字不错。[m:veryhappy]我可能也是叫这个！ |
| `NPC_ORGANGRINDER_ORGAN_INTRO_11` | Yeah yeah I'm definitely "{organname}"...<br>Wait! I'm having a memory! | 对对，我就是叫“{organname}”……<br>等一等！我想起来了！ | 对对，我就是叫“[f:NPCFont_OrganGrinder]{organname}[/f]”……<br>等一等！我想起来了！ |
| `NPC_ORGANGRINDER_ORGAN_INTRO_12` | [m:angry]"{organname}!"<br>Stop pulling off your finger nails!<br>[m:happy]Yeah, yeah that's me... | [m:angry]“{organname}！”<br>别拽指甲了！<br>[m:happy]对，对，我是叫这个名字…… | [m:angry]“[f:NPCFont_OrganGrinder]{organname}[/f]！”<br>别拽指甲了！<br>[m:happy]对，对，我是叫这个名字…… |
| `NPC_ORGANGRINDER_ORGAN_INTRO_13` | [m:veryhappy]I'm "{organname}!" | [m:veryhappy]我是“{organname}”！ | [m:veryhappy]我是“[f:NPCFont_OrganGrinder]{organname}[/f]”！ |
| `NPC_ORGANGRINDER_ORGAN_RENAME_2` | [m:sad]I don't really feel like a "{organname}" anymore at all these days... | [m:sad]感觉现在一点都不像“{organname}”了…… | [m:sad]感觉现在一点都不像“[f:NPCFont_OrganGrinder]{organname}[/f]”了…… |
| `NPC_ORGANGRINDER_ORGAN_RENAME_3` | [m:questioning]Yeah I don't think "{organname}" was actually ever my name!! | [m:questioning]嗯，我可能根本就不叫“{organname}”！！ | [m:questioning]嗯，我可能根本就不叫“[f:NPCFont_OrganGrinder]{organname}[/f]”！！ |
| `NPC_ORGANGRINDER_ORGAN_RENAME_5` | [m:shocked]"{organname}"! | [m:shocked]“{organname}”！ | [m:shocked]“[f:NPCFont_OrganGrinder]{organname}[/f]”！ |
| `NPC_ORGANGRINDER_ORGAN_RENAME_6` | [m:veryhappy]Yeah! "{organname}" was definitely my name! | [m:veryhappy]对！我是叫“{organname}”！ | [m:veryhappy]对！我是叫“[f:NPCFont_OrganGrinder]{organname}[/f]”！ |
| `NPC_ORGANGRINDER_ORGAN_RENAME_7` | [m:happy]Yeah "{organname}" feels much better! | [m:happy]嗯，“{organname}”现在感觉好多了！ | [m:happy]嗯，“[f:NPCFont_OrganGrinder]{organname}[/f]”现在感觉好多了！ |
| `NPC_ORGANGRINDER_ORGAN_UNLOCK_9` | [m:happy]Leave the flesh for ol' {organname}, I'll make it worth your while! | [m:happy]把肉留给{organname}吧，不会让你白忙活的！ | [m:happy]把肉留给[f:NPCFont_OrganGrinder]{organname}[/f]吧，不会让你白忙活的！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE1_1` | [m:happy]More meat puppets for {organname}!? Heck yeah! | [m:happy]又有肉偶给{organname}了！？诶嘿！ | [m:happy]又有肉偶给[f:NPCFont_OrganGrinder]{organname}[/f]了！？诶嘿！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE1_2` | [m:default]As long as {organname} is staying damp with ichor, I can be grabbing up all your trash for you! | [m:default]只要{organname}身上潮乎乎地沾着脓液，我就能帮你把垃圾全捡回来！ | [m:default]只要[f:NPCFont_OrganGrinder]{organname}[/f]身上潮乎乎地沾着脓液，我就能帮你把垃圾全捡回来！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE2_1` | [m:inlove]Wow, you are killing all these cats just for me!? You must be having feelings for ol' {organname}. | [m:inlove]嚯，你害死这些猫都是为了我！？你肯定是对{organname}动感情了。 | [m:inlove]嚯，你害死这些猫都是为了我！？你肯定是对[f:NPCFont_OrganGrinder]{organname}[/f]动感情了。 |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE2_2` | [m:paranoid]... {organname} has never been in love before... but I've been practicing... | [m:paranoid]……{organname}还没爱过谁……不过一直在练习…… | [m:paranoid]……[f:NPCFont_OrganGrinder]{organname}[/f]还没爱过谁……不过一直在练习…… |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE4_1` | [m:default]You know ol' {organname} was just standing here the other day and I swear I heard a kid crying... | [m:default]那什么，{organname}那天就站在这儿，当时绝对听到有个小孩在哭…… | [m:default]那什么，[f:NPCFont_OrganGrinder]{organname}[/f]那天就站在这儿，当时绝对听到有个小孩在哭…… |
| `NPC_POPUP_FIRST_HOUSE_BOSS_TOMORROW_3` | You got like one day 'till she gets here! | 估计再过1天就上来啦！ | 估计再过一天就上来啦！ |
| `NPC_POPUP_FIRST_HOUSE_BOSS_TOMORROW_6` | [m:bored][s:.7]Sadly...[/s] | [m:bored][s:.7]可惜了……[/s] | [m:bored][s:.7]可惜了…… |
| `NPC_POPUP_HOUSE_PIPE_1` | Oh...<br>[s:.8]It's Rainin' again.[/s] | 哦……<br>[s:.8]又下雨了。[/s] | [s:.8]哦……[/s]<br>[s:.6]又下雨了。[/s] |
| `NPC_POPUP_HOUSE_PIPE_10` | [m:sad][s:.6]*cough cough*[/s] | [m:sad][s:.6]*咳嗽*[/s] | [m:sad][s:.5]*咳嗽*[/s] |
| `NPC_POPUP_HOUSE_PIPE_11` | [m:veryhappy]Hahaha!<br>[s:.8]We are just kidding on you![/s] | [m:veryhappy]哈哈哈！<br>[s:.8]跟你开玩笑呢！[/s] | [s:.8][m:veryhappy]哈哈哈！[/s]<br>[s:.6]跟你开玩笑呢！[/s] |
| `NPC_POPUP_HOUSE_PIPE_12` | [m:happy]But really we love to build! So if you gonna wanna have more house made, just ask Frank. | [m:happy]但我们真的喜欢盖房子！你要是还想盖房子，就找弗兰克。 | [s:.8][m:happy]但我们真的喜欢盖房子！你要是还想盖房子，就找弗兰克。[/s] |
| `NPC_POPUP_HOUSE_PIPE_13` | [m:default]Frank do need<br>to be paid though,<br>[s:.8]we don't work for<br>kisses no more.[/s]<br>[s:.7]No... Frank wants friends.[/s] | [m:default]但弗兰克<br>也得收钱，<br>[s:.8]我们不能再为<br>亲亲白干活。[/s]<br>[s:.7]不行……弗兰克想交朋友。[/s] | [s:.8][m:default]但弗兰克<br>也得收钱，[/s]<br>[s:.6]我们不能再为<br>亲亲白干活。[/s]<br>[s:.5]不行……弗兰克想交朋友。[/s] |
| `NPC_POPUP_HOUSE_PIPE_14` | [m:happy][a:shake][s:1.4]Cat friends![/s][/a] | [m:happy][a:shake][s:1.4]想要猫猫朋友！[/s][/a] | [s:.8][m:happy][a:shake][s:1.4]想要猫猫朋友！[/s][/a][/s] |
| `NPC_POPUP_HOUSE_PIPE_15` | [m:default]See that [b]pipe[/b] over there?<br>[s:.8]That [b]pipes[/b] goes all over this places![/s] | [m:default]看到那根[b]管道[/b]没有？<br>[s:.8]那根[b]管子[/b]能通到这边所有地方！[/s] | [s:.8][m:default]看到那根[b]管道[/b]没有？[/s]<br>[s:.6]那根[b]管子[/b]能通到这边所有地方！[/s] |
| `NPC_POPUP_HOUSE_PIPE_16` | You wanna send a kitty out? Push him down that [b]pipe[/b] and bam!<br>[s:.8][m:happy]There he go![/s] | 想把小猫送出去？塞进那个[b]管道[/b]，啪！<br>[s:.8][m:happy]它就送出去啦！[/s] | [s:.8]想把小猫送出去？塞进那个[b]管道[/b]，啪！[/s]<br>[s:.6][m:happy]它就送出去啦！[/s] |
| `NPC_POPUP_HOUSE_PIPE_17` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_POPUP_HOUSE_PIPE_18` | [m:default]We don't want just any kitty though,<br>[s:.8]Frank want [o:black][c:white][img:retired]Retired[/c][/o] cats only.[/s] | [m:default]我们不是随便什么猫都要，<br>[s:.8]弗兰克只要[o:black][c:white][img:retired]退休[/c][/o]的猫。[/s] | [s:.8][m:default]我们不是随便什么猫都要，[/s]<br>[s:.6]弗兰克只要[o:black][c:white][img:retired]退休[/c][/o]的猫。[/s] |
| `NPC_POPUP_HOUSE_PIPE_19` | Frank think we like retired cats<br>[s:.8]cuz we are kind of retired too.[/s] | 弗兰克觉得我们喜欢退休的猫，<br>[s:.8]是因为我们也算是退休了。[/s] | [s:.8]弗兰克觉得我们喜欢退休的猫，[/s]<br>[s:.6]是因为我们也算是退休了。[/s] |
| `NPC_POPUP_HOUSE_PIPE_2` | [m:paranoid]Rain is a spookie one. [s:.8]I think it rain cuz we did bad things...[/s] | [m:paranoid]雨天很瘆人。[s:.8]我觉得下雨是因为我们干坏事了……[/s] | [s:.8][m:paranoid]雨天很瘆人。[/s][s:.6]我觉得下雨是因为我们干坏事了……[/s] |
| `NPC_POPUP_HOUSE_PIPE_20` | [m:happy]OK well,<br>[s:.8]we go night night![/s] | [m:happy]好啦，<br>[s:.8]我们去睡觉觉了！[/s] | [s:.8][m:happy]好啦，[/s]<br>[s:.6]我们去睡觉觉了！[/s] |
| `NPC_POPUP_HOUSE_PIPE_3` | [m:bored]The rain man sees what we be doing<br>[s:.8]and he tells on us.[/s] | [m:bored]下雨的人能看见我们在干什么，<br>[s:.8]然后就去告密。[/s] | [s:.8][m:bored]下雨的人能看见我们在干什么，[/s]<br>[s:.6]然后就去告密。[/s] |
| `NPC_POPUP_HOUSE_PIPE_4` | [m:sad][s:.6]*huff huff*[/s] | [m:sad][s:.6]*呼哧呼哧*[/s] | [m:sad][s:.5]*呼哧呼哧*[/s] |
| `NPC_POPUP_HOUSE_PIPE_5` | [m:happy]We are Frank and we live under your house! | [m:happy]我们是弗兰克，住在你家下面！ | [s:.8][m:happy]我们是弗兰克，住在你家下面！[/s] |
| `NPC_POPUP_HOUSE_PIPE_6` | [m:default]I bet you hear us scratchin'...<br>[s:.8]It gets itchy down here sometimes...[/s] | [m:default]你肯定听见我们挠痒痒了……<br>[s:.8]下面有时候特别痒……[/s] | [s:.8][m:default]你肯定听见我们挠痒痒了……[/s]<br>[s:.6]下面有时候特别痒……[/s] |
| `NPC_POPUP_HOUSE_PIPE_7` | Sometimes we like<br>being itchy, [m:happy][s:.8]cuz being itchy makes us work harder![/s] | 我们有时候喜欢<br>痒痒，[m:happy][s:.8]因为越痒我们干活越卖力！[/s] | [s:.8]我们有时候喜欢<br>痒痒，[/s][m:happy][s:.6]因为越痒我们干活越卖力！[/s] |
| `NPC_POPUP_HOUSE_PIPE_8` | Bet you didn't know Frank builded your house! [s:.8]No lying![/s] | 你肯定不知道这个房子是弗兰克盖！[s:.8]没骗你！[/s] | [s:.8]你肯定不知道这个房子是弗兰克盖！[/s][s:.6]没骗你！[/s] |
| `NPC_POPUP_HOUSE_PIPE_9` | We make them houses as fast as we make brown! | 我们盖房子跟拉㞎㞎一样快！ | [s:.8]我们盖房子跟拉㞎㞎一样快！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_1` | Hey Dude!<br>I was lookin' in your windows and seen you got lotsa cool junk in there! | 诶！<br>我刚才趴在你家窗台上，看到屋里有好多好多有意思的废品！ | [s:.8]诶！<br>我刚才趴在你家窗台上，看到屋里有好多好多有意思的废品！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_2` | Oh me?<br>I'm Baby Jack!<br>At least that's what the people around here call me... | 噢，你说我是谁？<br>我是杰克宝宝！<br>起码大家都这么叫我…… | [s:.8]噢，你说我是谁？<br>我是杰克宝宝！<br>起码大家都这么叫我……[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_3` | [m:happy]My Nona says its cuz of how talented I am.<br>I'm a superhero you know?! | [m:happy]阿婆说是因为我有天赋。<br>我是超级英雄，知不知道？！ | [s:.8][m:happy]阿婆说是因为我有天赋。<br>我是超级英雄，知不知道？！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_4` | [m:default]Nona also says good boys do nice things,<br>so I got's a gift for ya! | [m:default]阿婆还说乖孩子要做好事，<br>所以我给你带了件礼物！ | [s:.8][m:default]阿婆还说乖孩子要做好事，<br>所以我给你带了件礼物！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_5` | What I just gived you, that's what rich people call<br>[b]"furniture"[/b]. | 我刚给你的那个东西，有钱人叫<br>[b]“家具”[/b]。 | [s:.8]我刚给你的那个东西，有钱人叫<br>[b]“家具”[/b]。[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_6` | [m:happy]Furniture around these parts is filled with Jesus juice!<br>[s:.7][m:whispering]But we can talk about that later.[/s] | [m:happy]这边的家具里面都有耶稣果汁！<br>[s:.7][m:whispering]不过这个以后再说。[/s] | [s:.8][m:happy]这边的家具里面都有耶稣果汁！[/s]<br>[s:.6][m:whispering]不过这个以后再说。[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_7` | [m:default]See that tab up there?<br>Click it, then you can fill your house will all kinda junk! | [m:default]看见上面那个标签页没？<br>点一下，就能把各种乱七八糟的东西摆到家里啦！ | [s:.8][m:default]看见上面那个标签页没？<br>点一下，就能把各种乱七八糟的东西摆到家里啦！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_7_GAMEPAD` | [m:default]See that tab up there?<br>Select it, then you can fill your house will all kinda junk! | [m:default]看见上面那个标签页没？<br>选中它，就能把各种乱七八糟的东西摆到家里啦！ | [s:.8][m:default]看见上面那个标签页没？<br>选中它，就能把各种乱七八糟的东西摆到家里啦！[/s] |
| `NPC_POPUP_JACK_INTRODUCTION_8` | If you need me, I'll be with Nona in my lil' shack!<br>[m:happy]See ya! | 要是想找我，就来我跟阿婆住的小屋！<br>[m:happy]再见！ | [s:.8]要是想找我，就来我跟阿婆住的小屋！<br>[m:happy]再见！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT2_1` | [m:angry]CAUGHT YOU AGAIN! | [m:angry]又、让、我、看见了！ | [m:angry][s:1.3]又让我看见了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT2_5` | [m:veryangry]WELL, I DON'T LIKE IT! | [m:veryangry]但、我不、喜、欢！！ | [m:veryangry][s:1.3]但我不喜欢！！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT2_9` | [m:veryangry]YOU DIE! | [m:veryangry]你就、死、定、了！ | [m:veryangry][s:1.3]你就死定了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT3_1` | [m:angry]YOU SON OF A BITCH! | [m:angry]你个狗、东、西！ | [m:angry][s:1.3]你个狗东西！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT3_2` | [m:angry]YOU ARE DOING IT AGAIN! | [m:angry]你、还、这样？！ | [m:angry][s:1.3]你还这样？！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT3_3` | [m:veryangry]CHEATING! SAVE SCUMMING! | [m:veryangry]赖、皮！刷存档！ | [m:veryangry][s:1.3]赖皮！刷存档！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT3_4` | LOOK EVERYONE! THIS GUY LIKES TO CHEAT! | 都过来、看、啊！这哥们儿、这、么、喜欢赖皮！ | [s:1.3]都过来看啊！这哥们儿这么喜欢赖皮！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_1ALT3_6` | [m:angry]LOOK AT THIS THING! LOOK AT IT CHEAT! | [m:angry]都、过来、看啊！看、这家伙、赖、皮！ | [m:angry][s:1.3]都过来看啊！看这家伙赖皮！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT1_6` | [m:veryhappy]AND STOP SKIPPING WHAT I'M SAYING! THIS IS IMPORTANT STUFF! | [m:veryhappy]还有！我、说话、不、要、跳、过！我、说的、都、是、重、要、信息！ | [m:veryhappy][s:1.3]还有！我说话不要跳过！我说的都是重要信息！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT2_7` | [m:veryangry]WELL I DON'T! BECAUSE I HAVE SOUL! | [m:veryangry]我反正不、好、受！因、为、我有、心！ | [m:veryangry][s:1.3]我反正不好受！因为我有心！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT2_8` | YOU SOULLESS MONSTER! | 你个、没、心的怪、物！ | [s:1.3]你个没心的怪物！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_1` | [m:angry]LIAR! YOU SAID YOU WEREN'T GOING TO KEEP DOING THIS! | [m:angry]大、骗、子！明、明、说了不、这样了！ | [m:angry][s:1.3]大骗子！明明说了不这样了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_10` | [m:veryangry]STOP! | [m:veryangry]停手！ | [m:veryangry][s:1.3]停手！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_3` | [m:veryangry]KEEP | [m:veryangry]还、让、我 | [m:veryangry][s:1.3]还让我[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_4` | CHEATING | 怎、么 | [s:1.3]怎么[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_5` | CONSTANTLY!? | 相、信、你？！ | [s:1.3]相信你？！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_2ALT3_8` | [m:whispering]Earth to {Catname} CAN YOU HEAR ME?!!? | [m:whispering]地球呼叫{Catname}，听、到、了吗？！？！ | [m:whispering]地球呼叫{Catname}，[s:1.3]听到了吗？！？！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT1_7` | [m:veryangry]STOP IT! STOP IT NOW! | [m:veryangry]停、手啊！我让你停！ | [m:veryangry][s:1.3]停、手啊！我让你停！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT2_5` | [m:veryangry]I'M REPORTING THIS! | [m:veryangry]我要、举、报你！ | [m:veryangry][s:1.3]我要、举、报你！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT2_6` | A SAVE SCUMMER LIKE YOU SHOULD BE PUT ON A WATCH LIST! | 你、这、样、的回、档赖、皮、鬼就该上监、视、名、单！ | [s:1.3]你这样的回档赖皮鬼就该上监视名单！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_1` | [m:angry]LOOK AT WHAT YOU ARE DOING! | [m:angry]你、看看、你在干、什、么啊！ | [m:angry][s:1.3]你看看你在干什么啊！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_2` | EVERY ONE OF YOUR CATS HAS DEJA VU! | 你的猫全、都、有既视感了！ | [s:1.3]你的猫都有既视感了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_3` | [m:veryangry]ALL OF THEM! | [m:veryangry]全、都、有了！ | [m:veryangry][s:1.3]全都有了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_4` | YOU CAN'T WIN LIKE THIS! | 你这样根、本、赢、不、了！ | [s:1.3]你这样根本赢不了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_5` | YOU'RE SICK YOU KNOW THAT!? | 你知道自、己是变、态吗？！ | [s:1.3]你知道自己是变态吗？！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_3ALT3_6` | MARK MY WORDS! YOU WILL REGRET THIS! | 我、告、诉、你！你会后、悔、的！ | [s:1.3]我告诉你！你会后悔的！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_4ALT1_4` | [m:veryhappy]HERE I GO! | [m:veryhappy]我、上、啦！ | [m:veryhappy][s:1.3]我上啦！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_4ALT2_5` | [m:happy]CHECK THIS OUT! | [m:happy]看、好、了！ | [m:happy][s:1.3]看好了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_4ALT3_1` | [m:happy]ANNNNNNND YOURE DONE! | [m:happy]到——此——为——止！ | [m:happy][s:1.3]到——此——为——止！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_4ALT3_4` | [m:veryhappy]IT'S STEVEN'S TURN! | [m:veryhappy]该史蒂文上了！ | [m:veryhappy]该史蒂文上了！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_HOUSEBOSS_1_9` | [m:veryangry]Also<br>[s:1.5]I'LL KILL YOU![/s] | [m:veryangry]而且<br>[s:1.5]我也会要、了、你的、命！[/s] | [m:veryangry]而且<br>[s:1.7]我也会要、了、你的、命！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_HOUSEBOSS_2_1` | [m:veryangry][s:1.2]CHEATER! [a:shake]FCUKING[/a] CHEATER![/s] | [m:veryangry][s:1.2]赖、皮！[a:shake]淦、你妈的[/a]赖、皮、鬼！[/s] | [m:veryangry][s:1.5]赖、皮！[a:shake]淦、你妈的[/a]赖、皮、鬼！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_HOUSEBOSS_2_10` | [m:happy][s:1.2]Last warning![/s] | [m:happy][s:1.2]最后警告一次！[/s] | [m:happy][s:1.4]最后警告一次！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_10` | [m:veryangry][s:1.5]OR KILL YOUR PARENTS!!![/s] | [m:veryangry][s:1.5]或者杀了、你、爸、妈！！！[/s] | [m:veryangry][s:1.7]或者杀了你爸妈！！！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_14` | [m:default]it's like that,<br>but worse, [m:angry]because this is<br>[s:1.2]REAL real![/s] | [m:default]就类似那样，<br>但更恐怖，[m:angry]因为会发生在<br>[s:1.2]真的现实世界！[/s] | [m:default]就类似那样，<br>但更恐怖，[m:angry]因为会发生在<br>[s:1.5]真的现实世界！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_18` | [m:angry][s:1.2]ONE CHANCE![/s] | [m:angry][s:1.2]就、一、次！[/s] | [m:angry][s:1.5]就一次！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_19` | [m:veryangry][s:1.5]ONE OOPSIE DO-OVER![/s] | [m:veryangry][s:1.5]什么“哎呀手滑了”之类的，可以重来一次！[/s] | [m:veryangry][s:1.7]什么“哎呀手滑了”之类的，可以重来一次！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_23` | [m:questioning]If you wanna [s:1.2][b]save and exit[/b][/s] without seeing me, just do it from the map or whatever! | [m:questioning]想[s:1.2][b]存了档再退出[/b][/s]，又不想见到我？那就老老实实在地图上操作！ | [m:questioning]想[s:1.5][b]存了档再退出[/b][/s]，又不想见到我？那就老老实实在地图上操作！ |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_HOUSEBOSS_13` | [m:default]It's like that,<br>but worse, [m:angry]because this is<br>[s:1.2]REAL real![/s] | [m:default]就类似那样，<br>但更恐怖，[m:angry]因为会发生在<br>[s:1.2]真的现实世界！[/s] | [m:default]就类似那样，<br>但更恐怖，[m:angry]因为会发生在<br>[s:1.5]真的现实世界！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_HOUSEBOSS_15` | [m:veryangry][s:1.5]SO STOP SAVE SCUMMING![/s] | [m:veryangry][s:1.5]所以别再、刷、存档了！！[/s] | [m:veryangry][s:1.7]所以别再刷存档了！！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_HOUSEBOSS_2` | [m:pondering]You may know me from such games as Time Fcuk,<br>The End is Nigh or<br>[s:1.2]The Binding of Isaac! [/s] | [m:pondering]你可能在《Time Fcuk》、<br>《The End is Nigh》——就是《终结将至》——<br>还有[s:1.2]《The Binding of Isaac》（《以撒的结合》）[/s]里见过我！ | [m:pondering]你可能在《Time Fcuk》、<br>《The End is Nigh》——就是《终结将至》——<br>还有[s:1.5]《The Binding of Isaac》（《以撒的结合》）[/s]里见过我！ |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_HOUSEBOSS_8` | [m:veryangry][s:1.5]OR KILL YOUR PARENTS!!![/s] | [m:veryangry][s:1.5]或者杀了、你、爸、妈！！！[/s] | [m:veryangry][s:1.7]或者杀了你爸妈！！！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_HOUSEBOSS_9` | [s:1.5]!  !  ![/s] | [s:1.5]！！！[/s] | [s:1.7]！！！[/s] |
| `NPC_STEVEN_STEVEN_INTRODUCTION_6` | [m:veryhappy][s:1.6][a:shake]DIFFICULTY![/a][/s] | [m:veryhappy][s:1.6][a:shake]我、掌管、难、度！[/a][/s] | [m:veryhappy][s:1.6][a:shake]我掌管难度！[/a][/s] |
| `NPC_STEVEN_STEVEN_POSTENDGAME_1` | [m:shocked]NO ONE EXPECTS THE STEVEN ENDING! | [m:shocked]谁、都没、想、到有史、蒂、文、结局！ | [m:shocked][s:1.3]谁都没想到有史蒂文结局！[/s] |
| `NPC_STEVEN_STEVEN_POSTENDGAME_14` | [m:veryhappy]THAT WAS A JOKE AT YOUR EXPENSE, BUDDY! I'M TALKING ABOUT YOUR BEAN HOLE! | [m:veryhappy]伙计，拿你开个玩笑！我是在说你的豆豆眼儿！ | [m:veryhappy][s:1.3]伙计，拿你开个玩笑！我是在说你的豆豆眼儿！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT1_CRAZY_5` | [m:shocked]AND IT'S GONNA GET YOU SO LOADED! | [m:shocked]能让你爽、到、飞起！ | [m:shocked][s:1.3]能让你爽到飞起！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT2_CRAZY_5` | [m:veryhappy]HAHAHAHA! | [m:veryhappy]哈哈哈哈！ | [m:veryhappy][s:1.3]哈哈哈哈！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_CRAZY_2` | [m:veryangry]Oh yeah... HANDLE THIS! | [m:veryangry]噢耶……扛住！ | [m:veryangry]噢耶……[s:1.3]扛住！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_HARD_1` | [m:shocked]OMG, YOU UNLOCKED HARD MODE FOR ACT 3! | [m:shocked]我的上帝啊，你解锁了第三章的困难模式！ | [m:shocked][s:1.3]我的上帝啊，你解锁了第三章的困难模式！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_HARD_10` | [m:happy]GL! | [m:happy]加油！ | [m:happy][s:1.3]加油！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_IMPOSSIBLE_2` | [m:veryhappy]Fun fact: YOU CAN'T WIN! | [m:veryhappy]冷知识：你赢不了的！ | [m:veryhappy]冷知识：[s:1.3]你赢不了的！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_IMPOSSIBLE_6` | [m:veryangry]IT'S NEVER GONNA HAPPEN DUDE! It's like a Lost Delirium run without the Holy Mantle unlocked! | [m:veryangry]朋友，别想了！这个就跟没解锁神圣屏障就拿游魂打精神错乱一样！ | [m:veryangry][s:1.3]朋友，别想了！[/s]这个就跟没解锁神圣屏障就拿游魂打精神错乱一样！ |
| `NPC_TINK_TINK_TIPS_STIMULATION_7` | [m:happy]Every good breeder puts a heavy focus on Stimulation[img:stimulation], so don't neglect it! | [m:happy]合格的配种人都会很关注刺激[img:stimulation]，所以千万不能忽略了这一项！ | [m:happy]合格的配种人都会很重视刺激[img:stimulation]，所以千万不能忽略了这一项！ |
| `OBJECT_SPEWERPILL_DESC` | Heals and changes the form of Spewer when eaten. | 喷喷吃下之后，会恢复生命，还会改变形态。 | 呕吐宝宝吃下之后，会恢复生命，还会改变形态。 |
| `OBJECT_SPEWERTUBE_DESC` | Spawns pills for Spewer. | 会为喷喷吐出胶囊。 | 会为呕吐宝宝吐出胶囊。 |
| `PASSIVE_LIGHTUPTHESTAGE_NAME` | Light Up the Stage | 点亮舞台 | 照亮舞台 |
| `PASSIVE_RATSTYLE_NAME` | Rat Style | 鼠流 | 老鼠功 |
| `PASSIVE_SUPERLUCK_NAME` | Super Luck | 超级幸运 | 超幸运 |
| `PASSIVE_TRUESIGHT2_DESC` | You and your allies can't miss enemies within your line of sight. Allied physical attacks gain +50% critical hit chance against those enemies. | 你和友方攻击视线内的敌人不会落空。友方的物理攻击对这些敌人暴击几率+50% | 你和友方攻击你视线内的敌人不会落空。友方的物理攻击对这些敌人暴击几率+50% |
| `PASSIVE_TRUESIGHT_DESC` | You and your allies can't miss enemies within your line of sight. | 你和友方攻击视线内的敌人不会落空。 | 你和友方攻击你视线内的敌人不会落空。 |
| `SONG_UNLOCK_KAIJUS` | "Brush Your Teeth" is now in the radio playlist! | 《歯を磨いて》（《快去刷牙》）加进电台歌单啦！ | [f:EdmundmJP]《歯を磨いて》[/f] （《快去刷牙》）加进电台歌单啦！ |

## Removed

None.
