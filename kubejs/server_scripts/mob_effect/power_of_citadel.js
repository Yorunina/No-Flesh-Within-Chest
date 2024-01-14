// priority: 6
/**
 * 脆弱诅咒
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function powerOfCitadelPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity) return;
    let player = event.entity;
    if (entity.isLiving() && entity.hasEffect('kubejs:power_of_citadel')) {
        let amplifier = entity.getEffect('kubejs:power_of_citadel').getAmplifier()
        player.potionEffects.add('unusualprehistory:prevent_click', 20 * 5 * (amplifier + 1), 0)
    }
}