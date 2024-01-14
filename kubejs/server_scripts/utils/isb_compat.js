const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData");

function getPlayerMagicData(player) {
    return $MagicData.getPlayerMagicData(player)
}

function randomGet(list) {
    return list[Math.floor(Math.random() * list.length)];
}