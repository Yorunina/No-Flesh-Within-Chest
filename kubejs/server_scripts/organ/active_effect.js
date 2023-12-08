const playerAttributeMap = new Map();

/**
 * 全局函数，用于更新玩家的激活效果状态
 * @param {Internal.Player} player 
 */

global.updatePlayerActiveStatus = player => {
    let typeMap = getPlayerChestCavityTypeMap(player);
    let uuid = String(player.getUuid());
    let attributeMap = new Map();
    // 激活状态根据Tag区分并遍历可以用于激活的器官方法
    if (typeMap.has('kubejs:active')) {
        typeMap.get('kubejs:active').forEach(organ => {
            organActiveScoreStrategies[organ.id](player, typeMap, attributeMap)
        })
    }
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


/**
 * 器官简单策略模式
 */
let organActiveScoreStrategies = {
    'kubejs:health_appendix': function (player, typeMap, attributeMap) {
        if (typeMap.has('kubejs:appendix')) {
            let value = typeMap.get('kubejs:appendix').length * 1
            if (attributeMap.has(global.HEALTH_UP.name)) {
                value = value + attributeMap.get(global.HEALTH_UP.name)
            }
            attributeMap.set(global.HEALTH_UP.name, value)
        }
    },

    'kubejs:rose_quartz_heart': function (player, typeMap, attributeMap) {
        if (typeMap.has('kubejs:machine')) {
            let healthValue = typeMap.get('kubejs:machine').length * 1
            if (attributeMap.has(global.HEALTH_UP.name)) {
                healthValue = healthValue + attributeMap.get(global.HEALTH_UP.name)
            }
            attributeMap.set(global.HEALTH_UP.name, healthValue)
        }

        if (typeMap.has('kubejs:rose')) {
            let attackValue = typeMap.get('kubejs:rose').length * 0.5
            if (attributeMap.has(global.ATTACK_UP.name)) {
                attackValue = attackValue + attributeMap.get(global.ATTACK_UP.name)
            }
            attributeMap.set(global.ATTACK_UP.name, attackValue)
        }
    },
    
    'kubejs:revolution_cable': function (player, typeMap, attributeMap) {
        if (typeMap.has('kubejs:revolution')) {
            let healthValue = typeMap.get('kubejs:revolution').length * 1
            if (attributeMap.has(global.HEALTH_UP.name)) {
                healthValue = healthValue + attributeMap.get(global.HEALTH_UP.name)
            }
            attributeMap.set(global.HEALTH_UP.name, healthValue)
        }
    }
};