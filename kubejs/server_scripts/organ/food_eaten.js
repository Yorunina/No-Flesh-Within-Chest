ItemEvents.foodEaten(event => {
    let player = event.player;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:greedy_stomach')) {
        player.giveExperiencePoints(10 * itemMap.get('kubejs:greedy_stomach').length)
    }
})