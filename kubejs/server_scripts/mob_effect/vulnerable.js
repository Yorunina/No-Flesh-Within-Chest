// priority: 4
/**
 * 易伤效果
 * @param {Internal.LivingDamageEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function vulnerableEntityHurt(event, data) {
    let entity = event.entity;
    if (entity.hasEffect('kubejs:vulnerable')) {
        let vulnerableEffect = entity.getEffect('kubejs:vulnerable')
        let amplifier = vulnerableEffect.getAmplifier();
        // 有效等级最高为5
        event.amount = event.amount * (amplifier * 0.1 + 1.1)
        return;
    }
}