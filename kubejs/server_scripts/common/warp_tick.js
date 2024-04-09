// priority: 10
PlayerEvents.tick(event => {
    let player = event.player
    if (player.age % 20 != 0) return
    let warp = player.persistentData.getInt(warpCount) ?? 0
    let maxWarp = player.persistentData.getInt(warpCountMax) ?? defaultWarpMax
    if (warp > 0){
        if (!(player.age % 4200 != 0)){ WhetherWarpappen(player,warp,maxWarp,event,((Math.random()*100)|0)+1) }
    }
    
})
//是否发生扭曲
function WhetherWarpappen(player,warp,maxWarp,event,num) {
    if(player.hasEffect('kubejs:warpward')) return;
    let perwarp = (warp / maxWarp)*100
    if(perwarp < num) return;
    if((Math.sqrt(warp)*8)<(Math.random()*100)) return;
    WhenWarphappen(player,warp,maxWarp,event,num)
}
//发生扭曲事件
function WhenWarphappen(player,warp,maxWarp,event,num) {
    if(num<=4){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.1" }))
        player.tell(lunaseverrandomGet(StrangeWhispers))
        player.giveExperiencePoints(((Math.random()*10)|0)+1)
        return;
    }
    if(num<=8){
		randomPlaySoundWarp(player,Math.random())
    }
    if(num<=12){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.2" }))
        player.tell(lunaseverrandomGet(TrailingNoise))
        player.server.entities.filterSelector(player).playSound('alexsmobs:guster_idle')
        return;
    }
    if(num<=16){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.3" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('minecraft:weakness', 2400 , lvl , false, false)
        return;
    }
    if(num<=20){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.4" }))
        player.potionEffects.add('minecraft:nausea', warp * 10 , 0 , false, false)
        return;
    }
    if(num<=24){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.5" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('kubejs:unnatural_hunger', 2400 , lvl , false, false)
        return;
    }
    if(num<=28){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.6" }))
        player.tell(lunaseverrandomGet(TrailingNoise))
        player.server.entities.filterSelector(player).playSound('alexsmobs:guster_idle')
        return;
    }
    if(num<=32){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.7" }))
        player.server.entities.filterSelector(player).playSound('iceandfire:ghost_jumpscare')
        if(Math.random()<0.5){warpSpawnMobNear(player,'goety:wraith',10,3,10)}
        else{warpSpawnMobNear(player,'iceandfire:ghost',10,3,10)}
        return;
    }
    if(num<=36){
		randomPlaySoundWarp(player,Math.random())
    }
    if(num<=40){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.8" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('goety:sun_allergy', 2400 , lvl , false, false)
        return;
    }
    if(num<=44){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.9" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('minecraft:mining_fatigue', 600 , lvl , false, false)
        return;
    }
    if(num<=48){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.3" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('goety:soul_hunger', 2400 , lvl , false, false)
        return;
    }
    if(num<=52){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.10" }))
        player.potionEffects.add('minecraft:night_vision', warp * 40 , 0 , false, false)
        return;
    }
    if(num<=56){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.11" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('kubejs:deathgaze', 3600 , lvl , false, false)
        return;
    }
    if(num<=60){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.12" }))
        player.server.entities.filterSelector(player).playSound('minecraft:block.sculk_shrieker.shriek')
        player.potionEffects.add('goety:nyctophobia', warp * 10 , 0 , false, false)
        return;
    }
    if(num<=64){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.13" }))
        player.server.entities.filterSelector(player).playSound('graveyard:entity.nameless_hanged.interact')
        return;
    }
    if(num<=68){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.7" }))
        player.server.entities.filterSelector(player).playSound('iceandfire:ghost_jumpscare')
        warpSpawnMobNear(player,'iceandfire:ghost',10,3,10)
        warpSpawnMobNearpardon(player,'iceandfire:ghost',10,3,10)
        return;
    }
    if(num<=72){
        player.potionEffects.add('goety:sense_loss', warp * 5 , 0 , false, false)
        return;
    }
    if(num<=76){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.14" }))
        updateWarpCount(player, warp - 1)
        return;
    }
    if(num<=80){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.1" }))
        player.tell(lunaseverrandomGet(StrangeWhispers))
        player.giveExperiencePoints(warp*2)
        return;
    }
    if(num<=84){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.5" }))
        let lvl = Math.min(2,(warp/15)|0)
        player.potionEffects.add('kubejs:unnatural_hunger', 4000 , lvl , false, false)
        return;
    }
    if(num<=88){
        updateWarpCount(player, warp + 1)
        WhenWarphappen(player,warp,maxWarp,event,((Math.random()*12)|0)+1)
        event.server.scheduleInTicks(200, callback => {
            WhenWarphappen(player,warp,maxWarp,event,((Math.random()*100)|0)+1)
        })
        return;
    }
    if(num<=92){
        player.server.entities.filterSelector(player).playSound('minecraft:block.sculk_shrieker.shriek')
        player.potionEffects.add('goety:nyctophobia', warp * 10 , 0 , false, false)
        warpSpawnMobNear(player,'witherstormmod:sickened_spider',3,1,3)
        warpSpawnMobNear(player,'witherstormmod:sickened_spider',3,1,3)
        warpSpawnMobNearpardon(player,'witherstormmod:sickened_spider',3,1,3)
        return;
    }
    if(num<=100){
        player.setStatusMessage(Text.lightPurple({ "translate": "kubejs.msg.warphappen.7" }))
        player.server.entities.filterSelector(player).playSound('iceandfire:ghost_jumpscare')
        warpSpawnMobNear(player,'iceandfire:ghost',10,3,10)
        warpSpawnMobNear(player,'iceandfire:ghost',10,3,10)
        warpSpawnMobNearpardon(player,'iceandfire:ghost',15,5,15)
        warpSpawnMobNearpardon(player,'iceandfire:ghost',15,3,15)
        warpSpawnMobNearpardon(player,'iceandfire:ghost',10,3,10)
        warpSpawnMobNearpardon(player,'iceandfire:ghost',10,3,10)
        return;
    }
    
}
//随机播放阳间音效
function randomPlaySoundWarp(player,rand){
    if(rand<0.1){player.server.entities.filterSelector(player).playSound('biomancy:flesh_block.place')
        return;}
    if(rand<0.2){player.server.entities.filterSelector(player).playSound('biomancy:entity.generic.mew_purr')
        return;}
    if(rand<0.3){player.server.entities.filterSelector(player).playSound('graveyard:entity.ghoul.roar')
        return;}
    if(rand<0.4){player.server.entities.filterSelector(player).playSound('iceandfire:cockatrice_die')
        return;}
    if(rand<0.5){player.server.entities.filterSelector(player).playSound('graveyard:entity.nameless_hanged.ambient')
        return;}
    if(rand<0.6){player.server.entities.filterSelector(player).playSound('graveyard:entity.nameless_hanged.breath')
        return;}
    if(rand<0.7){player.server.entities.filterSelector(player).playSound('meetyourfight:entity.bellringer.idle')
        return;}
    if(rand<0.8){player.server.entities.filterSelector(player).playSound('alexsmobs:murmur_attack')
        return;}
    if(rand<0.9){player.server.entities.filterSelector(player).playSound('minecraft:entity.creeper.primed')
        return;}
    if(rand<=1){player.server.entities.filterSelector(player).playSound('goety:wraith_ambient')
        return;}
}
//在附近生成生物
function warpSpawnMobNear(player,mobid,a,b,c){
    let pos = player.position()
    let x = (pos.x()+((Math.random() -0.5)*a))|0
    let y = (pos.y()+((Math.random() -0.5)*b)) |0
    let z = (pos.z()+((Math.random() -0.5)*c))|0
    let Ent = player.level.getBlock(x,y,z).createEntity(mobid)
    let spawn = player.level.addFreshEntity(Ent)
    console.log(Ent,spawn)
}
//在附近生成三免生物
function warpSpawnMobNearpardon(player,mobid,a,b,c){
    let pos = player.position()
    let x = (pos.x()+((Math.random() -0.5)*a))|0
    let y = (pos.y()+((Math.random() -0.5)*b)) |0
    let z = (pos.z()+((Math.random() -0.5)*c))|0
    let Ent = player.level.getBlock(x,y,z).createEntity(mobid)
    Ent.potionEffects.add('kubejs:eldritch_lackey', 600 , 0 , false, false)
    let spawn = player.level.addFreshEntity(Ent)
    console.log(Ent,spawn)
}