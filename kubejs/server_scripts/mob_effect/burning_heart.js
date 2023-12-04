// priority: 3
EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer && damageSourcePlayer.hasEffect('kubejs:burning_heart')) {
        let damage = event.getDamage();
        let burningHeartEffect = damageSourcePlayer.getEffect('kubejs:burning_heart')
        let burningHeartAmplifier = burningHeartEffect.getAmplifier();
        let multiplyBase = 1;
        if (damageSourcePlayer.hasEffect('kubejs:flaring_heart')) {
            let flaringHeartEffect = damageSourcePlayer.getEffect('kubejs:flaring_heart')
            let flaringHeartAmplifier = flaringHeartEffect.getAmplifier();
            if (Math.random() < Math.min((1 + flaringHeartAmplifier) * 0.2, 1)) {
                multiplyBase = 1.5
                if (Math.random() < 0.05) {
                    damageSourcePlayer.potionEffects.add('kubejs:burning_heart', 16 * 20, burningHeartAmplifier);
                    multiplyBase = 5
                }
            }
        }
        damage = (damage + burningHeartAmplifier + 1) * multiplyBase;
        event.entity.attack(damage);
        event.cancel();
        return;
    }
})