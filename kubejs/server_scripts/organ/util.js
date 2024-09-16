/**
 * 获取器官数量逻辑
 * @param {Internal.ServerPlayer} player 
 * @returns {Number} 
 */
function getOrganCount(player) {
    let typeMap = getPlayerChestCavityTypeMap(player)
    let organCount = 0
    player.chestCavityInstance.inventory.allItems.forEach(item => {
        let organData = $ChestCavityUtil.lookupOrgan(item, null)
        if (organData && !organData.organScores.isEmpty()) {
            organCount = organCount + 1
        }
    })
    let onlySet = new Set()
    if (typeMap.has('kubejs:organ_count_only')) {
        typeMap.get('kubejs:organ_count_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organCount = organCountOnlyStrategies[organ.id](player, organ, organCount)
            }
        })
    }
    if (typeMap.has('kubejs:organ_count')) {
        typeMap.get('kubejs:organ_count').forEach(organ => {
            organCount = organCountStrategies[organ.id](player, organ, organCount)
        })
    }
    return organCount
}

/**
 * 器官数量策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Number):Number>}
 */
const organCountStrategies = {

}


/**
 * 器官数量唯一策略
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Number):Number>}
 */
const organCountOnlyStrategies = {
    'kubejs:fish_in_warp': function (player, organ, organCount) {
        let typeMap = getPlayerChestCavityTypeMap(player)
        if (typeMap.has('kubejs:warp')) {
            organCount -= typeMap.get('kubejs:warp').length * 1
        }
        return organCount
    },
}