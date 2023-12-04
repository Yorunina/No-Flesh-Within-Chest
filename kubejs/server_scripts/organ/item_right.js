ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    if (item.hasTag('minecraft:coals')) {
        let itemMap = getPlayerChestCavityItemMap(player)
        if (itemMap.has('kubejs:furnace_core')) {
            if (Math.random() > 0.05) {
                player.potionEffects.add('kubejs:burning_heart', 16 * 20, 0);
            } else {
                player.potionEffects.add('kubejs:flaring_heart', 16 * 20, 0);
            }
            item.shrink(1);
        }
    }
})