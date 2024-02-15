// priority: 6
/**
 * 硬壳buff
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function spikedCarapaceEntityHurtByPlayer(event, data) {
    let entity = event.entity
    if (!entity.hasEffect('kubejs:spiked_carapace')) {
        return
    }
    let amplifier = entity.getEffect('kubejs:spiked_carapace').getAmplifier()
    let maxDamage = 1024 / (2 ** amplifier)
    if (event.amount > maxDamage) {
        data.returnDamage = event.amount - maxDamage
        event.amount = maxDamage
    }
}