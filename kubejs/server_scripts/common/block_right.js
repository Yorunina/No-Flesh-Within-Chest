BlockEvents.rightClicked('minecraft:sand', event => {
    let item = event.item
    if (event.player && item.hasTag('kubejs:lung')) {
        let nbt = item.nbt
        item.shrink(1)
        event.player.giveInHand(Item.of('kubejs:ore_lung', nbt))
    }
})

BlockEvents.rightClicked('minecraft:diamond_block', event => {
    if (event.player.getMainHandItem() == Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
        && event.level.isThundering()
    ) {
        event.block.spawnLightning()
        event.block.set('minecraft:air')
        event.player.mainHandItem.shrink(1)
        event.player.give(Item.of('kubejs:diamond_bottle'))
    }
})

BlockEvents.rightClicked(event => {
    if (event.item.getMod() == 'somebosses' && event.hand == 'off_hand') {
        event.cancel()
    }
})