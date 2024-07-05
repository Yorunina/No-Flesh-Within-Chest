// priority: 10
ItemEvents.foodEaten(event => {
    let player = event.player;
    if (!player) return;
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:eat_effect_only')) {
        typeMap.get('kubejs:eat_effect_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organFoodEatenOnlyStrategies[organ.id](event, organ)
            }
        })
    }
    if (typeMap.has('kubejs:eat_effect')) {
        typeMap.get('kubejs:eat_effect').forEach(organ => {
            organFoodEatenStrategies[organ.id](event, organ)
        })
    }
})

/**
 * 器官食物食用策略
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const organFoodEatenStrategies = {
    'kubejs:greedy_stomach': function (event, organ) {
        event.player.giveExperiencePoints(30)
    },
};

/**
 * 器官食物食用唯一策略
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const organFoodEatenOnlyStrategies = {
    'kubejs:candy_stomach': function (event, organ) {
        if (!event.item.hasTag('extradelight:candy_bowl_valid')) {
            return
        }
        event.player.addItemCooldown(event.item, 20 * 300)
        if (!event.player.hasEffect('kubejs:sweet_dream')) {
            event.player.potionEffects.add('kubejs:sweet_dream',
                event.item.getFoodProperties(event.player).getNutrition() * 30 * 20, 0)
        }
    },
    'kubejs:cream_cookie_heart': function (event, organ) {
        if (event.item.id == 'kubejs:cream') {
            event.player.potionEffects.add('minecraft:speed', 1800 * 20, 1)
            event.player.removeEffect('minecraft:strength')
            return
        }
        if (event.item.hasTag('kubejs:is_cookie')) {
            event.player.potionEffects.add('minecraft:strength', 1800 * 20, 1)
            event.player.removeEffect('minecraft:speed')
            return
        }
    },
    'kubejs:tamagotchi': function (event, organ) {
        let player = event.player
        if (player.hasEffect('kubejs:hungry_tamagotchi')) {
            player.removeEffect('kubejs:hungry_tamagotchi')
            player.heal(player.maxHealth)
            player.potionEffects.add('farmersdelight:nourishment', 90 * 20, 0)
            player.potionEffects.add('minecraft:health_boost', 15 * 20, 2)
            player.potionEffects.add('minecraft:resistance', 90 * 20, 1)
            player.tell(Text.gray(Text.translatable("kubejs.msg.tamagotchi.2")))
            updateWarpCount(player, player.persistentData.getInt(warpCount) - 1)
        }
    },
    'kubejs:ring_for_home': function (event, organ) {
        let player = event.player
        if (event.item.item.foodProperties.nutrition >= 10) {
            let deathLocation = player.lastDeathLocation
            if (deathLocation.isPresent()) {
                let deathPos = deathLocation.get().pos()
                event.player.teleportTo(deathLocation.get().dimension(), deathPos.x, deathPos.y, deathPos.z, event.player.yaw, event.player.pitch)
            }
        }
    },
    'kubejs:origin_of_tumor': function (event, organ) {
        let player = event.player
        let item = event.item
        if (!item.hasTag('kubejs:infected')) {
            return
        }
        let instance = player.getChestCavityInstance()
        let tumorList = getPlayerChestCavityItemMap(player).get('kubejs:random_tumor')
        if (tumorList.length <= 0) {
            return
        }
        let organTumor = randomGet(tumorList)
        let index = organTumor.getInt('Slot')
        let tumor = instance.inventory.getItem(index)
        if (index >= 0 && item.hasNBT() && tumor.hasNBT()) {
            let itemData = item.nbt.organData
            let organData = tumor.nbt.organData
            itemData.allKeys.forEach(key => {
                if (itemData[key] > 0 && organData.contains(key)) {
                    organData[key] = Math.max(itemData[key], organData[key])
                }
            })
            tumor.nbt.put('organData', organData)
            global.initChestCavityIntoMap(player, false)
            if (player.persistentData.contains(organActive) &&
                player.persistentData.getInt(organActive) == 1) {
                global.updatePlayerActiveStatus(player)
            }
        }
    },
};
