// priority: 6
/**
 * 硬壳buff
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function hardShellEntityHurtByPlayer(event, data) {
    let entity = event.entity
    if (!entity.hasEffect('kubejs:hard_shell')) {
        return
    }
    let amplifier = entity.getEffect('kubejs:hard_shell').getAmplifier()
    let maxDamage = 1024 / (2 ** amplifier)
    if (event.amount > maxDamage) {
        event.amount = maxDamage
    }
}