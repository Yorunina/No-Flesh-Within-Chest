// priority: 10
const slotList = [0, 1, 2]
MoreJSEvents.enchantmentTableChanged(event => {
    let player = event.player
    if (!player) return;
    let onlySet = new Set()
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:enchant_only')) {
        typeMap.get('kubejs:enchant_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerEnchantOnlyStrategies[organ.id](event, organ)
            }
        })
    }
    if (typeMap.has('kubejs:enchant')) {
        typeMap.get('kubejs:enchant').forEach(organ => {
            organPlayerEnchantStrategies[organ.id](event, organ)
        })
    }
})


/**
 * 附魔策略
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const organPlayerEnchantStrategies = {

};

/**
 * 附魔唯一策略
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const organPlayerEnchantOnlyStrategies = {
    'kubejs:pandora_inactive': function (event, organ) {
        slotList.forEach(slot => {
            let enchantSlot = event.get(slot)
            let needEnchantList = []
            enchantSlot.removeEnchantments((enchantment, level) => {
                if (level >= 5) {
                    needEnchantList.push({ enchant: enchantment, level: 7 })
                    return true
                }
                if (level >= 3) {
                    needEnchantList.push({ enchant: enchantment, level: 5 })
                    return true
                }
                return false
            })
            needEnchantList.forEach(needEnchant => {
                enchantSlot.addEnchantment(needEnchant.enchant, needEnchant.level)
            })
            enchantSlot.updateClue()
        })
    },
    'kubejs:pandora_active': function (event, organ) {
        slotList.forEach(slot => {
            let enchantSlot = event.get(slot)
            let allLevel = 0
            enchantSlot.addEnchantment(randomGet(curseEnchantList), 0)
            enchantSlot.addEnchantment(randomGet(curseEnchantList), 0)
            enchantSlot.addEnchantment(randomGet(curseEnchantList), 0)
            enchantSlot.addEnchantment(randomGet(curseEnchantList), 0)
            enchantSlot.addEnchantment(randomGet(curseEnchantList), 0)
            let enchantList = enchantSlot.getEnchantmentIds()
            let targetEnchant = randomGet(enchantList)
            enchantSlot.forEachEnchantments((enchantment, level) => {
                allLevel = allLevel + level
            })
            enchantSlot.clearEnchantments()
            enchantSlot.addEnchantment(targetEnchant, Math.max(allLevel, 1))
            enchantSlot.updateClue()
        })
        if (Math.random() < 0.2) {
            let count = event.player.persistentData.getInt(warpCount) ?? 0
            updateWarpCount(event.player, count + 1)
        }
    },

};
