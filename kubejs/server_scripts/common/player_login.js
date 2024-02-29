PlayerEvents.loggedIn(event => {
    let player = event.player
    // 版本迁移兼容逻辑，下版本删除

    event.server.scheduleInTicks(20, (callback) => {
        if (player.persistentData.getInt('firstJoin') != 1 && player.inventory.countNonEmpty() > 6) {
            player.persistentData.putInt('firstJoin', 1)
        }
        if (player.persistentData.getInt('firstJoin') != 1) {
            player.inventory.clear()
            player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},weaponmaster:{0:{Count:1b,id:"weaponmaster:tutorialbook"}}},"eccentrictome:version":1}'))
            player.persistentData.putInt('firstJoin', 1)
        }
    })
})