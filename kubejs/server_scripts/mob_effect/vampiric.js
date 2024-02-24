// priority: 4
/**
 * 吸血效果
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function vampiricEntityHurtByPlayer(event, data) {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer.hasEffect('kubejs:vampiric')) {
        let damage = event.amount;
        let amplifier = damageSourcePlayer
            .getEffect('kubejs:vampiric')
            .getAmplifier() + 1;
        // 有效等级最高为5
        let vampiricRate = clamp(0.2, amplifier * 0.2, 1.0);
        damageSourcePlayer.heal(Math.floor(vampiricRate * damage));
        return;
    }
}