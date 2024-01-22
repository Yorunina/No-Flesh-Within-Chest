/**
* 获取某个半径内的实体，自动排除玩家
* @param {Internal.Level} level
* @param {Vec3} pos
* @param {Number} radius
* @returns {Array<Internal.Entity>}
*/
function getEntitiesWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.distanceToSqr(pos) <= radius && !entity.isPlayer()) {
            entityList.push(entity)
        }
    })
    return entityList
}