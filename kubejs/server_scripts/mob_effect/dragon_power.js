// priority: 3
/**
 * 龙化效果
 * @param {Internal.LivingDamageEvent} event 
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
        let instance = player.getChestCavityInstance()
        let strength = instance.organScores.getOrDefault(new ResourceLocation('chestcavity', 'strength'), 0)
        maxExtraHealth = maxExtraHealth + Math.floor(player.getMaxHealth() * strength / 4)
    }
    if (amplify < 5) {
        event.amount = event.amount * (0.8 - amplify * 0.2)
    } else if (player.absorptionAmount < maxExtraHealth) {
        player.absorptionAmount = Math.min(player.absorptionAmount + event.amount * (amplify - 4) * 0.2, maxExtraHealth)
        event.amount = 0
    } else if (player.absorptionAmount >= maxExtraHealth) {
        event.amount = 0
    }
}