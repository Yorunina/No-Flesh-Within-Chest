const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData");
const $SpellRegistry= Java.loadClass("io.redspace.ironsspellbooks.api.registry.SpellRegistry")
const $CastSource= Java.loadClass("io.redspace.ironsspellbooks.api.spells.CastSource")

function getPlayerMagicData(player) {
    return $MagicData.getPlayerMagicData(player)
}

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}