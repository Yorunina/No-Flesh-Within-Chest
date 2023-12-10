StartupEvents.registry('item', event => {
    event.create('active_pill').texture('kubejs:item/active_pill').tag('kubejs:pill').food(food => {
        food
            .hunger(1)
            .saturation(1)
            .alwaysEdible()
            .eaten(ctx => {
                if (ctx.level.isClientSide()) return;
                global.updatePlayerActiveStatus(ctx.player)
                ctx.player.persistentData.putInt('organ_actived', 1)
            });
    })

    event.create('candy').texture('kubejs:item/candy').tag('kubejs:eatable_candy').food(food => {food.hunger(1).saturation(1).alwaysEdible()}).tag('supplementaries:cookies')
    event.create('ice_candy').texture('kubejs:item/ice_candy').tag('kubejs:eatable_candy').food(food => {food.hunger(1).saturation(1).alwaysEdible()}).tag('supplementaries:cookies')
    event.create('water_candy').texture('kubejs:item/water_candy').tag('kubejs:eatable_candy').food(food => {food.hunger(1).saturation(1).alwaysEdible()}).tag('supplementaries:cookies')
    event.create('fire_candy').texture('kubejs:item/fire_candy').tag('kubejs:eatable_candy').food(food => {food.hunger(1).saturation(1).alwaysEdible()}).tag('supplementaries:cookies')
    event.create('wind_candy').texture('kubejs:item/wind_candy').tag('kubejs:eatable_candy').food(food => {food.hunger(1).saturation(1).alwaysEdible()}).tag('supplementaries:cookies')

    event.create('scrap').texture('kubejs:item/scrap')
    event.create('common_mineral_cluster').texture('kubejs:item/common_mineral_cluster')
    event.create('rare_mineral_cluster').texture('kubejs:item/rare_mineral_cluster')
    event.create('exclamation_mark').texture('kubejs:item/exclamation_mark')
    event.create('full_mark').texture('kubejs:item/full_mark')
    event.create('ritual_catalyst').texture('kubejs:item/ritual_catalyst')
    event.create('secret_of_origin').texture('kubejs:item/secret_of_origin').maxStackSize(1)
    event.create('secret_of_rain').texture('kubejs:item/secret_of_rain').tag('kubejs:secret').maxStackSize(1)
    event.create('secret_of_heart').texture('kubejs:item/secret_of_heart').tag('kubejs:secret').maxStackSize(1)
    event.create('secret_of_bloom').texture('kubejs:item/secret_of_bloom').tag('kubejs:secret').maxStackSize(1)

    event.create('ceremonial_knife').texture('kubejs:item/ceremonial_knife').maxStackSize(1)
        .useAnimation('bow')
        .useDuration(itemStack => 40)
        .use((level, player, hand) => {
            if (player.getHealth() > 10) {
                return true;
            }
            return false;
        })
        .finishUsing((itemstack, level, entity) => {
            if (entity.getHealth() > 10) {
                entity.attack(10);
            }
            entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            entity.addItemCooldown(itemstack, 20 * 10)
            return itemstack;
        })
})