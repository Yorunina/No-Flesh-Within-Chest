// priority: 6
/**
 * 脆弱诅咒
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function curseOfFragilityPlayerHurtByOthers(event, data) {
    let player = event.entity;
    if (player.hasEffect('kubejs:curse_of_fragility')) {
        player.damageEquipment("feet", 10)
        player.damageEquipment("head", 10)
        player.damageEquipment("legs", 10)
        player.damageEquipment("chest", 10)
    }
}