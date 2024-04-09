//吃僵尸之脑
ItemEvents.foodEaten('luna_flesh_reforged:zombie_brain', event => {
    let player = event.player
    let warp = player.persistentData.getInt(warpCount) ?? 0
    let maxWarp = player.persistentData.getInt(warpCountMax) ?? defaultWarpMax
    if(player.hasEffect('luna_flesh_reforged:unnatural_hunger')){
        let unhunger = player.getEffect('luna_flesh_reforged:unnatural_hunger')
        let time = unhunger.getDuration()
        let lvl = unhunger.getAmplifier()
        player.removeEffect('luna_flesh_reforged:unnatural_hunger')
        if(time > 30*20 && lvl > 0){
            time = time - 600
			lvl = lvl - 1
            player.potionEffects.add('luna_flesh_reforged:unnatural_hunger', time , lvl , false, false)
        }
    }
    if(Math.random()<0.2) return;
    if(warp<50){updateWarpCount(player, warp + 1)}
    else{
        if(Math.random()<0.5) return;
        if(warp>75){
            if(Math.random()<0.7) return;
        }
        updateWarpCount(player, warp + 1)
    }
})