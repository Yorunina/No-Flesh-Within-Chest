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
        event.player.giveExperiencePoints(10)
    },
};

/**
 * 器官食物食用唯一策略
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const organFoodEatenOnlyStrategies = {
    'kubejs:candy_stomach': function (event, organ) {
        if (!event.item.hasTag('kubejs:eatable_candy')) {
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
            event.player.potionEffects.add('minecraft:speed', 3600 * 20)
            event.player.removeEffect('minecraft:strength')
            return
        }
        if (event.item.id == 'minecraft:cookie') {
            event.player.potionEffects.add('minecraft:strength', 3600 * 20)
            event.player.removeEffect('minecraft:speed')
            return
        }
    },
};

