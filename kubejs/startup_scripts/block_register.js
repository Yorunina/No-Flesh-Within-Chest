StartupEvents.registry('minecraft:block', event => {
    event.create('lucky_block', 'basic')
        .hardness(1.5)
        .material('wool')
        .noDrops()

    event.create('organ_lucky_block', 'basic')
        .hardness(1.5)
        .material('wool')
        .noDrops()

    event.create('infinity_lucky_block', 'basic')
        .hardness(2)
        .material('wool')
        .noDrops()
})