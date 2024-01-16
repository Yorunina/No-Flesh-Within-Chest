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

    event.create('curse_of_fragility')
        .harmful()
        .color(Color.DARK_GRAY)

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
            global.glimpseOfGodEffectTick(entity, lvl)
        })
        .color(Color.WHITE)

    event.create('gaze_of_god')
        .beneficial()
        .effectTick((entity, lvl) => {
            global.gazeOfGodEffectTick(entity, lvl)
        })
        .color(Color.YELLOW)

    event.create('glare_of_god')
        .beneficial()
        .effectTick((entity, lvl) => {
            global.glareOfGodEffectTick(entity, lvl)
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
    event.create('power_of_citadel')
        .beneficial()
        .effectTick((entity, lvl) => {
            global.powerOfCitadelEffectTick(entity, lvl)
        })
        .color(Color.DARK_RED)

    event.create('arrow_damage_boost')
        .beneficial()
        .color(Color.RED)
})


