StartupEvents.registry('item', event => {
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        return event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ')
    }

    /**
     * 器官注册
     */
    registerOrgan(new Organ('kubejs:health_appendix')
        .addScore('luck', 0.5)
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一种类为'), Text.yellow('胃'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix')
        .tag('kubejs:active');

    // 幸运阑尾
    registerOrgan(new Organ('kubejs:lucky_appendix')
        .addScore('luck', 1.5)
        .build())
        .texture('kubejs:item/organs/others/lucky_appendix')
        .tag('kubejs:appendix');

    // 贪婪之胃
    registerOrgan(new Organ('kubejs:greedy_stomach')
        .addScore('digestion', 0.5)
        .addScore('endurance', -0.5)
        .addTextLines('alt', [Text.gold('● '), Text.gray('当你进食时，每个'), Text.yellow('贪婪之胃'), Text.gray('会给予你'), Text.yellow(10), Text.gray('点'), Text.yellow('经验')])
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
    registerOrgan(new Organ('kubejs:infinity_beats')
        .addScore('health', -3)
        .addScore('defense', -3)
        .addScore('speed', -1)
        .addTextLines('alt', [Text.gold('● '), Text.gray('当你没有穿着胸甲时，'), Text.yellow('空手'), Text.gray('造成伤害会使你获得临时攻击力'), Text.yellow(2), Text.gray('点。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每次触发该效果，会使自身受到等同于攻击增加量的伤害。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('直到条件不符时的攻击后重置，重置会影响所有当前已有的攻击加成效果。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_beats')
        .tag('kubejs:heart')
        .tag('kubejs:infinity');

    // 玫瑰石英肌束
    registerOrgan(new Organ('kubejs:rose_quartz_muscle')
        .addScore('endurance', 1)
        .addScore('strength', 1)
        .addScore('nerves', -0.5)
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:machine')
        .tag('kubejs:rose');
    // 玫瑰石英心脏
    registerOrgan(new Organ('kubejs:rose_quartz_heart')
        .addScore('health', 1)
        .addScore('nerves', -5)
        .addTextLines('default', [Text.gray('它曾经是无生命的——现在也是。但正是从'), Text.red('无'), Text.gray('之上，你被赋予了生命')])
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一种类为'), Text.yellow('机械'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('生命值')])
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一种类为'), Text.yellow('玫瑰'), Text.gray('的器官，会为你添加额外'), Text.yellow(0.5), Text.gray('点'), Text.yellow('攻击力')])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_heart')
        .tag('kubejs:heart')
        .tag('kubejs:machine')
        .tag('kubejs:rose')
        .tag('kubejs:active');
    // 玫瑰石英肝脏
    registerOrgan(new Organ('kubejs:rose_quartz_liver')
        .addScore('strength', 1)
        .addScore('detoxification', 1)
        .addScore('nerves', -1)
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_liver')
        .tag('kubejs:liver')
        .tag('kubejs:machine')
        .tag('kubejs:rose');

    // 革命机械系列
    // 熔炉核心
    registerOrgan(new Organ('kubejs:furnace_core')
        .addScore('speed', -1)
        .addScore('defense', 1)
        .addScore('knockback_resistant', 3)
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('蕴含着革命之力，但未被完全解放')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('手持煤炭右键以获得'), Text.gold('20s'), Text.red('熔火燃烧')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('熔火燃烧状态下，攻击会额外附加当前buff等级的固定伤害')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('与心火状态不兼容')])
        .build())
        .texture('kubejs:item/organs/machine/furnace_core')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 心火核心
    registerOrgan(new Organ('kubejs:burning_heart')
        .addScore('speed', -1)
        .addScore('defense', 1)
        .addScore('knockback_resistant', 3)
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('被完全解放的革命之力')])
        .addTextLines('default', [Text.gray('心火を燃やして、ぶっ潰す！')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('手持煤炭右键以获得'), Text.gold('20s'), Text.red('心火燃烧')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('在心火燃烧buff仅剩的最后'), Text.gold('5s'), Text.gray('，会根据状态等级提供必定暴击效果')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('与熔火状态不兼容')])
        .build())
        .texture('kubejs:item/organs/machine/burning_heart')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 革命线缆
    registerOrgan(new Organ('kubejs:revolution_cable')
        .addScore('nerves', 1)
        .addScore('strength', -2)
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一种类为'), Text.of('革命').color('#deaa00'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_cable')
        .tag('kubejs:revolution')
        .tag('kubejs:machine')
        .tag('kubejs:active');
    // 革命齿轮
    registerOrgan(new Organ('kubejs:revolution_gear')
        .addScore('defense', 0.5)
        .addTextLines('alt', [Text.gold('● '), Text.gray('每'), Text.gold(1), Text.gray('个该器官提供额外的1级'), Text.red('熔火'), Text.gray('等级')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每'), Text.gold(2), Text.gray('个该器官提供额外的1级'), Text.red('心火'), Text.gray('等级')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_gear')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 革命继电器
    registerOrgan(new Organ('kubejs:revolution_relay')
        .addScore('speed', -0.5)
        .addScore('nerves', 0.5)
        .addTextLines('default', [Text.gold('● '), Text.gray('革命之力将会被稍稍延后')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每'), Text.gold(1), Text.gray('个该器官将会为'), Text.red('心火状态/熔火状态'), Text.gray('提供额外'), Text.gold('5s'), Text.gray('的状态时长')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_relay')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 革命断路器
    registerOrgan(new Organ('kubejs:revolution_delay')
        .addScore('speed', -0.5)
        .addScore('nerves', 0.5)
        .addTextLines('default', [Text.gold('● '), Text.gray('革命之力将会被重新转述')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每'), Text.gold(1), Text.gray('个该器官将会减少'), Text.red('心火状态/熔火状态'), Text.gold('2s'), Text.gray('的状态时长')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_delay')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 糖果心与魔法使系列物品
    // 糖果系列器官
    registerOrgan(new Organ('kubejs:candy_heart')
        .addScore('health', 2)
        .addTextLines('default', [Text.gray('魔法使的糖果心，流动的是'), Text.red('血'), Text.gray('还是'), Text.of('糖').color('#e8a0dc'), Text.gray('？')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('存在糖果心的情况下，“甜蜜之梦”才会正常发挥效果。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('在你受到伤害时，若拥有“甜蜜之梦”的效果，则会减少该效果的持续时间用以抵消伤害事件。')])
        .build())
        .texture('kubejs:item/organs/candy/candy_heart')
        .tag('kubejs:heart')
        .tag('kubejs:candy');

    registerOrgan(new Organ('kubejs:candy_stomach')
        .addScore('nutrition', 2)
        .addScore('digestion', 2)
        .addScore('health', -1)
        .addTextLines('default', [Text.gray('因为体温在体内'), Text.of('缓缓融化').color('#e8a0dc')])
        .addTextLines('default', [Text.gray('但融化的糖液又被其充分吸收')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('当食用糖类食品时，会获得'), Text.of('“甜蜜之梦”').color('#e8a0dc'), Text.gray('效果')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('如果身上存在该效果，则无法通过食用刷新效果。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每种糖类物品存在独立的食用间隔'), Text.gold('300s')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/candy/candy_stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:candy');

    registerOrgan(new Organ('kubejs:candy_pancreas')
        .addScore('endurance', 1)
        .addScore('health', -1)
        .addTextLines('default', [Text.gray('让人有吃下去的冲动。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('当“甜蜜之梦”的效果因为抵消伤害而消失时，给予'), Text.gold('伤害吸收 V'), Text.gray('效果。')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/candy/candy_pancreas')
        .tag('kubejs:pancreas')
        .tag('kubejs:candy');

    // 魔法使系列
    registerOrgan(new Organ('kubejs:magic_hippocampus')
        .addScore('nerves', 0.75)
        .addScore('luck', 1)
        .addTextLines('default', [Text.gray('散发着强大的魔力')])
        .addTextLines('default', [Text.gray('被称之为魔法使的第二心脏')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('当遭受到大于等于'), Text.gold('10'), Text.gray('的伤害时，给予玩家'), Text.of('“甜蜜之梦”').color('#e8a0dc'), Text.gray('效果')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每存在'), Text.gold('1'), Text.gray('个'), Text.aqua('魔法束'), Text.gray('，效果持续时间增长5s')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每存在'), Text.gold('2'), Text.gray('个'), Text.aqua('魔法脊柱'), Text.gray('，效果等级提高1级')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/magic/magic_hippocampus')
        .tag('kubejs:magic');

    registerOrgan(new Organ('kubejs:magic_muscle')
        .addScore('strength', 1)
        .addScore('health', -0.5)
        .addTextLines('default', [Text.gray('魔法使的魔力便是通过此条纤维游走于全身')])
        .build())
        .texture('kubejs:item/organs/magic/magic_muscle')
        .tag('kubejs:magic');

    registerOrgan(new Organ('kubejs:magic_spine')
        .addScore('nerves', 1)
        .addTextLines('default', [Text.gray('更为粗壮的魔力传导装置')])
        .addTextLines('default', [Text.gray('也许解释了为什么软体生物没有魔力')])
        .build())
        .texture('kubejs:item/organs/magic/magic_spine')
        .tag('kubejs:magic');

    registerOrgan(new Organ('kubejs:magic_vision')
        .addScore('nerves', -1)
        .addScore('metabolism', -1)
        .addTextLines('default', [Text.gray('你现在能够发现敌人的弱点')])
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('激活后提高'), Text.yellow(0.1), Text.yellow('咒文伤害倍率')])
        .build())
        .texture('kubejs:item/organs/magic/magic_vision')
        .tag('kubejs:magic')
        .tag('kubejs:active');

    // 矿石肺
    registerOrgan(new Organ('kubejs:ore_lung')
        .addScore('health', -0.5)
        .addScore('nerves', -1)
        .addScore('breath_recovery', 1)
        .addTextLines('alt', [Text.gold('● '), Text.gray('每次挖掘石头后，便会积累'), Text.gold(1), Text.gray('资源点数')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('每积累到'), Text.gold(64), Text.gray('点，会根据幸运给予矿物')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('资源点积累效果唯一')])
        .build())
        .texture('kubejs:item/organs/others/ore_lung')
        .tag('kubejs:lung')
        .tag('kubejs:resource');

    registerOrgan(new Organ('kubejs:silk_for_cutting')
        .addScore('knockback_resistant', -0.5)
        .addTextLines('alt', [Text.gold('● '), Text.gray('能够精确采集玻璃')])
        .build())
        .texture('kubejs:item/organs/others/silk_for_cutting')
        .tag('kubejs:muscle');

    // todo
    registerOrgan(new Organ('kubejs:holy_eyeball')
        .addScore('knockback_resistant', -0.5)
        .build())
        .texture('kubejs:item/organs/others/holy_eyeball')
        .tag('kubejs:muscle');


    // 都市传说系列
    // 二重身
    registerOrgan(new Organ('kubejs:doppelganger')
        .addScore('health', -1)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray('二重身会吸收走本体的能量')])
        .addTextLines('default', [Text.gray('但又会在生命濒危之际帮助你')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('受到致命伤害时，有低概率会获得伤害吸收Ⅲ效果')])
        .addTextLines('alt', [Text.gold('● '), Text.gray('概率取决于其他'), Text.gold('都市传说'), Text.gray('器官种类的数量')])
        .build())
        .texture('kubejs:item/organs/legends/doppelganger')
        .tag('kubejs:legends');


    // boss遗物器官
    registerOrgan(new Organ('kubejs:love_between_lava_and_ice')
        .addScore('health', 1)
        .addScore('fire_resistant', 1)
        .addScore('detoxification', -5)
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一格'), Text.blue('蓝冰'), Text.gray('，会为你添加额外'), Text.yellow(0.1), Text.aqua('冰系魔法伤害倍率')])
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('每存在一格'), Text.darkRed('岩浆块'), Text.gray('，会为你添加额外'), Text.yellow(0.1), Text.red('火系魔法伤害倍率')])
        .addTextLines('ctrl', [Text.gold('● '), Text.gray('一格内存在任意数量即被视作一格')])
        .build())
        .texture('kubejs:item/organs/boss/love_between_lava_and_ice')
        .tag('kubejs:heart')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:leviathan_spine')
        .addScore('nerves', 1.5)
        .addScore('swim_speed', 2)
        .addScore('breath_recovery', 1)
        .build())
        .texture('kubejs:item/organs/boss/leviathan_spine')
        .tag('kubejs:spine')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:leviathan_rib')
        .addScore('defense', 1.5)
        .build())
        .texture('kubejs:item/organs/boss/leviathan_rib')
        .tag('kubejs:rib')
        .tag('kubejs:relics');

    registerOrgan(new Organ('kubejs:lamellar_armor_piece')
        .addScore('defense', 1.5)
        .addScore('speed', -0.25)
        .build())
        .texture('kubejs:item/organs/machine/lamellar_armor_piece')
        .tag('kubejs:machine');

    registerOrgan(new Organ('kubejs:chain_armor_piece')
        .addScore('defense', 1.25)
        .addScore('speed', -0.125)
        .build())
        .texture('kubejs:item/organs/machine/chain_armor_piece')
        .tag('kubejs:machine');

    // 模板器官
    registerOrgan(new Organ('kubejs:lung_template').addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).build()).texture('kubejs:item/organs/machine/lung_template').tag('kubejs:lung')
    registerOrgan(new Organ('kubejs:muscle_template').addScore('strength', 0.75).addScore('speed', 0.75).build()).texture('kubejs:item/organs/template/muscle_template').tag('kubejs:muscle')
    registerOrgan(new Organ('kubejs:heart_template').addScore('health', 0.75).build()).texture('kubejs:item/organs/template/heart_template').tag('kubejs:heart')
    registerOrgan(new Organ('kubejs:intestine_template').addScore('nutrition', 0.75).build()).texture('kubejs:item/organs/template/intestine_template').tag('kubejs:intestine')
    registerOrgan(new Organ('kubejs:rib_template').addScore('defense', 0.75).build()).texture('kubejs:item/organs/template/rib_template').tag('kubejs:rib')
    registerOrgan(new Organ('kubejs:spine_template').addScore('defense', 0.375).addScore('nerves', 0.75).build()).texture('kubejs:item/organs/template/spine_template').tag('kubejs:spine')
    registerOrgan(new Organ('kubejs:spleen_template').addScore('metabolism', 0.75).build()).texture('kubejs:item/organs/template/spleen_template').tag('kubejs:spleen')
    registerOrgan(new Organ('kubejs:stomach_template').addScore('digestion', 0.75).build()).texture('kubejs:item/organs/template/stomach_template').tag('kubejs:stomach')
    registerOrgan(new Organ('kubejs:kidney_template').addScore('filtration', 0.75).build()).texture('kubejs:item/organs/template/kidney_template').tag('kubejs:kidney')
    registerOrgan(new Organ('kubejs:liver_template').addScore('detoxification', 0.75).build()).texture('kubejs:item/organs/template/liver_template').tag('kubejs:liver')
});