ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:active_pill', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold('能够激发一部分高级器官的'), Text.aqua('激活效果')], [Text.gray('每次修改器官排列时需要重新激活')]], 1);
    })

    tooltip.addAdvanced('kubejs:ceremonial_knife', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold('●'), Text.gray('恢复部分法力')], [Text.gold('●'), Text.gray('对使用者造成'), Text.gold('10'), Text.gray('点伤害')]], 1);
    })
})