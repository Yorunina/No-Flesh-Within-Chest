// priority: 6
/**
 * 邪术爪牙
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function EldritchLackeyEntityHurtByPlayer(event, data) {
    let entity = event.entity
    switch (true) {
        case (event.source.getType() == 'player'):
            if (entity.hasEffect('kubejs:eldritch_lackey')) {
                EldritchLackeyLevelEffect(event, data, entity.getEffect('kubejs:eldritch_lackey').getAmplifier())
            }
            break;
        case (event.source.getType() == 'arrow'):
            if (entity.hasEffect('kubejs:eldritch_lackey')) {
                EldritchLackeyLevelEffect(event, data, entity.getEffect('kubejs:eldritch_lackey').getAmplifier())
            }
            break;
        case (event.source.getType().startsWith('irons_spellbooks')):
            if (entity.hasEffect('kubejs:eldritch_lackey')) {
                EldritchLackeyLevelEffect(event, data, entity.getEffect('kubejs:eldritch_lackey').getAmplifier())
            }
            break;
        case (event.source.getType() == 'indirectMagic'):
            if (entity.hasEffect('kubejs:eldritch_lackey')) {
                event.amount = event.amount *0.5
            }
            break;
        default:
            if (entity.hasEffect('kubejs:eldritch_lackey')) {
                if(Math.random()<0.1){
                    updateWarpCount(player, warp + 1)
                }
            }
            break;
    }
}

/**
 * 
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @param {number} amplifier 
 */
function EldritchLackeyLevelEffect(event, data, amplifier) {
    switch (amplifier) {
        case 0:
            event.amount = 0
            break;
        case 1:
            event.entity.heal(event.amount)
            event.amount = 0
            break;
        case 2:
            event.entity.heal(event.amount)
            data.returnDamage = data.returnDamage + event.amount
            event.amount = 0
            break;
        default:
            event.entity.heal(event.amount)
            data.returnDamage = data.returnDamage + event.amount
            event.amount = 0
            break;
    }
}
