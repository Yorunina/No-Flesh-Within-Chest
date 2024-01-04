ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:active_pill', (item, advanced, text) => {
        addForTextLines(text, [[Text.gold('能够激发一部分高级器官的'), Text.aqua('激活效果')], [Text.gray('每次修改器官排列时需要重新激活')]], 1);
    })

    tooltip.addAdvanced('kubejs:ceremonial_knife', (item, advanced, text) => {
        addForTextLines(text, [[LEADING_SYMBOL, Text.gray('恢复部分法力')], [LEADING_SYMBOL, Text.gray('对使用者造成'), Text.gold('10'), Text.gray('点伤害')]], 1);
    })

    tooltip.addAdvanced('#kubejs:anti_rejection', (item, advanced, text) => {
        text.add(Text.gray('可用于抗排异（物品置于副手，器官置于主手）'));
    })

    tooltip.addAdvanced('kubejs:eye_of_fortress', (item, advanced, text) => {
        text.add(Text.darkRed('灼热之眼将指引你前往要塞的道路'));
    })


    tooltip.addAdvanced('kubejs:secret_of_rain', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray('雨的秘密').italic(), Text.gray('存在于'), Text.blue('雷暴天气').bold(), Text.gray('和'), Text.gold('发光状态').bold(), Text.gray('之中')]);
        } else {
            text.add([Text.gray('雨的秘密').italic(), Text.gray('存在于'), Text.blue('极致风暴').bold(), Text.gray('和'), Text.gold('闪耀光芒').bold(), Text.gray('之中')]);
        }
    })

    tooltip.addAdvanced('kubejs:secret_of_heart', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray('心的秘密').italic(), Text.gray('存在于'), Text.of('超过半百的血量').color('#f781ed').bold(), Text.gray('和'), Text.gold('下界重生').bold(), Text.gray('之中')]);
        } else {
            text.add([Text.gray('心的秘密').italic(), Text.gray('存在于'), Text.of('无穷尽的活力').color('#f781ed').bold(), Text.gray('和'), Text.gold('异界重生').bold(), Text.gray('之中')]);
        }
    })

    tooltip.addAdvanced('kubejs:secret_of_bloom', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray('绽放的秘密').italic(), Text.gray('存在于'), Text.aqua('虚空之花').bold(), Text.gray('之中')]);
        } else {
            text.add([Text.gray('绽放的秘密').italic(), Text.gray('存在于'), Text.aqua('残暴花卉').bold(), Text.gray('之中')]);
        }
    })


    tooltip.addAdvanced('kubejs:friend_to_the_end', (item, advanced, text) => {
        if (item.nbt && item.nbt.friendName) {
            text.add([Text.gray('誓约者：'), Text.gold(item.nbt.friendName)]);
        } else {
            text.add([Text.gray('手持长按右键以铭刻誓约。')]);
        }
    })

    tooltip.addAdvanced('kubejs:empty_organ_charm', (item, advanced, text) => {
        text.add(1, Text.gray('用于承装器官'));
    })

    tooltip.addAdvanced('kubejs:rapier_wand', (item, advanced, text) => {
        text.add(Text.gray('长按右键以唤起新月之力恢复魔力'));
    })
    tooltip.addAdvanced('kubejs:artist_wand', (item, advanced, text) => {
        text.add(Text.gray('长按右键以获得色彩效果'));
    })
    tooltip.addAdvanced('kubejs:unholy_grail', (item, advanced, text) => {
        text.add(Text.red('你最好不要喝它...'));
    })
    tooltip.addAdvanced('kubejs:organ_charm', (item, advanced, text) => {
        let lineNum = 1
        if (item.nbt?.organ?.id) {
            text.add(lineNum++, [Text.gold('储存物: '), Text.yellow(Text.translate(Item.of(item.nbt.organ.id).descriptionId))]);
        }
        if (item.nbt?.type == 'kill') {
            text.add(lineNum++, [Text.gray(`向容器内填充${item.nbt.killTask.counter}/${item.nbt.killTask.killAmount}个${Text.translate(item.nbt.killTask.mobName).string}灵魂才能够使其进化`)]);
        }
        if (item.nbt?.type == 'diet') {
            text.add(lineNum++, [Text.gray(`需要进食${item.nbt.dietTask.foodTypeList.length}/${item.nbt.dietTask.foodTypeAmount}种饥饿值大于${item.nbt.dietTask.minHunger}的食物才能进化`)]);
        }
        if (item.nbt?.type == 'bear') {
            text.add(lineNum++, [Text.gray(`需要承受原伤害最低大于${item.nbt.bearTask.minDamage}的伤害，累积${item.nbt.bearTask.counter.toFixed(2)}/${item.nbt.bearTask.bearAmount}才能进化`)]);
        }
        if (item.nbt?.type == 'damage') {
            let typeName = '任意种类'
            if (item.nbt.damageTask?.type) {
                switch (item.nbt.damageTask.type) {
                    case (event.source.getType() == 'player'):
                        typeName = '近战'
                        break;
                    case (event.source.getType() == 'arrow'):
                        typeName = '弓箭'
                        break;
                    case (event.source.getType().startsWith('irons_spellbooks')):
                        typeName = '魔法'
                        break;
                }
                if (curiosItem.nbt.damageTask.type != type) {
                    return
                }
            }

            text.add(lineNum++, [Text.gray(`需要造成原伤害最低大于${item.nbt.damageTask.minDamage}的${typeName}伤害，累积${item.nbt.damageTask.counter.toFixed(2)}/${item.nbt.damageTask.damageAmount}才能进化`)]);
        }
        if (item.nbt?.status == 1) {
            text.add(lineNum++, [Text.red(`进化已完成`)]);
        }
    })
})