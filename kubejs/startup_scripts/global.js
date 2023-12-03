
global.ORGAN_LIST = [];

global.OPERATION_ADD = 'addition'
global.OPERATION_MUTI_TOTAL = 'multiply_total'
global.OPERATION_MUTI_BASE = 'multiply_base'

global.HEALTH_UP = { key: 'minecraft:generic.max_health', name: 'kubejsMaxHealth', operation: 'addition'}
global.ATTACK_UP = {key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamage', operation: 'addition'}

global.ATTRIBUTE_MAP = {
    'kubejsAttackDamage': global.ATTACK_UP,
    'kubejsMaxHealth': global.HEALTH_UP
}

global.TYPE_MAP = {
    'kubejs:appendix': Text.aqua('阑尾'),
    'kubejs:heart': Text.aqua('心脏'),
    'kubejs:intestine': Text.aqua('肠'),
    'kubejs:kidney': Text.aqua('肾脏'),
    'kubejs:liver': Text.aqua('肝脏'),
    'kubejs:lung': Text.aqua('肺'),
    'kubejs:muscle': Text.aqua('肌肉'),
    'kubejs:spleen': Text.aqua('脾'),
    'kubejs:pancreas': Text.aqua('胰'),
    'kubejs:stomach': Text.aqua('胃'),
    'kubejs:infinity': Text.lightPurple('永恒'),
    'kubejs:active': Text.gold('可激活'),
    'kubejs:machine': Text.gray('机械'),
    'kubejs:magic': Text.of('魔法').color('#00eded'),
    'kubejs:candy': Text.of('糖果').color('#e8a0dc'),
    'kubejs:rose': Text.darkRed('玫瑰'),
    'kubejs:resource': Text.gold('资源')
}