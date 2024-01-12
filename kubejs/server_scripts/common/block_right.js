BlockEvents.rightClicked('minecraft:sand', event => {
    let item = event.item
    if (event.player && (item.id == 'chestcavity:lung' || item.id == 'chestcavity:animal_lung')) {
        let nbt = item.nbt
        item.shrink(1)
        event.player.giveInHand(Item.of('kubejs:ore_lung', nbt))
    }
})
