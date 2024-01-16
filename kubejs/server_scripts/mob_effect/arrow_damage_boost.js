// priority: 4
/**
 * 弓箭伤害增幅
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function arrowDamageBoostEntityHurtByPlayer(event, data) {
    if (event.source.getType() != 'arrow' || !event.source.player.hasEffect('kubejs:arrow_damage_boost')) {
        return
    }
    let effect = event.source.player.getEffect('kubejs:arrow_damage_boost')
    event.amount = event.amount * (1.2 + effect.getAmplifier() * 0.2)
}