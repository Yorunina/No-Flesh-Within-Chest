// priority: 0

ServerEvents.highPriorityData(event => {
    function registerOrganScore(organ) {
        let item = organ.itemID.split(':')[1]
        event.addJson(`chestcavity:organs/kubejs/${item}.json`, { itemID: organ.itemID, pseudoOrgan: organ.pseudoOrgan, organScores: organ.organScores })
    }

    global.ORGAN_LIST.forEach(organ => {
        registerOrganScore(organ)
    })
});



