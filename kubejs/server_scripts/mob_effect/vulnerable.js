// priority: 4
/**
 * 易伤效果
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function vulnerableEntityHurt(event, data) {
    let entity = event.entity;
    if (entity.hasEffect('kubejs:vulnerable')) {
        let vulnerableEffect = entity.getEffect('kubejs:vulnerable')
        let amplifier = vulnerableEffect.getAmplifier();
        // 有效等级最高为5
        data.damage = data.damage * (amplifier * 0.1 + 1.1)
        return;
    }
}