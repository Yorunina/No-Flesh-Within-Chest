ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
  event.add('kubejs:void_blossom_locator', 'bosses_of_mass_destruction:void_blossom')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple','minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])
})