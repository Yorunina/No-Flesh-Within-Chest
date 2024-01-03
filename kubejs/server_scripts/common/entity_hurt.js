// priority: 10
/**
 * 造成伤害
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function commonEntityHurtByPlayer(event, data) {
    let player = event.source.player;

}

/**
 * 受到伤害
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function highPriorityPlayerHurtByOthers(event, data) {
    if (event.entity.isInvulnerable()) {
        return false
    }
    if (event.source.getType() == 'heartstop') {
        return false
    }
    return true
}