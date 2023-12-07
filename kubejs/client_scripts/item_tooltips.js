ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:active_pill', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold('能够激发一部分高级器官的'), Text.aqua('激活效果')], [Text.gray('每次修改器官排列时需要重新激活')]], 1);
    })

    tooltip.addAdvanced('kubejs:ceremonial_knife', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold('● '), Text.gray('恢复部分法力')], [Text.gold('● '), Text.gray('对使用者造成'), Text.gold('10'), Text.gray('点伤害')]], 1);
    })

    tooltip.addAdvanced('#kubejs:anti_rejection', (item, advanced, text) => {
        text.add(Text.gray('可用于抗排异（物品置于副手，器官置于主手）'));
    })

    tooltip.addAdvanced('kubejs:eye_of_fortress', (item, advanced, text) => {
        text.add(Text.darkRed('灼热之眼将指引你前往要塞的道路'));
    })

    tooltip.addAdvanced('kubejs:secret_of_rain', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray('雨的秘密').italic(), Text.gray('存在于'), Text.blue('暴雨天气').bold(), Text.gray('和'), Text.gold('发光状态').bold(), Text.gray('之中')]);
        } else {
            text.add([Text.gray('雨的秘密').italic(), Text.gray('存在于'), Text.blue('极致风暴').bold(), Text.gray('和'), Text.gold('闪耀光芒').bold(), Text.gray('之中')]);
        }
    })
})
