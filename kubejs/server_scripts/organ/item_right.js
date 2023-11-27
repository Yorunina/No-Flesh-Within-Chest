ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    if (item.getBurnTime() > 100) {
        let itemMap = getPlayerChestCavityItemMap(player)
        if (itemMap.has('kubejs:furnace_core')) {
            if (item.getBurnTime() < 20 * 60) {
                player.potionEffects.add('kubejs:burning_heart', item.getBurnTime() / 2, 0);
            } else {
                player.potionEffects.add('kubejs:flaring_heart', item.getBurnTime() / 6, 0);
            }
            player.addFood(item.getBurnTime() / 240, 1);
            item.shrink(1);
        }
    }
})