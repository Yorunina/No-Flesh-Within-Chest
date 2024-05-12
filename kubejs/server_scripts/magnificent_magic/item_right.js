ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;
    if (event.item.hasTag('kubejs:secret')) {
        player.stages.add(event.item.idLocation.getPath())
        event.item.shrink(1)
    }
})
