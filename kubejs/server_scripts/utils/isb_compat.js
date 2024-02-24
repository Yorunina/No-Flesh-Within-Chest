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

function getShuffledList(list) {
    //shuffle
    for(let i = list.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

const clamp = (min, value, max) => Math.max(Math.min(value, max), min)