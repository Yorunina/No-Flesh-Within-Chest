PlayerEvents.chat(event => {
    if (event.message.trim().toLowerCase().startsWith('flos')) {
        if (event.player.stages.has('flos_magic_stage_3') && event.message.trim().equalsIgnoreCase('Flos solum sub pluvia efflorescit'))
            event.server.scheduleInTicks(20 * 1, (callback) => {
                event.player.teleportTo('kubejs:lost_memory', 0, 250, 0, 0, 0)
                event.player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
                event.player.stages.remove('flos_magic_stage_3')
                event.player.stages.add('flos_magic_stage_4')
                event.player.stages.add('curse_mining_fatigue')
                event.player.stages.add('curse_of_fragility')
                event.player.stages.add('curse_monster_ability_bonus')
            })

        if (event.player.stages.has('flos_magic_stage_4') && event.message.trim().equalsIgnoreCase('Flos solum sub pluvia efflorescit')) {
            event.server.scheduleInTicks(20 * 1, (callback) => {
                event.player.teleportTo('kubejs:lost_memory', 0, 250, 0, 0, 0)
                event.player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
            })
        }
    }


    if (event.message.trim().toLowerCase().startsWith('dies')) {
        if (event.level.getDimension() == 'kubejs:lost_memory' && event.message.trim().equalsIgnoreCase('Dies clarus corruent etiam petala'))
            event.server.scheduleInTicks(20 * 1, (callback) => {
                event.player.teleportTo('minecraft:overworld', 0, 250, 0, 0, 0)
                event.player.potionEffects.add('minecraft:slow_falling', 60 * 20, 0)
            })
    }
})