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
})