StartupEvents.registry('item', event => {
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        return event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ')
    }

    // 注册器官
    registerOrgan(new Organ('kubejs:health_appendix')
        .addScore('luck', 1.25)
        .addActivedScore(new OrganActiveScore().setTypeScore('kubejs:appendix', '${this} * 1', global.HEALTH_UP))
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一种类为 '), Text.yellow('阑尾'), Text.gray(' 的器官，会为你添加额外 '), Text.yellow(1), Text.gray(' 点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix')

    registerOrgan(new Organ('kubejs:lucky_appendix')
        .addScore('luck', 1.25)
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix')


    registerOrgan(new Organ('kubejs:greedy_stomach')
    .addScore('digestion', 0.5)
    .addScore('endurance', -0.5)
    .addTextLines('ctrl', [Text.gold('● '), Text.gray('当你进食时，每个 '), Text.yellow('贪婪之胃'), Text.gray(' 会给予你 '), Text.yellow(10), Text.gray(' 点'), Text.yellow('经验')])
    .build())
    .texture('kubejs:item/organs/common/stomach')
    .tag('kubejs:stomach')

    registerOrgan(new Organ('kubejs:lucky_stomach')
    .addScore('luck', -0.5)

    .build())
    .texture('kubejs:item/organs/common/stomach')
    .tag('kubejs:stomach')
});