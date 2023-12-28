// priority: 10
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .apply(event => {
            if (!(event.killerEntity && event.killerEntity.isPlayer())) {
                return
            }
            let player = event.killerEntity
            let typeMap = getPlayerChestCavityTypeMap(player)
            if (typeMap.has('kubejs:loot')) {
                typeMap.get('kubejs:loot').forEach(organ => {
                    if (entityLootStrategies[organ.id]) {
                        entityLootStrategies[organ.id](event, organ)
                    }
                })
            }
            let lootOrganSet = new Set()
            if (typeMap.has('kubejs:loot_only')) {
                typeMap.get('kubejs:loot_only').forEach(organ => {
                    if (!lootOrganSet.has(organ.id)) {
                        lootOrganSet.add(organ.id)
                        if (entityLootStrategies[organ.id]) {
                            entityLootStrategies[organ.id](event, organ)
                        }
                    }
                })
            }
        });
})



const entityLootStrategies = {
    'kubejs:greed_shard': function (event, organ) {
        event.addLoot('numismaticoverhaul:bronze_coin')
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
}