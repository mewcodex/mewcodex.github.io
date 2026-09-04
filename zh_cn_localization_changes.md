# Simplified Chinese Localization Changes

- Baseline: `93994b13b38ddc0d652cea8997e436d2623e2e12`
- Updated: `6173ac26d2c7b90a35fbb87d2c31997515fe79c7`
- Source: `text/events.csv` (`KEY`, `en`, `zh-cn`)
- JSON-style Unicode escapes were decoded before comparison.
- Zero-width characters were removed before comparison.

## Summary

- Added: 0
- Changed: 13
- Removed: 0

## Added

None.

## Changed

| Key | English | 原简体中文 | 新简体中文 |
| --- | --- | --- | --- |
| `EVENT_CLAM_REW1` | {catname} leans in and gives the clam a kiss!<br><br>The clam pops open and kisses {him} back! | {catname}探过去，亲了鲍鱼一口！<br><br>鲍鱼张开了壳，也亲了{him}一下！ | {catname}探过去，亲了鲍鱼一口！<br><br>鲍鱼也亲了{him}一下！ |
| `EVENT_CLAM_REW2` | {catname} gives the clam a kiss with {his} tongue.<br><br>It pops open revealing a shiny stone inside! | {catname}伸出舌头舔了舔鲍鱼。<br><br>鲍鱼张开了壳，露出了一颗发光的石头！ | {catname}伸出舌头舔了舔鲍鱼。<br><br>鲍鱼露出了一颗发光的石头！ |
| `EVENT_CLAM_REW3` | {catname} leans in to give the clam a kiss, and when {his} nose is about to touch the clam snaps at {him}! | {catname}凑过去想亲一下，鼻尖刚碰上鲍鱼，就冷不丁被夹了一下！ | {catname}凑过去想亲一下，鼻尖刚碰上鲍鱼，就被它吸住了，甩脱的时候伤到了自己！ |
| `EVENT_CLAM_REW4` | Drawn in by the alluring clam, {catname} closes {his} eyes and moves in close to the clam...<br><br>It snaps shut on {his} face! | {catname}被鲍鱼迷住了，闭上眼睛凑了上去……<br><br>结果鲍鱼“啪”地一声夹住了{his}脸！ | {catname}被鲍鱼迷住了，闭上眼睛凑了上去……<br><br>结果鲍鱼狠狠吸在了{his}脸上，甩脱的时候伤到了自己！ |
| `EVENT_CLAM_REW6` | Ignoring the clam's charm, {catname} prys it open looking for treasure within... | {catname}不吃鲍鱼那一套，撬开壳找起了宝贝…… | {catname}不吃鲍鱼那一套，扒开肉找起了宝贝…… |
| `EVENT_CLAM_REW7` | {catname} attempts to crush the clam, but it snaps at {him} instead! | {catname}想把鲍鱼砸碎，结果被它夹到了！ | {catname}想把鲍鱼砸碎，结果被它吸住了，{he}用力甩脱的时候伤到了自己！ |
| `EVENT_CLAM_REW8` | {catname} jumps on the small clam, trying to crush it beneath {him}, but the clam slams shut on {his} paw! | {catname}扑了过去，想把鲍鱼砸碎，结果鲍鱼“啪”一下夹住了{his}爪子！ | {catname}扑了过去，想把鲍鱼砸碎，结果鲍鱼狠狠吸住了{his}爪子，{he}甩脱的时候伤到了自己！ |
| `NPC_ORGANGRINDER_ORGAN_TINA3_10` | [m:confused][s:.6]3. Hot fudge.[/s] | [m:confused][s:.6][f:EdmundM]3.[/f] 热咖喱酱。[/s] | [m:confused][s:.6][f:NPCFont_OrganGrinder]3.[/f] 热咖喱酱。[/s] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_11` | [s:.5][a:wave]3. Long walks on the beach.[/s][/a] | [s:.5][a:wave][f:EdmundM]3.[/f] 海边漫步。[/s][/a] | [s:.5][a:wave][f:NPCFont_OrganGrinder]3.[/f] 海边漫步。[/s][/a] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_12` | [m:bored][a:wave][s:.4]3. Blondes.[/s][/a] | [m:bored][a:wave][s:.4][f:EdmundM]3.[/f] 金发妞。[/s][/a] | [m:bored][a:wave][s:.4][f:NPCFont_OrganGrinder]3.[/f] 金发妞。[/s][/a] |
| `NPC_ORGANGRINDER_ORGAN_TINA3_7` | [m:default]1. Guns. | [m:default][f:EdmundM]1.[/f] 枪。 | [m:default][f:NPCFont_OrganGrinder]1.[/f] 枪。 |
| `NPC_ORGANGRINDER_ORGAN_TINA3_8` | [m:happy]2. Punches. | [m:happy][f:EdmundM]2.[/f] 拳头。 | [m:happy][f:NPCFont_OrganGrinder]2.[/f] 拳头。 |
| `NPC_ORGANGRINDER_ORGAN_TINA3_9` | [m:pondering][s:.8]3. Lasers.[/s] | [m:pondering][s:.8][f:EdmundM]3.[/f]  激光。[/s] | [m:pondering][s:.8][f:NPCFont_OrganGrinder]3.[/f]  激光。[/s] |

## Removed

None.
