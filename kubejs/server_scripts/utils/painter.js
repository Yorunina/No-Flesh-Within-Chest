
function initResourceBar(player) {
    let percent = 0
    player.paint({ resourceBar: { type: 'rectangle', x: 10, y: '-$screenH/2+49', w: 11, h: 98, alignX: 'left', alignY: 'bottom', texture: 'kubejs:textures/gui/resource_bar.png', visible: false }, resourceBarOverlay: { type: 'rectangle', x: 10, y: '-$screenH/2+49', v0: 1 - percent, v1: 1, w: 11, h: 98 * percent, alignX: 'left', alignY: 'bottom', texture: 'kubejs:textures/gui/resource_bar_overlay.png', visible: false }, resourceCount: { type: 'text', text: `0/${defaultResourceMax}`, x: 2, y: '-$screenH/2', alignX: 'left', alignY: 'bottom', scale: 0.8, visible: false } })
}

function updateResourceBar(player, cur, max, visible) {
    let percent = cur / max
    player.paint({ resourceBar: { visible: visible }, resourceBarOverlay: { v0: 1 - percent, h: 98 * percent, visible: visible }, resourceCount: { text: `${cur}/${max}`, visible: visible } })
}

function updateResourceCount(player, count) {
    let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    if (count > maxCount) {
        count = maxCount
    }
    let visible = false
    player.persistentData.putInt(resourceCount, count)
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    updateResourceBar(player, count, maxCount, visible)
}

function updateResourceMaxCount(player, maxCount) {
    let visible = false
    let count = player.persistentData.getInt(resourceCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(resourceCount, count)
    }
    player.persistentData.putInt(resourceCountMax, maxCount)
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    updateResourceBar(player, count, maxCount, visible)
}


function checkCurios(player, itemId) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of(itemId), player);
    return slotResult.isPresent()
}