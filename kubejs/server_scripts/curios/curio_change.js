/**
 * @param {Internal.CurioChangeEvent} event 
 * @returns 
 */
global.curioChange = event => {
    if (event.entity && event.entity.isPlayer()) {
        if (curiosTakeOffStrategies[event.getFrom().id]) {
            curiosTakeOffStrategies[event.getFrom().id](event)
        }
        if (curiosTakeOnStrategies[event.getTo().id]) {
            curiosTakeOnStrategies[event.getTo().id](event)
        }
    }
}

const curiosTakeOffStrategies = {
    'create:goggles': function (event) {
        event.entity.paint({ barBackGround: { visible: false }, resourceBarOverlay: { visible: false }, warpBarOverlay: { visible: false } })
    },
}

const curiosTakeOnStrategies = {
    'create:goggles': function (event) {
        initAllBar(event.entity)
    },
}