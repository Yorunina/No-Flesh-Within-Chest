ItemEvents.entityInteracted (event => {
    if (event.target.type == 'minecraft:witch' 
    && event.player.getHeldItem(event.hand) == 'biomancy:genetic_compound'
    && event.target.getHeldItem(event.hand) == Item.of('minecraft:potion', '{Potion:"minecraft:healing"}'))
           {
           event.player.mainHandItem.count-=1
           event.player.give(Item.of('kubejs:active_pill'))
           event.target.kill()
           }       
    
    if (event.target.type == 'irons_spellbooks:priest' 
        && event.player.getMainHandItem() == 'kubejs:holy_wooden_wand'
        && event.player.getOffhandItem() == 'irons_spellbooks:divine_pearl'
        && event.player.inventory.find('kubejs:phantom_eyeball') >= 0)
        {
            event.player.offHandItem.count-=1
            event.player.inventory.setStackInSlot(event.player.inventory.find('kubejs:phantom_eyeball') , 'minecraft:air') 
            event.player.give(Item.of('kubejs:holy_eyeball'))
        }   

    if (event.target.type == 'bosses_of_mass_destruction:void_blossom' 
        && event.player.getHeldItem(event.hand) == 'kubejs:flora_wand_basic')
        {
            event.player.mainHandItem.count-=1
            event.server.runCommandSilent(`effect give @e[type=minecraft:player] minecraft:poison 300 3`)
            event.server.runCommandSilent(`effect give @e[bosses_of_mass_destruction:void_blossom] minecraft:regenration 1200 2`)
            event.player.give(Item.of('kubejs:flora_wand'))
        }                  
})

ServerEvents.tags('item', event => {
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


BlockEvents.rightClicked (event => {
    
    if (event.block == 'minecraft:flowering_azalea' 
        && event.player.getMainHandItem() == 'kubejs:flora_wand'
        && event.player.getOffhandItem() == 'alexsmobs:potted_flutter')
    {
        event.player.offHandItem.count-=1
        event.player.give(Item.of('kubejs:flower_heart'))
    }         

    if (event.block == 'minecraft:diamond_block' 
    && event.player.getMainHandItem() == Item.of('minecraft:potion', '{Potion:"minecraft:water"}')
    && event.level.isThundering()
    && event.player.hasEffect('minecraft:luck')
    )
    {
        event.player.mainHandItem.count-=1
        event.player.give(Item.of('kubejs:diamond_bottle'))   
    }         

})

