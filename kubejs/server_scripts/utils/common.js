const $ChestCavityEntity = Java.loadClass("net.tigereye.chestcavity.interfaces.ChestCavityEntity");
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

