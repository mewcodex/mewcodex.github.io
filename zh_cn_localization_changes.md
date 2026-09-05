# Simplified Chinese Localization Changes

- Baseline: `7a1f7d7db33dbf72fbf79915e42a3828e97e097a`
- Updated: `9f7bc631273ae17336315d6d5bdab9f9318c973e`
- Source: `text/events.csv` (`KEY`, `en`, `zh-cn`)
- JSON-style Unicode escapes were decoded before comparison.
- Zero-width characters were removed before comparison.

## Summary

- Added: 0
- Changed: 2
- Removed: 0

## Added

None.

## Changed

| Key | English | 原简体中文 | 新简体中文 |
| --- | --- | --- | --- |
| `NPC_JACK_JACK_SHOPUPGRADE3_7` | [m:default]We are gonna get her out! I just need more Kitcats! | [s:.8][m:default]我们会把她救出来的！我只是还需要小猫！[/s] | [s:.8][m:default]我们会把她救出来的！可我还需要小猫！[/s] |
| `NPC_POPUP_LEVEL_UP_INTRO_8` | [m:happy]Sunburn makes things burn<br>and [b]Hot Blooded[/b] make burn more burny![/m] | [m:happy]晒伤能让东西烧起来，<br>[b]热血[/b]能让烧得更烧！[/m] | [m:happy]晒伤能让东西烧起来，<br>[b]热血[/b]能让烧的更烧！[/m] |

## Removed

None.
