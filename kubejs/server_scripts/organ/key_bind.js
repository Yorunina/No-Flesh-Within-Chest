// priority: 10
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed_only')) {
        typeMap.get('kubejs:key_pressed_only').forEach(organ => {
            if (!onlySet.has(organ.id) && !coolDowns.isOnCooldown(Item.of(organ.id))) {
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
    'kubejs:illithids': function (event, organ) {
        let player = event.player
        let particleCarrot = Utils.particleOptions(`dust 1 0 0 1`)
        let ray = player.rayTrace(32, true)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('goety:wild_rage', ray.entity.maxHealth > 100 ? 20 * 10 : 20 * 60)
            player.addItemCooldown('kubejs:illithids', 20 * 60)
            event.level.spawnParticles(particleCarrot, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
};
