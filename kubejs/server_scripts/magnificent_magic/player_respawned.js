PlayerEvents.respawned(event => {
    if (event.player.getMaxHealth() > 50 && event.level.getDimension() == 'minecraft:the_nether') {
        event.player.give('kubejs:secret_of_heart')
    }
})