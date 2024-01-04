StartupEvents.registry('item', event => {
    /**
     * 
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registeOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        return event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ')
    }

    /**
     * 器官注册
     */
    registeOrgan(new Organ('kubejs:health_appendix')
        .addScore('luck', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一种类为'), Text.yellow('阑尾'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/common/appendix')
        .tag('kubejs:appendix')
        .tag('kubejs:active');

    // 幸运阑尾
    registeOrgan(new Organ('kubejs:lucky_appendix')
        .addScore('luck', 1.5)
        .build())
        .texture('kubejs:item/organs/others/lucky_appendix')
        .tag('kubejs:appendix');

    // 贪婪之胃
    registeOrgan(new Organ('kubejs:greedy_stomach')
        .addScore('digestion', 0.5)
        .addScore('endurance', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当你进食时，每个'), Text.yellow('贪婪之胃'), Text.gray('会给予你'), Text.yellow(10), Text.gray('点'), Text.yellow('经验')])
        .build())
        .texture('kubejs:item/organs/common/stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:eat_effect');

    // 无尽节律之心
    registeOrgan(new Organ('kubejs:infinity_beats')
        .addScore('health', -3)
        .addScore('defense', -3)
        .addScore('breath_recovery', -3)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当你没有穿着胸甲时，'), Text.yellow('空手'), Text.gray('造成伤害会使你获得临时攻击力'), Text.yellow(2), Text.gray('点。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每次触发该效果，会使自身受到等同于攻击增加量的伤害。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('直到条件不符时的攻击后重置，重置会影响所有当前已有的攻击加成效果。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_beats')
        .tag('kubejs:infinity')
        .tag('kubejs:damage_only');

    // 无尽之力
    registeOrgan(new Organ('kubejs:infinity_force')
        .addScore('health', -3)
        .addScore('defense', -3)
        .addScore('breath_recovery', -3)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('根据激活时该物品的强化次数决定伤害加成')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('装备时，击杀Boss概率会获得低于当前强化等级的'), Text.gold('无尽之力')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('同等级的'), Text.gold('无尽之力'), Text.gray('合成后会提高锻造等级')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('掉落概率与'), Text.green('幸运'), Text.gray('相关')])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_force')
        .tag('kubejs:infinity')
        .tag('kubejs:active_only')
        .tag('kubejs:loot_entity_only');

    // 玫瑰石英肌束
    registeOrgan(new Organ('kubejs:rose_quartz_muscle')
        .addScore('endurance', 1)
        .addScore('strength', 1)
        .addScore('nerves', -0.5)
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:rose');

    // 玫瑰石英心脏
    registeOrgan(new Organ('kubejs:rose_quartz_heart')
        .addScore('health', 1)
        .addScore('nerves', -3)
        .addTextLines('default', [Text.gray('它曾经是无生命的——现在也是。但正是从'), Text.red('无'), Text.gray('之上，你被赋予了生命')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一种类为'), Text.yellow('机械'), Text.gray('的器官，会为你添加额外'), Text.yellow(2), Text.gray('点'), Text.yellow('生命值')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一种类为'), Text.yellow('玫瑰'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('攻击力')])
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_heart')
        .tag('kubejs:heart')
        .tag('kubejs:rose')
        .tag('kubejs:active');
    // 玫瑰石英肝脏
    registeOrgan(new Organ('kubejs:rose_quartz_liver')
        .addScore('strength', 1)
        .addScore('detoxification', 1)
        .addScore('nerves', -1)
        .build())
        .texture('kubejs:item/organs/rose_quartz/rose_quartz_liver')
        .tag('kubejs:liver')
        .tag('kubejs:rose');

    // 革命机械系列
    // 熔炉核心
    registeOrgan(new Organ('kubejs:furnace_core')
        .addScore('speed', -1)
        .addScore('defense', 1)
        .addScore('knockback_resistant', 3)
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('蕴含着革命之力，但未被完全解放')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('手持煤炭右键以获得'), Text.gold('20s'), Text.red('熔火燃烧')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('熔火燃烧状态下，攻击会额外附加当前buff等级的固定伤害')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('与心火状态不兼容')])
        .build())
        .texture('kubejs:item/organs/machine/furnace_core')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('kubejs:machine')
        .tag('kubejs:rclick_only');

    // 心火核心
    registeOrgan(new Organ('kubejs:burning_heart')
        .addScore('speed', -1)
        .addScore('defense', 1)
        .addScore('knockback_resistant', 3)
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('被完全解放的革命之力')])
        .addTextLines('default', [Text.gray('心火を燃やして、ぶっ潰す！')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('手持煤炭右键以获得'), Text.gold('20s'), Text.red('心火燃烧')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在心火燃烧buff仅剩的最后'), Text.gold('5s'), Text.gray('，会根据状态等级提供心火暴击效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('与熔火状态不兼容')])
        .build())
        .texture('kubejs:item/organs/machine/burning_heart')
        .tag('kubejs:heart')
        .tag('kubejs:revolution')
        .tag('kubejs:machine')
        .tag('kubejs:rclick_only');

    // 革命线缆
    registeOrgan(new Organ('kubejs:revolution_cable')
        .addScore('nerves', 1)
        .addScore('strength', -2)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一种类为'), Text.of('革命').color('#deaa00'), Text.gray('的器官，会为你添加额外'), Text.yellow(1), Text.gray('点'), Text.yellow('生命值')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_cable')
        .tag('kubejs:revolution')
        .tag('kubejs:machine')
        .tag('kubejs:active');
    // 革命齿轮
    registeOrgan(new Organ('kubejs:revolution_gear')
        .addScore('defense', 0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每'), Text.gold(1), Text.gray('个该器官提供额外的1级'), Text.red('熔火'), Text.gray('等级')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每'), Text.gold(2), Text.gray('个该器官提供额外的1级'), Text.red('心火'), Text.gray('等级')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_gear')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 革命继电器
    registeOrgan(new Organ('kubejs:revolution_relay')
        .addScore('speed', -0.5)
        .addScore('nerves', 0.5)
        .addTextLines('default', [Text.gray('革命之力将会被重新转述')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每'), Text.gold(1), Text.gray('个该器官将会为'), Text.red('心火状态/熔火状态'), Text.gray('提供额外'), Text.gold('5s'), Text.gray('的状态时长')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_relay')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 革命断路器
    registeOrgan(new Organ('kubejs:revolution_delay')
        .addScore('speed', -0.5)
        .addScore('nerves', 0.5)
        .addTextLines('default', [Text.gray('革命之力将会被稍稍延后')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每'), Text.gold(1), Text.gray('个该器官将会减少'), Text.red('心火状态/熔火状态'), Text.gold('3s'), Text.gray('的状态时长')])
        .build())
        .texture('kubejs:item/organs/machine/revolution_delay')
        .tag('kubejs:revolution')
        .tag('kubejs:machine');

    // 糖果心与魔法使系列物品
    // 糖果系列器官
    registeOrgan(new Organ('kubejs:candy_heart')
        .addScore('health', 1)
        .addTextLines('default', [Text.gray('魔法使的糖果心，流动的是'), Text.red('血'), Text.gray('还是'), Text.of('糖').color('#e8a0dc'), Text.gray('？')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('存在糖果心的情况下，“甜蜜之梦”才会正常发挥效果。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在你受到伤害时，若拥有“甜蜜之梦”的效果，则会减少该效果的持续时间用以抵消伤害事件。')])
        .build())
        .texture('kubejs:item/organs/candy/candy_heart')
        .tag('kubejs:heart')
        .tag('kubejs:candy');

    registeOrgan(new Organ('kubejs:candy_stomach')
        .addScore('nutrition', 1)
        .addScore('digestion', 1)
        .addScore('health', -1)
        .addTextLines('default', [Text.gray('因为体温在体内'), Text.of('缓缓融化').color('#e8a0dc')])
        .addTextLines('default', [Text.gray('但融化的糖液又被其充分吸收')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当食用糖类食品时，会获得'), Text.of('“甜蜜之梦”').color('#e8a0dc'), Text.gray('效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('如果身上存在该效果，则无法通过食用刷新效果。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每种糖类物品存在独立的食用间隔'), Text.gold('300s')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/candy/candy_stomach')
        .tag('kubejs:stomach')
        .tag('kubejs:candy')
        .tag('kubejs:eat_effect_only');

    registeOrgan(new Organ('kubejs:candy_pancreas')
        .addScore('endurance', -1)
        .addScore('health', -1)
        .addTextLines('default', [Text.gray('让人有吃下去的冲动。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当“甜蜜之梦”的效果因为抵消伤害而消失时，给予'), Text.gold('伤害吸收 V'), Text.gray('效果。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/candy/candy_pancreas')
        .tag('kubejs:pancreas')
        .tag('kubejs:candy');

    // 魔法使系列
    registeOrgan(new Organ('kubejs:magic_hippocampus')
        .addScore('nerves', 0.75)
        .addScore('luck', 1)
        .addTextLines('default', [Text.gray('散发着强大的魔力')])
        .addTextLines('default', [Text.gray('被称之为魔法使的第二心脏')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当遭受到大于等于'), Text.gold('10'), Text.gray('的伤害时，给予玩家'), Text.of('“甜蜜之梦”').color('#e8a0dc'), Text.gray('效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每存在'), Text.gold('1'), Text.gray('个'), Text.aqua('魔法束'), Text.gray('，效果持续时间增长5s')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每存在'), Text.gold('2'), Text.gray('个'), Text.aqua('魔法脊柱'), Text.gray('，效果等级提高1级')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/magic/magic_hippocampus')
        .tag('kubejs:magic');

    registeOrgan(new Organ('kubejs:magic_muscle')
        .addScore('strength', 1)
        .addScore('health', -0.5)
        .addTextLines('default', [Text.gray('魔法使的魔力便是通过此条纤维游走于全身')])
        .build())
        .texture('kubejs:item/organs/magic/magic_muscle')
        .tag('kubejs:magic');

    registeOrgan(new Organ('kubejs:magic_spine')
        .addScore('nerves', 1)
        .addTextLines('default', [Text.gray('更为粗壮的魔力传导装置')])
        .addTextLines('default', [Text.gray('也许解释了为什么软体生物没有魔力')])
        .build())
        .texture('kubejs:item/organs/magic/magic_spine')
        .tag('kubejs:magic');

    registeOrgan(new Organ('kubejs:magic_vision')
        .addScore('nerves', -1)
        .addScore('metabolism', -1)
        .addTextLines('default', [Text.gray('你现在能够发现敌人的弱点')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后提高'), Text.yellow(0.1), Text.yellow('咒文伤害倍率')])
        .build())
        .texture('kubejs:item/organs/magic/magic_vision')
        .tag('kubejs:magic')
        .tag('kubejs:active');

    registeOrgan(new Organ('kubejs:color_palette')
        .addScore('speed', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('手持'), Text.gold('大艺术家法杖'), Text.gray('造成法术伤害时。如果法术为'), Text.gold('火焰箭'), Text.gray('、'), Text.green('剧毒箭'), Text.gray('、'), Text.blue('冰锥')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('会额外造成等同于'), Text.gold('当前法力值/30'), Text.gray('的额外伤害')])
        .build())
        .texture('kubejs:item/organs/magic/color_palette')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:damage_only');

    registeOrgan(new Organ('kubejs:red_ink')
        .addScore('strength', -1)
        .addScore('nutrition', 0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('遭受伤害时，'), Text.gold('损失血量*5'), Text.gray('将转换为当前魔法值')])
        .build())
        .texture('kubejs:item/organs/magic/red_ink')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:bear');

    registeOrgan(new Organ('kubejs:bad_ink')
        .addScore('strength', -1)
        .addScore('filtration', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每有一个魔法类型器官，提高'), Text.gold(20), Text.gray('魔法值上限')])
        .build())
        .texture('kubejs:item/organs/magic/bad_ink')
        .tag('itemborders:gold')
        .tag('kubejs:magic')
        .tag('kubejs:active');

    registeOrgan(new Organ('kubejs:blood_moon_wand')
        .addScore('nerves', 1)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后提高'), Text.yellow(0.15), Text.yellow('鲜血咒文伤害倍率')])
        .build())
        .texture('kubejs:item/organs/magic/blood_moon_wand')
        .modifyAttribute('irons_spellbooks:blood_spell_power', 'kubejsBloodSpellPowerWeaponBoost', 0.3, 'addition')
        .tag('itemborders:diamond')
        .tag('kubejs:magic')
        .tag('kubejs:active');

    // 资源系列
    registeOrgan(new Organ('kubejs:ore_lung')
        .addScore('health', -0.5)
        .addScore('nerves', -1)
        .addScore('breath_recovery', 1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每次挖掘石头后，便会积累'), Text.gold('1'), Text.gray('资源点数')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在积累到'), Text.gold('64'), Text.gray('点后，3%概率消耗64点并给予矿物')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('资源点积累效果唯一')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.green('奖励受幸运影响')])
        .build())
        .texture('kubejs:item/organs/resource/ore_lung')
        .tag('kubejs:lung')
        .tag('kubejs:resource')
        .tag('kubejs:break_only');

    registeOrgan(new Organ('kubejs:desire_of_midas')
        .addScore('strength', -1)
        .addScore('breath_recovery', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后增加'), Text.gold('100'), Text.gray('资源点数上限')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当资源点数累积到'), Text.gold('150'), Text.gray('后，2%概率触发'), Text.gold('点石成金')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('触发时，消耗'), Text.gold('100'), Text.gray('资源点数')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('点石成金效果唯一')])
        .build())
        .texture('kubejs:item/organs/resource/desire_of_midas')
        .tag('itemborders:gold')
        .tag('kubejs:resource')
        .tag('kubejs:active')
        .tag('kubejs:break_only');

    registeOrgan(new Organ('kubejs:diamond_bottle')
        .addScore('breath_recovery', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('挖掘时有'), Text.gold('50%'), Text.gray('概率增加资源点'), Text.gold('1'), Text.gray('点')])
        .build())
        .texture('kubejs:item/organs/resource/diamond_bottle')
        .tag('itemborders:diamond')
        .tag('kubejs:resource')
        .tag('kubejs:break');

    registeOrgan(new Organ('kubejs:redstone_furnace')
        .addScore('health', 1.25)
        .addScore('defense', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后增加'), Text.gold('200'), Text.gray('资源点数上限')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('手持'), Text.gold('红石块'), Text.gray('右键以直接获得'), Text.gold('80'), Text.gray('资源点数')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('完全燃烧红石块需要60s')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('特殊效果唯一')])
        .build())
        .texture('kubejs:item/organs/resource/redstone_furnace')
        .tag('kubejs:active')
        .tag('kubejs:heart')
        .tag('kubejs:rclick_only');

    registeOrgan(new Organ('kubejs:silk_for_cutting')
        .addScore('knockback_resistant', -0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('能够精确采集玻璃')])
        .build())
        .texture('kubejs:item/organs/others/silk_for_cutting')
        .tag('kubejs:muscle')
        .tag('kubejs:break_only');

    registeOrgan(new Organ('kubejs:holy_eyeball')
        .addScore('filtration', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后提高'), Text.yellow('5%'), Text.yellow('暴击概率')])
        .build())
        .texture('kubejs:item/organs/others/holy_eyeball')
        .tag('kubejs:muscle')
        .tag('kubejs:active');


    // 都市传说系列
    // 二重身
    registeOrgan(new Organ('kubejs:doppelganger')
        .addScore('health', -1)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray('二重身会吸收走本体的能量')])
        .addTextLines('default', [Text.gray('但又会在生命濒危之际帮助你')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('受到致命伤害时，有低概率会获得伤害吸收Ⅲ效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('概率取决于其他'), Text.gold('都市传说'), Text.gray('器官种类的数量')])
        .build())
        .texture('kubejs:item/organs/legends/doppelganger')
        .tag('kubejs:legends')
        .tag('kubejs:bear_only');

    registeOrgan(new Organ('kubejs:lost_paradise')
        .addScore('health', 4)
        .addScore('strength', 4)
        .addScore('nerves', 2)
        .addScore('speed', -1)
        .addScore('endurance', -1)
        .addTextLines('default', [Text.gray('于是，人类被赶出了伊甸园')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('将会移除所有实体掉落物和宝箱掉落物')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('每次攻击会随机从以下效果中进行选择')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('将本次伤害类型转换为'), Text.gold('无源摔落伤害')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('攻击伤害固定增加'), Text.gold('敌人最大生命3%')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('攻击伤害翻倍')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('自身获得'), Text.gold('生命恢复效果')])
        .build())
        .texture('kubejs:item/organs/legends/lost_paradise')
        .rarity('epic')
        .tag('kubejs:legends')
        .tag('kubejs:damage_only')
        .tag('kubejs:loot_entity_only')
        .tag('kubejs:loot_chest_only')
        .tag('itemborders:diamond');

    registeOrgan(new Organ('kubejs:paradise_regained')
        .addScore('health', -1)
        .addScore('strength', -1)
        .addScore('speed', 1)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray('于是，神带着神启降临了')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('实体掉落物数量将会翻倍')])
        .build())
        .texture('kubejs:item/organs/legends/paradise_regained')
        .rarity('epic')
        .tag('kubejs:legends')
        .tag('kubejs:loot_entity_only')
        .tag('itemborders:diamond');

    // boss遗物器官
    registeOrgan(new Organ('kubejs:relic_metal_plate')
        .addScore('health', 0.25)
        .addScore('nerves', 0.25)
        .addScore('breath_recovery', 0.25)
        .addScore('strength', 0.125)
        .addScore('filtration', 0.25)
        .addScore('detoxification', 0.25)
        .addScore('defense', 0.125)
        .addScore('nutrition', 0.125)
        .addScore('endurance', 0.125)
        .addScore('digestion', 0.125)
        .addScore('metabolism', 0.125)
        .addScore('speed', 0.25)
        .addTextLines('default', [Text.gray('在久远的岁月中，它的器官彼此融合')])
        .addTextLines('default', [Text.gray('最终铸造成为了这块殷红的金属板')])
        .build())
        .texture('kubejs:item/organs/relics/relic_metal_plate')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:love_between_lava_and_ice')
        .addScore('health', 1)
        .addScore('fire_resistant', 1)
        .addScore('detoxification', -5)
        .addTextLines('default', [Text.gray('我们彼此分离，却又恒为一体')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一格'), Text.blue('蓝冰'), Text.gray('，会为你添加额外'), Text.yellow(0.1), Text.aqua('冰系魔法伤害倍率')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('每存在一格'), Text.darkRed('岩浆块'), Text.gray('，会为你添加额外'), Text.yellow(0.1), Text.red('火系魔法伤害倍率')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('一格内存在任意数量即被视作一格')])
        .build())
        .texture('kubejs:item/organs/relics/love_between_lava_and_ice')
        .tag('kubejs:heart')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:leviathan_spine')
        .addScore('nerves', 1.5)
        .addScore('swim_speed', 2)
        .addScore('breath_recovery', 1)
        .addTextLines('default', [Text.gray('游龙于水')])
        .build())
        .texture('kubejs:item/organs/relics/leviathan_spine')
        .tag('kubejs:spine')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:leviathan_rib')
        .addScore('defense', 1.75)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后会额外提供'), Text.gold(2), Text.gray('护甲韧性')])
        .build())
        .texture('kubejs:item/organs/relics/leviathan_rib')
        .tag('kubejs:rib')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:flower_heart')
        .addScore('health', 1)
        .addScore('photosynthesis', 4)
        .addScore('metabolism', 4)
        .addTextLines('default', [Text.gray('此刻，繁花重照田野')])
        .build())
        .texture('kubejs:item/organs/relics/flower_heart')
        .tag('kubejs:heart')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:aesegull_rib_left')
        .addScore('defense', 1.75)
        .addTextLines('default', [Text.gray('它在寻找另一名同伴')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('若在左右对称位置放置有'), Text.gold('立场欺诈者的右肋'), Text.gray('，则增加'), Text.gold(3), Text.gray('护甲值')])
        .build())
        .texture('kubejs:item/organs/relics/aesegull_rib_left')
        .tag('kubejs:rib')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:aesegull_rib_right')
        .addScore('defense', 1.75)
        .addTextLines('default', [Text.gray('它在寻找另一名同伴')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('若在左右对称位置放置有'), Text.gold('立场欺诈者的左肋'), Text.gray('，则增加'), Text.gold(3), Text.gray('盔甲韧性')])
        .build())
        .texture('kubejs:item/organs/relics/aesegull_rib_right')
        .tag('kubejs:rib')
        .tag('kubejs:food')
        .tag('kubejs:active')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:forbidden_fruit')
        .addScore('detoxification', 1.75)
        .addScore('health', 0.25)
        .addTextLines('default', [Text.gray('根植在身体里的禁果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('能够扭转'), Text.red('不洁圣杯'), Text.gray('的负面效果')])
        .build())
        .texture('kubejs:item/organs/relics/forbidden_fruit')
        .tag('kubejs:liver')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:executioner_blade_pieces')
        .addScore('strength', 1.75)
        .addScore('health', -0.5)
        .addTextLines('default', [Text.gray('铸剑为骨')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('使用'), Text.red('行刑者剑刃'), Text.gray('的Tetra武器时，攻击会造成'), Text.gold('行刑Ⅲ'), Text.gray('效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('当生物持有行刑效果时，所受武器伤害降低，但概率增加相当于基于敌人已损失生命值的额外伤害')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/relics/executioner_blade_pieces')
        .tag('kubejs:muscle')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:heavy_hammer_muscle')
        .addScore('strength', 1.5)
        .addScore('swim_speed', -1)
        .addScore('fire_resistant', -1)
        .addTextLines('default', [Text.gray('重锤. . .准备中')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('攻击时有'), Text.gold('3%*幸运等级(最大30%)'), Text.gray('的概率造成2s眩晕')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/relics/heavy_hammer_muscle')
        .tag('kubejs:muscle')
        .tag('kubejs:machine')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:redstone_chipset')
        .addScore('nerves', 1.5)
        .addScore('fire_resistant', -1)
        .addTextLines('default', [Text.gray('它能够看到弱点，你也能。')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后每个机械器官为你提供'), Text.gold('2%(最大20%)'), Text.gray('的暴击概率')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后增加'), Text.gold('30%'), Text.gray('暴击伤害')])
        .build())
        .texture('kubejs:item/organs/relics/redstone_chipset')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')
        .tag('kubejs:relics');

    registeOrgan(new Organ('kubejs:demon_eyeball')
        .addScore('luck', -1)
        .addScore('fire_resistant', 1)
        .addTextLines('default', [Text.gray('恶魔喜欢你的视线')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('根据视角决定伤害，视角越低伤害越高。')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('伤害倍率浮动在'), Text.gold('0% ~ 200%'), Text.gray('之间')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('此效果唯一')])
        .build())
        .texture('kubejs:item/organs/relics/demon_eyeball')
        .tag('kubejs:damage_only')
        .tag('kubejs:relics');

    // 碎片
    registeOrgan(new Organ('kubejs:nether_star_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你提供'), Text.gold('10%'), Text.gray('暴击概率')])
        .build())
        .texture('kubejs:item/organs/shard/nether_star_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:sloth_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你提供'), Text.gold('80%'), Text.gray('击退抗性')])
        .build())
        .texture('kubejs:item/organs/shard/sloth_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:wrath_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你增加'), Text.gold('300%'), Text.gray('暴击伤害')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('但会降低'), Text.gold('80%'), Text.gray('暴击概率')])
        .build())
        .texture('kubejs:item/organs/shard/wrath_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:envy_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你增加'), Text.gold('100%'), Text.gray('暴击伤害')])
        .build())
        .texture('kubejs:item/organs/shard/envy_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:gluttony_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后小幅增加消化效率')])
        .build())
        .texture('kubejs:item/organs/shard/gluttony_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:greed_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('击杀任意生物时会为你额外掉落一枚铜币')])
        .build())
        .texture('kubejs:item/organs/shard/greed_shard')
        .tag('itemborders:gold')
        .tag('kubejs:loot_entity_only');

    registeOrgan(new Organ('kubejs:lust_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你增加'), Text.gold('100'), Text.gray('最大魔力值')])
        .build())
        .texture('kubejs:item/organs/shard/lust_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:pride_shard')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你增加'), Text.gold('30%'), Text.gray('召唤伤害倍率')])
        .build())
        .texture('kubejs:item/organs/shard/pride_shard')
        .tag('itemborders:gold')
        .tag('kubejs:active_only');


    // 位置器官
    registeOrgan(new Organ('kubejs:stomach_tumor')
        .addScore('endurance', 0.5)
        .addScore('digestion', 1)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('如果在周围存在最少'), Text.gold(3), Text.gray('个胃瘤，会为你提供额外的'), Text.gold(6), Text.gray('生命值上限')])
        .build())
        .texture('kubejs:item/organs/others/stomach_tumor')
        .tag('kubejs:stomach')
        .tag('kubejs:active');


    // 杂项
    registeOrgan(new Organ('kubejs:telescopic_arm')
        .addScore('speed', -0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你提供额外'), Text.gold(1), Text.gray('触及距离')])
        .build())
        .texture('kubejs:item/organs/others/telescopic_arm')
        .tag('itemborders:iron')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')
        .tag('kubejs:evolution');

    registeOrgan(new Organ('kubejs:telescopic_tool_arm')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你提供额外'), Text.gold(2), Text.gray('触及距离')])
        .build())
        .texture('kubejs:item/organs/others/telescopic_arm')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:telescopic_attack_arm')
        .addScore('fire_resistant', 0.5)
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活后为你提供额外'), Text.gold(1), Text.gray('攻击距离')])
        .build())
        .texture('kubejs:item/organs/others/telescopic_attack_arm')
        .tag('itemborders:gold')
        .tag('kubejs:machine')
        .tag('kubejs:active_only');

    registeOrgan(new Organ('kubejs:lamellar_armor_piece')
        .addScore('defense', 1.5)
        .addScore('speed', -0.25)
        .build())
        .texture('kubejs:item/organs/machine/lamellar_armor_piece')
        .tag('kubejs:machine');

    registeOrgan(new Organ('kubejs:chain_armor_piece')
        .addScore('defense', 1.25)
        .addScore('speed', -0.125)
        .build())
        .texture('kubejs:item/organs/machine/chain_armor_piece')
        .tag('kubejs:machine');

    registeOrgan(new Organ('kubejs:long_lasting_pill')
        .addScore('strength', -1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在关闭器官时会自动触发激活效果')])
        .build())
        .texture('kubejs:item/organs/others/long_lasting_pill')
        .tag('itemborders:iron')
        .tag('kubejs:evolution');

    registeOrgan(new Organ('kubejs:long_lasting_pill_gold')
        .addScore('speed', 0.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在关闭器官时会自动触发激活效果')])
        .build())
        .texture('kubejs:item/organs/others/long_lasting_pill')
        .tag('itemborders:gold');

    registeOrgan(new Organ('kubejs:d8')
        .addScore('luck', 1)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('在搜刮野外箱子时，概率可以得到随机属性的器官')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.green('幸运越高，属性范围越大')])
        .build())
        .texture('kubejs:item/organs/others/d8')
        .tag('itemborders:diamond')
        .tag('kubejs:loot_chest_only');

    // 食物系列
    registeOrgan(new Organ('kubejs:hamimelon_organ')
        .addScore('health', -0.5)
        .addScore('endurance', 1.5)
        .addScore('luck', 1)
        .addTextLines('default', [Text.gray('被整齐切下的哈密瓜')])
        .addTextLines('default', [Text.gray('它是怎么来到这里的？')])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('周围每存在一个'), Text.of('食物').color('#f1b500'), Text.gray('器官，会额外增加'), Text.gold(2), Text.gray('生命值上限')])
        .build())
        .texture('kubejs:item/organs/food/hamimelon_organ')
        .tag('itemborders:gold')
        .tag('kubejs:food')
        .tag('kubejs:active');

    registeOrgan(new Organ('kubejs:watermelon_organ')
        .addScore('health', 0.5)
        .addScore('speed', 0.5)
        .addTextLines('default', [Text.gray('被整齐切下的西瓜')])
        .build())
        .texture('kubejs:item/organs/food/watermelon_organ')
        .tag('itemborders:iron')
        .tag('kubejs:food');

    registeOrgan(new Organ('kubejs:lucky_cookie_organ')
        .addScore('luck', 3)
        .addTextLines('default', [Text.gray('今日运势为:大吉')])
        .build())
        .texture('kubejs:item/organs/food/lucky_cookie')
        .tag('itemborders:gold')
        .tag('kubejs:food');

    registeOrgan(new Organ('kubejs:cream_cookie_heart')
        .addScore('health', 1.5)
        .addScore('defense', -1)
        .addScore('luck', 1.5)
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('食用曲奇时会获得'), Text.gold('3600s力量Ⅰ'), Text.gray('效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray('食用奶油时会获得'), Text.gold('3600s速度Ⅰ'), Text.gray('效果')])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red('效果互斥')])
        .build())
        .texture('kubejs:item/organs/food/cream_cookie_heart')
        .tag('itemborders:gold')
        .tag('kubejs:food')
        .tag('kubejs:eat_effect_only');

    // alex
    registeOrgan(new Organ('kubejs:warped_heart').addScore('health', 2.0).addScore('nerves', -0.75).build()).texture('kubejs:item/organs/alex/warped_heart').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:warped_spine').addScore('nerves', 1.25).build()).texture('kubejs:item/organs/alex/warped_spine').tag('kubejs:spine')

    registeOrgan(new Organ('kubejs:feather').addScore('speed', 1).addScore('defense', -1).build()).texture('kubejs:item/organs/alex/feather')
    registeOrgan(new Organ('kubejs:mollusk_muscle').addScore('strength', 1.25).addScore('speed', 0.375).build()).texture('kubejs:item/organs/alex/mollusk_muscle').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:giant_squid_whisker').addScore('strength', 0.5).addScore('speed', 1.25).build()).texture('kubejs:item/organs/alex/giant_squid_whisker').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:mimic_octopus_skin').addScore('defense', 1.25).addScore('speed', 0.25).build()).texture('kubejs:item/organs/alex/mimic_octopus_skin')
    registeOrgan(new Organ('kubejs:fish_spine').addScore('nerves', 1).build()).texture('kubejs:item/organs/alex/fish_spine').tag('kubejs:spine')
    registeOrgan(new Organ('kubejs:fish_bone').addScore('defense', 0.75).addScore('speed', 0.75).build()).texture('kubejs:item/organs/alex/fish_bone').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:fish_intestine').addScore('digestion', 1.25).build()).texture('kubejs:item/organs/alex/fish_intestines').tag('kubejs:intestine')

    registeOrgan(new Organ('kubejs:nether_rib').addScore('defense', 1.25).addScore('fire_resistant', 0.5).build()).texture('kubejs:item/organs/nether/nether_rib').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:nether_muscle').addScore('strength', 1.25).addScore('fire_resistant', 0.5).build()).texture('kubejs:item/organs/nether/nether_muscle').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:nether_heart').addScore('health', 0.75).addScore('fire_resistant', 1).build()).texture('kubejs:item/organs/nether/nether_heart').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:nether_spine').addScore('nerves', 1.25).build()).texture('kubejs:item/organs/nether/nether_spine').tag('kubejs:spine')
    registeOrgan(new Organ('kubejs:crimson_mosquito_mouthparts').addScore('strength', 0.5).addScore('defense', -1).build()).texture('kubejs:item/organs/nether/crimson_mosquito_mouthparts')


    // 模板器官
    registeOrgan(new Organ('kubejs:lung_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).build()).texture('kubejs:item/organs/template/lung_template').tag('kubejs:lung')
    registeOrgan(new Organ('kubejs:muscle_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('strength', 0.75).addScore('speed', 0.75).build()).texture('kubejs:item/organs/template/muscle_template').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:heart_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('health', 0.75).build()).texture('kubejs:item/organs/template/heart_template').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:intestine_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('nutrition', 0.75).build()).texture('kubejs:item/organs/template/intestine_template').tag('kubejs:intestine')
    registeOrgan(new Organ('kubejs:rib_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('defense', 0.75).build()).texture('kubejs:item/organs/template/rib_template').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:spine_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('defense', 0.375).addScore('nerves', 0.75).build()).texture('kubejs:item/organs/template/spine_template').tag('kubejs:spine')
    registeOrgan(new Organ('kubejs:spleen_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('metabolism', 0.75).build()).texture('kubejs:item/organs/template/spleen_template').tag('kubejs:spleen')
    registeOrgan(new Organ('kubejs:stomach_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('digestion', 0.75).build()).texture('kubejs:item/organs/template/stomach_template').tag('kubejs:stomach')
    registeOrgan(new Organ('kubejs:kidney_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('filtration', 0.75).build()).texture('kubejs:item/organs/template/kidney_template').tag('kubejs:kidney')
    registeOrgan(new Organ('kubejs:liver_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('detoxification', 0.75).build()).texture('kubejs:item/organs/template/liver_template').tag('kubejs:liver')
    registeOrgan(new Organ('kubejs:appendix_template').addTextLines('default', [Text.gray('从无名肉块中取出的器官')]).addScore('luck', 0.75).build()).texture('kubejs:item/organs/template/appendix_template').tag('kubejs:appendix')

    // 基本器官
    registeOrgan(new Organ('kubejs:muscle_iron').addScore('strength', 1.25).addScore('speed', 1.25).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:spleen_iron').addScore('metabolism', 1.25).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spleen')
    registeOrgan(new Organ('kubejs:appendix_iron').addScore('luck', 1.25).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:appendix')
    registeOrgan(new Organ('kubejs:kidney_iron').addScore('filtration', 1.25).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:kidney')
    registeOrgan(new Organ('kubejs:liver_iron').addScore('detoxification', 1.25).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:liver')
    registeOrgan(new Organ('kubejs:rib_iron').addScore('defense', 1.25).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:intestine_iron').addScore('nutrition', 1.25).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:intestine')
    registeOrgan(new Organ('kubejs:lung_iron').addScore('breath_recovery', 1.25).addScore('breath_capacity', 1.25).addScore('endurance', 1.25).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:lung')
    registeOrgan(new Organ('kubejs:stomach_iron').addScore('digestion', 1.25).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:stomach')
    registeOrgan(new Organ('kubejs:heart_iron').addScore('health', 1.25).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:spine_iron').addScore('defense', 0.625).addScore('nerves', 1.25).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spine')
    registeOrgan(new Organ('kubejs:muscle_gold').addScore('strength', 1.5).addScore('speed', 1.5).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:spleen_gold').addScore('metabolism', 1.5).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:spleen')
    registeOrgan(new Organ('kubejs:appendix_gold').addScore('luck', 1.5).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:appendix')
    registeOrgan(new Organ('kubejs:kidney_gold').addScore('filtration', 1.5).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:kidney')
    registeOrgan(new Organ('kubejs:liver_gold').addScore('detoxification', 1.5).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:liver')
    registeOrgan(new Organ('kubejs:rib_gold').addScore('defense', 1.5).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:intestine_gold').addScore('nutrition', 1.5).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:intestine')
    registeOrgan(new Organ('kubejs:lung_gold').addScore('breath_recovery', 1.5).addScore('breath_capacity', 1.5).addScore('endurance', 1.5).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:lung')
    registeOrgan(new Organ('kubejs:stomach_gold').addScore('digestion', 1.5).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:stomach')
    registeOrgan(new Organ('kubejs:heart_gold').addScore('health', 1.5).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:spine_gold').addScore('defense', 0.75).addScore('nerves', 1.5).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:gold').tag('kubejs:evolution').tag('kubejs:spine')
    registeOrgan(new Organ('kubejs:muscle_diamond').addScore('strength', 2).addScore('speed', 2).build()).texture('kubejs:item/organs/common/muscle').tag('itemborders:diamond').tag('kubejs:muscle')
    registeOrgan(new Organ('kubejs:spleen_diamond').addScore('metabolism', 2).build()).texture('kubejs:item/organs/common/spleen').tag('itemborders:diamond').tag('kubejs:spleen')
    registeOrgan(new Organ('kubejs:appendix_diamond').addScore('luck', 2).build()).texture('kubejs:item/organs/common/appendix').tag('itemborders:diamond').tag('kubejs:appendix')
    registeOrgan(new Organ('kubejs:kidney_diamond').addScore('filtration', 2).build()).texture('kubejs:item/organs/common/kidney').tag('itemborders:diamond').tag('kubejs:kidney')
    registeOrgan(new Organ('kubejs:liver_diamond').addScore('detoxification', 2).build()).texture('kubejs:item/organs/common/liver').tag('itemborders:diamond').tag('kubejs:liver')
    registeOrgan(new Organ('kubejs:rib_diamond').addScore('defense', 2).build()).texture('kubejs:item/organs/common/rib').tag('itemborders:diamond').tag('kubejs:rib')
    registeOrgan(new Organ('kubejs:intestine_diamond').addScore('nutrition', 2).build()).texture('kubejs:item/organs/common/intestine').tag('itemborders:diamond').tag('kubejs:intestine')
    registeOrgan(new Organ('kubejs:lung_diamond').addScore('breath_recovery', 2).addScore('breath_capacity', 2).addScore('endurance', 2).build()).texture('kubejs:item/organs/common/lung').tag('itemborders:diamond').tag('kubejs:lung')
    registeOrgan(new Organ('kubejs:stomach_diamond').addScore('digestion', 2).build()).texture('kubejs:item/organs/common/stomach').tag('itemborders:diamond').tag('kubejs:stomach')
    registeOrgan(new Organ('kubejs:heart_diamond').addScore('health', 2).build()).texture('kubejs:item/organs/common/heart').tag('itemborders:diamond').tag('kubejs:heart')
    registeOrgan(new Organ('kubejs:spine_diamond').addScore('defense', 1).addScore('nerves', 2).build()).texture('kubejs:item/organs/common/spine').tag('itemborders:diamond').tag('kubejs:spine')

    // 模板器官
    registeOrgan(new Organ('kubejs:huge_lung').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('breath_recovery', 2.5).addScore('breath_capacity', 2.5).addScore('endurance', 2.5).build()).texture('kubejs:item/organs/template/lung_template').tag('kubejs:lung').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_muscle').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('strength', 2.5).addScore('speed', 2.5).build()).texture('kubejs:item/organs/template/muscle_template').tag('kubejs:muscle').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_heart').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低10生命值上限')]).addScore('health', 2.5).build()).texture('kubejs:item/organs/template/heart_template').tag('kubejs:heart').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_intestine').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('nutrition', 2.5).build()).texture('kubejs:item/organs/template/intestine_template').tag('kubejs:intestine').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_rib').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('defense', 2.5).build()).texture('kubejs:item/organs/template/rib_template').tag('kubejs:rib').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_spine').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('defense', 1.25).addScore('nerves', 2.5).build()).texture('kubejs:item/organs/template/spine_template').tag('kubejs:spine').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_spleen').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('metabolism', 2.5).build()).texture('kubejs:item/organs/template/spleen_template').tag('kubejs:spleen').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_stomach').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('digestion', 2.5).build()).texture('kubejs:item/organs/template/stomach_template').tag('kubejs:stomach').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_kidney').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('filtration', 2.5).build()).texture('kubejs:item/organs/template/kidney_template').tag('kubejs:kidney').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_liver').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('detoxification', 2.5).build()).texture('kubejs:item/organs/template/liver_template').tag('kubejs:liver').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
    registeOrgan(new Organ('kubejs:huge_appendix').addTextLines('ctrl', [LEADING_SYMBOL, Text.gray('激活时如果不能形成2x2的相同器官块，会降低5生命值上限')]).addScore('luck', 2.5).build()).texture('kubejs:item/organs/template/appendix_template').tag('kubejs:appendix').tag('kubejs:huge').tag('itemborders:gold').tag('kubejs:active')
});