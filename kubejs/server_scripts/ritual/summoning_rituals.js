ServerEvents.recipes(event => {
    // 七宗罪
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_sloth_shard')
        .input('#minecraft:beds')
        .input(Item.of('minecraft:potion', { Potion: "minecraft:strong_turtle_master" }).strongNBT())
        .input('nameless_trinkets:sleeping_pills')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:sloth_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_wrath_shard')
        .input('hexerei:warhammer')
        .input('nameless_trinkets:rage_mind')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:wrath_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_pride_shard')
        .input('goety:refuse_bottle')
        .input('nameless_trinkets:gods_crown')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:pride_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_lust_shard')
        .input('art_of_forging:sigil_of_eden')
        .input('irons_spellbooks:mana_upgrade_orb')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:lust_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_envy_shard')
        .input('goety:grimoire_of_grudges')
        .input('8x goety:ill_bomb')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:envy_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_gluttony_shard')
        .input('4x minecraft:enchanted_golden_apple')
        .input('goety:hunger_core')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:gluttony_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_greed_shard')
        .input('nameless_trinkets:fate_emerald')
        .input('3x lightmanscurrency:coinblock_emerald')
        .input('goety:philosophers_stone')
        .input('kubejs:nether_star_shard')
        .itemOutput('kubejs:greed_shard')
        .sacrifice('minecraft:villager', 1)
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(500);

    // 秘密：雨
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ritual_of_rain')
        .input('#kubejs:rain_ritual')
        .itemOutput('kubejs:secret_of_rain')
        .sacrifice('cow')
        .sacrificeRegion(3, 3)
        .dayTime('night')
        .recipeTime(200);

    // 凋零风暴召唤
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:wither_strom_summon')
        .mobOutput(
            SummoningOutput.mob('witherstormmod:wither_storm')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
        )
        .input('#forge:nether_stars')
        .input('4x cataclysm:witherite_ingot')
        .input('16x minecraft:wither_rose')
        .input('bosses_of_mass_destruction:void_thorn')
        .recipeTime(200);

    // world of bosses召唤祭坛兼容
    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:froverlord_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:froverlord')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 900, Attributes: [{ Name: 'generic.max_health', Base: 900 }] })
        )

        .input('8x biomancy:creator_mix')
        .input('16x minecraft:blue_ice')
        .input('#forge:shields')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:volcanium_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:volcanium')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 760, Attributes: [{ Name: 'generic.max_health', Base: 760 }] })
        )

        .input('8x biomancy:creator_mix')
        .input('32x minecraft:basalt')
        .input('32x minecraft:blaze_powder')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:dark_mask_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:dark_mask')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1100, Attributes: [{ Name: 'generic.max_health', Base: 1100 }] })
        )

        .input('16x minecraft:obsidian')
        .input('16x minecraft:snow_block')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:knight_garent_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:knight_garent')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1060, Attributes: [{ Name: 'generic.max_health', Base: 1060 }] })
        )

        .input('minecraft:netherite_scrap')
        .input('8x create:brass_ingot')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:man_of_water_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:man_of_water')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 700, Attributes: [{ Name: 'generic.max_health', Base: 700 }] })
        )

        .input('16x minecraft:soul_sand')
        .input('8x minecraft:dripstone_block')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:electric_head_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:electric_head')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 860, Attributes: [{ Name: 'generic.max_health', Base: 860 }] })
        )

        .input(Ingredient.of('#forge:ingots/copper').withCount(32))
        .input(Ingredient.of('#forge:dusts/redstone').withCount(32))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:stone_guard_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:stone_guard')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 600, Attributes: [{ Name: 'generic.max_health', Base: 600 }] })
        )

        .input('16x minecraft:mossy_stone_bricks')
        .input(Ingredient.of('#minecraft:stone_bricks').withCount(64))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:skeleton_demon_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:skeleton_demon')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 800, Attributes: [{ Name: 'generic.max_health', Base: 800 }] })
        )

        .input('8x minecraft:bone_block')
        .input('4x irons_spellbooks:epic_ink')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:hand_head_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:hand_head')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 580, Attributes: [{ Name: 'generic.max_health', Base: 580 }] })
        )

        .input('8x minecraft:iron_block')
        .input('8x minecraft:magma_block')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:nameless_one_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:nameless_one')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 660, Attributes: [{ Name: 'generic.max_health', Base: 660 }] })
        )

        .input(Ingredient.of('#forge:gems/emerald').withCount(16))
        .input(Ingredient.of('#forge:rods/copper').withCount(16))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:prismarine_watcher_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:prismarine_watcher')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 670, Attributes: [{ Name: 'generic.max_health', Base: 670 }] })
        )

        .input(Ingredient.of('#forge:dusts/prismarine').withCount(16))
        .input('minecraft:end_crystal')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ancient_wizard_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:ancient_wizard')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 900, Attributes: [{ Name: 'generic.max_health', Base: 900 }] })
        )

        .input('8x minecraft:ender_eye')
        .input('4x minecraft:pufferfish')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:merciless_assasin_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:merciless_assasin')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 800, Attributes: [{ Name: 'generic.max_health', Base: 800 }] })
        )

        .input('16x minecraft:amethyst_shard')
        .input('4x minecraft:phantom_membrane')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:vulcan_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:vulcan')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1140, Attributes: [{ Name: 'generic.max_health', Base: 1140 }] })
        )

        .input('16x minecraft:tnt')
        .input(Ingredient.of('#forge:ingots/gold').withCount(16))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:flaming_berserker_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:flaming_berserker')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1000, Attributes: [{ Name: 'generic.max_health', Base: 1000 }] })
        )

        .input('32x minecraft:nether_bricks')
        .input('8x minecraft:fire_charge')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:frost_magma_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:frost_magma')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1300, Attributes: [{ Name: 'generic.max_health', Base: 1300 }] })
        )

        .input('2x minecraft:packed_ice')
        .input('16x minecraft:packed_ice')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:crimson_vampire_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:crimson_vampire')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 820, Attributes: [{ Name: 'generic.max_health', Base: 820 }] })
        )

        .input('8x create:rose_quartz')
        .input(Ingredient.of('#forge:crops/nether_wart').withCount(32))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:mono_eyed_skeleton_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:mono_eyed_skeleton')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 1040, Attributes: [{ Name: 'generic.max_health', Base: 1040 }] })
        )

        .input('minecraft:fermented_spider_eye')
        .input(Ingredient.of('#forge:crops/nether_wart').withCount(32))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:ender_ordnance_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:ender_ordnance')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 970, Attributes: [{ Name: 'generic.max_health', Base: 970 }] })
        )

        .input('4x minecraft:ender_eye')
        .input(Ingredient.of('#forge:gems/quartz').withCount(16))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:sand_giant_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:sand_giant')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 860, Attributes: [{ Name: 'generic.max_health', Base: 860 }] })
        )

        .input('16x minecraft:cactus')
        .input(Ingredient.of('#forge:ingots/gold').withCount(16))
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('kubejs:ritual_catalyst')
        .id('kubejs:aesegull_summon')
        .mobOutput(
            SummoningOutput.mob('somebosses:aesegull')
                .count(1)
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({ Health: 830, Attributes: [{ Name: 'generic.max_health', Base: 830 }] })
        )

        .input('16x createaddition:gold_spool')
        .input('8x minecraft:glowstone')
        .input('8x biomancy:creator_mix')
        .recipeTime(200);

    // 神恩Boss
    event.recipes.summoningrituals
        .altar('kubejs:god_bless_full_necklace')
        .id('kubejs:god_bless_summon')
        .blockBelow('minecraft:command_block')
        .input('minecraft:nether_star')
        .itemOutput('kubejs:god_bless_empty_necklace')
        .recipeTime(200);
})