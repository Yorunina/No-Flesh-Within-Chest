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
    let typeStatus = player.persistentData.get(darkestDamageTypeStatus)
    let random = Math.random()
    let oriAmount = event.amount
    switch (true) {
        case (event.source.getType() == 'player'):
            if (random < 0.2 && typeStatus != 1) {
                player.setStatusMessage([Text.gray('切换至'), Text.red('近战'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageTypeStatus, 1)
            }
            if (typeStatus == 1) {
                data.returnDamage = oriAmount
                entity.heal(oriAmount)
                event.amount = 0
            }
            break;
        case (event.source.getType() == 'arrow'):
            if (random < 0.2 && typeStatus != 2) {
                player.setStatusMessage([Text.gray('切换至'), Text.red('远程'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageTypeStatus, 2)
            }
            if (typeStatus == 2) {
                data.returnDamage = oriAmount
                entity.heal(oriAmount)
                event.amount = 0
            }
            break;
        case (event.source.getType().startsWith('irons_spellbooks')):
            if (random < 0.2 && typeStatus != 3) {
                player.setStatusMessage([Text.gray('切换至'), Text.red('魔法'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageTypeStatus, 3)
            }
            if (typeStatus == 3) {
                data.returnDamage = oriAmount
                entity.heal(oriAmount)
                event.amount = 0
            }
            break;
        default:
            if (random < 0.2 && typeStatus != 4) {
                player.setStatusMessage([Text.red('第三类攻击'), Text.gray('. . .这也在权能之内，切换至'), Text.gold('特殊'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageTypeStatus, 4)
            }
            if (typeStatus == 4) {
                data.returnDamage = oriAmount
                entity.heal(oriAmount)
                event.amount = 0
            }
            break;
    }
    let lastHurtTime = player.lastHurtByMobTimestamp
    let curTime = player.age
    let speStatus = player.persistentData.get(darkestDamageSpeStatus)
    switch (true) {
        case ((curTime - lastHurtTime) < 10):
            if (random < 0.4 && random > 0.2 && speStatus != 1) {
                player.setStatusMessage([Text.gray('切换至'), Text.gold('高频伤害'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageSpeStatus, 1)
            }
            if (speStatus == 1) {
                entity.invulnerableTime = 100
            }
            break;
        case (oriAmount > entity.maxHealth() * 0.1):
            if (random < 0.4 && random > 0.2 && speStatus != 2) {
                player.setStatusMessage([Text.gray('切换至'), Text.gold('高额伤害'), Text.gray('适应状态')])
                player.persistentData.put(darkestDamageSpeStatus, 2)
                event.amount = 0
            }
            if (speStatus == 2) {
                event.amount = Math.min(event.amount / 100, entity.maxHealth() * 0.02)
                data.returnDamage = data.returnDamage + oriAmount - entity.maxHealth() * 0.1
            }
            break;
        default:
            entity.heal(entity.maxHealth() * 0.01)
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
