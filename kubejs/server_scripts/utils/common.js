const $ChestCavityEntity = Java.loadClass("net.tigereye.chestcavity.interfaces.ChestCavityEntity");
const $ChestCavityUtil = Java.loadClass("net.tigereye.chestcavity.util.ChestCavityUtil")

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
* 获取某个单位胸腔页面
* @param {Internal.Player} player
* @param {Internal.Entity} target
* @returns {Array<I>}
*/
function generateChestCavity(target) {
    let targetEntity = $ChestCavityEntity.of(target)
    if (!targetEntity.isPresent()) {
        return
    }
    let targetInstance = targetEntity.get().getChestCavityInstance()
    if (target.isAlive()) {
        return $ChestCavityUtil.openChestCavity(targetInstance)
    }
}
