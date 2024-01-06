// priority: 100
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

    event.addEntityLootModifier('minecraft:witch')
        .addLoot(LootEntry.of('kubejs:magic_spine').when((c) => c.randomChance(0.02)));

    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('@simplehats')
        .apply(ctx => {
            if (ctx.entity.isLiving() &&
                (ctx.entity.hasEffect('kubejs:glare_of_god') ||
                    ctx.entity.hasEffect('kubejs:gaze_of_god') ||
                    ctx.entity.hasEffect('kubejs:glimpse_of_god'))) {
                ctx.addLoot(Item.of('kubejs:god_consciousness', { mobType: ctx.entity.getType() }))
            }
        })

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
        .addLoot(LootEntry.of('kubejs:magic_vision').when((c) => c.randomChance(0.2)));
    addBossLoot('somebosses:flaming_berserker')
        .addLoot(LootEntry.of('kubejs:fire_gem').when((c) => c.randomChance(0.8)));
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
        .addLoot('kubejs:secret_of_bloom');
    addBossLoot('bosses_of_mass_destruction:lich')
    addBossLoot('bosses_of_mass_destruction:gauntlet')
    addBossLoot('meetyourfight:bellringer')
    addBossLoot('meetyourfight:rosalyne')
    addBossLoot('meetyourfight:swampjaw')
    addBossLoot('meetyourfight:dame_fortuna')
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot(Ingredient.of('@nameless_trinkets'))
        .removeLoot('extradelight:bad_food')

    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:ancient_city"], false)
        .randomChance(0.2)
        .addLoot(Item.of('kubejs:unholy_grail'))

    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of('biomancy:healing_additive').when((c) => c.randomChance(0.03)))
        .addLoot(LootEntry.of('biomancy:breeding_stimulant').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('biomancy:ageing_serum').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('simplehats:hatbag_common').when((c) => c.randomChance(0.1)))
        .addLoot(LootEntry.of('simplehats:hatbag_uncommon').when((c) => c.randomChance(0.05)))
        .addLoot(LootEntry.of('bosses_of_mass_destruction:soul_star').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('biomancy:ageing_serum').when((c) => c.randomChance(0.02)))

})