// priority: 6
/**
 * 死战buff
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function fightForDeathPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity) return;
    let player = event.entity
    if (entity.isLiving() && entity.hasEffect('kubejs:fight_for_death')) {
        let amplifier = entity.getEffect('kubejs:fight_for_death').getAmplifier() + 1
        let oldLevel = 0
        if (player.hasEffect('kubejs:declaration_of_death')) {
            oldLevel = player.getEffect('kubejs:declaration_of_death').getAmplifier() + 1
        }
        let currectLevel = oldLevel + amplifier
        if (currectLevel > 10) {
            player.kill()
        } else {
            player.potionEffects.add('kubejs:declaration_of_death', 20 * 10, currectLevel - 1, false, false)
        }
    }
}