ServerEvents.recipes(event => {
	event.recipes.create.mixing(Fluid.of('kubejs:syrup').withAmount(50), [Fluid.water(50), 'minecraft:sugar', 'hexerei:dried_mugwort_flowers', 'hexerei:dried_belladonna_flowers']).heated()

	event.recipes.create.filling('kubejs:hamimelon_organ', ['fruitsdelight:hamimelon', Fluid.of('kubejs:syrup').withAmount(3000)])

	event.recipes.create.deploying('kubejs:telescopic_tool_arm', ['kubejs:telescopic_arm', 'nameless_trinkets:light_gloves'])

	event.recipes.create.sandpaper_polishing('kubejs:revolution_cable', 'chestcavity:golem_cable')

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
})