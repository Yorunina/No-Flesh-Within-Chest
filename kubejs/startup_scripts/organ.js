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


    // 糖果心与魔法使系列物品
    // 糖果系列器官
    registerOrgan(new Organ('kubejs:candy_heart')
        .addScore('health', 2)
        .addTextLines('default', [Text.gray('魔法使`的糖果心，流动的是'), Text.red('血'), Text.gray('还是'), Text.of('糖').color('#e8a0dc'), Text.gray('？')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('存在糖果心的情况下，“甜蜜之梦”才会正常发挥效果。')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('在你受到伤害时，若拥有“甜蜜之梦”的效果，则会减少该效果的持续时间用以抵消伤害事件。')])
        .build())
        .texture('kubejs:item/organs/candy/candy_heart')
        .tag('kubejs:heart')
        .tag('kubejs:candy');

    registerOrgan(new Organ('kubejs:candy_stomach')
        .addScore('nutrition', 2)
        .addScore('digestion', 2)
        .addTextLines('default', [Text.gray('因为体温在体内'), Text.of('缓缓融化').color('#e8a0dc')])
        .addTextLines('default', [Text.gray('但融化的糖液又被其充分吸收')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('当食用糖类食品时，会获得'), Text.of('“甜蜜之梦”').color('#e8a0dc'), Text.gray('效果')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('如果身上存在该效果，则无法通过食用刷新效果。')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('每种糖类物品存在独立的食用间隔'), Text.gold('300s')])
        .build())
        .texture('kubejs:item/organs/candy/candy_stomach')
        .tag('kubejs:heart')
        .tag('kubejs:candy');

    registerOrgan(new Organ('kubejs:candy_pancreas')
        .addScore('endurance', 1)
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('想让人有吃下去的冲动。')])
        .addTextLines('alt', [Text.gold('●'), Text.gray('当“甜蜜之梦”的效果因为抵消伤害而消失时，给予'), Text.gold('伤害吸收 V'), Text.gray('效果。')])
        .build())
        .texture('kubejs:item/organs/candy/candy_pancreas')
        .tag('kubejs:pancreas')
        .tag('kubejs:candy');

    // 魔法使系列
    registerOrgan(new Organ('kubejs:magic_hippocampus')
        .addScore('nerves', 1)
        .addScore('luck', 1)
        .build())
        .texture('kubejs:item/organs/magic/magic_hippocampus')
        .tag('kubejs:magic');

    registerOrgan(new Organ('kubejs:magic_muscle')
        .addScore('strength', 1)
        .build())
        .texture('kubejs:item/organs/magic/magic_muscle')
        .tag('kubejs:magic');

    registerOrgan(new Organ('kubejs:magic_spine')
        .addScore('nerves', 2)
        .addScore('defense', 1)
        .build())
        .texture('kubejs:item/organs/magic/magic_spine')
        .tag('kubejs:magic');
});