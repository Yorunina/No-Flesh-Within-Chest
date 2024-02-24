// priority: 4
/**
 * 易伤效果
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function vulnerableEntityHurt(event, data) {
    let entity = event.entity;
    if (entity.hasEffect('kubejs:vulnerable')) {
        let amplifier = entity
            .getEffect('kubejs:vulnerable')
            .getAmplifier() + 1;
        // 有效等级最高为5
        event.amount *= 1.0 + clamp(0.0, amplifier * 0.1, 0.5)
        return;
    }
}