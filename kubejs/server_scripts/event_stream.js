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
EntityEvents.hurt(event => {
    let player = event.source.player;
    if (!player) return;
    let data = new EntityHurtCustomModel(event.getDamage())
    organEntityHurtByPlayer(event, data)
    burningHeartEntityHurtByPlayer(event, data)
    executedEntityHurtByPlayer(event, data)
    vampiricEntityHurtByPlayer(event, data)
    // commonEntityHurtByPlayer(event, data)
    pardonOfGodEntityHurtByPlayer(event, data)
    organCharmEntityHurtByPlayer(event, data)

    // 事件拦截
    if (event.damage != data.damage) {
        event.entity.attack(data.damage > 0 ? data.damage : 0)
        event.cancel()
    }
})

/**
 * 玩家受到伤害总线
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
EntityEvents.hurt('minecraft:player', event => {
    let data = new EntityHurtCustomModel(event.getDamage())
    if (!highPriorityPlayerHurtByOthers(event, data)) {
        return
    }
    organPlayerHurtByOthers(event, data)
    sweetDreamPlayerHurtByOthers(event, data)
    curseOfFragilityPlayerHurtByOthers(event, data)
    curiosPlayerHurtByOthers(event, data)
    organCharmPlayerHurtByOthers(event, data)

    // 事件拦截
    if (event.damage != data.damage) {
        event.entity.attack(data.damage)
        event.cancel()
    }
})

