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

/**
 * 
 * @param {Internal.LivingEntity} entity 
 * @param {number} lvl 
 * @returns 
 */
global.glimpseOfGodEffectTick = (entity, lvl) => {
    if (!entity.server) return;
    if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.health < entity.maxHealth * 0.67) {
            entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                if (player.isPlayer()) {
                    player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                }
            })
            entity.removeEffect('kubejs:glimpse_of_god')
            entity.potionEffects.add('kubejs:gaze_of_god', 3600 * 20, 0)
            godPardonEffectIncr(entity)
        }
    }
}

/**
 * 
 * @param {Internal.LivingEntity} entity 
 * @param {number} lvl 
 * @returns 
 */
global.gazeOfGodEffectTick = (entity, lvl) => {
    if (!entity.server) return;
    if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.health < entity.maxHealth * 0.33) {
            entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                if (player.isPlayer()) {
                    player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                }
            })
            entity.removeEffect('kubejs:gaze_of_god')
            entity.potionEffects.add('kubejs:glare_of_god', 180 * 20, 0)
            godPardonEffectIncr(entity)
        }
    }
}

/**
 * 
 * @param {Internal.LivingEntity} entity 
 * @param {number} lvl 
 * @returns 
 */
global.glareOfGodEffectTick = (entity, lvl) => {
    if (!entity.server) return;
    if (entity.age % 20 == 0) {
        entity.heal(entity.getMaxHealth() * 0.01)
        if (entity.getEffect('kubejs:glare_of_god').getDuration() < 41) {
            entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                if (player.isPlayer()) {
                    player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                }
            })
            entity.removeEffect('kubejs:glare_of_god')
            entity.potionEffects.add('kubejs:glimpse_of_god', 3600 * 20, 0)
            entity.setHealth(entity.getMaxHealth())
            godPardonEffectIncr(entity)
        }
    }
}



/**
 * @param {Internal.LivingEntity} entity 
 */
function godPardonEffectIncr(entity) {
    let effectType = randomGet(['kubejs:pardon_of_god_magic', 'kubejs:pardon_of_god_melee', 'kubejs:pardon_of_god_projectile'])
    let amplifier = 0
    if (entity.hasEffect(effectType)) {
        amplifier = entity.getEffect(effectType).getAmplifier() + 1
    }
    entity.potionEffects.add(effectType, 1200 * 20, amplifier)
}
