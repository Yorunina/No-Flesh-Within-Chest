ItemEvents.rightClicked('biomancy:healing_additive', event => {
    let player = event.player;
    let item = event.item;
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
})

ItemEvents.rightClicked('kubejs:unbreakable_core', event => {
    let player = event.player;
    let item = event.item;
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用不毁加持功能，请将不毁核心放在副手，物品置于主手')
        return
    }
    let unbreakone = player.getMainHandItem()
    if (!unbreakone.hasEnchantment('minecraft:unbreaking', 1)) {
        player.tell('不满足耐久要求！')
        return
    }
    let enchantlevel = unbreakone.getEnchantmentLevel('minecraft:unbreaking')
    if (enchantlevel < 15) {
        player.tell('不满足耐久要求！')
        return
    }
    unbreakone.nbt.Enchantments = unbreakone.nbt.Enchantments.filter(function (unbreakone) {
        return unbreakone.id != 'minecraft:unbreaking'
    });
    unbreakone.nbt.merge({ Unbreakable: 1 })
    item.shrink(1);
})

ItemEvents.rightClicked('kubejs:disenchantment_book', event => {
    let player = event.player;
    let item = event.item;
    if (event.getHand() != "off_hand") {
        player.tell('如果要使用祛魔功能，请将祛魔书放在副手，物品置于主手')
        return
    }
    let disenchantedone = player.getMainHandItem()
    if (!disenchantedone || !disenchantedone.enchanted) {
        player.tell('没有可取下的附魔！')
        return
    }

    let enchantList = []
    let levelList = []
    disenchantedone.enchantments.forEach((name, level) => {
        enchantList.push(name)
        levelList.push(level)
    })
    if (enchantList.length <= 0 || levelList.length <= 0) {
        return
    }
    let setlength = enchantList.length
    let res = Math.ceil((Math.random() * setlength))
    item.shrink(1)
    disenchantedone.shrink(1)
    player.give(Item.of('minecraft:enchanted_book').enchant(enchantList[res - 1], levelList[res - 1]))
})

ItemEvents.rightClicked('nameless_trinkets:moon_stone', event => {
    if (event.level.isNight()
        && event.player.headArmorItem == 'irons_spellbooks:cultist_helmet'
        && event.player.chestArmorItem == 'irons_spellbooks:cultist_chestplate'
        && event.player.legsArmorItem == 'irons_spellbooks:cultist_leggings'
        && event.player.feetArmorItem == 'irons_spellbooks:cultist_boots'
        && (event.player.mainHandItem == 'irons_spellbooks:blood_staff' || event.player.offHandItem == 'irons_spellbooks:blood_staff')) {
        event.item.shrink(1)
        event.player.give(Item.of('kubejs:blood_moon_wand'))
    }
})

ItemEvents.rightClicked('kubejs:mysterious_trinket', event => {
    event.item.shrink(1)
    event.player.give(randomGet(trinketList))
})

ItemEvents.rightClicked('kubejs:safe_chest_opener', event => {
    let player = event.player
    let ray = player.rayTrace(5, true)
    
    if (!ray.entity || !ray.entity.isLiving()) return

    let target = ray.entity
    if (target.type == 'iceandfire:fire_dragon'
        || target.type == 'iceandfire:ice_dragon'
        || target.type == 'iceandfire:lightning_dragon') {
        let getAgeTicks = target.nbt.AgeTicks
        let getDeathStage = target.nbt.DeathStage
        let curStage = ((getAgeTicks / 24000) / 5) / 2
        if (getDeathStage + 1 >= curStage) {
            return
        }
    }
    if ($CCItems.CHEST_OPENER.isPresent()) {
        $CCItems.CHEST_OPENER.get().openChestCavity(player, target, false)
        player.swing()
    }

})