// priority: 6
/**
 * 神之宽恕
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function pardonOfGodEntityHurtByPlayer(event, data) {
    let entity = event.entity
    switch (event.source.getType().slice(0, 16)) {
        case 'player':
            if (entity.hasEffect('kubejs:pardon_of_god_melee')) {
                pardonOfGodLevelEffect(event, data, entity.getEffect('kubejs:pardon_of_god_melee').getAmplifier())
            }
            break;
        case 'arrow':
            if (entity.hasEffect('kubejs:pardon_of_god_projectile')) {
                pardonOfGodLevelEffect(event, data, entity.getEffect('kubejs:pardon_of_god_projectile')?.getAmplifier())
            }
            break;
        case 'irons_spellbooks':
            if (entity.hasEffect('kubejs:pardon_of_god_magic')) {
                pardonOfGodLevelEffect(event, data, entity.getEffect('kubejs:pardon_of_god_magic').getAmplifier())
            }
            break;
        default:
            break;
    }
}

/**
 * 
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @param {number} amplifier 
 */
function pardonOfGodLevelEffect(event, data, amplifier) {
    if (amplifier > 0) {
        event.entity.heal(event.amount)
        if(amplifier > 1) {
            data.returnDamage += event.amount
        }
    }
    event.amount = 0
}
