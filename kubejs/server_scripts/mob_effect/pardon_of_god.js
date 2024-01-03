// priority: 6
/**
 * 神之宽恕
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function pardonOfGodEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    let entity = event.entity
    player.tell(event.source.type)
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
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @param {number} amplifier 
 */
function pardonOfGodLevelEffect(event, data, amplifier) {
    switch (amplifier) {
        case 0:
            data.damage = 0
            break;
        case 1:
            event.entity.heal(data.damage)
            data.damage = 0
            break;
        case 2:
            event.entity.heal(data.damage)
            event.source.player.attack(data.damage)
            data.damage = 0
            break;
        default:
            event.entity.heal(data.damage)
            event.source.player.attack(data.damage)
            data.damage = 0
            break;
    }
}