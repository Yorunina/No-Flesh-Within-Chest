ServerEvents.recipes(event => {
	event.recipes.create.mixing(Fluid.of('kubejs:syrup').withAmount(50), [Fluid.water(50), 'minecraft:sugar', 'hexerei:dried_mugwort_flowers', 'hexerei:dried_belladonna_flowers']).heated()

	event.recipes.create.mixing('2x createaddition:electrum_ingot', [Fluid.lava(100), 'minecraft:gold_ingot', 'kubejs:silver_ingot']).heated()

	event.recipes.create.filling('kubejs:hamimelon_organ', ['fruitsdelight:hamimelon', Fluid.of('kubejs:syrup').withAmount(3000)])
	event.recipes.create.filling('kubejs:red_ink', ['kubejs:bad_ink', Fluid.of('hexerei:blood_fluid').withAmount(2000)])

	event.recipes.create.deploying('kubejs:telescopic_tool_arm', ['kubejs:telescopic_arm', 'nameless_trinkets:light_gloves'])
	event.recipes.create.deploying('kubejs:telescopic_arm', ['create:extendo_grip', 'biomancy:living_flesh'])

	event.recipes.create.sandpaper_polishing('kubejs:revolution_cable', 'chestcavity:golem_cable')

	event.recipes.create.compacting('kubejs:huge_lung', ['16x kubejs:lung_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_appendix', ['16x kubejs:appendix_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_muscle', ['16x kubejs:muscle_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_heart', ['16x kubejs:heart_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_intestine', ['16x kubejs:intestine_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_rib', ['16x kubejs:rib_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_spine', ['16x kubejs:spine_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_spleen', ['16x kubejs:spleen_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_stomach', ['16x kubejs:stomach_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_kidney', ['16x kubejs:kidney_template']).superheated()
	event.recipes.create.compacting('kubejs:huge_liver', ['16x kubejs:liver_template']).superheated()

	event.recipes.create.mechanical_crafting('kubejs:revolution_gear', [
		' SSS ',
		'SWRWS',
		'SRCRS',
		'SWRWS',
		' SSS '
	], {
		S: 'create:iron_sheet',
		W: 'createaddition:iron_wire',
		R: 'createaddition:iron_rod',
		C: 'minecraft:iron_nugget'
	})

	event.recipes.create.mechanical_crafting('kubejs:chain_armor_piece', [
		'WSWSW',
		'SWSWS',
		'WSWSW',
		'SWSWS',
		'WSWSW'
	], {
		S: 'minecraft:iron_nugget',
		W: 'createaddition:iron_wire',
	})

	event.recipes.create.mechanical_crafting('kubejs:lamellar_armor_piece', [
		'WSWSW',
		'SWSWS',
		'WSWSW',
		'SWSWS',
		'WSWSW'
	], {
		S: 'create:iron_sheet',
		W: 'createaddition:iron_wire',
	})

	event.recipes.create.mechanical_crafting('kubejs:tamagotchi', [
		'  AAA  ',
		' ASSSA ',
		'ASWBWSA',
		'ASDCDSA',
		'ASWEWSA',
		'ASSSSSA',
		' AAAAA '
	], {
		A: 'minecraft:pink_dye',
		B: 'create:electron_tube',
		C: 'biomancy:creator_mix',
		D: 'create:precision_mechanism',
		E: 'createaddition:connector',
		S: 'create:iron_sheet',
		W: 'createaddition:copper_wire',
	})


	event.recipes.create.mechanical_crafting('kubejs:enery_bottle_max', [
		' AAA ',
		'ABBBA',
		'ACECA',
		'ACDCA',
		'ACECA',
		'ABBBA',
		'AAAAA'
	], {
		A: 'create:polished_rose_quartz',
		B: 'createaddition:modular_accumulator',
		C: 'create:brass_sheet',
		D: 'nameless_trinkets:experience_battery',
		E: 'minecraft:netherite_ingot',
	})

	

	event.recipes.create.mechanical_crafting('kubejs:machine_clockwork', [
		'     A ',
		'    A A',
		' E  BAB',
		'DDDDDC ',
		' E  BAB',
		'    A A',
		'     A '
	], {
		A: 'create:brass_sheet',
		B: 'createaddition:gold_wire',
		C: 'goety:animation_core',
		D: 'createaddition:brass_rod',
		E: 'create:brass_nugget'
	})

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:candy_heart')
	], 'kubejs:heart_template', [
		event.recipes.createCutting('kubejs:incomplete_heart_template', 'kubejs:incomplete_heart_template'),
		event.recipes.createDeploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', 'irons_spellbooks:arcane_essence']),
		event.recipes.createDeploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', 'biomancy:living_flesh']),
		event.recipes.createDeploying('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', '#forge:dyes/pink']),
		event.recipes.create.filling('kubejs:incomplete_heart_template', ['kubejs:incomplete_heart_template', Fluid.of('kubejs:syrup').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_heart_template').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_relay')
	], 'create:iron_sheet', [
		event.recipes.createDeploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:redstone']),
		event.recipes.createDeploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:repeater']),
		event.recipes.createDeploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_relay', 'minecraft:redstone_torch']),
	]).transitionalItem('kubejs:incomplete_revolution_relay').loops(10)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_delay')
	], 'create:iron_sheet', [
		event.recipes.createDeploying('kubejs:incomplete_revolution_delay', ['kubejs:incomplete_revolution_delay', 'minecraft:redstone']),
		event.recipes.createDeploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_delay', 'minecraft:comparator']),
		event.recipes.createDeploying('kubejs:incomplete_revolution_relay', ['kubejs:incomplete_revolution_delay', 'minecraft:redstone_torch']),
	]).transitionalItem('kubejs:incomplete_revolution_delay').loops(10)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:candy_stomach')
	], 'kubejs:stomach_template', [
		event.recipes.createCutting('kubejs:incomplete_stomach_template', 'kubejs:incomplete_stomach_template'),
		event.recipes.createDeploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', '#bookwyrms:scale']),
		event.recipes.createDeploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', 'biomancy:living_flesh']),
		event.recipes.createDeploying('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', '#forge:dyes/pink']),
		event.recipes.create.filling('kubejs:incomplete_stomach_template', ['kubejs:incomplete_stomach_template', Fluid.of('kubejs:syrup').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_stomach_template').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:burning_heart')
	], 'chestcavity:blaze_core', [
		event.recipes.createCutting('kubejs:incomplete_burning_heart', 'kubejs:incomplete_burning_heart'),
		event.recipes.createDeploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'chestcavity:active_blaze_rod']),
		event.recipes.createDeploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'alexsmobs:guster_eye']),
		event.recipes.createDeploying('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', 'kubejs:fire_gem']),
		event.recipes.create.filling('kubejs:incomplete_burning_heart', ['kubejs:incomplete_burning_heart', Fluid.of('minecraft:lava').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_burning_heart').loops(3)


	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:furnace_core')
	], 'chestcavity:golem_core', [
		event.recipes.createCutting('kubejs:incomplete_furnace_core', 'kubejs:incomplete_furnace_core'),
		event.recipes.createDeploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'minecraft:iron_block']),
		event.recipes.createDeploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'minecraft:blast_furnace']),
		event.recipes.createDeploying('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', 'createaddition:connector']),
		event.recipes.create.filling('kubejs:incomplete_furnace_core', ['kubejs:incomplete_furnace_core', Fluid.of('create:honey').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_furnace_core').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:compressed_oxygen_implant').withChance(70.0),
		Item.of('create:copper_sheet').withChance(30.0)
	], Item.of('create:copper_backtank', { Air: 900 }).strongNBT(), [
		event.recipes.createDeploying('create:copper_backtank', ['create:copper_backtank', 'chestcavity:gas_bladder']),
		event.recipes.createDeploying('create:copper_backtank', ['create:copper_backtank', 'createaddition:electrum_sheet']),
		event.recipes.createDeploying('create:copper_backtank', ['create:copper_backtank', 'create:iron_sheet']),
		event.recipes.createDeploying('create:copper_backtank', ['create:copper_backtank', 'createaddition:zinc_sheet'])
	]).transitionalItem('create:copper_backtank').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:glass_wand').withChance(85.0),
		Item.of('minecraft:glass_pane').withChance(10.0),
		Item.of('minecraft:glass').withChance(5.0)
	], 'unusualprehistory:opal_block', [
		event.recipes.createDeploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'alexsmobs:rainbow_glass']),
		event.recipes.createDeploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'biomancy:unstable_compound']),
		event.recipes.createDeploying('kubejs:incomplete_glass_wand', ['kubejs:incomplete_glass_wand', 'biomancy:corrosive_additive'])
	]).transitionalItem('kubejs:incomplete_glass_wand').loops(6)

	event.recipes.create.crushing([Item.of('3x minecraft:raw_iron'), Item.of('2x minecraft:raw_gold').withChance(0.2), Item.of('2x minecraft:raw_copper').withChance(0.4), Item.of('2x create:raw_zinc').withChance(0.3), Item.of('2x minecraft:lapis_lazuli').withChance(0.25)], 'kubejs:common_mineral_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('3x kubejs:lime_powder'), Item.of('2x kubejs:lime_powder').withChance(0.3)], 'create:limestone').processingTime(100)

	event.recipes.create.crushing([Item.of('2x kubejs:silver_ingot'), Item.of('3x createoreexcavation:raw_redstone').withChance(0.4), Item.of('2x createoreexcavation:raw_emerald').withChance(0.3), Item.of('2x createoreexcavation:raw_diamond').withChance(0.3), Item.of('minecraft:netherite_scrap').withChance(0.15)], 'kubejs:rare_mineral_cluster').processingTime(100)

	event.recipes.create.crushing([Item.of('minecraft:netherite_scrap'), Item.of('5x minecraft:blaze_powder').withChance(0.5), Item.of('5x create:powdered_obsidian').withChance(0.4), Item.of('5x minecraft:glowstone_dust').withChance(0.45), Item.of('8x minecraft:quartz').withChance(0.6), Item.of('kubejs:nether_star_shard').withChance(0.02)], 'minecraft:nether_star').processingTime(300)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_muscle').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:muscle_template', [
		event.recipes.createCutting('kubejs:incomplete_rose_quartz_muscle', 'kubejs:incomplete_rose_quartz_muscle'),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'biomancy:rejuvenation_serum']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'minecraft:rose_bush']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_muscle', ['kubejs:incomplete_rose_quartz_muscle', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_muscle').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_liver').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:liver_template', [
		event.recipes.createCutting('kubejs:incomplete_rose_quartz_liver', 'kubejs:incomplete_rose_quartz_liver'),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'biomancy:cleansing_serum']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'minecraft:rose_bush']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_liver', ['kubejs:incomplete_rose_quartz_liver', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_liver').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rose_quartz_heart').withChance(80.0),
		Item.of('create:rose_quartz').withChance(20.0)
	], 'kubejs:heart_template', [
		event.recipes.createCutting('kubejs:incomplete_rose_quartz_heart', 'kubejs:incomplete_rose_quartz_heart'),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'biomancy:absorption_boost']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'minecraft:rose_bush']),
		event.recipes.createDeploying('kubejs:incomplete_rose_quartz_heart', ['kubejs:incomplete_rose_quartz_heart', 'create:polished_rose_quartz'])
	]).transitionalItem('kubejs:incomplete_rose_quartz_heart').loops(5)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:lava_life_cycle_system').withChance(75.0),
		Item.of('chestcavity:iron_scrap').withChance(25.0)
	], 'art_of_forging:forged_steel_ingot', [
		event.recipes.createPressing('kubejs:incomplete_lava_life_cycle_system', 'kubejs:incomplete_lava_life_cycle_system'),
		event.recipes.createPressing('kubejs:incomplete_lava_life_cycle_system', 'kubejs:incomplete_lava_life_cycle_system'),
		event.recipes.createDeploying('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', 'create:fluid_tank']),
		event.recipes.createDeploying('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', 'create:precision_mechanism']),
		event.recipes.create.filling('kubejs:incomplete_lava_life_cycle_system', ['kubejs:incomplete_lava_life_cycle_system', Fluid.of('minecraft:lava').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_lava_life_cycle_system').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:revolution_steam_engine').withChance(90.0),
		Item.of('chestcavity:iron_scrap').withChance(10.0)
	], 'create:steam_engine', [
		event.recipes.createDeploying('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', 'art_of_forging:forged_steel_ingot']),
		event.recipes.createDeploying('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', 'kubejs:relic_metal_plate']),
		event.recipes.create.filling('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', Fluid.of('minecraft:water').withAmount(3000)]),
		event.recipes.create.filling('kubejs:incomplete_revolution_steam_engine', ['kubejs:incomplete_revolution_steam_engine', Fluid.of('minecraft:lava').withAmount(1000)])
	]).transitionalItem('kubejs:incomplete_revolution_steam_engine').loops(3)

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:cream_cookie_heart').withChance(50.0),
		Item.of('minecraft:cookie').withChance(50.0)
	], Ingredient.of('#kubejs:is_cookie_block'), [
		event.recipes.createPressing('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.createCutting('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.create.filling('minecraft:cookie', ['minecraft:cookie', Fluid.of('kubejs:cream').withAmount(500)]),
		event.recipes.createPressing('minecraft:cookie', 'minecraft:cookie'),
		event.recipes.createCutting('minecraft:cookie', 'minecraft:cookie')
	]).transitionalItem('minecraft:cookie').loops(1)

	
})
