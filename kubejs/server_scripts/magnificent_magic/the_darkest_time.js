/**
 * 宏伟魔法之一，至暗时刻
 */
PlayerEvents.tick(event => {
    let player = event.player
    if (player.age % 20 != 0) return
    if (!player.stages.has(theDarkestTime)) return
    
})