ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    if (item.hasTag('kubejs:anti_rejection')) {
        if (event.getHand() == "off_hand") {
            let organ = player.getMainHandItem();
            if (organ.hasNBT() && organ.nbt.contains('chestcavity:organ_compatibility')) {
                organ.nbt.remove('chestcavity:organ_compatibility')
                item.shrink(1);
            } else {
                player.tell('似乎该物品不需要进行抗排异')
            }
        } else {
            player.tell('如果要使用抗排异功能，请将药物放在副手，器官置于主手')
        }
    }
})

ItemEvents.rightClicked('irons_spellbooks:blood_staff', event => {
    if (event.level.isNight()
        && event.player.headArmorItem == 'irons_spellbooks:cultist_helmet'
        && event.player.chestArmorItem == 'irons_spellbooks:cultist_chestplate'
        && event.player.legsArmorItem == 'irons_spellbooks:cultist_leggings'
        && event.player.feetArmorItem == 'irons_spellbooks:cultist_boots') {
        event.item.shrink(1)
        event.player.give(Item.of('kubejs:blood_moon_wand'))
    }
})