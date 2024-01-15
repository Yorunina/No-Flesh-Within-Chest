StartupEvents.registry('item', event => {
    event.create('active_pill').texture('kubejs:item/active_pill').tag('kubejs:pill').food(food => {
        food
            .hunger(1)
            .saturation(1)
            .alwaysEdible()
            .eaten(ctx => {
                if (ctx.level.isClientSide()) return;
                global.updatePlayerActiveStatus(ctx.player)
                ctx.player.persistentData.putInt('organActive', 1)
            });
    })

    event.create('candy').texture('kubejs:item/candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('ice_candy').texture('kubejs:item/ice_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('water_candy').texture('kubejs:item/water_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('fire_candy').texture('kubejs:item/fire_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('wind_candy').texture('kubejs:item/wind_candy').tag('kubejs:eatable_candy').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')
    event.create('starch_sausage').texture('kubejs:item/starch_sausage').food(food => { food.hunger(3).saturation(0.8).alwaysEdible() })

    event.create('lucky_cookie').texture('kubejs:item/organs/food/lucky_cookie').food(food => {
        food.hunger(1).saturation(1).alwaysEdible().eaten(event => {
            event.server.runCommandSilent(`/title ${event.player.name.getString()} title {"text":"${randomGet(luckyCookieSentence)}"}`)
            if (Math.random() < 0.03) {
                event.player.give(Item.of('kubejs:lucky_cookie_organ'))
            }
        })
    }).tag('supplementaries:cookies').maxStackSize(64)
    event.create('cream').texture('kubejs:item/cream').food(food => { food.hunger(1).saturation(1).alwaysEdible() }).tag('supplementaries:cookies')

    event.create('mr_and_mrs_smith').texture('kubejs:item/mr_and_mrs_smith').tag('kubejs:eatable_candy').food(food => { food.hunger(4).saturation(1).alwaysEdible(); food.effect('minecraft:regeneration', 20 * 30, 1, 1) })

    event.create('scrap').texture('kubejs:item/scrap')
    event.create('fire_gem').texture('kubejs:item/fire_gem')
    event.create('silver_ingot').texture('kubejs:item/silver_ingot')


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

    event.create('god_bless_empty_necklace').texture('kubejs:item/god_bless_empty_necklace').maxStackSize(1).tag('curios:necklace').tag('itemborders:gold')
    event.create('god_bless_full_necklace').texture('kubejs:item/god_bless_full_necklace').maxStackSize(1).tag('curios:necklace').tag('itemborders:gold')

    event.create('leaflet').texture('kubejs:item/leaflet').maxStackSize(1)
    event.create('god_consciousness').texture('kubejs:item/god_consciousness').maxStackSize(1)
    event.create('god_agreement').texture('kubejs:item/god_agreement').maxStackSize(1)

    event.create('flora_wand').texture('kubejs:item/flora_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:nature_spell_power', 'kubejsNatureSpellWeaponBoost', 3, 'addition')
        .modifyAttribute('irons_spellbooks:spell_power', 'kubejsSpellPowerWeaponBoost', -0.5, 'addition')
        .rarity('epic')

    event.create('flora_wand_basic').texture('kubejs:item/flora_wand').maxStackSize(1)
       

    event.create('holy_wooden_wand').texture('kubejs:item/holy_wooden_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:holy_spell_power', 'kubejsHolySpellWeaponBoost', 0.3, 'addition')
        .rarity('rare')

    event.create('ice_wooden_wand').texture('kubejs:item/ice_wooden_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:ice_spell_power', 'kubejsIceSpellWeaponBoost', 0.3, 'addition')
        .rarity('rare')

    event.create('nature_wooden_wand').texture('kubejs:item/nature_wooden_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:nature_spell_power', 'kubejsNatureSpellWeaponBoost', 0.3, 'addition')
        .rarity('rare')

    event.create('candy_canes_wand').texture('kubejs:item/candy_canes_wand')
        .maxStackSize(1)
        .modifyAttribute('irons_spellbooks:spell_power', 'kubejsSpellPowerWeaponBoost', 0.1, 'addition')
        .rarity('epic')
        .useAnimation('eat')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            entity.playSound('entity.player.burp')
            entity.eat(level, Item.of('kubejs:candy'))
            entity.addItemCooldown(itemstack, 20 * 30)
            return itemstack;
        })

    event.create('rapier_wand', 'sword').tier('diamond').attackDamageBaseline(4.0).attackDamageBonus(2.5).speedBaseline(-1.5).speed(6.5).maxDamage(980).maxStackSize(1)
        .modifyAttribute('irons_spellbooks:spell_power', 'kubejsSpellPowerWeaponBoost', 0.1, 'addition')
        .rarity('epic')
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack;
        })

    event.create('artist_wand', 'sword').tier('diamond').attackDamageBaseline(2.0).attackDamageBonus(3.0).speedBaseline(-3.0).speed(4.0).maxDamage(1680).maxStackSize(1)
        .rarity('epic')
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            entity.potionEffects.add('kubejs:colorful', 20 * 10, 0)
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack;
        })

    event.create('glass_wand').texture('kubejs:item/glass_wand')
        .maxStackSize(1)
        .rarity('rare')

    event.create('unholy_grail').texture('kubejs:item/unholy_grail')
        .maxStackSize(1)
        .rarity('epic')
        .useAnimation('drink')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            entity.playSound('entity.player.burp')
            let itemMap = global.getPlayerChestCavityItemMap(entity)
            if (itemMap.has('kubejs:forbidden_fruit')) {
                entity.potionEffects.add('minecraft:regeneration', 20 * 24, 2)
                entity.potionEffects.add('minecraft:absorption', 20 * 40, 1)
                entity.potionEffects.add('minecraft:strength', 20 * 50, 1)
                entity.potionEffects.add('minecraft:speed', 20 * 60, 0)
                entity.potionEffects.add('minecraft:resistance', 20 * 60, 1)
                entity.potionEffects.add('irons_spellbooks:instant_mana', 1, 2)
            } else {
                entity.potionEffects.add('minecraft:hunger', 20 * 8, 2)
                entity.potionEffects.add('minecraft:poison', 20 * 8, 1)
                entity.potionEffects.add('minecraft:wither', 20 * 5, 2)
                entity.potionEffects.add('minecraft:weakness', 20 * 10, 1)
                entity.potionEffects.add('minecraft:nausea', 20 * 12, 0)
                entity.potionEffects.add('minecraft:slowness', 20 * 12, 0)
            }
            entity.addItemCooldown(itemstack, 20 * 60)
            return itemstack;
        })


    // 随机基本器官
    event.create('kubejs:random_tumor').texture('kubejs:item/organs/others/random_tumor').tag('kubejs:organ').tag('itemborders:iron')

    event.create('kubejs:phantom_eyeball').texture('kubejs:item/phantom_eyeball').maxStackSize(1)

    event.create('blood_extractor').texture('kubejs:item/blood_extractor').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            let nbt = { organSocres: {} }
            $ChestCavityEntity.of(entity).get().getChestCavityInstance().getOrganScores().forEach((key, value) => {
                nbt.organSocres[key] = value
            })
            entity.give(Item.of('kubejs:glass_vial', nbt))
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack;
        })

    event.create('glass_vial').texture('kubejs:item/glass_vial').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!itemstack.nbt?.organSocres) return itemstack
            itemstack.nbt.organSocres.getAllKeys().forEach(key => {
                entity.tell([LEADING_SYMBOL, Text.yellow(global.SCORE_MAP[key]).hover(global.SCORE_HOVER_MAP[key]), Text.white(' : '), Text.white(itemstack.nbt.organSocres[key])])
            })
            entity.addItemCooldown(itemstack, 20 * 15)
            return itemstack;
        })

    event.create('kubejs:painting_brush').texture('kubejs:item/painting_brush').maxStackSize(1)

})

