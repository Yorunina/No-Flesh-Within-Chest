const playerAttributeMap = new Map();

/**
 * 全局函数，用于更新玩家的激活效果状态
 * @param {Internal.Player} player 
 */

global.updatePlayerActiveStatus = player => {
    let typeMap = getPlayerChestCavityTypeMap(player);
    let uuid = String(player.getUuid());
    let attributeMap = new Map();
    typeMap.get('kubejs:active').forEach(organ => {
        organActiveScoreStrategies[organ.id](typeMap, attributeMap)
    })
    playerAttributeMap.set(uuid, attributeMap);
    attributeMap.forEach((value, key, map) => {
        player.modifyAttribute(global.ATTRIBUTE_MAP[key].key, key, value, global.ATTRIBUTE_MAP[key].operation);
    })
}

/**
 * 获取玩家属性表
 * @param {Internal.Player} player 
 * @returns {Map}
 */

function getPlayerAttributeMap(player) {
    let uuid = String(player.getUuid());
    if (playerAttributeMap.has(uuid)) {
        return playerAttributeMap.get(uuid);
    }
    return new Map();
}

/**
 * 设置玩家属性表
 * @param {Internal.player} player 
 * @param {Map} attriMap 
 */
function setPlayerAttributeMap(player, attriMap) {
    let uuid = String(player.getUuid());
    playerAttributeMap.set(uuid, attriMap)
}


/**
 * 清除玩家所有已经添加的属性
 * @param {Internal.Player} player 
 * @returns
 */
function clearAllActivedModify(player) {
    player.removeAttribute(global.HEALTH_UP.key, global.HEALTH_UP.name);
    player.removeAttribute(global.ATTACK_UP.key, global.ATTACK_UP.name);
}


// 简单策略
let organActiveScoreStrategies = {
    "kubejs:health_appendix": function (typeMap, attributeMap) {
        let value = typeMap.get('kubejs:appendix').length * 1.5
        if (attributeMap.has(global.HEALTH_UP.name)) {
            value = value + attributeMap.get(global.HEALTH_UP.name)
        }
        attributeMap.set(global.HEALTH_UP.name, value)
    },
};
