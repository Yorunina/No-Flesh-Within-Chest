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

ItemEvents.entityInteracted('irons_spellbooks:divine_pearl', event => {
    if (event.target.type == 'irons_spellbooks:priest'
        && event.player.inventory.find('kubejs:phantom_eyeball') >= 0) {
        event.item.shrink(1)
        event.player.inventory.setStackInSlot(event.player.inventory.find('kubejs:phantom_eyeball'), 'minecraft:air')
        event.player.give(Item.of('kubejs:holy_eyeball'))
    }
})

ItemEvents.entityInteracted('kubejs:flora_wand_basic', event => {
    if (event.target.type == 'bosses_of_mass_destruction:void_blossom') {
        event.item.shrink(1)
        event.player.potionEffects.add('minecraft:posion', 20 * 15, 2)
        event.target.potionEffects.add('minecraft:regenration', 20 * 30, 2)
        event.player.give(Item.of('kubejs:flora_wand'))
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


