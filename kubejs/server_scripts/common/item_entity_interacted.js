ItemEvents.entityInteracted('kubejs:leaflet', event => {
    if (!event.target.isPlayer()) {
        return
    }
    let playerName = event.target.getUsername()
    event.player.runCommand(`/party invite ${playerName}`)
})

ItemEvents.entityInteracted('biomancy:genetic_compound', event => {
    if (event.target.type == 'minecraft:witch') {
        event.item.shrink(1)
        event.player.give(Item.of('kubejs:active_pill'))
        event.target.kill()
    }
})

ItemEvents.entityInteracted('kubejs:painting_brush', event => {
    if (event.target.type == 'minecraft:painting'
        && event.target.getNbt().getAsString().includes('pigscene')
        && event.player.getOffhandItem() == 'supplementaries:antique_ink'
    ) {
        event.item.shrink(1)
        event.player.offHandItem.shrink(1)
        event.player.give(Item.of('kubejs:artist_wand'))
    }
})
