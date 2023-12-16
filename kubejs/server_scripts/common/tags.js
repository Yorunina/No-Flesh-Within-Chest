ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])

  event.add('kubejs:isb_spell_book', ['irons_spellbooks:netherite_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:gold_spell_book', 'irons_spellbooks:iron_spell_book', 'irons_spellbooks:copper_spell_book', 'irons_spellbooks:rotten_spell_book', 'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:druidic_spell_book',
  'irons_spellbooks:villager_spell_book','irons_spellbooks:blood_staff', 'irons_spellbooks:evoker_spell_book']);
})