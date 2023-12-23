ItemEvents.foodEaten(event => {
    let player = event.player;
    if (!player) return;
    let food = event.item;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:greedy_stomach')) {
        organFoodEatenStrategies['kubejs:greedy_stomach'](event, itemMap)
    }
    if (food.hasTag('kubejs:eatable_candy') && itemMap.has('kubejs:candy_stomach')) {
        organFoodEatenStrategies['kubejs:candy_stomach'](event, itemMap)
    }
})

const organFoodEatenStrategies = {
    'kubejs:greedy_stomach': function (event, itemMap) {
        event.player.giveExperiencePoints(10 * itemMap.get('kubejs:greedy_stomach').length)
    },
    'kubejs:candy_stomach': function (event, itemMap) {
        event.player.addItemCooldown(event.item, 20 * 300)
        if (!event.player.hasEffect('kubejs:sweet_dream')) {
            event.player.potionEffects.add('kubejs:sweet_dream',
                event.item.getFoodProperties(event.player).getNutrition() * 30 * 20, 0)
        }
    },
};