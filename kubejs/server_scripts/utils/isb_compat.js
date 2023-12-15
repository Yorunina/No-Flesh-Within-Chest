const ISBAttribute = Java.loadClass("io.redspace.ironsspellbooks.api.registry.AttributeRegistry");
const MagicData = Java.loadClass("io.redspace.ironsspellbooks.api.magic.MagicData");
const ISB_MAX_MANA = ISBAttribute.MAX_MANA
const ISB_MANA_REGEN = ISBAttribute.MANA_REGEN

function getPlayerMagicData(player) {
    return MagicData.getPlayerMagicData(player)
}

