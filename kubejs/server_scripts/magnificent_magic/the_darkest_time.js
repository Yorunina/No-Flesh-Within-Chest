/**
 * 宏伟魔法之一，至暗时刻
 */
PlayerEvents.tick(event => {
    let player = event.player
    if (player.age % 20 != 0) return
    if (!player.stages.has(theDarkestTime)) return

})

/**
 * 至暗时刻玩家造成伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function theDarkestTimeEntityHurtByPlayer(event, data) {
    let player = event.source.player
    if (!player.stages.has(theDarkestTime)) return
    let entity = event.entity

    let lastHurtTime = player.lastHurtByMobTimestamp
    let curTime = player.age
    switch (true) {
        case ((curTime - lastHurtTime) < 10):
            entity.amount = 0
            break;
        default:
            break;
    }
}



/**
 * 至暗时刻玩家受到伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function theDarkestTimePlayerHurtByOthers(event, data) {
    let player = event.entity;
    if (!player.stages.has(theDarkestTime)) return

}
