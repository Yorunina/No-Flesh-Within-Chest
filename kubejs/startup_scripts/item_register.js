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

    event.create('candy').texture('kubejs:item/candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('ice_candy').texture('kubejs:item/ice_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('water_candy').texture('kubejs:item/water_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('fire_candy').texture('kubejs:item/fire_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('wind_candy').texture('kubejs:item/wind_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('mr_and_mrs_smith').texture('kubejs:item/mr_and_mrs_smith').tag('kubejs:eatable_candy').food(food => { food.hunger(4).saturation(1).alwaysEdible(); food.effect('minecraft:regeneration', 20 * 30, 1, 1) })

    event.create('scrap').texture('kubejs:item/scrap')
    event.create('common_mineral_cluster').texture('kubejs:item/common_mineral_cluster')
    event.create('rare_mineral_cluster').texture('kubejs:item/rare_mineral_cluster')
    event.create('stardust_fragment').texture('kubejs:item/stardust_fragment')
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
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack;
        })


    event.create('friend_to_the_end').texture('kubejs:item/friend_to_the_end').maxStackSize(1)
        .tag('curios:ring')
        .useAnimation('bow')
        .useDuration(itemStack => 40)
        .use((level, player, hand) => {
            return true;
        })
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) {
                return itemstack;
            }

            if (itemstack.hasNBT() && itemstack.nbt.friendName && entity.isPlayer()) {
                let friend = level.server.getPlayer(itemstack.nbt.friendName)
                if (friend && friend.isAlive()) {
                    entity.teleportTo(friend.level.getDimension(), friend.x, friend.y, friend.z, 0, 0)
                    entity.addItemCooldown(itemstack, 20 * 10)
                } else {
                    entity.tell('无法传送，对方可能不在线/处于死亡状态。')
                }
            } else {
                entity.tell('已将该戒指绑定到你的身上！')
                itemstack.setNbt({ friendName: entity.getUsername() })
                return itemstack;
            }
            return itemstack;
        })

    event.create('empty_organ_charm').texture('kubejs:item/empty_organ_charm').maxStackSize(1).tag('curios:charm')
    event.create('organ_charm').texture('kubejs:item/organ_charm').maxStackSize(1).tag('curios:charm')
    event.create('leaflet').texture('kubejs:item/leaflet').maxStackSize(1)
})