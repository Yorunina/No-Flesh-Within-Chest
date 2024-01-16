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
        let vampiricEffect = damageSourcePlayer.getEffect('kubejs:vampiric')
        let amplifier = vampiricEffect.getAmplifier();
        // 有效等级最高为5
        let vampiricRate = 0.2 + Math.min(amplifier * 0.2, 0.8);
        damageSourcePlayer.heal(Math.floor(vampiricRate * damage));
        return;
    }
}