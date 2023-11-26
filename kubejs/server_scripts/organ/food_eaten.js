ItemEvents.foodEaten(event => {
    let player = event.player;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:greedy_stomach')) {
        organFoodEatenStrategies['kubejs:greedy_stomach'](player, itemMap)
    }
})

let organFoodEatenStrategies = {
    'kubejs:greedy_stomach': function (player, itemMap) {
        player.giveExperiencePoints(10 * itemMap.get('kubejs:greedy_stomach').length)
    },
};