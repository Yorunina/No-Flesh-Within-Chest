
global.ORGAN_LIST = [];

global.OPERATION_ADD = 'addition'
global.OPERATION_MUTI_TOTAL = 'multiply_total'
global.OPERATION_MUTI_BASE = 'multiply_base'

global.HEALTH_UP = { key: 'minecraft:generic.max_health', name: 'kubejsMaxHealth', operation: 'addition' }
global.ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamage', operation: 'addition' }
global.TEMP_ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsTempAttackDamage', operation: 'addition' }
global.COOLDOWN_REDUCTION = { key: 'irons_spellbooks:cooldown_reduction', name: 'kubejsCooldownReduction', operation: 'addition' }
global.SPELL_POWER = { key: 'irons_spellbooks:spell_power', name: 'kubejsSpellPower', operation: 'addition' }
global.ICE_SPELL_POWER = { key: 'irons_spellbooks:ice_spell_power', name: 'kubejsIceSpellPower', operation: 'addition' }
global.FIRE_SPELL_POWER = { key: 'irons_spellbooks:fire_spell_power', name: 'kubejsFireSpellPower', operation: 'addition' }


global.ATTRIBUTE_MAP = {
    'kubejsAttackDamage': global.ATTACK_UP,
    'kubejsMaxHealth': global.HEALTH_UP,
    'kubejsTempAttackDamage': global.TEMP_ATTACK_UP,
    'kubejsCooldownReduction': global.COOLDOWN_REDUCTION,
    'kubejsSpellPower': global.SPELL_POWER,
    'kubejsIceSpellPower': global.ICE_SPELL_POWER,
    'kubejsFireSpellPower': global.FIRE_SPELL_POWER,
}

global.TYPE_MAP = {
    'kubejs:appendix': Text.aqua('阑尾'),
    'kubejs:heart': Text.aqua('心脏'),
    'kubejs:intestine': Text.aqua('肠'),
    'kubejs:kidney': Text.aqua('肾脏'),
    'kubejs:liver': Text.aqua('肝脏'),
    'kubejs:lung': Text.aqua('肺'),
    'kubejs:muscle': Text.aqua('肌肉'),
    'kubejs:rib': Text.gray('肋骨'),
    'kubejs:spine': Text.of('肌肉').color('#cff9ff'),
    'kubejs:spleen': Text.aqua('脾'),
    'kubejs:pancreas': Text.aqua('胰'),
    'kubejs:stomach': Text.aqua('胃'),
    'kubejs:infinity': Text.lightPurple('永恒'),
    'kubejs:active': Text.gold('可激活'),
    'kubejs:machine': Text.gray('机械'),
    'kubejs:magic': Text.of('魔法').color('#00eded'),
    'kubejs:candy': Text.of('糖果').color('#e8a0dc'),
    'kubejs:rose': Text.darkRed('玫瑰'),
    'kubejs:resource': Text.gold('资源'),
    'kubejs:revolution': Text.of('革命').color('#deaa00'),
    'kubejs:relics': Text.of('遗物').color('#ffe100'),
    'kubejs:legends': Text.of('传说').color('#d6e5ff'),
    'kubejs:alex':Text.of('Alex生物')
}


global.SCORE_MAP = {
    'chestcavity:filtration': '血液过滤效率',
    'chestcavity:breath_recovery': '呼吸效率',
    'chestcavity:nutrition': '营养获取效率',
    'chestcavity:nerves': '神经效率',
    'chestcavity:strength': '力量',
    'chestcavity:health': '健康',
    'chestcavity:breath_capacity': '肺活量',
    'chestcavity:detoxification': '解毒效率',
    'chestcavity:speed': '速度',
    'chestcavity:endurance': '耐力',
    'chestcavity:luck': '幸运',
    'chestcavity:': '防御',
    'chestcavity:digestion': '消化效率',
    'chestcavity:metabolism': '新陈代谢效率',
    'chestcavity:fire_resistant': '火焰抗性',
    'chestcavity:buoyant': '漂浮',
    'chestcavity:glowing': '发光',
    'chestcavity:knockback_resistant': '击退抗性',
    'chestcavity:water_breath': '水下呼吸',
    'chestcavity:explosive': '爆炸',
    'chestcavity:pyromancy': '呕火',
    'chestcavity:hydroallergenic': '水过敏',
    'chestcavity:photosynthesis': '光合',
    'chestcavity:ghastly': '可怖',
    'chestcavity:withered': '恶魂化',
    'chestcavity:dragon_bombs': '龙息炸弹',
    'chestcavity:buff_purging': '效果净化',
    'chestcavity:herbivorous_digestion': '草食消化',
    'chestcavity:herbivorous_nutrition': '草食营养',
    'chestcavity:carnivorous_digestion': '肉食消化',
    'chestcavity:carnivorous_nutrition': '肉食营养',
    'chestcavity:swim_speed': '游泳速度',
    'chestcavity:launching': '发射',
    'chestcavity:furnace_powered': '熔炉之力',
    'chestcavity:iron_repair': '铁修复',
    'chestcavity:crystalsynthesis': '结晶',
    'chestcavity:rot_digestion': '腐食消化',
    'chestcavity:forceful_spit': '强力口水',
    'chestcavity:silk': '产丝',
    'chestcavity:venomous': '毒液分泌',
    'chestcavity:leaping': '跳跃力',
    'chestcavity:hydrophobia': '恐水',
    'chestcavity:dragon_breath': '龙息',
    'chestcavity:creepy': '怪异',
    'chestcavity:shulker_bullets': '子弹', 
    'chestcavity:grazing': '放牧', 
    'chestcavity:arrow_dodging': '箭矢闪避', 
    'chestcavity:impact_resistant': '冲击抗性', 
    'chestcavity:rotgut': '嗜腐', 
}


