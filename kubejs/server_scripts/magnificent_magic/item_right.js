ItemEvents.rightClicked(event => {
    let player = event.player;
    if (!player) return;
    if (player.stages.has('flos_magic_stage_2') && event.level.isNight() && event.level.isRaining()) {
        if (event.item == 'minecraft:fishing_rod' && Math.random() < 0.1) {
            event.server.scheduleInTicks(20 * 1, () => {
                event.level.getLevelData().setRaining(false)
                player.stages.remove('flos_magic_stage_2')
                player.stages.add('flos_magic_stage_3')
            })
            return
        }
    }

    if (event.item.hasTag('kubejs:secret')) {
        player.stages.add(event.item.idLocation.getPath())
        event.item.shrink(1)
    }
})