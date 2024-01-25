// priority: 10
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed_only')) {
        typeMap.get('kubejs:key_pressed_only').forEach(organ => {
            if (!onlySet.has(organ.id) || coolDowns.isOnCooldown(Item.of(organ.id))) {
                onlySet.add(organ.id)
                organPlayerKeyPressedOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})


/**
 * 主动策略
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const organPlayerKeyPressedOnlyStrategies = {

};
