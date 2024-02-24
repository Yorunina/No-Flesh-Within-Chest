PlayerEvents.chat(event => {
    let player = event.player
    if (event.message.trim().toLowerCase().startsWith('flos')) {
        if (player.stages.has('flos_magic_stage_3') && event.message.trim().equalsIgnoreCase('Flos solum sub pluvia efflorescit'))
            event.server.scheduleInTicks(20 * 1, (callback) => {
                player.teleportTo('kubejs:lost_memory', 0, 250, 0, player.yaw, player.pitch)
                player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
                player.stages.remove('flos_magic_stage_3')
                player.stages.add('flos_magic_stage_4')
                player.stages.add('curse_mining_fatigue')
                player.stages.add('curse_of_fragility')
                player.stages.add('curse_monster_ability_bonus')
            })

        if (player.stages.has('flos_magic_stage_4') && event.message.trim().equalsIgnoreCase('Flos solum sub pluvia efflorescit')) {
            event.server.scheduleInTicks(20 * 1, (callback) => {
                player.teleportTo('kubejs:lost_memory', 0, 250, 0, player.yaw, player.pitch)
                player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
            })
        }
    }


    if (event.message.trim().toLowerCase().startsWith('dies')) {
        if (event.level.getDimension() == 'kubejs:lost_memory' && event.message.trim().equalsIgnoreCase('Dies clarus corruent etiam petala'))
            event.server.scheduleInTicks(20 * 1, (callback) => {
                player.teleportTo('minecraft:overworld', 0, 250, 0, player.yaw, player.pitch)
                player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
            })
    }
})