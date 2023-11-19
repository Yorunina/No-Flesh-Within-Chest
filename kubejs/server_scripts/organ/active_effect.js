// priority: 0
global.updatePlayerActiveStatus = player => {
    let typeMap = getPlayerChestCavityTypeMap(player);
    global.ORGAN_LIST.forEach(organ => {
        if (organ.organActiveScores.length != 0) {
            organ.organActiveScores.forEach(activeScore => {
                registeActiveScore(player, typeMap, activeScore)
            })
        }
    })
}

function registeActiveScore(player, typeMap, activeScore) {
    if (typeMap.has(activeScore.activeTag)) {
        let value = eval(activeScore.valueString.replace('${this}', typeMap.get(activeScore.activeTag)))
        player.modifyAttribute(activeScore.attribute.key, activeScore.attribute.name,  value, activeScore.operation);
    }
}