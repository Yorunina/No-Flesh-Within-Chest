const $AttributeRegistry = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
const $MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData");

function getPlayerMagicData(player) {
    return $MagicData.getPlayerMagicData(player)
}

function getShuffledList(list) {
    //shuffle
    for(let i = list.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}
