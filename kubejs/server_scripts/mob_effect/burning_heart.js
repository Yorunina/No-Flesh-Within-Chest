// priority: 3
/**
 * 熔火效果
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function burningHeartEntityHurtByPlayer(event, data) {
    let damageSourcePlayer = event.source.player;
    if (damageSourcePlayer.hasEffect('kubejs:burning_heart')) {
        let burningHeartEffect = damageSourcePlayer.getEffect('kubejs:burning_heart')
        let burningHeartAmplifier = burningHeartEffect.getAmplifier();
        event.amount = event.amount + burningHeartAmplifier * 3 + 3
        return;
    }
    if (damageSourcePlayer.hasEffect('kubejs:flaring_heart')) {
        let flaringHeartEffect = damageSourcePlayer.getEffect('kubejs:flaring_heart')
        let flaringHeartAmplifier = flaringHeartEffect.getAmplifier();
        let flaringHeartDuration = flaringHeartEffect.getDuration();
        if (flaringHeartDuration <= 20 * 5) {
            event.server.runCommandSilent(`title ${damageSourcePlayer.name.getString()} actionbar {"text": "§4心火状态: §7${flaringHeartDuration} / 100  §3倍率: §e${flaringHeartAmplifier * 1.0 + 1.5}倍"}`);
            event.amount = event.amount * (flaringHeartAmplifier * 1.0 + 1.5);
            return;
        }
    }
}