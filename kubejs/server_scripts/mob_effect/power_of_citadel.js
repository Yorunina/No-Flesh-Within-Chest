// priority: 6
/**
 * 脆弱诅咒
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function powerOfCitadelPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity) return;
    let player = event.entity;
    if (entity.hasEffect('kubejs:power_of_citadel')) {
        player.potionEffects.add('unusualprehistory:prevent_click', 20 * 10, 0)
    }
}