StartupEvents.registry('item', event => {
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        return event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ')
    }

    /**
     * 器官注册
     */
    registerOrgan(new Organ('kubejs:health_appendix')
        .addScore('luck', 1.25)
        .addTextLines('ctrl', [Text.gold('●'), Text.gray('每存在一种类为'), Text.yellow('阑尾'), Text.gray('的器官，会为你添加额外'), Text.yellow(0.5), Text.gray('点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix')
        .tag('kubejs:active');

    // 幸运阑尾
    registerOrgan(new Organ('kubejs:lucky_appendix')
        .addScore('luck', 1.25)
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix');

    // 贪婪之胃
    registerOrgan(new Organ('kubejs:greedy_stomach')
        .addScore('digestion', 0.5)
        .addScore('endurance', -0.5)
        .addTextLines('alt', [Text.gold('●'), Text.gray('当你进食时，每个'), Text.yellow('贪婪之胃'), Text.gray('会给予你'), Text.yellow(10), Text.gray('点'), Text.yellow('经验')])
        .build())
        .texture('kubejs:item/organs/common/stomach')
        .tag('kubejs:stomach');

    // 幸运之胃
    registerOrgan(new Organ('kubejs:lucky_stomach')
        .addScore('luck', -0.5)
        .build())
        .texture('kubejs:item/organs/common/stomach')
        .tag('kubejs:stomach');


    // 无尽节律之心
    registerOrgan(new Organ('kubejs:infinite_beats')
        .addScore('health', -3)
        .addScore('defense', -3)
        .addScore('speed', -1)
        .addTextLines('alt', [Text.gold('●'), Text.gray('当你没有穿着胸甲时，'), Text.yellow('空手'), Text.gray('造成伤害会使你的下次攻击伤害额外提高'), Text.yellow(2), Text.gray('点。')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('每次触发该效果，会使自身受到等同于攻击增加量的伤害。')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('直到条件不符时重置，重置会影响所有当前已有的攻击加成效果。')])
        .build())
        .texture('kubejs:item/organs/common/heart')
        .tag('kubejs:heart')
        .tag('kubejs:infinite');

    // 玫瑰石英肌束
    registerOrgan(new Organ('kubejs:rose_quartz_muscle')
        .addScore('endurance', 1)
        .addScore('strength', 2)
        .build())
        .texture('kubejs:item/organs/common/muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:machine')
        .tag('kubejs:rose');
    // 玫瑰石英心脏
    registerOrgan(new Organ('kubejs:rose_quartz_heart')
        .addScore('health', 1)
        .addScore('strength', 1)
        .addTextLines('default', [Text.gray('它曾经是无生命的——现在也是。但正是从'), Text.red('无'), Text.gray('之上，你被赋予了生命。')])
        .addTextLines('ctrl', [Text.gold('●'), Text.gray('每存在一种类为'), Text.yellow('机械'), Text.gray('的器官，会为你添加额外'), Text.yellow(2), Text.gray('点'), Text.yellow('生命值')])
        .addTextLines('ctrl', [Text.gold('●'), Text.gray('每存在一种类为'), Text.yellow('玫瑰'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('攻击力')])
        .build())
        .texture('kubejs:item/organs/rose_quartz/heart')
        .tag('kubejs:heart')
        .tag('kubejs:machine')
        .tag('kubejs:rose')
        .tag('kubejs:active');
    // 玫瑰石英肝脏
    registerOrgan(new Organ('kubejs:rose_quartz_liver')
        .addScore('strength', 1)
        .addScore('detoxification', 2)
        .build())
        .texture('kubejs:item/organs/common/liver')
        .tag('kubejs:liver')
        .tag('kubejs:machine')
        .tag('kubejs:rose');

    // 熔炉核心
    registerOrgan(new Organ('kubejs:furnace_core')
        .addScore('speed', -5)
        .addScore('defend', 3)
        .build())
        .texture('kubejs:item/organs/common/heart')
        .tag('kubejs:liver')
        .tag('kubejs:machine');
});