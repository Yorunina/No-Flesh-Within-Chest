/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.toTheLostWorldPre = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
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

/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.toTheLostWorld = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
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

/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.endlessDreamPre = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    let itemMap = getPlayerChestCavityItemMap(player)
    if (!itemMap.has('kubejs:candy_heart')) return false
    return true
}

/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.endlessDream = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    let spellLevel = ctx.getSpellLevel()
    

}

