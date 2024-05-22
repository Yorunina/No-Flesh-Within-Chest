/**
 * @param {Internal.LivingEntity} entity 
 */
function godPardonEffectIncr(entity) {
    let effectType = randomGet(['kubejs:pardon_of_god_magic', 'kubejs:pardon_of_god_melee', 'kubejs:pardon_of_god_projectile'])
    let amplifier = 0
    if (entity.hasEffect(effectType)) {
        amplifier = entity.getEffect(effectType).getAmplifier() + 1
    }
    entity.potionEffects.add(effectType, 1200 * 20, amplifier, false, false)
}

StartupEvents.registry('mob_effect', event => {
    event.create('burning_heart')
        .beneficial()
        .color(Color.DARK_RED)

    event.create('flaring_heart')
        .beneficial()
        .color(Color.RED)

    event.create('sweet_dream')
        .beneficial()
        .color(Color.PINK_DYE)

    event.create('vampiric')
        .beneficial()
        .color(Color.DARK_RED)

    event.create('magic_forbiden')
        .modifyAttribute('irons_spellbooks:max_mana', 'kubejsMagicForbiden', -10000, "addition")
        .harmful()
        .color(Color.DARK_GRAY)

    event.create('colorful')
        .beneficial()
        .color(Color.RED)

    event.create('executed')
        .harmful()
        .color(Color.GRAY)

    event.create('glimpse_of_god')
        .beneficial()
        .effectTick((entity, lvl) => {
            if (!entity || entity.level.isClientSide()) return
            if (entity.age % 20 == 0) {
                entity.heal(entity.getMaxHealth() * 0.01)
                if (entity.health < entity.maxHealth * 0.67) {
                    entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                        if (player.isPlayer()) {
                            player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                        }
                    })
                    entity.removeEffect('kubejs:glimpse_of_god')
                    entity.potionEffects.add('kubejs:gaze_of_god', 3600 * 20, 0, false, false)
                    godPardonEffectIncr(entity)
                }
            }
        })
        .color(Color.WHITE)

    event.create('gaze_of_god')
        .beneficial()
        .effectTick((entity, lvl) => {
            if (!entity || entity.level.isClientSide()) return
            if (entity.age % 20 == 0) {
                entity.heal(entity.getMaxHealth() * 0.01)
                if (entity.health < entity.maxHealth * 0.33) {
                    entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                        if (player.isPlayer()) {
                            player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                        }
                    })
                    entity.removeEffect('kubejs:gaze_of_god')
                    entity.potionEffects.add('kubejs:glare_of_god', 180 * 20, 0, false, false)
                    godPardonEffectIncr(entity)
                }
            }
        })
        .color(Color.YELLOW)

    event.create('glare_of_god')
        .beneficial()
        .effectTick((entity, lvl) => {
            if (!entity || entity.level.isClientSide()) return
            if (entity.age % 20 == 0) {
                entity.heal(entity.getMaxHealth() * 0.01)
                if (entity.getEffect('kubejs:glare_of_god').getDuration() < 41) {
                    entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10)).forEach(player => {
                        if (player.isPlayer()) {
                            player.tell(Text.gray('它的身体似乎发生了什么变化. . .'))
                        }
                    })
                    entity.removeEffect('kubejs:glare_of_god')
                    entity.potionEffects.add('kubejs:glimpse_of_god', 3600 * 20, 0, false, false)
                    entity.setHealth(entity.getMaxHealth())
                    godPardonEffectIncr(entity)
                }
            }
        })
        .color(Color.GOLD)

    event.create('pardon_of_god_magic')
        .beneficial()
        .color(Color.BLUE)
    event.create('pardon_of_god_melee')
        .beneficial()
        .color(Color.RED)
    event.create('pardon_of_god_projectile')
        .beneficial()
        .color(Color.of('#9c9c9c'))
    event.create('vulnerable')
        .harmful()
        .color(Color.RED)

    event.create('hungry_tamagotchi')
        .beneficial()
        .color(Color.PINK_DYE)

    event.create('arrow_damage_boost')
        .beneficial()
        .color(Color.RED)

    event.create('declaration_of_death')
        .harmful()
        .color(Color.BLACK)

    event.create('dragon_power')
        .beneficial()
        .color(Color.DARK_PURPLE)
})