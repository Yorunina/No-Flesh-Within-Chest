/**
 * 精英怪造成伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function championPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity || !entity.isLiving()) return
    if (!entity.persistentData.contains('champion')) return
    let typeList = entity.persistentData.get('champion')
    
    typeList.forEach(type => {
        let typeName = type.getAsString()
        if (typeName in championPlayerBearStrategies) {
            championPlayerBearStrategies[typeName](event, data)
        }
    });
}


/**
 * 玩家承受伤害处理策略
 * @constant
 * @type {Object<string,function(Internal.LivingHurtEvent, organ, EntityHurtCustomModel):void>}
 */
const championPlayerBearStrategies = {
    'fight_for_death': function (event, data) {
        let player = event.entity
        let oldLevel = -1
        if (player.hasEffect('kubejs:declaration_of_death')) {
            oldLevel = player.getEffect('kubejs:declaration_of_death').getAmplifier()
        }
        let currectLevel = oldLevel + 1
        if (currectLevel > 9) {
            player.kill()
        } else {
            player.potionEffects.add('kubejs:declaration_of_death', 20 * 15, currectLevel, false, false)
        }
    },
};