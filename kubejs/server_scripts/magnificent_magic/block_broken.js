BlockEvents.broken('minecraft:coal_ore', event => {
    let player = event.player;
    if (!player) return;
    if (player.stages.has('flos_magic_stage_0') && Math.random() < 0.1) {
        event.block.popItem('nameless_trinkets:lucky_rock')
        player.stages.remove('flos_magic_stage_0')
        player.stages.add('flos_magic_stage_1')
    }
})