// priority: 3
/**
 * 龙化效果
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function dragonPowerPlayerHurtByOthers(event, data) {
    let player = event.entity;
    if (!player.hasEffect('kubejs:dragon_power')) {
        return
    }
    let dragonPowerEffect = player.getEffect('kubejs:dragon_power')
    let amplify = dragonPowerEffect.getAmplifier()
    if (amplify < 5) {
        event.amount = event.amount * (0.8 - amplify * 0.2)
    } else {
        player.absorptionAmount = player.absorptionAmount + event.amount * (amplify - 4) * 0.2
        event.amount = 0
    }
}