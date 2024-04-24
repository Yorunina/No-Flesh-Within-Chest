// priority: 3
/**
 * 龙化效果
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function dragonPowerPlayerHurtByOthers(event, data) {
    let player = event.entity;
    if (!event.source.actual) return
    if (!player.isPlayer()) return
    if (!player.hasEffect('kubejs:dragon_power')) {
        return
    }
    let dragonPowerEffect = player.getEffect('kubejs:dragon_power')
    let amplify = dragonPowerEffect.getAmplifier()
    let itemMap = getPlayerChestCavityItemMap(player)
    let maxExtraHealth = player.getMaxHealth() * 3
    if (itemMap.has('kubejs:fossil_gallbladder')) {
        maxExtraHealth = player.getMaxHealth() * 15
    }
    
    if (amplify < 5) {
        event.amount = event.amount * (0.8 - amplify * 0.2)
    } else if (player.absorptionAmount < maxExtraHealth) {
        player.absorptionAmount = Math.min(player.absorptionAmount + event.amount * (amplify - 4) * 0.2, maxExtraHealth)
        event.amount = 0
    }
}