const $ChestCavityUtil = Java.loadClass("net.tigereye.chestcavity.util.ChestCavityUtil")
const $CCItems = Java.loadClass("net.tigereye.chestcavity.registration.CCItems")

/**
* 获取某个半径内的实体
* @param {Internal.Level} level
* @param {Vec3} pos
* @param {Number} radius
* @returns {Array<Internal.Entity>}
*/
function getLivingWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(pos) <= radius) {
            entityList.push(entity)
        }
    })
    return entityList
}

/**
* @param {Internal.Player} player
* @returns {Boolean}
*/
function isPlayerOnFire(player) {
    let itemMap = getPlayerChestCavityItemMap(player)
    return itemMap.has('kubejs:immortal_volcanic_rock') || player.isOnFire()
}



/**
* @param {Internal.Player} player
*/
function revolSteamEngine(player) {
    let count = player.persistentData.getInt(resourceCount)
    if (player.hasEffect('kubejs:burning_heart')) {
        let effect = player.getEffect('kubejs:burning_heart')
        player.removeEffect('kubejs:burning_heart')
        player.potionEffects.add('kubejs:flaring_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else if (player.hasEffect('kubejs:flaring_heart')) {
        let effect = player.getEffect('kubejs:flaring_heart')
        player.removeEffect('kubejs:flaring_heart')
        player.potionEffects.add('kubejs:burning_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else {
        updateResourceCount(player, count + 25)
    }
}