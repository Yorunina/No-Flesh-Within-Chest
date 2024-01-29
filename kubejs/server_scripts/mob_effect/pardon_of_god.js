// priority: 6
/**
 * 神之宽恕
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function pardonOfGodEntityHurtByPlayer(event, data) {
    let entity = event.entity
    switch (true) {
        case (event.source.getType() == 'player'):
            if (entity.hasEffect('kubejs:pardon_of_god_melee')) {
                pardonOfGodLevelEffect(event, data, entity.getEffect('kubejs:pardon_of_god_melee').getAmplifier())
            }
            break;
        case (event.source.getType() == 'arrow'):
            if (entity.hasEffect('kubejs:pardon_of_god_projectile')) {
                pardonOfGodLevelEffect(event, data, entity.getEffect('kubejs:pardon_of_god_projectile').getAmplifier())
            }
            break;
        case (event.source.getType().startsWith('irons_spellbooks')):
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
