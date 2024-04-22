global.toTheLostWorld = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
    let /** @type {Internal.ServerPlayer} */ player = ctx.entity

    if (ctx.level.getDimension() == 'kubejs:lost_memory') {
        ctx.level.scheduleInTicks(20 * 1, (callback) => {
            player.teleportTo('minecraft:overworld', 0, 250, 0, 0, 0)
            player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
        })
        return
    }

    ctx.level.scheduleInTicks(20 * 1, (callback) => {
        player.teleportTo('kubejs:lost_memory', 0, 250, 0, 0, 0)
        player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
    })
}


global.toTheLostWorldPre = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
    let /** @type {Internal.ServerPlayer} */ player = ctx.entity
    if (player.stages.has('flos_magic_stage_3')) {
        player.stages.remove('flos_magic_stage_3')
        player.stages.add('flos_magic_stage_4')
        player.stages.add('curse_mining_fatigue')
        player.stages.add('curse_of_fragility')
        player.stages.add('curse_monster_ability_bonus')
        return true
    }
    if (player.stages.has('flos_magic_stage_4')) {
        return true
    }
    return false
}