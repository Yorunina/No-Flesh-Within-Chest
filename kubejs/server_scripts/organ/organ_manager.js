// priority: 1000

/**
 * 数据包高优先级加载器官初始属性
 */
ServerEvents.highPriorityData(event => {
    function registerOrganScore(organ) {
        let item = organ.itemID.split(':')[1]
        event.addJson(`chestcavity:organs/kubejs/${item}.json`, { itemID: organ.itemID, pseudoOrgan: organ.pseudoOrgan, organScores: organ.organScores })
    }

    global.ORGAN_LIST.forEach(organ => {
        registerOrganScore(organ)
    })
});



