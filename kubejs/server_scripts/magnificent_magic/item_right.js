ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;
    if (event.item.hasTag('kubejs:secret')) {
        player.stages.add(event.item.idLocation.getPath())
        event.item.shrink(1)
    }
})


ItemEvents.rightClicked('alexsmobs:mimicream', event => {
    let player = event.player;
    if (!player) return;
    if (player.y < -1000) {
        event.item.shrink(1)
        player.give(Item.of('kubejs:secret_of_void'))
    }
    if (player.y > 1000) {
        event.item.shrink(1)
        player.give(Item.of('kubejs:secret_of_snow'))
    }
})