const $AttributeEntry = Java.loadClass('dev.xkmc.l2library.base.tabs.contents.AttributeEntry')
const $AttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

StartupEvents.postInit(event => {
    $AttributeEntry.add($AttributeRegistry.MAX_MANA, false, 1500);
    $AttributeEntry.add($AttributeRegistry.MANA_REGEN, true, 1600);

    $AttributeEntry.add($AttributeRegistry.SPELL_POWER, true, 1700);
    $AttributeEntry.add($AttributeRegistry.SPELL_RESIST, true, 1800);
    $AttributeEntry.add($AttributeRegistry.COOLDOWN_REDUCTION, true, 1900);
    // todo 现仍未支持翻页，后续用数据包替代
    // $AttributeEntry.add($AttributeRegistry.SUMMON_DAMAGE, true, 11000);
    
    // $AttributeEntry.add($AttributeRegistry.FIRE_MAGIC_RESIST, true, 12000);
    // $AttributeEntry.add($AttributeRegistry.ICE_MAGIC_RESIST, true, 13000);
    // $AttributeEntry.add($AttributeRegistry.HOLY_MAGIC_RESIST, true, 14000);
    // $AttributeEntry.add($AttributeRegistry.BLOOD_MAGIC_RESIST, true, 15000);
    // $AttributeEntry.add($AttributeRegistry.ENDER_MAGIC_RESIST, true, 16000);
    // $AttributeEntry.add($AttributeRegistry.EVOCATION_MAGIC_RESIST, true, 17000);
    // $AttributeEntry.add($AttributeRegistry.NATURE_MAGIC_RESIST, true, 18000);
    // $AttributeEntry.add($AttributeRegistry.LIGHTNING_MAGIC_RESIST, true, 19000);


    // $AttributeEntry.add($AttributeRegistry.FIRE_SPELL_POWER, true, 12500);
    // $AttributeEntry.add($AttributeRegistry.ICE_SPELL_POWER, true, 13500);
    // $AttributeEntry.add($AttributeRegistry.HOLY_SPELL_POWER, true, 14500);
    // $AttributeEntry.add($AttributeRegistry.BLOOD_SPELL_POWER, true, 15500);
    // $AttributeEntry.add($AttributeRegistry.ENDER_SPELL_POWER, false, 16500);
    // $AttributeEntry.add($AttributeRegistry.EVOCATION_SPELL_POWER, true, 17500);
    // $AttributeEntry.add($AttributeRegistry.NATURE_SPELL_POWER, true, 18500);
    // $AttributeEntry.add($AttributeRegistry.LIGHTNING_SPELL_POWER, true, 19500);
})