// priority: 10
/**
 * 实体掉落策略
 */
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .apply(event => {
            if (!(event.killerEntity && event.killerEntity.isPlayer())) {
                return
            }
            let player = event.killerEntity
            let typeMap = getLootPlayerTypeMap(player)
            let lootOrganSet = new Set()
            if (typeMap.has('kubejs:loot_entity_only')) {
                typeMap.get('kubejs:loot_entity_only').forEach(organ => {
                    if (!lootOrganSet.has(organ.id)) {
                        lootOrganSet.add(organ.id)
                        if (entityLootOnlyStrategies[organ.id]) {
                            entityLootOnlyStrategies[organ.id](event, organ)
                        }
                    }
                })
            }
            if (typeMap.has('kubejs:loot_entity')) {
                typeMap.get('kubejs:loot_entity').forEach(organ => {
                    if (entityLootStrategies[organ.id]) {
                        entityLootStrategies[organ.id](event, organ)
                    }
                })
            }
        });

    event.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            let player = event.player
            if (!player) { return }
            let typeMap = getLootPlayerTypeMap(player)
            let lootOrganSet = new Set()
            if (typeMap.has('kubejs:loot_chest_only')) {
                typeMap.get('kubejs:loot_chest_only').forEach(organ => {
                    if (!lootOrganSet.has(organ.id)) {
                        lootOrganSet.add(organ.id)
                        if (chestLootOnlyStrategies[organ.id]) {
                            chestLootOnlyStrategies[organ.id](event, organ)
                        }
                    }
                })
            }
            if (typeMap.has('kubejs:loot_chest')) {
                typeMap.get('kubejs:loot_chest').forEach(organ => {
                    if (chestLootStrategies[organ.id]) {
                        chestLootStrategies[organ.id](event, organ)
                    }
                })
            }
        });
})

/**
 * 获取玩家器官类型表
 * @param {Internal.ServerPlayer} player 
 * @returns {Map}
 */

function getLootPlayerTypeMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityTypeMap.has(uuid)) {
        return playerChestCavityTypeMap.get(uuid);
    }
    initChestCavityIntoMap(player, true)
    return playerChestCavityTypeMap.get(uuid) ?? new Map();
}

/**
 * 器官实体掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const entityLootStrategies = {
}



/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const entityLootOnlyStrategies = {
    'kubejs:greed_shard': function (event, organ) {
        event.addLoot('lightmanscurrency:coin_iron')
    },
    'kubejs:infinity_force': function (event, organ) {
        if (Math.random() > Math.max(0.03 * event.killerEntity.getLuck(), 0.03)) {
            return
        }
        if (bossTypeList.some(ele => ele == event.entity.getType())) {
            let forgeTimes = 0
            if (organ.tag?.forgeTimes) {
                forgeTimes = organ.tag.forgeTimes
            }
            event.addLoot(Item.of('kubejs:infinity_force', { forgeTimes: Math.floor(Math.random() * forgeTimes) }))
        }
    },
    'kubejs:paradise_regained': function (event, organ) {
        event.loot.forEach(loot => {
            loot.setCount(loot.getCount() * 2)
        })
    },
    'kubejs:lost_paradise': function (event, organ) {
        event.removeLoot(ItemFilter.ALWAYS_TRUE)
    },
}


/**
 * 器官实体掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const chestLootStrategies = {
}



/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const chestLootOnlyStrategies = {
    'kubejs:lost_paradise': function (event, organ) {
        event.removeLoot(ItemFilter.ALWAYS_TRUE)
    },
    'kubejs:d8': function (event, organ) {
        if (Math.random() > 0.8) {
            return
        }
        let player = event.player
        let item = Item.of('kubejs:random_tumor', { organData: {} })
        let amount = Math.floor(Math.random() * 4 + 1)
        for (let i = 0; i < amount; i++) {
            let attri = randomGet(tumorAttriButeByD8)
            let attriName = attri.name
            // 扩散系数，用于控制属性的扩散范围(-1, 1)
            let diffusivity = Math.random() + Math.random() - 1
            // 幸运系数，用于控制幸运对于属性的影响，开方下降趋势
            let luckElement = Math.sqrt(Math.max(player.getLuck() / 2, 1))
            // 实际属性 = 属性系数 * 扩散系数 * 幸运系数；例100幸运的最高属性为 1 * 1/2 * 10
            let attriValue = Math.min(attri.multi * Math.floor(diffusivity * luckElement * 8 + 1) / 8, attri.max)
            // 规范数值下界
            attriValue = Math.max(attriValue, -attri.max)
            item.nbt.organData.put(attriName, attriValue)
        }
        item.nbt.organData.put('chestcavity:health', -1)
        event.addLoot(item)
    },
}