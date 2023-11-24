const playerAttributeMap = new Map();

/**
 * 全局函数，用于更新玩家的激活效果状态
 * @param {Internal.Player} player 
 */

global.updatePlayerActiveStatus = player => {
    let typeMap = getPlayerChestCavityTypeMap(player);
    let uuid = String(player.getUuid());
    let attributeMap = new Map();
    global.ORGAN_LIST.forEach(organ => {
        if (organ.organActiveScores.length != 0) {
            organ.organActiveScores.forEach(activeScore => {
                let value = calActiveScoreValue(typeMap, activeScore)
                if (attributeMap.has(activeScore.attributeName)) {
                    value = value + attributeMap.get(activeScore.attributeName)
                } 
                attributeMap.set(activeScore.attributeName, value)
            })
        }
    })
    playerAttributeMap.set(uuid, attributeMap);
    attributeMap.forEach((value, key, map) => {
        player.modifyAttribute(global.ATTRIBUTE_MAP[key].key, key, value, global.ATTRIBUTE_MAP[key].operation);
    })
}

/**
 * 计算玩家属性数值
 * @param {Map} typeMap 
 * @param {OrganActiveScore} activeScore 
 * @returns 
 */

function calActiveScoreValue(typeMap, activeScore) {
    let value = 0;
    if (typeMap.has(activeScore.activeTag)) {
        value = eval(activeScore.valueString.replace('${this}', typeMap.get(activeScore.activeTag)))
    }
    return value;
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