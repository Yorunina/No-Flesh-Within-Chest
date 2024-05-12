PlayerEvents.tick(event => {
    let player = event.player
    if (!event.player) { return }

    const api = new $CuriosApi();
    let optionalCurios = api.getCuriosHelper().getEquippedCurios(player)
    if (!optionalCurios.isPresent()) {
        return
    }
    let curios = optionalCurios.resolve().get()

    if (event.player.age % 10 == 0) {
        for (let slot = 0; slot < curios.getSlots(); slot++) {
            let item = curios.getStackInSlot(slot);
            if (curiosEquippedStrategies[item.id]) {
                curiosEquippedStrategies[item.id](event, curios, slot, item)
            }
        }
    }
})

const curiosEquippedStrategies = {
    'kubejs:bunny_hoppers': function (event, curios, slot, item) {
        if (!event.player || event.player.age % 80 != 0) {
            return
        }
        event.player.potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
    },
    'create:goggles': function (event, curios, slot, item) {
        let player = event.player
        let visible = true
        updateResourceBar(player, visible)
        updateWarpBar(player, visible)
    },
}

/**
 * @param {Internal.Player} player 
 * @param {Boolean} visible 
 */
function updateResourceBar(player, visible) {
    let cur = player.persistentData.get(resourceCount)
    let max = player.persistentData.get(resourceCountMax)
    if (cur > max) {
        player.persistentData.putInt(resourceCount, max)
        cur = max
    }
    let percent = cur / max
    player.paint({ barBackGround: { visible: visible }, resourceBarOverlay: { v0: 1 - percent, h: 101 * percent, visible: visible } })
}

/**
 * @param {Internal.Player} player 
 * @param {Boolean} visible 
 */
function updateWarpBar(player, visible) {
    let cur = player.persistentData.get(warpCount)
    let max = player.persistentData.get(warpCountMax)
    if (cur > max) {
        player.persistentData.putInt(warpCount, max)
        cur = max
    }
    let percent = cur / max
    player.paint({ barBackGround: { visible: visible }, warpBarOverlay: { v0: 1 - percent, h: 101 * percent, visible: visible } })
}

