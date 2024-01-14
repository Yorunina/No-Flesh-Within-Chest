ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('kubejs:active_pill', (item, advanced, text) => {
        if (tooltip.shift) {
            addForTextLines(text, [[Text.red({ "translate": "kubejs.tooltips.active_pill.4" })], [Text.red({ "translate": "kubejs.tooltips.active_pill.5" })]], 1);
        } else {
            addForTextLines(text, [[Text.gold({ "translate": "kubejs.tooltips.active_pill.1" }), Text.aqua({ "translate": "kubejs.tooltips.active_pill.2" })], [Text.gray({ "translate": "kubejs.tooltips.active_pill.3" })]], 1);
        }
    })

    tooltip.addAdvanced('kubejs:ceremonial_knife', (item, advanced, text) => {
        addForTextLines(text, [[LEADING_SYMBOL, Text.gray({ "translate": "kubejs.tooltips.ceremonial_knife.1" })], [LEADING_SYMBOL, Text.gray({ "translate": "kubejs.tooltips.ceremonial_knife.2" }), Text.gold('10'), Text.gray({ "translate": "kubejs.tooltips.ceremonial_knife.3" })]], 1);
    })

    tooltip.addAdvanced('#kubejs:anti_rejection', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "kubejs.tooltips.anti_rejection.1" }));
    })

    tooltip.addAdvanced('kubejs:eye_of_fortress', (item, advanced, text) => {
        text.add(Text.darkRed({ "translate": "kubejs.tooltips.eye_of_fortress.1" }));
    })

    tooltip.addAdvanced('kubejs:god_consciousness', (item, advanced, text) => {
        text.add(1, [Text.gold({ "translate": "kubejs.tooltips.god_consciousness.1" }), Text.yellow(getMobNameByType(item.nbt?.mobType))]);
    })


    tooltip.addAdvanced('kubejs:secret_of_rain', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.2" }), Text.blue({ "translate": "kubejs.tooltips.secret_of_rain.5" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.3" }), Text.gold({ "translate": "kubejs.tooltips.secret_of_rain.6" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.4" })]);
        } else {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.2" }), Text.blue({ "translate": "kubejs.tooltips.secret_of_rain.7" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.3" }), Text.gold({ "translate": "kubejs.tooltips.secret_of_rain.8" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_rain.4" })]);
        }
    })

    tooltip.addAdvanced('kubejs:secret_of_heart', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.2" }), Text.of({ "translate": "kubejs.tooltips.secret_of_heart.5" }).color('#f781ed').bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.3" }), Text.gold({ "translate": "kubejs.tooltips.secret_of_heart.6" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.4" })]);
        } else {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.2" }), Text.of({ "translate": "kubejs.tooltips.secret_of_heart.7" }).color('#f781ed').bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.3" }), Text.gold({ "translate": "kubejs.tooltips.secret_of_heart.8" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_heart.4" })]);
        }
    })

    tooltip.addAdvanced('kubejs:secret_of_bloom', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.2" }), Text.aqua({ "translate": "kubejs.tooltips.secret_of_bloom.4" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.3" })]);
        } else {
            text.add([Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.1" }).italic(), Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.2" }), Text.aqua({ "translate": "kubejs.tooltips.secret_of_bloom.5" }).bold(), Text.gray({ "translate": "kubejs.tooltips.secret_of_bloom.3" })]);
        }
    })


    tooltip.addAdvanced('kubejs:friend_to_the_end', (item, advanced, text) => {
        if (item.nbt && item.nbt.friendName) {
            text.add([Text.gray({ "translate": "kubejs.tooltips.friend_to_the_end.1" }), Text.gold(item.nbt.friendName)]);
        } else {
            text.add([Text.gray({ "translate": "kubejs.tooltips.friend_to_the_end.2" })]);
        }
    })

    tooltip.addAdvanced('kubejs:empty_organ_charm', (item, advanced, text) => {
        text.add(1, Text.gray({ "translate": "kubejs.tooltips.empty_organ_charm.1" }));
    })

    tooltip.addAdvanced('kubejs:rapier_wand', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "kubejs.tooltips.rapier_wand.1" }));
    })
    tooltip.addAdvanced('kubejs:artist_wand', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "kubejs.tooltips.artist_wand.1" }));
    })
    tooltip.addAdvanced('kubejs:unholy_grail', (item, advanced, text) => {
        text.add(Text.red({ "translate": "kubejs.tooltips.unholy_grail.1" }));
    })
    tooltip.addAdvanced('kubejs:stardust_fragment', (item, advanced, text) => {
        text.add(Text.gold({ "translate": "kubejs.tooltips.stardust_fragment.1" }));
    })
    tooltip.addAdvanced('kubejs:god_bless_empty_necklace', (item, advanced, text) => {
        text.add(Text.gray({ "translate": "kubejs.tooltips.god_bless_empty_necklace.1" }));
    })
    tooltip.addAdvanced('kubejs:god_bless_full_necklace', (item, advanced, text) => {
        text.add(Text.gold({ "translate": "kubejs.tooltips.god_bless_full_necklace.1" }));
    })
    tooltip.addAdvanced('kubejs:flora_wand_basic', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(Text.red({ "translate": "kubejs.tooltips.flora_wand_basic.2" }));       
        } else {
            text.add(Text.green({ "translate": "kubejs.tooltips.flora_wand_basic.1" }));        
        }
    })
    tooltip.addAdvanced('kubejs:phantom_eyeball', (item, advanced, text) => {
        text.add(Text.gold({ "translate": "kubejs.tooltips.phantom_eyeball.1" }));
    })

    tooltip.addAdvanced('kubejs:organ_charm', (item, advanced, text) => {
        let lineNum = 1
        if (item.nbt?.organ?.id) {
            text.add(lineNum++, [Text.gold({ "translate": "kubejs.tooltips.organ_charm.1" }), Text.yellow(Text.translate(Item.of(item.nbt.organ.id).descriptionId))]);
            text.add(lineNum++, [Text.gold({ "translate": "kubejs.tooltips.organ_charm.2" }), Text.yellow(Text.translate(Item.of(item.nbt.targetOrgan).descriptionId))]);
        }
        if (item.nbt?.type == 'kill') {
            text.add(lineNum++, [Text.gray({ "translate": "kubejs.tooltips.organ_charm.3" }), Text.gray(`${item.nbt.killTask.counter}/${item.nbt.killTask.killAmount}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.4" }), Text.gray(`${getMobNameByType(item.nbt.killTask.mobType)}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.5" })]);
        }
        if (item.nbt?.type == 'diet') {
            text.add(lineNum++, [Text.gray({ "translate": "kubejs.tooltips.organ_charm.6" }), Text.gray(`${item.nbt.dietTask.foodTypeList.length}/${item.nbt.dietTask.foodTypeAmount}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.7" }), Text.gray(`${item.nbt.dietTask.minHunger}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.8" })]);
        }
        if (item.nbt?.type == 'bear') {
            text.add(lineNum++, [Text.gray({ "translate": "kubejs.tooltips.organ_charm.9" }), Text.gray(`${item.nbt.bearTask.minDamage}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.10" }), Text.gray(`${item.nbt.bearTask.counter.toFixed(2)}/${item.nbt.bearTask.bearAmount}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.11" })]);
        }
        if (item.nbt?.type == 'damage') {
            let typeName = { "translate": "kubejs.tooltips.organ_charm.12" }
            switch (item.nbt.damageTask?.type) {
                case ('melee'):
                    typeName = { "translate": "kubejs.tooltips.organ_charm.13" }
                    break;
                case ('projectile'):
                    typeName = { "translate": "kubejs.tooltips.organ_charm.14" }
                    break;
                case ('magic'):
                    typeName = { "translate": "kubejs.tooltips.organ_charm.15" }
                    break;
            }
            text.add(lineNum++, [Text.gray({ "translate": "kubejs.tooltips.organ_charm.16" }), Text.gray(`${item.nbt.damageTask.minDamage}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.17" }), Text.gray(typeName), Text.gray({ "translate": "kubejs.tooltips.organ_charm.18" }), Text.gray(`${item.nbt.damageTask.counter.toFixed(2)}/${item.nbt.damageTask.damageAmount}`), Text.gray({ "translate": "kubejs.tooltips.organ_charm.19" })]);
        }
        if (item.nbt?.status == 1) {
            text.add(lineNum++, [Text.red({ "translate": "kubejs.tooltips.organ_charm.20" })]);
        }
    })
})

/**
 * @param {string} mobType 
 */
function getMobNameByType(mobType) {
    if (!mobType) {
        return Text.of({ "translate": "kubejs.tooltips.mob_name.1" }).string
    }
    return Text.translate('entity.' + mobType.replace(':', '.')).string
}