// priority: 1000
/**
 * 造成伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function commonEntityHurtByPlayer(event, data) {

}

/**
 * 受到伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function highPriorityPlayerHurtByOthers(event, data) {
    if (event.source.getType() == 'heartstop') {
        return false
    }
    return true
}