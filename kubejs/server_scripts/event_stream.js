// priority: 0
/**
 * 事件流，用于某些事件的连续处理
 * 目前仅用作伤害事件的连续处理
 */

/**
 * 玩家造成伤害总线
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
/**
 * @param {Internal.LivingHurtEvent} event 
 * @returns 
 */
global.playerDamage = event => {
    let player = event.source.player
    if (!player) return;
    let data = new EntityHurtCustomModel()
    organEntityHurtByPlayer(event, data)
    burningHeartEntityHurtByPlayer(event, data)
    arrowDamageBoostEntityHurtByPlayer(event, data)
    executedEntityHurtByPlayer(event, data)
    vampiricEntityHurtByPlayer(event, data)
    // commonEntityHurtByPlayer(event, data)
    pardonOfGodEntityHurtByPlayer(event, data)
    vulnerableEntityHurt(event, data)
    organCharmEntityHurtByPlayer(event, data)
    spikedCarapaceEntityHurtByPlayer(event, data)
    hardShellEntityHurtByPlayer(event, data)
    if (data.returnDamage != 0) {
        player.attack(data.returnDamage)
    }
}

/**
 * 玩家受到伤害总线
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
/**
 * @param {Internal.LivingHurtEvent} event
 * @returns 
 */
global.playerHurt = event => {
    let data = new EntityHurtCustomModel()
    if (!highPriorityPlayerHurtByOthers(event, data)) {
        return
    }
    organPlayerHurtByOthers(event, data)
    sweetDreamPlayerHurtByOthers(event, data)
    curseOfFragilityPlayerHurtByOthers(event, data)
    curiosPlayerHurtByOthers(event, data)
    vulnerableEntityHurt(event, data)
    organCharmPlayerHurtByOthers(event, data)
    fightForDeathPlayerHurtByOthers(event, data)
    dragonPowerPlayerHurtByOthers(event, data)

    if (data.returnDamage != 0 && event.source.actual) {
        event.source.actual.attack(data.returnDamage)
    }
}
