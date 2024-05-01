const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry")
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData")
const $SpellRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry")
const $CastSource = Java.loadClass("io.redspace.ironsspellbooks.api.spells.CastSource")
const $BloodNeedle = Java.loadClass("io.redspace.ironsspellbooks.entity.spells.blood_needle.BloodNeedle")

function getPlayerMagicData(player) {
    return $MagicData.getPlayerMagicData(player)
}

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function overLimitSpellCast(resourceLocation, amplifier, player, consume) {
    let itemMap = getPlayerChestCavityItemMap(player)
    let typeMap = getPlayerChestCavityTypeMap(player)
    if (itemMap.has('kubejs:plastic_heart') && typeMap.has('kubejs:magic')) {
        amplifier = amplifier + typeMap.get('kubejs:magic').length
    }
    $SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](resourceLocation).attemptInitiateCast(Item.of('air'), amplifier, player.level, player, $CastSource.NONE, consume, "main_hand")
}