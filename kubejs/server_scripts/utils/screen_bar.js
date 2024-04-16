function initAllBar(player) {
    if (!player.persistentData.contains(resourceCount)) {
        player.persistentData.putInt(resourceCount, 0)
    }
    if (!player.persistentData.contains(resourceCountMax)) {
        player.persistentData.putInt(resourceCountMax, defaultResourceMax)
    }
    if (!player.persistentData.contains(warpCount)) {
        player.persistentData.putInt(warpCount, 0)
    }
    if (!player.persistentData.contains(warpCountMax)) {
        player.persistentData.putInt(warpCountMax, defaultWarpMax)
    }
    let resourcePercent = player.persistentData.getInt(resourceCount) / player.persistentData.getInt(resourceCountMax)
    let warpPercent = player.persistentData.getInt(warpCount) / player.persistentData.getInt(warpCountMax)
    let visible = false
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    player.paint({ barBackGround: { type: 'rectangle', x: 11, y: '-$screenH/2+49', w: 22, h: 101, alignX: 'left', alignY: 'bottom', texture: 'kubejs:textures/gui/resource_bar.png', visible: visible }, resourceBarOverlay: { type: 'rectangle', x: 11, y: '-$screenH/2+49', v0: 1 - resourcePercent, v1: 1, w: 11, h: 101 * resourcePercent, alignX: 'left', alignY: 'bottom', texture: 'kubejs:textures/gui/resource_bar_overlay.png', visible: visible }, warpBarOverlay: { type: 'rectangle', x: 22, y: '-$screenH/2+49', v0: 1 - warpPercent, v1: 1, w: 11, h: 101 * warpPercent, alignX: 'left', alignY: 'bottom', texture: 'kubejs:textures/gui/warp_bar_overlay.png', visible: visible } })
}

function checkAndHideAllBar(player) {
    let visible = false
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    player.paint({ barBackGround: { visible: visible }, resourceBarOverlay: { visible: visible }, warpBarOverlay: { visible: visible } })
}

// 资源条
function updateResourceBar(player, cur, max, visible) {
    let percent = cur / max
    player.paint({ barBackGround: { visible: visible }, resourceBarOverlay: { v0: 1 - percent, h: 101 * percent, visible: visible } })
}

function updateResourceCount(player, count) {
    let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    if (count > maxCount) {
        count = maxCount
    }
    if (count < 0) {
        count = 0
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

// 扭曲条
function updateWarpBar(player, cur, max, visible) {
    let percent = cur / max
    player.paint({ barBackGround: { visible: visible }, warpBarOverlay: { v0: 1 - percent, h: 101 * percent, visible: visible } })
}

/**
 * 更新扭曲值
 * @param {Internal.Player} player 
 * @param {Number} count 
 */
function updateWarpCount(player, count) {
    let maxCount = player.persistentData.getInt(warpCountMax) ?? defaultWarpMax
    if (count > maxCount) {
        count = maxCount
    }
    if (count < 0) {
        count = 0
    }
    let visible = false
    player.persistentData.putInt(warpCount, count)
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    updateWarpBar(player, count, maxCount, visible)
}

function updateWarpMaxCount(player, maxCount) {
    let visible = false
    let count = player.persistentData.getInt(warpCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(warpCount, count)
    }
    player.persistentData.putInt(warpCountMax, maxCount)
    if (checkCurios(player, 'create:goggles')) {
        visible = true
    }
    updateWarpBar(player, count, maxCount, visible)
}



// 饰品栏校验
function checkCurios(player, itemId) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of(itemId), player);
    return slotResult.isPresent()
}