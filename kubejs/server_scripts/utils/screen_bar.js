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
    let resourceCountNum = player.persistentData.getInt(resourceCount)
    let warpCountNum = player.persistentData.getInt(warpCount)
    let resourcePercent = resourceCountNum / player.persistentData.getInt(resourceCountMax)
    let warpPercent = warpCountNum / player.persistentData.getInt(warpCountMax)
    let visible = false
    if (checkCurios(player, 'kubejs:archivist_eyeglass')) {
        visible = true
    }
    player.paint({
        barBackGround: {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            w: 22,
            h: 101,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/resource_bar.png',
            visible: visible
        },
        resourceBarOverlay: {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            v0: 1 - resourcePercent,
            v1: 1,
            w: 11,
            h: 101 * resourcePercent,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/resource_bar_overlay.png',
            visible: visible
        }, warpBarOverlay: {
            type: 'rectangle',
            x: 22,
            y: '-$screenH/2+49',
            v0: 1 - warpPercent,
            v1: 1,
            w: 11,
            h: 101 * warpPercent,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/warp_bar_overlay.png',
            visible: visible
        }, barCountText: {
            type: 'text',
            x: 13,
            y: '-$screenH/2+59',
            text: `§6${resourceCountNum}§f/§5${warpCountNum}§f`,
            alignX: 'left',
            alignY: 'bottom',
            visible: visible
        }
    })
    if (visible) {
        Utils.server.scheduleInTicks(100, event => {
            player.paint({barCountText: { visible: false }})
        })
    }
}


function updateResourceCount(player, count) {
    let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    if (count > maxCount) {
        count = maxCount
    }
    if (count < 0) {
        count = 0
    }
    player.persistentData.putInt(resourceCount, count)
}

function updateResourceMaxCount(player, maxCount) {
    let count = player.persistentData.getInt(resourceCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(resourceCount, count)
    }
    player.persistentData.putInt(resourceCountMax, maxCount)
}



/**
 * 更新扭曲值
 * @param {Internal.ServerPlayer} player 
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
    player.persistentData.putInt(warpCount, count)
}

function updateWarpMaxCount(player, maxCount) {
    let count = player.persistentData.getInt(warpCount) ?? 0
    if (count > maxCount) {
        count = maxCount
        player.persistentData.putInt(warpCount, count)
    }
    player.persistentData.putInt(warpCountMax, maxCount)
}



// 饰品栏校验
function checkCurios(player, itemId) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of(itemId), player);
    return slotResult.isPresent()
}


/**
 * @param {Internal.ServerPlayer} player 
 * @param {Boolean} visible 
 */
function updateSideBar(player, visible) {
    let curResource = player.persistentData.getInt(resourceCount)
    let maxResource = player.persistentData.getInt(resourceCountMax)
    if (curResource > maxResource) {
        player.persistentData.putInt(resourceCount, maxResource)
        curResource = maxResource
    }

    let curWarp = player.persistentData.getInt(warpCount)
    let maxWarp = player.persistentData.getInt(warpCountMax)
    if (curWarp > maxWarp) {
        player.persistentData.putInt(warpCount, maxWarp)
        curWarp = maxWarp
    }

    let percentWarp = curWarp / maxWarp
    let percentResource = curResource / maxResource

    player.paint({ barBackGround: { visible: visible }, resourceBarOverlay: { v0: 1 - percentResource, h: 101 * percentResource, visible: visible }, warpBarOverlay: { v0: 1 - percentWarp, h: 101 * percentWarp, visible: visible }, barCountText: { text: `§6${curResource}§f/§5${curWarp}§f` } })
}
