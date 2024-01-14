BlockEvents.rightClicked('minecraft:grass_block', event => {
    if (!event.player) return;
    if (event.player.stages.has('flos_magic_stage_1') &&
        Math.random() < 0.2 &&
        event.getItem() == 'minecraft:bone_meal' &&
        event.block.getUp() == 'minecraft:air') {
        let x = event.block.x
        let y = event.block.y
        let z = event.block.z
        x += Math.floor(Math.random() * 7) - 3
        z += Math.floor(Math.random() * 7) - 3

        if (event.level.getBlock(x, y, z) == 'minecraft:grass_block' &&
            event.level.getBlock(x, y + 1, z) == 'minecraft:air') {
            event.server.runCommandSilent(`/setblock ${x} ${y + 1} ${z} minecraft:wither_rose`)
            event.player.stages.remove('flos_magic_stage_1')
            event.player.stages.add('flos_magic_stage_2')
        }
    }
})

