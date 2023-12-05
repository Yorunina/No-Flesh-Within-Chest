// priority: 3
EntityEvents.hurt(event => {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer && damageSourcePlayer.hasEffect('kubejs:burning_heart')) {
        let burningHeartEffect = damageSourcePlayer.getEffect('kubejs:burning_heart')
        let burningHeartAmplifier = burningHeartEffect.getAmplifier();
        event.entity.attack(event.damage + burningHeartAmplifier + 1);
        event.cancel();
        return;
    }
    if (damageSourcePlayer && damageSourcePlayer.hasEffect('kubejs:flaring_heart')) {
        let damage = event.getDamage();
        let flaringHeartEffect = damageSourcePlayer.getEffect('kubejs:flaring_heart')
        let flaringHeartAmplifier = flaringHeartEffect.getAmplifier();
        let flaringHeartDuration = flaringHeartEffect.getDuration();
        if (flaringHeartDuration <= 20 * 5) {
            event.server.runCommandSilent(`title ${damageSourcePlayer.name.getString()} actionbar {"text": "§4心火状态：§7${flaringHeartDuration} / 100  §3倍率：§e${flaringHeartAmplifier * 0.5 + 1.5}倍"}`);
            damage = damage * (flaringHeartAmplifier * 0.5 + 1.5);
            event.entity.attack(damage);
            event.cancel();
            return;
        }
    }
})