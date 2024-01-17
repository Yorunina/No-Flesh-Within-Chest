ServerEvents.tags('worldgen/structure', event => {
  event.add('kubejs:fortress_locator', 'minecraft:fortress')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:rain_ritual', ['minecraft:apple', 'minecraft:golden_apple', 'minecraft:enchanted_golden_apple', 'create:honeyed_apple'])

  event.add('kubejs:isb_spell_book', ['irons_spellbooks:netherite_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:gold_spell_book', 'irons_spellbooks:iron_spell_book', 'irons_spellbooks:copper_spell_book', 'irons_spellbooks:rotten_spell_book', 'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:druidic_spell_book',
    'irons_spellbooks:villager_spell_book', 'irons_spellbooks:blood_staff', 'irons_spellbooks:evoker_spell_book'])

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

  event.add('kubejs:is_cookie',['extradelight:apple_cookie','extradelight:gingerbread_cookie','extradelight:glow_berry_cookie','extradelight:sugar_cookie','extradelight:pumpkin_cookie','farmersdelight:honey_cookie','minecraft:cookie','farmersdelight:sweet_berry_cookie','extradelight:sugar_cookie_steve','extradelight:sugar_cookie_alex','extradelight:sugar_cookie_villager','extradelight:sugar_cookie_emerald','extradelight:sugar_cookie_pickaxe','extradelight:sugar_cookie_diamond','extradelight:sugar_cookie_sword','extradelight:sugar_cookie_creeper'])
  
  event.add('kubejs:is_cookie_block',['extradelight:chocolate_chip_cookie_block_item','extradelight:gingerbread_cookie_block_item','extradelight:sweet_berry_cookie_block_item','extradelight:apple_cookie_block_item','extradelight:sugar_cookie_block_item','extradelight:pumpkin_cookie_block_item','extradelight:honey_cookie_block_item','extradelight:glow_berry_cookie_block_item'])
})