ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple','minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])
})