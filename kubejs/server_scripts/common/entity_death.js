EntityEvents.death('minecraft:villager', event => {
    if (!event.entity.lastHurtByMob || !event.entity.lastHurtByMob.isPlayer()) return
    let killer = event.entity.lastHurtByMob
    if (Math.random() > 0.05) return
    let warp = killer.persistentData.getInt(warpCount)
    if (warp > 50) return
    updateWarpCount(killer, warp + 1)
    killer.tell(Text.darkPurple(Text.translatable("kubejs.msg.warp.1")))
})