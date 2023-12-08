// priority: 4
EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (!damageSourcePlayer) return;
    if (damageSourcePlayer.hasEffect('kubejs:vampiric')) {
        let damage = event.getDamage();
        let vampiricEffect = damageSourcePlayer.getEffect('kubejs:vampiric')
        let amplifier = vampiricEffect.getAmplifier();
        // 有效范围最高5级
        let vampiricRate = 0.2 + Math.min(amplifier * 0.2, 0.8);
        damageSourcePlayer.heal(Math.floor(vampiricRate * damage));
        return;
    }
})