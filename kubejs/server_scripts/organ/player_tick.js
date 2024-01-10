PlayerEvents.tick(event => {
    let player = event.player
    if (event.server.tickCount % 20 != 0) {
        return
    }
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:player_tick')) {
        typeMap.get('kubejs:player_tick').forEach(organ => {
            organPlayerTickStrategies[organ.id](event, organ)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:player_tick_only')) {
        typeMap.get('kubejs:player_tick_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerTickOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})


/**
 * 玩家Tick秒级策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const organPlayerTickStrategies = {

};

/**
 * 玩家Tick秒级唯一策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const organPlayerTickOnlyStrategies = {
    'kubejs:platelet_dispatcher': function (event, organ) {
        let player = event.player
        if (player.health != player.maxHealth && player.health > player.maxHealth * 0.75) {
            player.heal(1)
        }
    },

};