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
            organActiveStrategies[organ.id](player, organ, attributeMap)
        })
    }
    let activeOrganSet = new Set()
    if (typeMap.has('kubejs:active_only')) {
        typeMap.get('kubejs:active_only').forEach(organ => {
            if (!activeOrganSet.has(organ.id)) {
                activeOrganSet.add(organ.id)
                organActiveOnlyStrategies[organ.id](player, organ, attributeMap)
            }
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
    let attributeMap = getPlayerAttributeMap(player)
    attributeMap.forEach((value, key, map) => {
        player.removeAttribute(global.ATTRIBUTE_MAP[key].key, global.ATTRIBUTE_MAP[key].name);
    })
}


function attributeMapValueAddition(attributeMap, attribute, modifyValue) {
    if (attributeMap.has(attribute.name)) {
        modifyValue = modifyValue + attributeMap.get(attribute.name)
    }
    attributeMap.set(attribute.name, modifyValue)
}


/**
 * 器官简单策略模式
 */
const organActiveStrategies = {
    'kubejs:health_appendix': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player);
        if (typeMap.has('kubejs:appendix')) {
            let value = typeMap.get('kubejs:appendix').length * 1
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
        }
    },
    'kubejs:rose_quartz_heart': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player);
        if (typeMap.has('kubejs:machine')) {
            let value = typeMap.get('kubejs:machine').length * 2
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
        }

        if (typeMap.has('kubejs:rose')) {
            let value = typeMap.get('kubejs:rose').length * 1
            attributeMapValueAddition(attributeMap, global.ATTACK_UP, value)
        }
    },
    'kubejs:revolution_cable': function (player, organ, attributeMap) {
        let typeMap = getPlayerChestCavityTypeMap(player);
        if (typeMap.has('kubejs:revolution')) {
            let value = typeMap.get('kubejs:revolution').length * 1
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
        }
    },
    'kubejs:magic_vision': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.SPELL_POWER, 0.1)
    },
    'kubejs:love_between_lava_and_ice': function (player, organ, attributeMap) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (itemMap.has('minecraft:blue_ice')) {
            let iceMuti = itemMap.get('minecraft:blue_ice').length * 0.1
            attributeMapValueAddition(attributeMap, global.ICE_SPELL_POWER, iceMuti)
        }
        if (itemMap.has('minecraft:magma')) {
            let fireMuti = itemMap.get('minecraft:magma').length * 0.1
            attributeMapValueAddition(attributeMap, global.FIRE_SPELL_POWER, fireMuti)
        }
    },
    'kubejs:infinity_force': function (player, organ, attributeMap) {
        if (organ.tag && organ.tag.healthUp) {
            let value = organ.tag.healthUp * 1
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, value)
        }
    },
    'kubejs:stomach_tumor': function (player, organ, attributeMap) {
        let posMap = getPlayerChestCavityPosMap(player);
        let pos = organ.getInt('Slot')
        if (posMap.has(pos)) {
            posMap.get(pos)
        }
        let count = 0
        eightDirectionList.forEach(direction => {
            let currentPos = lookPos(direction, pos)
            if (posMap.has(currentPos) && posMap.get(currentPos).id == organ.id) {
                count++
            }
        })
        if (count > 2) {
            attributeMapValueAddition(attributeMap, global.HEALTH_UP, 6)
        }
    },
    'kubejs:leviathan_rib': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ARMOR_TOUGHNESS, 2)
    },
};

const organActiveOnlyStrategies = {
    'kubejs:telescopic_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 1)
    },
    'kubejs:telescopic_tool_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.REACH_DISTANCE, 2)
    },
    'kubejs:telescopic_attack_arm': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.ATTACK_RANGE, 1)
    },
    'kubejs:nether_star_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, 0.2)
    },
    'kubejs:wrath_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.CRITICAL_HIT, -0.8)
        attributeMapValueAddition(attributeMap, global.CRITICAL_DAMAGE, 3)
    },
    'kubejs:sloth_shard': function (player, organ, attributeMap) {
        attributeMapValueAddition(attributeMap, global.KNOCKBACK_RESISTANCE, 0.8)
    },
}