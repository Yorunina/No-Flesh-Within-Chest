ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])

  event.add('kubejs:isb_spell_book', ['irons_spellbooks:netherite_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:gold_spell_book', 'irons_spellbooks:iron_spell_book', 'irons_spellbooks:copper_spell_book', 'irons_spellbooks:rotten_spell_book', 'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:druidic_spell_book',
  'irons_spellbooks:villager_spell_book','irons_spellbooks:blood_staff', 'irons_spellbooks:evoker_spell_book'])

  event.add('curios:body', ['supplementaries:quiver'])
  event.add('kubejs:anti_rejection', ['biomancy:healing_additive'])

  event.add('kubejs:lung', 'chestcavity:lung')
  event.add('kubejs:lung', 'chestcavity:rotten_lung')
  event.add('kubejs:lung', 'chestcavity:animal_lung')
  event.add('kubejs:lung', 'chestcavity:llama_lung')
  event.add('kubejs:lung', 'chestcavity:fireproof_lung')
  event.add('kubejs:lung', 'chestcavity:small_animal_lung')
  event.add('kubejs:lung', 'chestcavity:insect_lung')
  event.add('kubejs:lung', 'chestcavity:ender_lung')
  event.add('kubejs:lung', 'chestcavity:dragon_lung')
  event.add('kubejs:lung', 'chestcavity:saltwater_lung')
  event.add('kubejs:lung', 'chestcavity:gas_bladder')
})