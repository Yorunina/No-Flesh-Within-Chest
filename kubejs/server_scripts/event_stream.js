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
let damageLock = {};
EntityEvents.hurt(event => {
    let player = event.source.player
    if (!player) return;
    let uuid = player.getStringUuid()
    if (damageLock[uuid]) return;
    let data = new EntityHurtCustomModel(event.getDamage())
    organEntityHurtByPlayer(event, data)
    burningHeartEntityHurtByPlayer(event, data)
    executedEntityHurtByPlayer(event, data)
    vampiricEntityHurtByPlayer(event, data)
    // commonEntityHurtByPlayer(event, data)
    pardonOfGodEntityHurtByPlayer(event, data)
    vulnerableEntityHurt(event, data)
    organCharmEntityHurtByPlayer(event, data)

    // 事件拦截
    if (data.returnDamage != 0) {
        player.attack(data.returnDamage)
        player.knockback
    }
    if (event.damage != data.damage) {
        damageLock[uuid] = true
        event.entity.attack(event.getSource(), data.damage)
        if (event.source.type == 'arrow') {
            event.source.immediate.remove('discarded')
        }
        damageLock[uuid] = false
        event.cancel()
    }
})

/**
 * 玩家受到伤害总线
 * 1. 器官最优先判定
 * 2. 效果其次
 * 3. 武器、饰品再次
 */
let hurtLock = {};
EntityEvents.hurt('minecraft:player', event => {
    let uuid = event.entity.getStringUuid()
    if (hurtLock[uuid]) return;
    event.entity.tell(1)
    let data = new EntityHurtCustomModel(event.getDamage())
    if (!highPriorityPlayerHurtByOthers(event, data)) {
        return
    }
    organPlayerHurtByOthers(event, data)
    sweetDreamPlayerHurtByOthers(event, data)
    curseOfFragilityPlayerHurtByOthers(event, data)
    curiosPlayerHurtByOthers(event, data)
    vulnerableEntityHurt(event, data)
    powerOfCitadelPlayerHurtByOthers(event, data)
    organCharmPlayerHurtByOthers(event, data)

    // 事件拦截
    if (data.returnDamage != 0 && event.source.actual) {
        event.source.actual.attack(data.returnDamage)
    }
})

