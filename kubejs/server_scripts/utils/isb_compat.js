// priority: 10
const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry")
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData")
const $SpellRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry")
const $CastSource = Java.loadClass("io.redspace.ironsspellbooks.api.spells.CastSource")
const $BloodNeedle = Java.loadClass("io.redspace.ironsspellbooks.entity.spells.blood_needle.BloodNeedle")

/**
 * 获取玩家魔法信息
 * @param {Internal.ServerPlayer} player 
 * @returns {Internal.MagicData}
 */
function getPlayerMagicData(player) {
    return $MagicData.getPlayerMagicData(player)
}

/**
 * 随机获取列表元素
 * @param {Array} list 
 * @returns 
 */
function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * 处理超限施法逻辑
 * @param {Special.Spells} spell 
 * @param {Number} amplifier 
 * @param {Internal.ServerPlayer} player 
 * @param {Boolean} consume 
 */
function overLimitSpellCast(spell, amplifier, player, consume) {
    let typeMap = getPlayerChestCavityTypeMap(player)
    let onlySet = new Set()
    if (typeMap.has('kubejs:overmagic_only')) {
        typeMap.get('kubejs:overmagic_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                amplifier = amplifier + organOverLimitMagicOnlyStrategies[organ.id](player, organ)
            }
        })
    }
    if (typeMap.has('kubejs:overmagic')) {
        typeMap.get('kubejs:overmagic').forEach(organ => {
            amplifier = amplifier + organOverLimitMagicStrategies[organ.id](player, organ)
        })
    }
    $SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](spell).attemptInitiateCast(Item.of('air'), amplifier, player.level, player, $CastSource.NONE, consume, "main_hand")
}

/**
 * 超限施法等级策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ):Float>}
 */
const organOverLimitMagicStrategies = {

};
/**
 * 唯一超限施法等级策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ):Float>}
 */
const organOverLimitMagicOnlyStrategies = {
    'kubejs:plastic_heart': function (player, organ) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        if (typeMap.has('kubejs:magic')) {
            amplifier = typeMap.get('kubejs:magic').length
        }
        return amplifier;
    },
};
