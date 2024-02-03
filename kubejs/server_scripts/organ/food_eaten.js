// priority: 10
ItemEvents.foodEaten(event => {
    let player = event.player;
    if (!player) return;
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:eat_effect')) {
        typeMap.get('kubejs:eat_effect').forEach(organ => {
            organFoodEatenStrategies[organ.id](event, organ)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:eat_effect_only')) {
        typeMap.get('kubejs:eat_effect_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organFoodEatenOnlyStrategies[organ.id](event, organ)
            }
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
                event.item.getFoodProperties(event.player).getNutrition() * 15 * 20, 0)
        }
    },
    'kubejs:cream_cookie_heart': function (event, organ) {
        if (event.item.id == 'kubejs:cream') {
            event.player.potionEffects.add('minecraft:speed', 3600 * 20)
            event.player.removeEffect('minecraft:strength')
            return
        }
        if (event.item.hasTag('kubejs:is_cookie')) {
            event.player.potionEffects.add('minecraft:strength', 3600 * 20)
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
            player.potionEffects.add('weaponmaster:elixr', 15 * 20, 0)
            player.potionEffects.add('minecraft:resistance', 90 * 20, 1)
            player.tell(Text.gray({ "translate": "kubejs.msg.tamagotchi.2" }))
            if (Math.random() < 0.2) {
                updateWarpCount(player, player.persistentData.getInt(warpCount) - 1)
            }
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

};

