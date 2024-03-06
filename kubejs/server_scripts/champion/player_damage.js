/**
 * 精英怪遭受伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function championEntityHurtByPlayer(event, data) {
    let entity = event.entity
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')

    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in championPlayerDamageStrategies) {
            championPlayerDamageStrategies[typeName](event, data)
        }
    });
}

/**
 * 玩家承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const championPlayerDamageStrategies = {
    'low_frequency': function (event, data) {
        let entity = event.entity
        entity.invulnerableTime = 100
    },
};