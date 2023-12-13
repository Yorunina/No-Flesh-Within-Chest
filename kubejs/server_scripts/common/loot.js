LootJS.modifiers(event => {
    event.addEntityLootModifier('bosses_of_mass_destruction:void_blossom')
        .addLoot('kubejs:secret_of_bloom');

    addBossLoot(event, 'somebosses:aesegull')
    addBossLoot(event, 'somebosses:prismarine_watcher')
    addBossLoot(event, 'somebosses:froverlord')
    addBossLoot(event, 'somebosses:volcanium')
    addBossLoot(event, 'somebosses:merciless_assasin')
    addBossLoot(event, 'somebosses:dark_mask')
    addBossLoot(event, 'somebosses:knight_garent')
    addBossLoot(event, 'somebosses:vulcan')
    addBossLoot(event, 'somebosses:ancient_wizard')
    addBossLoot(event, 'somebosses:man_of_water')
    addBossLoot(event, 'somebosses:flaming_berserker')
    addBossLoot(event, 'somebosses:electric_head')
    addBossLoot(event, 'somebosses:frost_magma')
    addBossLoot(event, 'somebosses:stone_guard')
    addBossLoot(event, 'somebosses:crimson_vampire')
    addBossLoot(event, 'somebosses:skeleton_demon')
    addBossLoot(event, 'somebosses:mono_eyed_skeleton')
    addBossLoot(event, 'somebosses:hand_head')
    addBossLoot(event, 'somebosses:ender_ordnance')
    addBossLoot(event, 'somebosses:nameless_one')
    addBossLoot(event, 'somebosses:sand_giant')
    addBossLoot(event, 'cataclysm:netherite_monstrosity')
    addBossLoot(event, 'cataclysm:ender_guardian')
    addBossLoot(event, 'cataclysm:ignis')
    addBossLoot(event, 'cataclysm:the_harbinger')
    addBossLoot(event, 'cataclysm:the_leviathan')
    addBossLoot(event, 'bosses_of_mass_destruction:void_blossom')
    addBossLoot(event, 'bosses_of_mass_destruction:lich')
    addBossLoot(event, 'bosses_of_mass_destruction:gauntlet')
    addBossLoot(event, 'meetyourfight:bellringer')
    addBossLoot(event, 'meetyourfight:rosalyne')
    addBossLoot(event, 'meetyourfight:swampjaw')
    addBossLoot(event, 'meetyourfight:dame_fortuna')
})


function addBossLoot(event, entity) {
    event.addEntityLootModifier(entity)
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
        );
}



