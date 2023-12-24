LootJS.modifiers(event => {
    function addBossLoot(entity) {
        return event.addEntityLootModifier(entity)
            .addAlternativesLoot(
                LootEntry.of('nameless_trinkets:mysterious_trinket').when((c) => c.randomChance(0.8)),
            )
            .addAlternativesLoot(
                LootEntry.of('simplehats:hatbag_common').when((c) => c.randomChance(0.3)),
                LootEntry.of('simplehats:hatbag_uncommon').when((c) => c.randomChance(0.3)),
                LootEntry.of('simplehats:hatbag_rare').when((c) => c.randomChance(0.3)),
                LootEntry.of('simplehats:hatbag_epic').when((c) => c.randomChance(0.2)),
                LootEntry.of('simplehats:hatbag_summer').when((c) => c.randomChance(0.2)),
                LootEntry.of('simplehats:hatbag_easter').when((c) => c.randomChance(0.2)),
                LootEntry.of('simplehats:hatbag_festive').when((c) => c.randomChance(0.2)),
                LootEntry.of('simplehats:hatbag_halloween').when((c) => c.randomChance(0.2)),
            )
    }
    event.addEntityLootModifier('bosses_of_mass_destruction:void_blossom')
        .addLoot('kubejs:secret_of_bloom');

    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('@simplehats');

    addBossLoot('somebosses:aesegull')
    addBossLoot('somebosses:prismarine_watcher')
    addBossLoot('somebosses:froverlord')
    addBossLoot('somebosses:volcanium')
    addBossLoot('somebosses:merciless_assasin')
    addBossLoot('somebosses:dark_mask')
    addBossLoot('somebosses:knight_garent')
    addBossLoot('somebosses:vulcan')

    addBossLoot('somebosses:ancient_wizard')
        .addLoot(LootEntry.of('kubejs:candy_pancreas').when((c) => c.randomChance(0.2)));

    addBossLoot('somebosses:man_of_water')
    addBossLoot('somebosses:flaming_berserker')
    addBossLoot('somebosses:electric_head')
    addBossLoot('somebosses:frost_magma')
    addBossLoot('somebosses:stone_guard')
    addBossLoot('somebosses:crimson_vampire')
    addBossLoot('somebosses:skeleton_demon')
    addBossLoot('somebosses:mono_eyed_skeleton')
    addBossLoot('somebosses:hand_head')
    addBossLoot('somebosses:ender_ordnance')
    addBossLoot('somebosses:nameless_one')
    addBossLoot('somebosses:sand_giant')
    addBossLoot('cataclysm:netherite_monstrosity')
    addBossLoot('cataclysm:ender_guardian')
    addBossLoot('cataclysm:ignis')
    addBossLoot('cataclysm:the_harbinger')
    addBossLoot('cataclysm:the_leviathan')
    addBossLoot('bosses_of_mass_destruction:void_blossom')
    addBossLoot('bosses_of_mass_destruction:lich')
    addBossLoot('bosses_of_mass_destruction:gauntlet')
    addBossLoot('meetyourfight:bellringer')
    addBossLoot('meetyourfight:rosalyne')
    addBossLoot('meetyourfight:swampjaw')
    addBossLoot('meetyourfight:dame_fortuna')
})



