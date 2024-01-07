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
            let typeMap = getPlayerChestCavityTypeMap(player)
            if (typeMap.has('kubejs:loot_entity')) {
                typeMap.get('kubejs:loot_entity').forEach(organ => {
                    if (entityLootStrategies[organ.id]) {
                        entityLootStrategies[organ.id](event, organ)
                    }
                })
            }
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
        });

    event.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            let player = event.player
            let typeMap = getPlayerChestCavityTypeMap(player)
            if (typeMap.has('kubejs:loot_chest')) {
                typeMap.get('kubejs:loot_chest').forEach(organ => {
                    if (chestLootStrategies[organ.id]) {
                        chestLootStrategies[organ.id](event, organ)
                    }
                })
            }
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
        });
})

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
        event.addLoot('lightmanscurrency:coin_copper')
    },
    'kubejs:infinity_force': function (event, organ) {
        if (Math.random() < Math.max(0.05 * event.killerEntity.getLuck(), 0.05)) {
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
        let player = event.player
        let item = Item.of('kubejs:random_tumor', { organData: {} })
        let amount = Math.floor(Math.random() * 5 + 1)
        for (let i = 0; i < amount; i++) {
            let attri = randomGet(tumorAttriBute)
            let attriName = attri.name
            let attriValue = Math.min(attri.muti * Math.floor(Math.random() * 13 - 4) / 8 * Math.max(Math.floor(player.getLuck() / 4) + 1, 1), attri.max)
            item.nbt.organData.put(attriName, attriValue)
        }
        event.addLoot(item)
    },
}