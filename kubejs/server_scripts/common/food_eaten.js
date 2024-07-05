ItemEvents.foodEaten('cataclysm:blessed_amethyst_crab_meat', event => {
    let player = event.player
    if (!player) return
    let warp = player.persistentData.getInt(warpCount)
    if (warp > 0) {
        updateWarpCount(player, warp - 3)
        player.tell(Text.darkAqua(Text.translatable("kubejs.msg.warp.2")))
    }
})

ItemEvents.foodEaten('chestcavity:raw_man_meat', event => {
    let player = event.player
    if (!player) return
    if (Math.random() > 0.1) return
    let warp = player.persistentData.getInt(warpCount)
    updateWarpCount(player, warp + 1)
    player.tell(Text.darkPurple(Text.translatable("kubejs.msg.warp.1")))
})

ItemEvents.foodEaten('extradelight:bad_food', event => {
    let player = event.player
    if (!player) return
    if (Math.random() > 0.05) return
    let warp = player.persistentData.getInt(warpCount)
    updateWarpCount(player, warp + 1)
    player.tell(Text.darkPurple(Text.translatable("kubejs.msg.warp.1")))
})


ItemEvents.foodEaten('minecraft:enchanted_golden_apple', event => {
    let player = event.player
    if (!player) return
    let warp = player.persistentData.getInt(warpCount)
    if (warp > 0) {
        updateWarpCount(player, warp - 1)
        player.tell(Text.darkAqua(Text.translatable("kubejs.msg.warp.2")))
    }
})
