# Simplified Chinese Localization Changes

- Baseline: `1b8e56a720eea59996ea2a491491da98b4e991e6`
- Updated: `3366b3a2ab3ad8b7bdf4fc59d641673d50c85892`
- Source: `text/events.csv` (`KEY`, `en`, `zh-cn`)
- JSON-style Unicode escapes were decoded before comparison.
- Zero-width characters were removed before comparison.

## Summary

- Added: 0
- Changed: 314
- Removed: 0

## Added

None.

## Changed

| Key | English | 原简体中文 | 新简体中文 |
| --- | --- | --- | --- |
| `ABILITY_ALTERDNA2_DESC` | Spend all your mana. Give a unit within your line of sight a random stat up for every 2 mana spent (rounded up). Give enemies random stat downs instead. | 耗尽你所有魔能。每耗费2点魔能，就令视线内1个单位随机1项属性提升1次（次数向上取整）。如果是敌人，那么改为随机1项属性降低1次。 | 耗尽你所有魔能。每耗费2点魔能，就令你视线内1个单位随机1项属性提升1次（次数向上取整）。如果是敌人，那么改为随机1项属性降低1次。 |
| `ABILITY_ALTERDNA_DESC` | Spend all your mana. Give a unit within your line of sight a random stat up for every 3 mana spent (rounded up). Give enemies random stat downs instead. | 耗尽你所有魔能。每耗费3点魔能，就令视线内1个单位随机1项属性提升1次（次数向上取整）。如果是敌人，那么改为随机1项属性降低1次。 | 耗尽你所有魔能。每耗费3点魔能，就令你视线内1个单位随机1项属性提升1次（次数向上取整）。如果是敌人，那么改为随机1项属性降低1次。 |
| `ABILITY_ANCESTRALRECALL2_DESC` | Target yourself or a unit within your line of sight and upgrade one of their spells at random for the rest of the battle. | 以自己或视线内的1个单位为目标，本场战斗期间，随机强化这个单位的1个法术。 | 以自己或你视线内的1个单位为目标，本场战斗期间，随机强化这个单位的1个法术。 |
| `ABILITY_ASTEROID2_DESC` | Make an asteroid fall onto a tile within your line of sight. The asteroid deals damage, bruises and leaves a boulder. | 令1颗陨石落在视线内的1个方格。陨石会造成伤害、施加【瘀伤】，同时留下1块巨石。 | 令1颗陨石落在你视线内的1个方格。陨石会造成伤害、施加【瘀伤】，同时留下1块巨石。 |
| `ABILITY_ASTEROID_DESC` | Make an asteroid fall onto a tile within your line of sight. The asteroid deals damage and leaves a rock. | 令1颗陨石落在视线内的1个方格。陨石会造成伤害，同时留下1块石头。 | 令1颗陨石落在你视线内的1个方格。陨石会造成伤害，同时留下1块石头。 |
| `ABILITY_AUTOPILOT2_DESC` | You or another unit takes an extra turn after this one. That unit is AI controlled on that turn.<br>[s:.7](This spell costs less.)[/s] | 你或另外1个单位在这个回合之后获得1个额外回合。这个单位在那个回合由AI控制。<br>[s:.7]（这个法术耗费减少）[/s] | 你或另外1个单位在这个回合之后获得1个额外回合。这个单位在额外回合由AI控制。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_CHOMP2_DESC` | A wide melee attack with Life Steal. If used on an ally, gain +1[img:str]. If used on a pickup, gain double that pickup's effects. | 范围更宽的近身攻击，带【吸血】。如果目标是友方，那么你[img:str]+1；如果目标是可以捡起的物品，那么这件物品的效果翻倍。 | 范围更宽的近身攻击，带【吸血】。如果目标是友方，那么你[img:str]+1；如果目标是可以捡起的物品，那么这件物品的效果增强1倍。 |
| `ABILITY_CHOMP_DESC` | A melee attack with Life Steal. If used on an ally, gain +1[img:str]. If used on a pickup, gain double that pickup's effects. | 近身攻击，带【吸血】。如果目标是友方，那么你[img:str]+1，如果目标是可以捡起的物品，那么这件物品的效果翻倍。 | 近身攻击，带【吸血】。如果目标是友方，那么你[img:str]+1，如果目标是可以捡起的物品，那么这件物品的效果增强1倍。 |
| `ABILITY_CONSUME2_DESC` | Collect all pickups, then become drowsy. Gain double the effects of these pickups. | 捡起所有可以捡起的物品，然后【昏昏欲睡】。这些物品的效果翻倍。 | 捡起所有可以捡起的物品，然后【昏昏欲睡】。这些物品的效果增强1倍。 |
| `ABILITY_CUMULATIVEBLAST2_DESC` | Deal damage to a unit in your line of sight, then increase this spell's damage by 1 for the rest of the battle.<br>[s:.7](This spell costs less.)[/s] | 对视线内1个单位造成伤害，然后本场战斗期间这个法术伤害+1。<br>[s:.7]（这个法术耗费减少）[/s] | 对你视线内1个单位造成伤害，然后本场战斗期间这个法术伤害+1。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_CUMULATIVEBLAST_DESC` | Deal damage to a unit in your line of sight, then increase this spell's damage by 1 for the rest of the battle. | 对视线内1个单位造成伤害，然后本场战斗期间这个法术伤害+1。 | 对你视线内1个单位造成伤害，然后本场战斗期间这个法术伤害+1。 |
| `ABILITY_ETHEREAL_NAME` | Ethereal | 灵体 | 虚灵 |
| `ABILITY_EXTRATURNQ2_DESC` | Take an extra turn. You have a 75% chance to be stunned and don't regenerate mana on that turn.<br>[s:.7](This spell can't be cast on extra turns.)[/s] | 获得1个额外回合。那个回合，你有75%的几率进入【眩晕】状态，而且不会恢复魔能。<br>[s:.7]（这个法术不能在额外回合施放）[/s] | 获得1个额外回合。你在那个回合有75%的几率进入【眩晕】状态，而且不会恢复魔能。<br>[s:.7]（这个法术不能在额外回合施放）[/s] |
| `ABILITY_EXTRATURNQ_DESC` | Take an extra turn. You're stunned and don't regenerate mana on that turn.<br>[s:.7](This spell can't be cast on extra turns.)[/s] | 获得1个额外回合。那个回合，你处于【眩晕】状态，而且不会恢复魔能。<br>[s:.7]（这个法术不能在额外回合施放）[/s] | 获得1个额外回合。你在那个回合处于【眩晕】状态，而且不会恢复魔能。<br>[s:.7]（这个法术不能在额外回合施放）[/s] |
| `ABILITY_FLAMETHROWER_NAME` | Flamethrower | 火焰喷射器 | 喷射火焰 |
| `ABILITY_FLIP2_DESC` | Turn a unit within your line of sight 180 degrees. Inflict Confusion 2 and Magic Weakness 1 on that unit. | 令视线内1个单位转身。对它施加2层【混乱】和1层【魔法克制】。 | 令你视线内1个单位转身。对它施加2层【混乱】和1层【魔法克制】。 |
| `ABILITY_FLIP_DESC` | Turn a unit within your line of sight 180 degrees. Inflict Confusion 1 on that unit. | 令视线内1个单位转身。对它施加1层【混乱】。 | 令你视线内1个单位转身。对它施加1层【混乱】。 |
| `ABILITY_FUTURESIGHT2_DESC` | A unit within your line of sight backflips out of the way the next time they're targeted by an enemy.<br> [s:.7](This spell costs less.)[/s] | 令视线内的1个单位下一次被敌人选为目标时后空翻躲开。<br>[s:.7]（这个法术耗费减少）[/s] | 令你视线内的1个单位下一次被敌人选为目标时后空翻躲开。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_FUTURESIGHT_DESC` | A unit within your line of sight backflips out of the way the next time they're targeted by an enemy. | 令视线内的1个单位下一次被敌人选为目标时后空翻躲开。 | 令你视线内的1个单位下一次被敌人选为目标时后空翻躲开。 |
| `ABILITY_HIPTOSS2_DESC` | Throw a random adjacent unit two tiles away, dealing damage to it. This deals double damage if it's thrown onto another unit. | 随机把前后左右相邻的1个单位扔出2格远，对它造成伤害。如果它砸到其他单位，那么伤害翻倍。 | 随机把前后左右相邻的1个单位扔出2格远，对它造成伤害。如果它砸到其他单位，那么伤害增加1倍。 |
| `ABILITY_INCREASEGRAVITY2_DESC` | Inflict Slow 1 on each unit in an area around a tile within your line of sight. If you cast this from full mana, instead inflict Immobilize 1 and deal 6 damage. | 对视线内1个方格周围1片区域的每个单位施加1层【迟缓】。如果你这时是满魔能，那么改为施加1层【移动受限】，同时造成6点伤害。 | 对你视线内1个方格周围1片区域的每个单位施加1层【迟缓】。如果你这时是满魔能，那么改为施加1层【移动受限】，同时造成6点伤害。 |
| `ABILITY_INCREASEGRAVITY_DESC` | Inflict Slow 1 on a unit within your line of sight. If you cast this from full mana, instead inflict Immobilize 1 and deal 6 damage. | 对视线内的1个单位施加1层【迟缓】。如果你这时是满魔能，那么改为施加1层【移动受限】，同时造成6点伤害。 | 对你视线内的1个单位施加1层【迟缓】。如果你这时是满魔能，那么改为施加1层【移动受限】，同时造成6点伤害。 |
| `ABILITY_INVERSION2_DESC` | Swap positions with a unit in your line of sight.<br>[s:.7](This spell costs less.)[/s] | 跟视线内的1个单位交换位置。<br>[s:.7]（这个法术耗费减少）[/s] | 跟你视线内的1个单位交换位置。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_INVERSION_DESC` | Swap positions with a unit in your line of sight. | 跟视线内的1个单位交换位置。 | 跟你视线内的1个单位交换位置。 |
| `ABILITY_JUICED2_DESC` | Your movement range is doubled and you get +4 [img:str] until the end of the turn. | 这个回合结束之前，你的移动范围翻倍，同时[img:str]+4。 | 这个回合结束之前，你的移动范围扩大1倍，同时[img:str]+4。 |
| `ABILITY_JUICED_DESC` | Your movement range is doubled until the end of the turn. | 这个回合结束之前，你的移动范围翻倍。 | 这个回合结束之前，你的移动范围扩大1倍。 |
| `ABILITY_KAMEHAMEHA2_DESC` | Fire a magic blast at a unit anywhere within your line of sight.<br>[s:.7](Castable once per battle. If all your armor slots are empty, castable once per turn.)[/s] | 对视线内任意位置的1个单位发射魔法冲击。<br>[s:.7]（每场战斗可以施放1次。如果防具栏位全空，那么每个回合可以施放1次）[/s] | 对你视线内任意位置的1个单位发射魔法冲击。<br>[s:.7]（每场战斗可以施放1次。如果防具栏位全空，那么每个回合可以施放1次）[/s] |
| `ABILITY_LOOKAWAY2_DESC` | Every unit within your line of sight turns away from you and is inflicted with Blind 1. | 视线内的每个单位都会转身背对你，同时获得1层【瞎眼】。 | 你视线内的每个单位都会转身背对你，同时获得1层【瞎眼】。 |
| `ABILITY_LOOKAWAY_DESC` | Every unit within your line of sight turns away from you. | 视线内的每个单位都会转身背对你。 | 你视线内的每个单位都会转身背对你。 |
| `ABILITY_MANIFEST2_DESC` | Teleport into a unit within your line of sight. Deal damage and displace it. | 传送到视线内1个单位所在的方格。对它造成伤害，同时把它挤开。 | 传送到你视线内1个单位所在的方格。对它造成伤害，同时把它挤开。 |
| `ABILITY_MANIFEST_DESC` | Teleport in a straight line into a unit within your line of sight. Deal damage and displace it. | 沿直线传送到视线内1个单位所在的方格。对它造成伤害，同时把它挤开。 | 沿直线传送到你视线内1个单位所在的方格。对它造成伤害，同时把它挤开。 |
| `ABILITY_MASSHYSTERIA2_DESC` | Every enemy in your line of sight takes an extra turn. They are charmed on that turn.<br>[s:.7](This spell costs less.)[/s] | 视线内的每个敌人获得1个额外回合，它们在那个回合会处于【洗脑】状态。<br>[s:.7]（这个法术耗费减少）[/s] | 你视线内的每个敌人获得1个额外回合，它们在那个回合会处于【洗脑】状态。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_MASSHYSTERIA_DESC` | Every enemy in your line of sight takes an extra turn. They are charmed on that turn. | 视线内的每个敌人获得1个额外回合，它们在那个回合会处于【洗脑】状态。 | 你视线内的每个敌人获得1个额外回合，它们在那个回合会处于【洗脑】状态。 |
| `ABILITY_MEDUSA2_DESC` | Inflict Petrify on all units in your line of sight.<br>[s:.7](This spell costs less.)[/s] | 对视线内的所有单位施加【石化】。<br>[s:.7]（这个法术耗费减少）[/s] | 对你视线内的所有单位施加【石化】。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_MEDUSA_DESC` | Inflict Petrify on all units in your line of sight. | 对视线内的所有单位施加【石化】。 | 对你视线内的所有单位施加【石化】。 |
| `ABILITY_MIMIC2_DESC` | Target an allied cat within your line of sight. Cast one of their spells at random for free (or use their basic attack if theres no good spells).<br>[s:.7](This spell costs less.)[/s] | 以视线内的1个友方猫为目标，随机免费施放它的1个法术（如果没有合适法术，那么改为使用它的普通攻击）。<br>[s:.7]（这个法术耗费减少）[/s] | 以你视线内的1个友方猫为目标，随机免费施放它的1个法术（如果没有合适法术，那么改为使用它的普通攻击）。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_MIMIC_DESC` | Target an allied cat within your line of sight. Cast one of their spells at random for free (or use their basic attack if theres no good spells). | 以视线内的1个友方猫为目标，随机免费施放它的1个法术（如果没有合适法术，那么改为使用它的普通攻击）。 | 以你视线内的1个友方猫为目标，随机免费施放它的1个法术（如果没有合适法术，那么改为使用它的普通攻击）。 |
| `ABILITY_MINDCONTROL2_DESC` | Charm an enemy within your line of sight for the rest of the battle. That unit immediately takes an extra turn. | 本场战斗期间，令视线内的1个敌人【洗脑】。这个单位立刻获得1个额外回合。 | 本场战斗期间，令你视线内的1个敌人【洗脑】。这个单位立刻获得1个额外回合。 |
| `ABILITY_MINDCONTROL_DESC` | Charm an enemy within your line of sight for the rest of the battle. | 本场战斗期间，令视线内的1个敌人【洗脑】。 | 本场战斗期间，令你视线内的1个敌人【洗脑】。 |
| `ABILITY_MINDCRACK2_DESC` | Inflict Magic Weakness 2 and Confusion 1 on all non-allied units in your line of sight. | 对视线内所有非友方的单位施加2层【魔法克制】和1层【混乱】。 | 对你视线内所有非友方的单位施加2层【魔法克制】和1层【混乱】。 |
| `ABILITY_MINDCRACK_DESC` | Inflict Magic Weakness 2 on all units in your line of sight. | 对视线内的所有单位施加2层【魔法克制】。 | 对你视线内的所有单位施加2层【魔法克制】。 |
| `ABILITY_NIRVANA_NAME` | Nirvana | 涅槃 | 寂灭 |
| `ABILITY_ORDER2_DESC` | Give a unit within your line of sight All Stats Up and force it to move and attack one of its enemies. | 令视线内的1个单位所有属性提升，同时强迫它移动、攻击它的1个敌人。 | 令你视线内的1个单位所有属性提升，同时强迫它移动、攻击它的1个敌人。 |
| `ABILITY_ORDER_DESC` | Force a unit within your line of sight to move and attack one of its enemies. | 强迫视线内的1个单位移动、攻击它的1个敌人。 | 强迫你视线内的1个单位移动、攻击它的1个敌人。 |
| `ABILITY_PASS2_DESC` | Give a unit within your line of sight an extra turn immediately, then end your turn.<br>Castable only if you haven't taken any actions this turn other than your movement action.<br>[s:.7](This can't be cast on extra turns.)[/s] | 立刻令视线内的1个单位获得1个额外回合，然后结束你的回合。<br>如果这个回合用过移动之外的其他行动，那么就不能施放这个法术。<br>[s:.7]（这个法术不能在额外回合施放）[/s] | 立刻令你视线内的1个单位获得1个额外回合，然后结束你的回合。<br>如果这个回合用过移动之外的其他行动，那么就不能施放这个法术。<br>[s:.7]（这个法术不能在额外回合施放）[/s] |
| `ABILITY_PASS_DESC` | Give a unit within your line of sight an extra turn immediately, then end your turn. <br>Castable only if you haven't taken any actions this turn.<br>[s:.7](This can't be cast on extra turns.)[/s] | 立刻令视线内的1个单位获得1个额外回合，然后结束你的回合。<br>如果这个回合行动过，那么就不能施放这个法术。<br>[s:.7]（这个法术不能在额外回合施放）[/s] | 立刻令你视线内的1个单位获得1个额外回合，然后结束你的回合。<br>如果这个回合行动过，那么就不能施放这个法术。<br>[s:.7]（这个法术不能在额外回合施放）[/s] |
| `ABILITY_PING2_DESC` | Deal 1 damage to any unit within your line of sight.<br>RELOAD: Spend mana<br>Bonus Passive: +2 [img:int]. | 对视线内任一单位造成1点伤害。<br>冷却结束：耗费魔能<br>奖励被动：[img:int]+2。 | 对你视线内任一单位造成1点伤害。<br>冷却结束：耗费魔能<br>奖励被动：[img:int]+2。 |
| `ABILITY_PING_DESC` | Deal 1 damage to any unit within your line of sight.<br>RELOAD: Spend mana | 对视线内任一单位造成1点伤害。<br>冷却结束：耗费魔能 | 对你视线内任一单位造成1点伤害。<br>冷却结束：耗费魔能 |
| `ABILITY_PROLIFERATE2_DESC` | Double a unit's Poison, Bleed, and Burn.<br>[s:.7](This spell costs 0 mana. Castable once per battle.)[/s] | 令1个单位【中毒】、【出血】、【灼烧】的层数翻倍。<br>[s:.7]（这个法术耗费0魔能。每场战斗可以施放1次）[/s] | 令1个单位【中毒】、【出血】、【灼烧】的层数增加1倍。<br>[s:.7]（这个法术耗费0魔能。每场战斗可以施放1次）[/s] |
| `ABILITY_PROLIFERATE_DESC` | Double a unit's Poison, Bleed, and Burn.<br>[s:.7](Castable once per battle.)[/s] | 令1个单位【中毒】、【出血】、【灼烧】的层数翻倍。<br>[s:.7]（每场战斗可以施放1次）[/s] | 令1个单位【中毒】、【出血】、【灼烧】的层数增加1倍。<br>[s:.7]（每场战斗可以施放1次）[/s] |
| `ABILITY_PROLIFERATE_NAME` | Proliferate | 增殖 | 倍增 |
| `ABILITY_PSYCHICCHOKE2_DESC` | Deal damage to and inflict Bruise on a unit within your line of sight. This damage counts as physical damage and scales with [img:str]. | 对视线内的1个单位造成伤害和【瘀伤】。这次伤害视为物理伤害，而且数值随[img:str]增加。 | 对你视线内的1个单位造成伤害和【瘀伤】。这次伤害视为物理伤害，而且数值随[img:str]增加。 |
| `ABILITY_PSYCHICCHOKE_DESC` | Deal damage to and inflict Bruise on a unit within your line of sight. | 对视线内的1个单位造成伤害和【瘀伤】。 | 对你视线内的1个单位造成伤害和【瘀伤】。 |
| `ABILITY_PUPPET2_DESC` | Force a unit within your line of sight to attack in the direction it's facing. | 强迫视线内的1个单位向它面朝的方向攻击。 | 强迫你视线内的1个单位向它面朝的方向攻击。 |
| `ABILITY_PUPPET_DESC` | Force an enemy within your line of sight to attack in the direction it's facing. | 强迫视线内的1个敌人向它面朝的方向攻击。 | 强迫你视线内的1个敌人向它面朝的方向攻击。 |
| `ABILITY_RUSSIANSHORTHAIRROULETTE_NAME` | Russian Shorthair Roulette | 俄短轮盘 | 俄罗斯短尾轮盘 |
| `ABILITY_SCAVENGE2_DESC` | Run to any pickup and collect it. The effects of that pickup are doubled. | 跑向场上任一可以捡起的物品，把它捡起来。这件物品的效果翻倍。 | 跑向场上任一可以捡起的物品，把它捡起来。这件物品的效果增强1倍。 |
| `ABILITY_SHIFT2_DESC` | Swap positions with any unit.<br>[s:.7](Castable once per turn.)[/s] | 跟场上任一单位交换位置。<br>[s:.7]（每个回合可以施放1次）[/s] | 跟任一单位交换位置。<br>[s:.7]（每个回合可以施放1次）[/s] |
| `ABILITY_SHORTSHOT_DESC` | Shoot a unit in your line of sight. | 向视线内的1个单位射箭。 | 向你视线内的1个单位射箭。 |
| `ABILITY_SKYSHATTER2_DESC` | Create floating glass shards in an area within your line of sight. | 在视线内的1片区域生成飘在空中的玻璃碎片。 | 在你视线内的1片区域生成飘在空中的玻璃碎片。 |
| `ABILITY_SKYSHATTER_DESC` | Create floating glass shards on a tile within your line of sight. | 在视线内的1个方格生成飘在空中的玻璃碎片。 | 在你视线内的1个方格生成飘在空中的玻璃碎片。 |
| `ABILITY_SMASHTINKERER2_DESC` | Smash your weapon onto an adjacent unit, destroying it and dealing double its damage.<br>[s:.7](This spell costs less.)[/s] | 用武器猛砸前后左右相邻的1个单位，摧毁武器，本次武器伤害翻倍。<br>[s:.7]（这个法术耗费减少）[/s] | 用武器猛砸前后左右相邻的1个单位，摧毁武器，本次武器伤害增大1倍。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_SMASHTINKERER_DESC` | Smash your weapon onto an adjacent unit, destroying it and dealing double its damage. | 用武器猛砸前后左右相邻的1个单位，摧毁武器，本次武器伤害翻倍。 | 用武器猛砸前后左右相邻的1个单位，摧毁武器，本次武器伤害增大1倍。 |
| `ABILITY_SNATCH2_DESC` | Collect any pickup within your line of sight.<br>Gain +1 [img:lck]. | 捡起视线内任一件可以捡起的物品。<br>[img:lck]+1。 | 捡起你视线内任一件可以捡起的物品。<br>[img:lck]+1。 |
| `ABILITY_SNATCH_DESC` | Collect any pickup within your line of sight. | 捡起视线内任一件可以捡起的物品。 | 捡起你视线内任一件可以捡起的物品。 |
| `ABILITY_STAKEOUT2_DESC` | End your turn. On your next turn, your ranged abilities deal double damage.<br>[s:.7](Costs 0 mana. Castable only if you haven't taken any other actions this turn other than your movement action.)[/s] | 结束你的回合。你下个回合远程能力的伤害翻倍。<br>[s:.7]（这个法术耗费0魔能。如果这个回合用过移动之外的其他行动，那么就不能施放。）[/s] | 结束你的回合。你下个回合远程能力的伤害增大1倍。<br>[s:.7]（这个法术耗费0魔能。如果这个回合用过移动之外的其他行动，那么就不能施放。）[/s] |
| `ABILITY_STAKEOUT_DESC` | End your turn. On your next turn, your ranged abilities deal double damage.<br>[s:.7](Castable only if you haven't taken any other actions this turn.)[/s] | 结束你的回合。你下个回合的远程能力伤害翻倍。<br>[s:.7]（如果这个回合用过其他行动，那么就不能施放。）[/s] | 结束你的回合。你下个回合的远程能力伤害增大1倍。<br>[s:.7]（如果这个回合用过其他行动，那么就不能施放。）[/s] |
| `ABILITY_STASIS2_DESC` | Inflict Freeze 1, Blind 2, and Confusion 2 on a unit within your line of sight. | 对视线内1个单位施加1层【冻住】、2层【瞎眼】和2层【混乱】。 | 对你视线内1个单位施加1层【冻住】、2层【瞎眼】和2层【混乱】。 |
| `ABILITY_STASIS_DESC` | Inflict Freeze on a unit within your line of sight. | 对视线内1个单位施加【冻住】。 | 对你视线内1个单位施加【冻住】。 |
| `ABILITY_SUGGESTION2_DESC` | Cause enemies in a target area within your line of sight to each attack another enemy if they can. | 如果视线内目标区域的敌人可以攻击另一个敌人，那么就令他们全部进行攻击。 | 如果你视线内目标区域的敌人可以攻击另一个敌人，那么就令他们全部进行攻击。 |
| `ABILITY_SUGGESTION_DESC` | Cause an enemy within your line of sight to attack another enemy if it can. | 如果视线内有敌人可以攻击另一个敌人，那么就令这样的1个敌人进行攻击。 | 如果你视线内有敌人可以攻击另一个敌人，那么就令这样的1个敌人进行攻击。 |
| `ABILITY_SUPERNOVA2_DESC` | Deal damage to and inflict Blind on every unit within your line of sight, excluding your allies. | 对视线内的每个单位造成伤害和【瞎眼】，不包括你的友方。 | 对你视线内的每个单位造成伤害和【瞎眼】，不包括你的友方。 |
| `ABILITY_SUPERNOVA_DESC` | Deal damage to and inflict Blind on every unit within your line of sight. | 对视线内的每个单位造成伤害和【瞎眼】。 | 对你视线内的每个单位造成伤害和【瞎眼】。 |
| `ABILITY_TELEKINESIS2_DESC` | Push a unit within your line of sight away from you 10 tiles with Chain Knockback. | 把视线内的1个单位推开10格，带连锁击退。 | 把你视线内的1个单位推开10格，带连锁击退。 |
| `ABILITY_TELEKINESIS_DESC` | Push a unit within your line of sight away from you 10 tiles. | 把视线内的1个单位推开10格。 | 把你视线内的1个单位推开10格。 |
| `ABILITY_TEMPORALSHARDS2_DESC` | Give a unit within your line of sight +3 temporary Bleed Thorns until the end of its turn. If its was an ally, the bleed thorns last for the rest of the battle. | 令视线内的1个单位临时【出血尖刺】+3，持续到它的回合结束。如果目标是友方，那么它的【出血尖刺】持续到战斗结束。 | 令你视线内的1个单位临时【出血尖刺】+3，持续到它的回合结束。如果目标是友方，那么它的【出血尖刺】持续到战斗结束。 |
| `ABILITY_TEMPORALSHARDS_DESC` | Give a unit within your line of sight +3 temporary Bleed Thorns until the end of its turn. | 令视线内的1个单位临时【出血尖刺】+3，持续到它的回合结束。 | 令你视线内的1个单位临时【出血尖刺】+3，持续到它的回合结束。 |
| `ABILITY_TRAILBLAZER2_DESC` | Double your movement.  You're unaffected by tile effects until the end of the turn. | 你的移动范围翻倍。本回合结束之前，你不受方格效果影响。 | 你的移动范围扩大1倍。本回合结束之前，你不受方格效果影响。 |
| `ABILITY_WAYOFTHEOWL_NAME` | Way of the Owl | 鸮流 | 猫头鹰流 |
| `ABILITY_WITHDRAW2_DESC` | Pull any unit within your line of sight to a tile adjacent to you.<br>[s:.7](This spell costs less.)[/s] | 把视线内任一单位拉到你前后左右相邻的方格。<br>[s:.7]（这个法术耗费减少）[/s] | 把你视线内任一单位拉到你前后左右相邻的方格。<br>[s:.7]（这个法术耗费减少）[/s] |
| `ABILITY_WITHDRAW_DESC` | Pull any unit within your line of sight to a tile adjacent to you. | 把视线内任一单位拉到你前后左右相邻的方格。 | 把你视线内任一单位拉到你前后左右相邻的方格。 |
| `AREA_NAME_FUTURE` | Das Füture | Das Füture | 达斯·弗彻 |
| `ARMOR_BANDAGES_DESC` | Heals heal you for twice as much. | 你获得的治疗效果翻倍。 | 你获得的治疗效果增强1倍。 |
| `ARMOR_CAPANDBELLS_DESC` | Triple the effects of your Trinket. | 你小玩意儿的效果变成3倍。 | 你小玩意儿的效果增强2倍。 |
| `ARMOR_CAVEMANEYEBROWS_DESC` | Your weapons deal double damage. | 你武器的伤害翻倍。 | 你武器的伤害增大1倍。 |
| `ARMOR_CLAM_NAME` | Clam | 蛤蜊 | 鲍鱼 |
| `ARMOR_CLOWNMAKEUP_DESC` | Triple the effects of your Head armor. | 你头部防护的效果变成3倍。 | 你头部防护的效果增强2倍。 |
| `ARMOR_DNAMULTIPLIER_DESC` | Double all status effects that get applied to you. | 给你施加的所有状态效果翻倍。 | 给你施加的所有状态效果增强1倍。 |
| `ARMOR_HEADCHEESE_NAME` | Head Cheese | 脑袋奶酪 | 头顶奶酪 |
| `ARMOR_OBI_NAME` | Obi | 带 | 束带 |
| `ARMOR_RUFFLE_DESC` | Triple the effects of your Face armor. | 你脸部防护的效果变成3倍。 | 你脸部防护的效果增强2倍。 |
| `ARMOR_RUNEOFJERA_DESC` | Your trinket effects are doubled. | 你小玩意儿的效果翻倍。 | 你小玩意儿的效果增强1倍。 |
| `ARMOR_STOMACH_DESC` | Consumables you use have double the effect. | 你使用的消耗品效果翻倍。 | 你使用的消耗品效果增强1倍。 |
| `ARMOR_STORAGELOCKER_DESC` | Side Quest Item. Your team's active ability level ups offer rare items instead. | 支线任务物品。你队伍主动能力的升级选项会改为稀罕物品。 | 支线任务物品。你队伍主动能力的升级选项会改为稀有物品。 |
| `ARMOR_STUNNINGBEARD_DESC` | Your head and neck item effects are doubled. | 你头部和颈部物品的效果翻倍。 | 你头部和颈部物品的效果增强1倍。 |
| `ARMOR_STUNNINGCHAIN_DESC` | Your head and face item effects are doubled. | 你头部和脸部物品的效果翻倍。 | 你头部和脸部物品的效果增强1倍。 |
| `ARMOR_STUNNINGHAIRCUT_DESC` | Your face and neck item effects are doubled. | 你脸部和颈部物品的效果翻倍。 | 你脸部和颈部物品的效果增强1倍。 |
| `ARMOR_TENTACLENECK_NAME` | Back Tentacles | 臀部触手 | 背部触手 |
| `ARMOR_TWINEARMOR_NAME` | Twine Armor | 合股线防具 | 细绳防具 |
| `ARMOR_TWINEHAT_NAME` | Twine Hat | 合股线帽子 | 细绳帽子 |
| `ARMOR_TWINEMASK_NAME` | Twine Mask | 合股线面具 | 细绳面具 |
| `ARMOR_ZODIACSPONCHO_NAME` | Zodiacs Poncho | 黄道十二宫杀手的斗篷 | 黄道十二宫的斗篷 |
| `CAT_EMBARK_QUOTES_TINKERER_10` | I love the power glove, it's so bad. | 我喜欢这个力量手套，太牛逼了。 | 我喜欢这个力量手套，太牛了。 |
| `CAT_VS_BOSS_QUOTES_FIGHTER_1` | I'm gonna punch you in your stupid idiot face! | 蠢逼，我要干爆你那张脸！ | 大傻子，我要打烂你的脸！ |
| `COMBAT_POPUP_CATCH` | Catch! | 拿到了！ | 接住了！ |
| `COMBAT_POPUP_DEX_DOWN` | Dexterity Down | 协调性下降 | 灵巧下降 |
| `COMBAT_POPUP_DEX_UP` | Dexterity Up | 协调性提升 | 灵巧提升 |
| `COMBAT_UI_DEFEAT` | Defeat! | 战败！ | &amp;nbsp;战败！ |
| `DISORDER_BRAINDEAD_DESC` | Gain twice as many stats when you level up. +1 Reroll when leveling up. | 你升级时，获得的属性翻倍。升级时，重掷次数+1。 | 你升级时，获得的属性增加1倍。升级时，重掷次数+1。 |
| `DISORDER_EATINGDISORDER_DESC` | Double the effects of your consumables but you are confused on how to eat them. | 消耗品的效果翻倍，但你不知道该怎么吃。 | 消耗品的效果增强1倍，但你不知道该怎么吃。 |
| `DISORDER_INTESTINALPROLAPSE_DESC` | You receive double damage from behind. | 你受到的身后伤害翻倍。 | 你受到的身后伤害增大1倍。 |
| `DISORDER_SENSORYOVERLOADFACE_DESC` | All but your face slot is locked. Your face item's effects are tripled! | 除了脸部以外，其他栏位全部上锁。脸部物品效果变成3倍！ | 除了脸部以外，其他栏位全部上锁。脸部物品效果增强2倍！ |
| `DISORDER_SENSORYOVERLOADHEAD_DESC` | All but your head slot is locked. Your head item's effects are tripled! | 除了头部以外，其他栏位全部上锁。头部物品效果变成3倍！ | 除了头部以外，其他栏位全部上锁。头部物品效果增强2倍！ |
| `DISORDER_SENSORYOVERLOADNECK_DESC` | All but your neck slot is locked. Your neck item's effects are tripled! | 除了颈部以外，其他栏位全部上锁。颈部物品效果变成3倍！ | 除了颈部以外，其他栏位全部上锁。颈部物品效果增强2倍！ |
| `DISORDER_SENSORYOVERLOADTRINKET_DESC` | All but your trinket slot is locked. Your trinket's effects are tripled! | 除了小玩意儿以外，其他栏位全部上锁。小玩意儿效果变成3倍！ | 除了小玩意儿以外，其他栏位全部上锁。小玩意儿效果增强2倍！ |
| `DISORDER_SENSORYOVERLOADWEAPON_DESC` | All but your weapon slot is locked. Your weapon's effects are tripled! | 除了武器以外，其他栏位全部上锁。你的武器效果变成3倍！ | 除了武器以外，其他栏位全部上锁。你的武器效果增强2倍！ |
| `DISORDER_WRENCHEDNECK_DESC` | You can't equip neck armor. Double the effects of your head armor. | 你不能装备颈部防具。头部防具效果翻倍。 | 你不能装备颈部防具。头部防具效果增强1倍。 |
| `ENEMY_HEADLESS_NAME` | Headless | 无头 | 没头 |
| `ENEMY_MEATSLIME_NAME` | Meat Slime | 黏黏肉 | 肉史莱姆 |
| `ENEMY_PARAISARIA_NAME` | Paraisaria | 近棒束孢 | 类猫棒束孢 |
| `ENEMY_PILE_NAME` | Pile | 一坨 | 坨坨 |
| `EVENT_BUTCH2_REW2` | [i]"Fly like a butthole fly, stink like a pee, I always say!<br><br>Quick, while no one's lookin'. Take this!"[/i] | “我的一贯宗旨是，‘黏上去就得像甩不掉的绿头蝇，骚起来就得像熏破天的陈年尿’！<br><br>快，趁没人看着，拿着！” | “我一直都说：‘飞就要飞得像屁眼的苍蝇，骚就要骚出尿味’！<br><br>快，趁没人看着，拿着！” |
| `EVENT_BUTCH3_REW2` | Heck kid, you'll need tough skin out there, but that's a bit excessive tho. You do you, kiddo. | 年轻人，在外面闯，皮不能太薄，但你这有点过了。小家伙，随你便吧。 | 年轻人，出来混皮是得厚点儿，但你这有点过了。算了，随你便吧。 |
| `EVENT_BUTCHTUTORIAL_REW2` | {catname} points cleverly behind Butch, distracting him.<br><br>[i]"Well hello mr. fancy pants! You're lucky your [img:int] is so high or you'd be chewin' rocks!"[/i] | {catname}机灵地指了指布奇身后，转移了他的注意。<br><br>“小家伙挺聪明啊！要不是你[img:int]这么高，现在就该在地上数牙了！” | {catname}机灵地指了指布奇身后，转移了他的注意。<br><br>“小家伙挺聪明啊！要不是你[img:int]这么高，现在就让你在地上数牙了！” |
| `EVENT_CATSINHEAT_REW3` | The cats join in on the action. It has been a while since they have had this much fun! | 猫咪们也加入了。它们好久没这么尽兴过了！ | 猫咪们也加入了。他们好久没这么尽兴过了！ |
| `EVENT_CLAM_NAME` | Clam | 蛤蜊 | 鲍鱼 |
| `EVENT_CLAM_QUES` | {catname} comes upon a charming little clam.<br><br>It's so... beautiful! {He} feels a growing urge to lean in closer... | {catname}遇到一个迷人的小蛤蜊。<br><br>它真的……好美啊！{He}忍不住想要再凑近一些…… | {catname}遇到一个迷猫的小鲍鱼。<br><br>它真的……好美啊！{He}忍不住想要再凑近一些…… |
| `EVENT_CLAM_QUES_N` | {catname} comes upon a charming little clam.<br><br>It's so... beautiful! They feel a growing urge to lean in closer... | {catname}撞见一个迷猫的小蛤蜊。<br><br>它真的……好美啊！彵忍不住想要再凑近一些…… | {catname}撞见一个迷猫的小鲍鱼。<br><br>它真的……好美啊！彵忍不住想要再凑近一些…… |
| `EVENT_CLAM_REW1` | {catname} leans in and gives the clam a kiss!<br><br>The clam pops open and kisses {him} back! | {catname}探过去，亲了蛤蜊一口！<br><br>蛤蜊张开了壳，也亲了{him}一下！ | {catname}探过去，亲了鲍鱼一口！<br><br>鲍鱼张开了壳，也亲了{him}一下！ |
| `EVENT_CLAM_REW2` | {catname} gives the clam a kiss with {his} tongue.<br><br>It pops open revealing a shiny stone inside! | {catname}伸出舌头舔了舔蛤蜊。<br><br>蛤蜊张开了壳，露出了一颗发光的石头！ | {catname}伸出舌头舔了舔鲍鱼。<br><br>鲍鱼张开了壳，露出了一颗发光的石头！ |
| `EVENT_CLAM_REW3` | {catname} leans in to give the clam a kiss, and when {his} nose is about to touch the clam snaps at {him}! | {catname}凑过去想亲一下，鼻尖刚碰上蛤蜊，就冷不丁被夹了一下！ | {catname}凑过去想亲一下，鼻尖刚碰上鲍鱼，就冷不丁被夹了一下！ |
| `EVENT_CLAM_REW4` | Drawn in by the alluring clam, {catname} closes {his} eyes and moves in close to the clam...<br><br>It snaps shut on {his} face! | {catname}被蛤蜊迷住了，闭上眼睛凑了上去……<br><br>结果蛤蜊“啪”地一声夹住了{his}脸！ | {catname}被鲍鱼迷住了，闭上眼睛凑了上去……<br><br>结果鲍鱼“啪”地一声夹住了{his}脸！ |
| `EVENT_CLAM_REW5` | {catname} resists the temptation and smashes the little clam instead. | {catname}抵挡住了诱惑，把这小蛤蜊拍烂了。 | {catname}抵挡住了诱惑，把这小鲍鱼拍烂了。 |
| `EVENT_CLAM_REW6` | Ignoring the clam's charm, {catname} prys it open looking for treasure within... | {catname}不吃蛤蜊那一套，撬开壳找起了宝贝…… | {catname}不吃鲍鱼那一套，撬开壳找起了宝贝…… |
| `EVENT_CLAM_REW7` | {catname} attempts to crush the clam, but it snaps at {him} instead! | {catname}想把蛤蜊砸碎，结果被它夹到了！ | {catname}想把鲍鱼砸碎，结果被它夹到了！ |
| `EVENT_CLAM_REW8` | {catname} jumps on the small clam, trying to crush it beneath {him}, but the clam slams shut on {his} paw! | {catname}扑了过去，想把蛤蜊砸碎，结果蛤蜊“啪”一下夹住了{his}爪子！ | {catname}扑了过去，想把鲍鱼砸碎，结果鲍鱼“啪”一下夹住了{his}爪子！ |
| `EVENT_FRUITBASKET_REW4` | The fruit tastes great, at first... But after {catname} and the other cats devour it, they look down and notice that the remains are all rotted. They begin to feel sick as poison sets in... | 水果一开始尝着挺不错……{catname}和其他猫猫大口吃起来，可是吃着吃着，低头发现剩下的都烂了。毒素进入了猫猫体内，他们开始不舒服了来…… | 水果一开始尝着挺不错……{catname}和其他猫猫大口吃起来，可是吃着吃着，低头发现剩下的都烂了。毒素进入了猫猫体内，他们开始不舒服了…… |
| `EVENT_HAPPENING_METEORSHOWER_REW` | The cats look up in wonder as majestic balls of fire streak through the sky.<br><br>Their awe shifts to terror as the loud booms of meteors striking the ground reverberate through the air! | 猫猫们仰头望去，只见一个个巨大的火球划破天空。<br><br>他们正看得出神，陨石接连砸在地上，轰隆巨响把它们吓得魂都要飞了！ | 猫猫们仰头望去，只见一个个巨大的火球划破天空。<br><br>他们正看得出神，陨石接连砸在地上，轰隆巨响把他们吓得魂都要飞了！ |
| `EVENT_HOLEINTHEEARTH_REW6` | {catname} offers up a sacrificial item to the hole...<br><br>From the depths of hell below a powerful item is returned! | {catname}向地洞献上一件祭品……<br><br>深处居然回赠了一件威力强大的东西！ | {catname}向地洞献上一件祭品……<br><br>地洞深处居然回赠了一件威力强大的东西！ |
| `EVENT_MOBOFRATS_REW1` | {catname} hisses and strikes a terrifying pose, ready to strike!<br><br>The rats scurry away in fright, terrified by the prospect of being attacked by such a fearsome creature as {catname}! | {catname}哈着气，摆出一副不好惹的架势，随时准备扑上去！<br><br>老鼠吓得一哄而散。{catname}一看就很凶，它们留下来肯定只有挨打的份！ | {catname}哈着气，摆出一副不好惹的架势，随时准备扑上去！<br><br>老鼠吓得一哄而散。{catname}一看就很凶，他们留下来肯定只有挨打的份！ |
| `EVENT_MOBOFRATS_REW8` | {catname} tries in vain to scare away the rats, but the rats tear into {him} with their teeth! | {catname}想把老鼠吓走，可是并没有吓走，反倒被它们啃得皮开肉绽！ | {catname}想把老鼠吓走，可是并没有吓走，反倒被他们啃得皮开肉绽！ |
| `EVENT_MYSTERIOUSTOMB_REW3` | {catname} tries to pull the heavy doors open but they are stuck fast. | {catname}使劲拽沉重的门，可它们纹丝不动。 | {catname}使劲拽沉重的门，可门纹丝不动。 |
| `EVENT_NESTOFEGGS_REW3` | The cats break open the eggs to eat them but are overwhelmed by a sudden stench of farts! | 猫猫们磕开蛋准备美餐一顿，结果一股冲天的屁味迎面扑来，把它们都熏懵了！ | 猫猫们磕开蛋准备美餐一顿，结果一股冲天的屁味迎面扑来，把他们都熏懵了！ |
| `EVENT_NESTOFEGGS_REW8` | When they enter the nest, the cats are suddenly ambushed by Raptors!<br><br>Beaten and bloodied, the cats manage to barely escape their wrath. | 猫猫们刚走进窝里，就被一群迅猛龙围攻了！<br><br>它们被打得浑身是血，好不容易才捡回条命逃了出来。 | 猫猫们刚走进窝里，就被一群迅猛龙围攻了！<br><br>他们被打得浑身是血，好不容易才捡回条命逃了出来。 |
| `EVENT_SMALLBLACKHOLE_REW1A` | With great effort, {catname} pulls {his} arm from the black hole clutching a rare item in {his} paw! | {catname}使出浑身力气，总算把胳膊从黑洞里拽了出来，爪子里还攥着一件稀有东西！ | {catname}使出浑身力气，总算把胳膊从黑洞里拽了出来，爪子里还攥着一件稀罕东西！ |
| `FURNITURE_DESC_SPECIAL_FIGHTIDOL` | Fights are deadlier but the winning cat gets double the stat rewards. | 猫咪打架更容易死猫，但赢的那只属性加成翻倍。 | 猫咪打架更容易死猫，但赢的那只属性加成增大1倍。 |
| `HOUSE_CAT_INFO_DEX_DESC` | Dexterity affects ranged attack and ranged ability damage. | 协调性影响远程攻击和远程能力的伤害。 | 灵巧影响远程攻击和远程能力的伤害。 |
| `HOUSE_CAT_INFO_DEX_NAME` | [img:dex]Dexterity | [img:dex]协调性 | [img:dex]灵巧 |
| `ITEM_AIRHORN_FIXED_DESC` | Use: Apply Madness to a unit within 5 tiles in your line of sight.<br>[s:.7](Usable once per battle.)[/s] | 使用：对视线内5格之内的1个单位施加【癫狂】。<br>[s:.7]（每场战斗可以用1次）[/s] | 使用：对你视线内5格之内的1个单位施加【癫狂】。<br>[s:.7]（每场战斗可以用1次）[/s] |
| `ITEM_BROKENMIRROR_NAME` | Broken Mirror | 破镜子 | 碎镜子 |
| `ITEM_FURNITUREBOX_RARE_DESC` | Breaks when [img:shield] is depleted.<br>Becomes a random piece of rare furniture when you return home. | [img:shield]耗尽时，这个会损坏。<br>回到家里时，会随机变成1件稀罕的家具。 | [img:shield]耗尽时，这个会损坏。<br>回到家里时，会随机变成1件稀有的家具。 |
| `ITEM_FURNITUREBOX_RARE_NAME` | Rare Furniture Box | 稀罕的家具箱子 | 稀有的家具箱子 |
| `ITEM_GLOWINGCOIN_DESC` | Use: Flip a coin.<br>Heads: Double your mana.<br>Tails: Lose 50% of your mana. | 使用：抛硬币。<br>正面：你的魔能翻倍。<br>反面：失去50%的魔能。 | 使用：抛硬币。<br>正面：你的魔能增加1倍。<br>反面：失去50%的魔能。 |
| `ITEM_HEAVYMACE_DESC` | Use: A melee attack with Knockback 2 that deals damage equal to your [img:str].<br>Cleaves and deals double damage to units with [img:shield]. | 使用：近身攻击，击退2格，伤害数值等于自身的[img:str]。<br>狠剁，对有[img:shield]的单位伤害翻倍。 | 使用：近身攻击，击退2格，伤害数值等于自身的[img:str]。<br>狠剁，对有[img:shield]的单位伤害增大1倍。 |
| `ITEM_LUCKYCOIN_DESC` | Coins that spawn at the start of each battle are doubled. | 每场战斗开始时生成的钱数量翻倍。 | 每场战斗开始时生成的钱数量增加1倍。 |
| `ITEM_NEVERSTONE_NAME` | Neverstone | 不变之石 | 不变石头 |
| `ITEM_THELONER_FIXED_DESC` | Use: Deals 5 damage to anything in your line of sight.<br>RELOAD: Any ally dies. | 使用：对视线内任一目标造成5点伤害。<br>冷却结束：任一友方死亡。 | 使用：对你视线内任一目标造成5点伤害。<br>冷却结束：任一友方死亡。 |
| `KEYWORD_DEXDOWN_DESC` | Dexterity decreased by {absstacks}.<br>Dexterity affects ranged attack and ranged ability damage. | 协调性下降{absstacks}。<br>协调性影响远程攻击和远程能力的伤害。 | 灵巧下降{absstacks}。<br>灵巧影响远程攻击和远程能力的伤害。 |
| `KEYWORD_DEXDOWN_NAME` | Dexterity Down | 协调性下降 | 灵巧下降 |
| `KEYWORD_DEXUP_DESC` | Dexterity increased by {stacks}.<br>Dexterity affects ranged attack and ranged ability damage. | 协调性提升{stacks}。<br>协调性影响远程攻击和远程能力的伤害。 | 灵巧提升{stacks}。<br>灵巧影响远程攻击和远程能力的伤害。 |
| `KEYWORD_DEXUP_NAME` | Dexterity Up | 协调性提升 | 灵巧提升 |
| `KEYWORD_DOUBLERANGEDDMG_DESC` | All ranged physical attacks and abilities deal double damage. | 远程的物理攻击和能力伤害全部翻倍。 | 远程的物理攻击和能力伤害全部增大1倍。 |
| `LEVELUP_CHOICE_STATS_DEX` | [img:dex]Dexterity[img:dex]<br>affects ranged attack and ranged ability damage | [img:dex]协调性[img:dex]<br>影响远程攻击和远程能力的伤害 | [img:dex]灵巧[img:dex]<br>影响远程攻击和远程能力的伤害 |
| `MUTATION_TEXTURE_310_DESC` | Gain double the effects of pickups you collect. | 捡起的物品效果翻倍。 | 捡起的物品效果增强1倍。 |
| `NPCOFFICE_NAME_ORGANGRINDER` | {organname}'s Box | [f:EdmundM]{organname}[/f]的箱子 | [f:Edmundm]{organname}[/f]的箱子 |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_BUBBLEBOY_7` | [m:happy]Oh, I almost forgot... Your reward!<br>It's a thing of Bubbles! | [m:happy]哦，差点忘了……给你的奖励！<br>一团泡泡！ | [m:happy]哦，差点忘了……给你的奖励！<br>能吹泡泡！ |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_FIGLEAF_2` | [m:happy]Haha, just giving you a hard time! | [m:happy]哈哈，跟你说着玩的！ | [m:happy]哈哈，逗你玩呢！ |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_HIVEMIND_3` | [m:happy]Hey that reminds me, I just finished another fashion!<br>I call it... "Remote Head"! | [m:happy]诶，说到这个，我刚又设计了一件时尚单品！<br>我叫它……“远程头部”！ | [m:happy]诶，说到这个，我刚又设计了一件时尚单品！<br>我叫它……“遥控脑袋”！ |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_MULTILINKCABLE_3` | [m:pondering]Something smells fishy here...<br>How could an idiot like you achieve something so grand!? | [m:pondering]这个事情有猫腻……<br>你这种白痴怎么可能这么牛逼？！ | [m:pondering]这个事情有猫腻……<br>你这种白痴怎么可能这么了不起？！ |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_NUCLEARKNIFE_9` | [m:default]Here,<br>I made a gun with the same tech!<br>I call it Nuclear Gun!<br>Pretty neat huh?[sfx:PickupCoin][pause:1][sfx:PickupCoin][pause:1][sfx:PickupCoin] | [m:default]给，<br>我用同样的技术做了门炮！<br>我管它叫核能炮！<br>是不是很牛逼？[sfx:PickupCoin][pause:1][sfx:PickupCoin][pause:1][sfx:PickupCoin] | [m:default]给，<br>我用同样的技术做了门炮！<br>我管它叫核能炮！<br>是不是很牛？[sfx:PickupCoin][pause:1][sfx:PickupCoin][pause:1][sfx:PickupCoin] |
| `NPC_BEANIES_BEANIESQUEST_COMPLETE_THEIOU_2` | [m:sad]Wow, what a pal!<br>Honestly I think I'm tearing up... | [m:sad]哇，真心朋友！<br>我真的快哭出来了…… | [m:sad]哇，真够朋友！<br>我快哭出来了，真的…… |
| `NPC_BEANIES_BEANIESQUEST_FAIL_AIRHORN_13` | You better get your shit together ASAP unless you wanna wake up tomorrow with missing genitals! | 抓紧把状态给我调整好，不然你明天醒的时候，生殖器就没了！ | 抓紧把你那个烂摊子收拾好，不然你明天醒的时候，生殖器就没了！ |
| `NPC_BEANIES_BEANIESQUEST_FAIL_AI_6` | [m:questioning]Me go make 'nother gobot, ok? | [m:questioning]我去做百变勇师，好不好？ | [m:questioning]我再做百变勇师，好不好？ |
| `NPC_BEANIES_BEANIESQUEST_FAIL_NUCLEARKNIFE_4` | [m:pondering]Except the gun is really cool and the baby is some kind of robot Nazi! | [m:pondering]只不过枪很牛逼，然后婴儿是个什么纳粹机器人！ | [m:pondering]只不过枪很厉害，然后婴儿是个什么纳粹机器人！ |
| `NPC_BEANIES_BEANIESQUEST_INTRO_EXPERIMENTALTREATMENT_2` | Mustard water, urine, cat spray and infected sinus mucus with a dash of lemon! | 芥末水、尿、猫的喷尿、鼻窦炎黏液，外加一点点柠檬！ | 芥末水、小便、猫的喷尿、鼻窦炎黏液，外加一点点柠檬！ |
| `NPC_BEANIES_BEANIESQUEST_INTRO_HIVEMIND_2` | [m:pondering]Me either, but it sounds cool right? | [m:pondering]我也没听过，但听着是不是很牛逼？ | [m:pondering]我也没听过，但听着是不是很有意思？ |
| `NPC_BEANIES_BEANIESQUEST_INTRO_HIVEMIND_3` | [m:happy]So cool that I'm basing a whole invention on it! | [m:happy]牛逼得我决定围绕它发明个东西！ | [m:happy]有意思得我决定围绕它发明个东西！ |
| `NPC_BEANIES_BEANIESQUEST_INTRO_MESTONE_1` | [m:veryhappy]IT'S TIME TO UNVEIL THE "ME STONE!" | [m:veryhappy]是时候揭开“自我之石”的真面目了！ | [m:veryhappy]是时候揭开“自我石头”的真面目了！ |
| `NPC_BEANIES_BEANIESQUEST_INTRO_TRAPFEST99_4` | [m:scared]There is one side effect... The worst shits you'll ever experience in your life! | [m:scared]有一个副作用……会让你体验到前所未有的痛苦便秘！ | [m:scared]有一个副作用……会让你拉出这辈子最惨烈的一泡屎！ |
| `NPC_BEANIES_BEANIES_BOMBQUEST_3_4` | [m:pondering]Or maybe the<br>"Time Ender"?<br>I dunno, what sounds cooler? | [m:pondering]或者叫<br>“终结时间者”？<br>你觉得哪个更拉风？ | [m:pondering]或者叫<br>“时间终结者”？<br>你觉得哪个更拉风？ |
| `NPC_BEANIES_BEANIES_BOMBQUEST_BEGIN_12` | [m:happy]Don't worry, we will beat this "Supreme Being" or die trying! | [m:happy]你放心，我们就算拼上命，就要打倒这个“至高存在”！ | [m:happy]你放心，我们就算拼上命，也要打倒这个“至高存在”！ |
| `NPC_BEANIES_BEANIES_FUTURE_INTRO_8` | [m:angry]Fix up the shit that you did! | [m:angry]都是拉的㞎㞎叭叭叭叭叭叭！ | [m:angry]㞎㞎叭叭叭叭叭叭！ |
| `NPC_BEANIES_BEANIES_LAB_INTRO_11` | [m:veryangry]THATS IT! IM DONE WITH YOUR BULLSHIT!  THIS IS THE FINAL STRAW! | [m:veryangry]行了！我不要再跟你折腾了！这是压死骆驼的最后一根稻草！ | [m:veryangry]行了！你这些狗屁事情，不要再找我了！这是压死骆驼的最后一根稻草！ |
| `NPC_BEANIES_BEANIES_SEEFUTURE_12` | 1984 Demikhov Dr. Boon County U.S Fuckin' A! | 美利坚他妈逼的合众国布恩县德米霍夫路1984号！ | 美利坚他妈的合众国布恩县德米霍夫路1984号！ |
| `NPC_BEANIES_BEANIES_TIMEMACHINE_2_2` | [m:default]It's my excrement receptacle. | [m:default]来自我的排泄容器。 | [m:default]是我的排泄容器。 |
| `NPC_BEANIES_BEANIES_TIMEMACHINE_2_3` | [m:questioning]As a fellow hobo I'm sure you know, us bums defecate in bags... | [m:questioning]你也是流浪人士，肯定明白，我们拉屎都是用袋子装…… | [m:questioning]你也是流浪人士，肯定知道，我们排便都是用袋子…… |
| `NPC_BEANIES_INTRO_25` | [m:winking]Don't worry,<br>I'll be sure to harvest some from {Catname's} elbows before {he's} incinerated. | [m:winking]放心，<br>火化{he's}不需要会中国的那种功夫，只是可能要多花一些时间。 | [m:winking]放心，<br>不需要中国的那种功夫，只是可能要多花一些时间。 |
| `NPC_BUTCH_BUTCH_TIPS_HEADHOME_3` | [m:pondering]Maybe you got tons of coins saved up, or a few badass items you don't wanna risk losing. | [m:pondering]你可能一路上捞了不少钱，或者捡到了牛逼的装备，不想因为死了丢了。 | [m:pondering]你可能一路上捞了不少钱，或者捡到了厉害的装备，不想因为死了丢了。 |
| `NPC_BUTCH_BUTCH_TIPS_LESSCATS_2` | Doin' a 3 cat run means those cats will level up 2-3 more times than usual! | 带3猫出去的话，猫咪能比平时多升2到3级！ | 带3只猫出去的话，猫咪能比平时多升2到3级！ |
| `NPC_BUTCH_BUTCH_TIPS_PASSIVES_3` | [m:happy]They are the key to some amazing combos! Keep your eyes peeled! | [m:happy]有些牛逼联动的核心就是被动能力！眼睛千万睁大看清楚！ | [m:happy]有些厉害联动的核心就是被动能力！眼睛千万睁大看清楚！ |
| `NPC_BUTCH_CLASS_UNLOCK_BUTCHER_1` | [m:happy]OK, here we go!<br>This one's pretty damn cool! | [m:happy]行嘞，看看这一个！<br>这个真他妈牛逼！ | [m:happy]行嘞，看看这一个！<br>这个特别厉害！ |
| `NPC_BUTCH_CLASS_UNLOCK_JESTER_3` | [m:spacedout]How fucking random! | [m:spacedout]怎么他妈什么职业都有！随机乱设计的吗？ | [m:spacedout]怎么他妈什么职业都有！随机设计的吗？ |
| `NPC_BUTCH_UNPROMPTED_G_1` | [m:shocked]Oh, you scared me! I thought I was about to be mugged by a loser incapable of logical thought! | [m:shocked]我靠，你吓我一跳！还以为遇上了不懂逻辑、打游戏又菜的强盗！ | [m:shocked]吓我一跳！还以为是哪个不会动脑子的废物要来抢我！ |
| `NPC_BUTCH_UPGRADE_STORAGE_6_3` | I just started bawling like a baby!<br>What the hell is wrong with me!? | 我直接嗷嗷大哭，跟个小娃娃一样！<br>我他妈是有什么毛病吗？！ | 我直接嗷嗷大哭，跟个小娃娃一样！<br>我特么是有什么毛病吗？！ |
| `NPC_BUTCH_UPGRADE_STORAGE_MAX5_2` | [m:questioning]I don't wanna sound judgy but like... Have you ever thought you might be mentally ill? | [m:questioning]我没有别的意思啊，但就是……你有没有想过自己会不会有什么收纳空间不足恐惧症？ | [m:questioning]我没有别的意思啊，但就是……有没有想过自己是不是有什么精神病？ |
| `NPC_BUTCH_UPGRADE_STORAGE_MAX5_4` | [m:winking]Same dude, same. | [m:winking]一样，朋友，我们是病友。 | [m:winking]一样，朋友，我也有。 |
| `NPC_FRANK_FRANK_CAVES_INTRO_4` | Good as new, right?<br>Look at how we can make this one dance! | [s:.8]是不是跟新的一样？<br>我们可以用这个身体跳舞！很灵活！[/s] | [s:.8]是不是跟新的一样？<br>看我们可以用这个身体跳舞！[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_ATTIC_3` | [m:sad]Franks slow, but no one seems to get us... | [s:.8][m:sad]弗兰克动作慢，可好像没有谁追我们……[/s] | [s:.8][m:sad]弗兰克反应也慢，可好像没人跟得上我们……[/s] |
| `NPC_FRANK_HOUSE_UPGRADE_MEDIUMHOUSE_12` | [m:shocked] ABOUT US!!! | [s:.8][m:shocked]弗兰就是我们！！！[/s] | [s:.8][m:shocked]在说我们！！！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_1` | [m:happy]You are gonna go to the desert!? Wowza! The desert is the baddest! | [s:.8][m:happy]你要去沙漠？！哇噻！沙漠那边超级牛皮！[/s] | [s:.8][m:happy]你要去沙漠？！哇噻！沙漠那边超级刺激！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_3` | [m:shocked]Just be careful, deserts are H.O.T. HOT! | [s:.8][m:shocked]小心点儿，沙漠热得要死！[/s] | [s:.8][m:shocked]小心点儿，沙漠超热，热得要死！[/s] |
| `NPC_JACK_JACK_DESERT_INTRO_5` | [m:whispering][s:.7]Cus' she's so old![/s]<br>Hehe... | [s:.8][m:whispering][s:.7]因为她年龄超级大！[/s]<br>嘻嘻……[/s] | [s:.8][m:whispering][s:.7]因为她非常老！[/s]<br>嘻嘻……[/s] |
| `NPC_JACK_JACK_MAX4_2` | [m:mocking]He thought I was named Isaac! Isn't that so funny? I'm Jack, duh! | [s:.8][m:mocking]他以为我叫以撒！是不是很搞笑？我明明是杰克诶！[/s] | [s:.8][m:mocking]他以为我叫以撒！是不是很搞笑？我明明是杰克！[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_13` | [m:questioning]Deal? | [m:questioning][s:.8]可以吗？[/s] | [m:questioning][s:.8]成交吗？[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE1_6` | [m:pondering]Then they grow back all huge and strong like a daddy guy? | [s:.8][m:pondering]骨头会长回来，而且长得又粗又壮，像我爸那样。[/s] | [s:.8][m:pondering]骨头会长回来，而且长得又粗又壮，像我爸那样的大人一样。[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE2_2` | [m:default]I know I look so strong with these monster muscles... | [s:.8][m:default]我知道自己现在一身肌肉，看起来超级猛……[/s] | [s:.8][m:default]我知道自己现在有怪物肌肉，看起来超级猛……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE3_5` | [m:angry]She can be a big liar sometimes and it makes it really hard to save her... | [s:.8][m:angry]她有时候可爱撒谎了，就让我也不知道该怎么救她……[/s] | [s:.8][m:angry]她有时候爱撒大谎，让我也不知道该怎么救她……[/s] |
| `NPC_JACK_JACK_SHOPUPGRADE4_10` | [m:winking]This pipe mystery is just what this hero needs! | [s:.8][m:winking]这根管子的谜团才是我这个英雄需要破解的东西！[/s] | [s:.8][m:winking]我是大英雄，就需要这个管子谜团！[/s] |
| `NPC_ORGANGRINDER_COLLECTED_NOTHING_5` | [m:angry]Please stop making me angry... | [m:angry]请不要再惹我生气了…… | [m:angry]麻烦不要再让我生气了…… |
| `NPC_ORGANGRINDER_ORGAN_MAX_INTRO_1` | [m:questioning]Hey guess what?  You know all those bumps and blisters covering my visible flesh? | [m:questioning]诶，我跟你说，看见我身上这些疙瘩、脓疱没有？ | [m:questioning]诶，我跟你说，我露出来的这些肉，看见这些疙瘩、脓疱没有？ |
| `NPC_ORGANGRINDER_ORGAN_MAX_INTRO_2` | [m:happy]Those are diseases!<br>And guess what else? | [m:happy]这些可都是病！<br>而且知道吗？ | [m:happy]这可都是病！<br>而且知道吗？ |
| `NPC_ORGANGRINDER_ORGAN_THROBBINGDOMAIN_INTRO_13` | [m:questioning]The lips of a cow, the tongue of a lion... | [m:questioning]牛的嘴、狮子的舌头…… | [m:questioning]牛的嘴唇、狮子的舌头…… |
| `NPC_ORGANGRINDER_ORGAN_TINA3_10` | [m:confused][s:.6]3. Hot fudge.[/s] | [m:confused][s:.6]3. 热咖喱酱。[/s] | [m:confused][s:.6][f:EdmundM]3.[/f] 热咖喱酱。[/s] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_11` | [s:.5][a:wave]3. Long walks on the beach.[/s][/a] | [s:.5][a:wave]3. 海边漫步。[/s][/a] | [s:.5][a:wave][f:EdmundM]3.[/f] 海边漫步。[/s][/a] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_12` | [m:bored][a:wave][s:.4]3. Blondes.[/s][/a] | [m:bored][a:wave][s:.4]3. 金发妞。[/s][/a] | [m:bored][a:wave][s:.4][f:EdmundM]3.[/f] 金发妞。[/s][/a] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_5` | [m:default]Oh wait yeah, I wanted to give you a tip on how to kill that giant corpse! | [m:default]哦对对，我是想教你怎么杀那个大个子死东西来着！ | [m:default]哦对对，我是想教你怎么杀那个大个子死猫来着！ |
| `NPC_ORGANGRINDER_ORGAN_TINA3_6` | [m:whispering]As a fellow corpse, I can give you a quick list of our weaknesses... | [m:whispering]我作为死东西，可以把我们的弱点给你快快列一个清单出来…… | [m:whispering]我也是死了的东西，可以把我们的弱点给你快快列一个清单出来…… |
| `NPC_ORGANGRINDER_ORGAN_TINA3_7` | [m:default]1. Guns. | [m:default]1. 枪。 | [m:default][f:EdmundM]1.[/f] 枪。 |
| `NPC_ORGANGRINDER_ORGAN_TINA3_8` | [m:happy]2. Punches. | [m:happy]2. 拳头。 | [m:happy][f:EdmundM]2.[/f] 拳头。 |
| `NPC_ORGANGRINDER_ORGAN_TINA3_9` | [m:pondering][s:.8]3. Lasers.[/s] | [m:pondering][s:.8]3. 激光。[/s] | [m:pondering][s:.8][f:EdmundM]3.[/f]  激光。[/s] |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE1_1` | [m:happy]More meat puppets for {organname}!? Heck yeah! | [m:happy]又有肉偶给[f:NPCFont_OrganGrinder]{organname}[/f]了！？诶嘿！ | [m:happy]又有肉偶给[f:NPCFont_OrganGrinder]{organname}[/f]了？！好啊！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE1_3` | [m:questioning]I'm like the tin man from that movie The Wizard! But instead of oil i need plasma... to play video games!! | [m:questioning]我跟《绿野仙踪》的铁皮人一样！但他需要的是油，我需要液……晶屏幕打游戏！！ | [m:questioning]我跟《奥兹巫师》的铁皮人一样！但他需要的是油，我需要液……晶屏幕打游戏！！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE1_7` | [m:questioning]You should kill more cats for me. I'm just saying to kill more cats so I can juice 'em and get stronger is all... | [m:questioning]你该继续帮我害猫，我的意思是你害死猫，我把汁水挤出来，才能变得更厉害…… | [m:questioning]你该再帮我弄死几只猫，我的意思是你把猫弄死，我把汁水挤出来，才能变得更厉害…… |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE2_1` | [m:inlove]Wow, you are killing all these cats just for me!? You must be having feelings for ol' {organname}. | [m:inlove]嚯，你害死这些猫都是为了我！？你肯定是对[f:NPCFont_OrganGrinder]{organname}[/f]动感情了。 | [m:inlove]嚯，你弄死这些猫都是为了我！？你肯定是对[f:NPCFont_OrganGrinder]{organname}[/f]动感情了。 |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE3_3` | [m:paranoid]Sometimes I'm just punching at my belly so those damn bugs stop eating up all my cruor. | [m:paranoid]我有时候只能使劲儿捶肚子，才能防止该死的虫子把我的血糊糊吃光。 | [m:paranoid]我有时候只能使劲儿捶肚子，才能防止该死的虫子把我的凝血块吃光。 |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE4_4` | [m:bored]And it's probably TMI,  but.. he just lays there...<br>If i wanted to date a corpse, I'd date you! | [m:bored]再说的话，可能就有点信息过量了，可……他就只会躺尸，一动不动……<br>我要是真想约尸体，肯定就约你了！ | [m:bored]这个话不太该跟你说，他……就只会躺尸，一动不动……<br>我要是真想约尸体，肯定就约你了！ |
| `NPC_ORGANGRINDER_ORGAN_UPGRADE5_1` | [m:shocked]ANOTHER MEMORY APPEARS! | [m:shocked]我又想起来一件事情！ | [m:shocked]又出现一段记忆！ |
| `NPC_POPUP_DONE_SPITTING_FAIL_ALLY_1` | [m:veryangry]No no no NO NO! Idiot! [m:angry]That was your teammate. | [m:veryangry]啊呀呀呀呀！你白痴吗？！[m:angry]那是你队友。 | [m:veryangry]哎哎哎哎哎！你白痴吗？！[m:angry]那是你队友。 |
| `NPC_POPUP_FIRST_FIGHT_INTRO_2` | [m:default]Name's [b]Butch[/b],<br>[s:.6]and even though I could give a frick if you live or die,[/s]<br>I can't help but see a bit of myself in you... | [m:default]我叫[b]布奇[/b]，<br>[s:.6]虽然你是死是活，我无吊所谓，[/s]<br>但我总感觉你身上应该有点我的东西…… | [m:default]我叫[b]布奇[/b]，<br>[s:.6]虽然你是死是活，我根本无所谓，[/s]<br>总感觉你身上有点儿我的味道…… |
| `NPC_POPUP_HOUSE_STRAYS_5` | [m:questioning]You should totes take {him} inside, right? | [m:questioning]你肯定应该会把{him}抱进去吧？ | [m:questioning]肯定得把{him}抱进去吧？ |
| `NPC_POPUP_LEVEL_UP_DIDNT_SELECT_SUNBURN_6` | And always look for combos! Seriously I can't stress this enough. | 另外，时刻想办法制造联动！真的，这个事情我再强调多少遍都不为过。 | 另外，时刻想办法制造联动！真的，这个事情再说多少遍都不为过。 |
| `NPC_POPUP_LEVEL_UP_INTRO_5` | There's a pretty awesome combo here. | 这儿有个很牛逼的联动。 | 这儿有个很牛的联动。 |
| `NPC_POPUP_LEVEL_UP_SELECTED_SUNBURN_3` | A cat's passives can make or break a run, and combos win games! | 猫的被动有时候能决定你一局是起飞还是暴毙，有联动才能赢！ | 猫的被动有时候能决定你一局是胜利还是战败，有联动才能赢！ |
| `NPC_POPUP_RANGED_CAT_EARLY_ATTACK2_RAT_1` | [m:sad]OK well, you just wasted your attack. That rat was already dead. You sure desecrated its body though. | [m:sad]行吧，你把攻击浪费了。那个老鼠刚才就已经死了，你倒是把它尸体狠狠干了一通。 | [m:sad]行吧，你把攻击浪费了。那个老鼠刚才就已经死了，你倒是毁辱了它的遗体。 |
| `NPC_POPUP_STEVEN_SAVESCUM_HOUSEBOSS_1_9` | [m:veryangry]Also<br>[s:1.5]I'LL KILL YOU![/s] | [m:veryangry]而且<br>[s:1.7]我也会要、了、你的、命！[/s] | [m:veryangry]而且<br>[s:1.7]我也会要了你的命！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_HOUSEBOSS_2_1` | [m:veryangry][s:1.2]CHEATER! [a:shake]FCUKING[/a] CHEATER![/s] | [m:veryangry][s:1.5]赖、皮！[a:shake]淦、你妈的[/a]赖、皮、鬼！[/s] | [m:veryangry][s:1.5]赖、皮！[a:shake]淦你妈的[/a]赖皮鬼！[/s] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_1` | [m:happy]Oh Hey! It's me, Steven! | [m:happy]哦，诶！是我史蒂文！ | [b][m:happy]哦，诶！是我史蒂文！[/b] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_2` | [m:pondering]You may know me from such games as Time Fcuk,<br>The End is Nigh or<br>[s:1.2]The Binding of Isaac! [/s] | [m:pondering]你可能在《Time Fcuk》、<br>《The End is Nigh》——就是《终结将至》——<br>还有[s:1.2]《The Binding of Isaac》（《以撒的结合》）[/s]里见过我！ | [b][m:pondering]你可能在《Time Fcuk》、<br>《The End is Nigh》——就是《终结将至》——<br>还有[s:1.2]《The Binding of Isaac》（《以撒的结合》）[/s]里见过我！[/b] |
| `NPC_POPUP_STEVEN_SAVESCUM_INTRO_3` | [m:default]But from here on out you're probably going to remember me as that Mr. Resetti guy. | [m:default]不过从现在开始，我可能要变成你的“电源叔叔”了。 | [b][m:default]不过从现在开始，我可能要变成你的“电源叔叔”了。[/b] |
| `NPC_STEVEN_STEVEN_INTRODUCTION_18` | [m:veryangry][a:shake][s:1.3]And fcuk your shit up![/a][/s] | [m:veryangry][a:shake][s:1.3]然后淦你个五荤三素！[/a][/s] | [m:veryangry][a:shake][s:1.3]然后淦你个稀巴烂！[/a][/s] |
| `NPC_STEVEN_STEVEN_POSTENDGAME_1` | [m:shocked]NO ONE EXPECTS THE STEVEN ENDING! | [m:shocked][s:1.3]谁都没想到有史蒂文结局！[/s] | [m:shocked][s:1.5]谁都没想到有史蒂文结局！[/s] |
| `NPC_STEVEN_STEVEN_POSTENDGAME_14` | [m:veryhappy]THAT WAS A JOKE AT YOUR EXPENSE, BUDDY! I'M TALKING ABOUT YOUR BEAN HOLE! | [m:veryhappy][s:1.3]伙计，拿你开个玩笑！我是在说你的豆豆眼儿！[/s] | [m:veryhappy][s:1.5]伙计，拿你开个玩笑！我是在说你的屁屁眼儿！[/s] |
| `NPC_STEVEN_STEVEN_RESUMMON_1` | Huh?... | 呵……？ | 哈……？ |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT1_CRAZY_5` | [m:shocked]AND IT'S GONNA GET YOU SO LOADED! | [m:shocked][s:1.3]能让你爽到飞起！[/s] | [m:shocked][s:1.5]能让你爽到飞起！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT2_CRAZY_3` | [m:pondering]What I mean is you look like shit. All sweaty, flabby and generally weird... | [m:pondering]我看你状态这么差，满头大汗，那么多肥肉，整个人看着也不对劲…… | [m:pondering]我看你状态这么烂，满头大汗，那么多肥肉，整个人看着也不对劲…… |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT2_HARD_1` | [m:paranoid]Guess what!? | [m:paranoid]听我说。 | [m:paranoid]你猜怎么着？！ |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT2_IMPOSSIBLE_4` | [m:veryhappy]HA! Gotcha, bitch! | [m:veryhappy]哈！贱人，逮到你了！ | [m:veryhappy]哈！贱人，想歪了吧！ |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_CRAZY_2` | [m:veryangry]Oh yeah... HANDLE THIS! | [m:veryangry]噢耶……[s:1.3]扛住！[/s] | [m:veryangry]噢耶……[s:1.5]扛住！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_CRAZY_4` | [m:happy]At this point I'd reach through the screen and knock your fcukin' ass out! | [m:happy]我现在真恨不得把手伸出屏幕，淦你个人仰马翻！ | [m:happy]我现在恨不得把手伸出屏幕，一拳把你淦晕！ |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_HARD_1` | [m:shocked]OMG, YOU UNLOCKED HARD MODE FOR ACT 3! | [m:shocked][s:1.3]我的上帝啊，你解锁了第三章的困难模式！[/s] | [m:shocked][s:1.5]我的上帝啊，你解锁了第三章的困难模式！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_HARD_10` | [m:happy]GL! | [m:happy][s:1.3]加油！[/s] | [m:happy][s:1.5]加油！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_IMPOSSIBLE_2` | [m:veryhappy]Fun fact: YOU CAN'T WIN! | [m:veryhappy]冷知识：[s:1.3]你赢不了的！[/s] | [m:veryhappy]冷知识：[s:1.5]你赢不了的！[/s] |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_IMPOSSIBLE_3` | [m:happy]It's totally untested! The developers just added it to fcuk with you! | [m:happy]测试都没测过！开发者加进来就是为了淦你！ | [m:happy]测试都没测过！开发者加进来就是为了淦……为了整你！ |
| `NPC_STEVEN_STEVEN_UNLOCK_ACT3_IMPOSSIBLE_6` | [m:veryangry]IT'S NEVER GONNA HAPPEN DUDE! It's like a Lost Delirium run without the Holy Mantle unlocked! | [m:veryangry][s:1.3]朋友，别想了！[/s]这个就跟没解锁神圣屏障就拿游魂打精神错乱一样！ | [m:veryangry][s:1.5]朋友，别想了！[/s]这个就跟没解锁神圣屏障就拿游魂打精神错乱一样！ |
| `NPC_TINK_TINK_AGGRESSION_8` | [m:questioning]So, have you ever wanted to know if someone is a huge moody biotch, just by looking at them? | [m:questioning]你有没有想过，有没有办法一眼就能看出对方是不是情绪炸弹？ | [m:questioning]你有没有想过，有没有办法一眼就能看出对方是不是喜怒无常的碧池？ |
| `NPC_TINK_TINK_BASESTATS_1` | [m:veryhappy]OMG GURL,<br>did you see my new car outside? | [m:veryhappy]我的上帝啊，亲爱的，<br>在外边看见我新车没有？ | [m:veryhappy]我的上帝啊，姐们儿，<br>外边看见我新车没有？ |
| `NPC_TINK_TINK_BASESTATS_11` | [m:mocking]When you are built like this, you don't need to know "NUMBERS"! | [m:mocking]你什么时候能长成我这样，就不需要知道什么“数值”了！ | [m:mocking]长成我这样，就不需要懂什么“数字”了！ |
| `NPC_TINK_TINK_BEGIN_ACCEPTING_CATS_4` | [m:questioning]And I'm like<br>"Thanks girl, but did you hear about that newbie in town who's been hoarding all those cats!?" | [m:questioning]我说：<br>“亲爱的太会说话了，你听说新来的那个没有？她家里攒了一大堆猫！” | [m:questioning]我说：<br>“姐妹太会说话了，你听说新来的那个没有？那人家里攒了一大堆猫！” |
| `NPC_TINK_TINK_MAX2_3` | [m:angry]You are a real sicko, you know that!? | [m:angry]你知不知道自己心理很扭曲？！ | [m:angry]你知不知道自己心理扭曲？！ |
| `NPC_TINK_TINK_MAX9_5` | [m:veryangry]STOP INTERRUPTING ME! | [m:veryangry]能不能不要再干扰我了！ | [m:veryangry]不要再来烦我了！ |
| `NPC_TINK_TINK_MAX_INTRO_1` | [m:pondering]Listen sister, don't tell the boys... But I'm all out of tea... | [m:pondering]那什么，亲爱的，千万别跟他们说啊……我没料可爆了…… | [m:pondering]那什么，亲爱的，千万别跟那帮男的说啊……我已经没料可爆了…… |
| `NPC_TINK_TINK_MAX_INTRO_10` | [m:default]A true boss bitch!<br>OK, so how's 25 bucks sound? | [m:default]你可以啊！<br>好，25块钱怎么样？ | [m:default]真够狠啊！<br>好，25块钱怎么样？ |
| `NPC_TINK_TINK_MAX_INTRO_3` | [m:scared]I'm a fraud!<br>And everyone is going to find out! | [m:scared]我要成冒牌货了！<br>所有人都会知道的！ | [m:scared]我成冒牌货了！<br>所有人都会知道的！ |
| `NPC_TINK_TINK_MAX_INTRO_9` | [m:angry]Extortion is it?<br>[m:pondering]Well I can't say I don't respect the hustle, girl... | [m:angry]勒索是吧？<br>[m:pondering]亲爱的，我还挺佩服你这个劲头…… | [m:angry]勒索是吧？<br>[m:pondering]姐们儿，不得不说，你这个手段我佩服…… |
| `NPC_TINK_TINK_TINA2_1` | [m:scared]I was driving past Pinky Winkies today and swear to God, I saw that fat cat's head rolling through the street! | [m:scared]今天开车路过丁莱士，我对上帝发誓，绝对看到那个肥猫的脑袋在街上滚来滚去！ | [m:scared]今天开车路过丁莱士，我对上帝发誓，绝对看到那个肥猫的脑袋了，在街上滚来滚去！ |
| `NPC_TINK_TINK_TINA2_10` | [m:angry]What the hell is wrong with everyone these days!? | [m:angry]现在的人都特么是有什么毛病吗？！ | [m:angry]现在的人一个个都是有什么毛病吗？！ |
| `NPC_TINK_UNPROMPTED_B_2` | Ok gurl, let me spill the tea... | 行啦姐妹，我给你爆个料…… | 行，姐们儿，我给你爆个料…… |
| `NPC_TINK_UNPROMPTED_C_1` | [m:happy]Well someone is in need of a makeover!<br>Let's chat! | [m:happy]哎呀，有些人需要整一整型！<br>来聊聊吧！ | [m:happy]哎呀，有些人需要改造一下！<br>来聊聊吧！ |
| `NPC_TINK_UNPROMPTED_F_1` | Yep, still here! It's like I never leave this damn RV these days. | 诶，我还在这儿！我这段时间基本就没出过这个房车。 | 诶，我还在这儿！我这段时间基本就没出过这个鬼房车。 |
| `NPC_TINK_UNPROMPTED_G_1` | [m:shocked]Gah, you spooked me! Were you watching me do my makeup? | [m:shocked]靠！吓我一跳！你刚是在偷看我化妆吗？ | [m:shocked]啊呀！吓我一跳！你刚是在偷看我化妆吗？ |
| `NPC_TRACY_TRACY_INTRODUCTION_9` | [m:default]In fact, I believe all animals should have the same rights as us. | [m:default]我认为所有动物都享受的权利应该跟我们一样多。 | [m:default]我认为所有动物享受的权利都应该跟我们一样多。 |
| `NPC_TRACY_TRACY_KAIJUFIGHT_4` | [m:pondering]Or I guess murder at least one of them? | [m:pondering]起码办掉一个？ | [m:pondering]起码杀一个？ |
| `NPC_TRACY_TRACY_MAX5_2` | [m:spacedout]DUUR DURRR! I love the crap I get when I do what I'm told! HUUURRR! | [m:spacedout]呃……我照他们说的办，就能弄到一堆破烂，我喜欢！呜—— | [m:spacedout]呃——呃——……我照他们说的办，就能弄到一堆破烂，我喜欢！呃—— |
| `NPC_TRACY_TRACY_MAX_INTRO_2` | Congratulations on being the first loser to completely sell your soul to the man, or whatever! | 恭喜你成为第一个把灵魂彻底卖给资本的大冤种！ | 恭喜你成为第一个把灵魂彻底卖给资本的废物！ |
| `OBJECT_HARPOONTRAP_NAME` | Harpoon Trap | 鱼叉陷阱 | 鱼叉机关 |
| `PASSIVE_ARMORSPECIALIST2_DESC` | Your equipment passive and active effects are doubled. | 你的装备主、被动效果翻倍。 | 你的装备主、被动效果增强1倍。 |
| `PASSIVE_ARMORSPECIALIST_DESC` | Your equipment passive effects are doubled. | 你的装备被动效果翻倍。 | 你的装备被动效果增强1倍。 |
| `PASSIVE_BLESSINGOFHOLYFIRE_DESC` | Holy-element spells deal double damage to enemies instead of healing and inflict Burn 2. <br>This blessing is lost when you kill a unit. | 神圣系法术不再治疗，而是对敌人造成双倍伤害、施加2层【灼烧】。<br>你击杀单位时会失去这个福佑。 | 神圣系法术不会治疗敌人，而是对敌人造成双倍伤害、施加2层【灼烧】。<br>你击杀单位时会失去这个福佑。 |
| `PASSIVE_DEALER2_DESC` | You can use consumables on other units.<br>Consumables you use have double the effect. | 你可以对其他单位使用消耗品。<br>你使用的消耗品效果翻倍。 | 你可以对其他单位使用消耗品。<br>你使用的消耗品效果增强1倍。 |
| `PASSIVE_ENCHANTEDRELIC2_DESC` | Your trinket's passive and active effects are tripled. | 你小玩意儿的被动效果和主动效果变成3倍。 | 你小玩意儿的被动效果和主动效果增强2倍。 |
| `PASSIVE_ENCHANTEDRELIC_DESC` | Your trinket's passive and active effects are doubled. | 你小玩意儿的被动效果和主动效果翻倍。 | 你小玩意儿的被动效果和主动效果增强1倍。 |
| `PASSIVE_EVILPATRON2_DESC` | Your healing abilities deal damage to enemies.<br>Holy element damage you deal is doubled.<br>Gain +2 range on tile-targeted healing spells. | 你的治疗能力会对敌人造成伤害。<br>你造成的神圣系伤害翻倍。<br>你以方格为目标的治疗法术范围+2。 | 你的治疗能力会对敌人造成伤害。<br>你造成的神圣系伤害增大1倍。<br>你以方格为目标的治疗法术范围+2。 |
| `PASSIVE_FIGHTME_NAME` | Underdog | 鱼腩 | 逆风 |
| `PASSIVE_HAZARDOUS2_DESC` | Tile damage and effects are doubled.<br>Allies are immune to tile damage and effects. | 方格伤害和方格效果翻倍。<br>友方免疫方格伤害和方格效果。 | 方格伤害和方格效果增强1倍。<br>友方免疫方格伤害和方格效果。 |
| `PASSIVE_HAZARDOUS_DESC` | Tile damage and effects are doubled. | 方格伤害和方格效果翻倍。 | 方格伤害和方格效果增强1倍。 |
| `PASSIVE_HEAVEHOOK2_DESC` | Your hook can target tiles.<br>Units pulled by your hook gain trample while being hooked, this trample damage is doubled. | 你的钩子能以方格为目标。<br>单位被你钩住拖拽时，获得横冲直撞，这次横冲直撞的伤害翻倍。 | 你的钩子能以方格为目标。<br>单位被你钩住拖拽时，获得横冲直撞，这次横冲直撞的伤害增大1倍。 |
| `PASSIVE_HEAVEHOOK2_MULTICLASS_DESC` | Your hook can target tiles.<br>Units pulled by your hook gain trample while being hooked, this trample damage is doubled.<br>[s:.7](Equips a temporary hook if you dont have one)[/s] | 你的钩子能以方格为目标。<br>单位被你钩住拖拽时，获得横冲直撞，这次横冲直撞的伤害翻倍。<br>[s:.7]（如果你没有钩子，就临时装备一个）[/s] | 你的钩子能以方格为目标。<br>单位被你钩住拖拽时，获得横冲直撞，这次横冲直撞的伤害增大1倍。<br>[s:.7]（如果你没有钩子，就临时装备一个）[/s] |
| `PASSIVE_MORALEBOOST2_DESC` | Allies gain All Stats Up whenever you kill something.<br>When you kill something, refresh your basic attack. | 每当你击杀单位，友方所有属性就提升。<br>你击杀单位时，你的普通攻击刷新。 | 每当你击杀单位，友方就所有属性提升。<br>你击杀单位时，你的普通攻击刷新。 |
| `PASSIVE_MORALEBOOST_DESC` | Allies gain All Stats Up whenever you kill something. | 每当你击杀单位，友方所有属性就提升。 | 每当你击杀单位，友方就所有属性提升。 |
| `PASSIVE_NUMBINGLEECHES2_DESC` | Your basic attack deals 0 damage, but its status and hit effects are tripled.<br>Your basic attack inflicts Mana Leech. | 你的普通攻击造成0点伤害，但它施加的状态和命中效果变成3倍。<br>你的普通攻击会施加【魔能吸取】。 | 你的普通攻击造成0点伤害，但它施加的状态和命中效果增强2倍。<br>你的普通攻击会施加【魔能吸取】。 |
| `PASSIVE_NUMBINGLEECHES_DESC` | Your basic attack deals 0 damage but its status and hit effects are tripled. | 你的普通攻击造成0点伤害，但它施加的状态和命中效果变成3倍。 | 你的普通攻击造成0点伤害，但它施加的状态和命中效果增强2倍。 |
| `PASSIVE_ONEWITHNOTHING2_DESC` | If you end your turn with 0 mana, your Mana Regeneration is doubled.<br>Bonus ability: Slit Wrists | 你的回合结束时，如果你的魔能为0，那么你的魔能自然恢复翻倍。<br>奖励能力：割腕。 | 你的回合结束时，如果你的魔能为0，那么你的魔能自然恢复增加1倍。<br>奖励能力：割腕。 |
| `PASSIVE_ONEWITHNOTHING_DESC` | If you end your turn with 0 mana, your Mana Regeneration is doubled. | 你的回合结束时，如果你的魔能为0，那么你的魔能自然恢复翻倍。 | 你的回合结束时，如果你的魔能为0，那么你的魔能自然恢复增加1倍。 |
| `PASSIVE_OVERCONFIDENT2_DESC` | While at full HP, reduce the cost of your spells by 2, but take double damage.  This can't reduce mana costs to less than 1. When you cast a spell, heal 1 HP. | 满生命时，法术的耗费-2，但你受到的伤害翻倍。魔能耗费最低降到1。你施放法术时，恢复1点生命。 | 满生命时，法术的耗费-2，但你受到的伤害增大1倍。魔能耗费最低降到1。你施放法术时，恢复1点生命。 |
| `PASSIVE_OVERCONFIDENT_DESC` | While at full HP, reduce the cost of your spells by 2, but take double damage. This can't reduce mana costs to less than 1. | 满生命时，法术的耗费-2，但你所受伤害翻倍。魔能耗费最低降到1。 | 满生命时，法术的耗费-2，但你所受伤害增大1倍。魔能耗费最低降到1。 |
| `PASSIVE_PATIENCE_DESC` | If you end your turn without taking any actions, gain an extra turn at the end of the round. You don't regenerate mana on your main turn if you pass it. | 如果你不行动直接结束回合，那么可以在一轮结束时获得1个额外回合。如果你跳过原始回合，那么那个回合魔能不会自然恢复。 | 如果你不行动直接结束回合，那么可以在一轮结束时获得1个额外回合。如果你跳过原始回合，那么额外回合魔能不会自然恢复。 |
| `PASSIVE_POISONTIPS2_DESC` | Your basic attack inflicts Poison 1.<br>Poison you inflict is doubled. | 你的普通攻击会施加1层【中毒】。<br>你施加的【中毒】翻倍。 | 你的普通攻击会施加1层【中毒】。<br>你施加的【中毒】层数增加1倍。 |
| `PASSIVE_PSYSMACK2_DESC` | Knockback damage and distance you and your allies deal is doubled and has Chain Knockback. | 你和友方造成的击退伤害和距离翻倍，而且可以连锁击退。 | 你和友方造成的击退伤害和距离增大1倍，而且可以连锁击退。 |
| `PASSIVE_PSYSMACK_DESC` | Knockback damage you and your allies deal is doubled. | 你和友方造成的击退伤害翻倍。 | 你和友方造成的击退伤害增大1倍。 |
| `PASSIVE_QUIVER2_DESC` | Save unused basic attacks for future turns.<br>If you haven't attacked this battle, the number you save is doubled. | 没有使用的普通攻击可以留到以后的回合使用。<br>如果这场战斗你还没攻击，你留下的普通攻击次数翻倍。 | 没有使用的普通攻击可以留到以后的回合使用。<br>如果这场战斗你还没攻击，你留下的普通攻击次数增加1倍。 |
| `PASSIVE_SCHADENFREUDE_NAME` | Schadenfreude | 沙登弗洛伊德 | 幸灾乐祸 |
| `PASSIVE_SMASH2_DESC` | Your weapons deal triple damage, but they have a 50% chance to break when you use them.<br>Three more Sticks are added to your inventory. | 你武器的伤害变成3倍，但使用时有50%的几率损坏。<br>你背包里会多3根树枝。 | 你武器的伤害增大2倍，但使用时有50%的几率损坏。<br>你背包里会多3根树枝。 |
| `PASSIVE_SMASH_DESC` | Your weapons deal triple damage, but they always break when you use them.<br>Three Sticks are added to your inventory. | 你武器的伤害变成3倍，但只要使用就会损坏。<br>你背包里会多3根树枝。 | 你武器的伤害增大2倍，但只要使用就会损坏。<br>你背包里会多3根树枝。 |
| `PASSIVE_TOWERDEFENSE2_DESC` | When an enemy comes within range, use your basic attack on them. | 敌人进入范围时，对它使用普通攻击。 | 敌人停在你的范围之内时，对它使用普通攻击。 |
| `PASSIVE_TOWERDEFENSE_DESC` | When an enemy comes within range, shoot them for 1 damage. | 敌人进入范围时，对它射击，造成1点伤害。 | 敌人停在你的范围之内时，对它射击，造成1点伤害。 |
| `PASSIVE_TRICKYTRAPS2_DESC` | Damage and effects from your traps are doubled.<br>Allies don't trigger your traps. | 你夹子的伤害和效果翻倍。<br>友方不会触发你的夹子。 | 你夹子的伤害和效果增强1倍。<br>友方不会触发你的夹子。 |
| `PASSIVE_TRICKYTRAPS_DESC` | Damage and effects from your traps are doubled. | 你夹子的伤害和效果翻倍。 | 你夹子的伤害和效果增强1倍。 |
| `PASSIVE_WEAPONMASTER_DESC` | Your weapon and item abilities deal +2 Damage and get +25% critical chance. A pipe is added to your inventory. | 你武器和物品能力的伤害+2、暴击几率+25%。你背包多了一根管子。 | 你武器和物品能力的伤害+2、暴击几率+25%。你背包多一根管子。 |
| `QEVENT_TIMEMACHINE_JURASSIC_REW1` | The cats pile into the time machine and activate it!<br><br>What new wonders will await them in the Infinite? | 猫猫们一股脑挤进时间机器，把它发动起来了！<br><br>无限世界里，会有什么稀奇玩意儿等着它们去发现呢？ | 猫猫们一股脑挤进时间机器，把它发动起来了！<br><br>无限世界里，会有什么稀奇玩意儿等着他们去发现呢？ |
| `SETBONUS_RECYCLED_DESC` | Also find a rare item when a recycled set piece breaks. | 回收套装物品坏掉时，还会获得1件稀罕物品。 | 回收套装物品坏掉时，还会获得1件稀有物品。 |
| `SETBONUS_STUNNING_DESC` | Your weapon and trinket's passive and active effects are tripled. | 你武器和小玩意儿的被动效果和主动效果变成3倍。 | 你武器和小玩意儿的被动效果和主动效果增强2倍。 |
| `SETBONUS_TWINE_NAME` | Twine Set Bonus! | 合股线套装加成！ | 细绳套装加成！ |
| `TEAMNAME_NOUN_COLORLESS1` | Boys | 小子 | 小伙子 |
| `TEAMNAME_NOUN_COLORLESS2` | Girls | 丫头 | 姑娘 |

## Removed

None.
