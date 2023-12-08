// priority: 6
EntityEvents.hurt('minecraft:player', event => {
    if (!event.entity.isPlayer()) return;
    if (!event.source.actual) return;
    
    let player = event.entity;
    
    if (player.hasEffect('kubejs:curse_of_fragility')) {
        player.damageEquipment("feet", 10)
        player.damageEquipment("head", 10)
        player.damageEquipment("legs", 10)
        player.damageEquipment("chest", 10)
    }
    
})