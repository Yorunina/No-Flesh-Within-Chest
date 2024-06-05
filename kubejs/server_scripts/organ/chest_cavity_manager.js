// priority: 1

const playerChestCavityHashMap = new Map();
const playerChestCavityPosMap = new Map();
const playerChestCavityItemMap = new Map();
const playerChestCavityTypeMap = new Map();

/**
 * 玩家登入时初始化它的胸腔内容并插入到表内
 * 如果之前服用过激活药则进行初始化激活
 */
PlayerEvents.loggedIn((event) => {
    event.server.scheduleInTicks(5, ctx => {
        initAllBar(event.player)
        global.initChestCavityIntoMap(event.player, false)
        if (event.player.persistentData.contains(organActive) &&
            event.player.persistentData.getInt(organActive) == 1) {
            global.updatePlayerActiveStatus(event.player)
        }
    })
});

PlayerEvents.respawned((event) => {
    if (event.player.persistentData.contains(organActive) &&
        event.player.persistentData.getInt(organActive) == 1) {
        global.updatePlayerActiveStatus(event.player)
    }
});

/**
 * 玩家登出时释放该部分Map数据
 */
PlayerEvents.loggedOut((event) => {
    let uuid = String(event.player.getUuid());
    playerChestCavityHashMap.delete(uuid)
    playerChestCavityPosMap.delete(uuid)
    playerChestCavityItemMap.delete(uuid)
    playerChestCavityTypeMap.delete(uuid)
});

// 只有当玩家手持开胸器并打开gui界面的时候才触发初始化效果
PlayerEvents.inventoryClosed((event) => {
    let player = event.player
    if (!player.mainHandItem.hasTag('kubejs:chest_opener') && !player.offHandItem.hasTag('kubejs:chest_opener')) {
        return
    }
    global.initChestCavityIntoMap(player, true)
    let itemMap = getPlayerChestCavityItemMap(player)
    if (player.persistentData.contains(organActive) && player.persistentData.getInt(organActive) == 1) {
        return
    }
    if (itemMap.has('kubejs:long_lasting_pill') || itemMap.has('kubejs:long_lasting_pill_gold')) {
        global.updatePlayerActiveStatus(event.player)
        player.persistentData.putInt(organActive, 1)
    }
});


/**
 * 将玩家信息插入到器官表中（初始化器官表
 * @param {Internal.ServerPlayer} player 
 * @param {Boolean} removeFlag 
 * @returns 
 */

global.initChestCavityIntoMap = (player, removeFlag) => {
    let chestInventory = player.getChestCavityInstance().inventory.tags
    let newHash = chestInventory.hashCode()
    let uuid = String(player.getUuid())
    if (playerChestCavityHashMap.has(uuid)) {
        let oldHash = playerChestCavityHashMap.get(uuid)
        if (oldHash == newHash) {
            return;
        }
    }
    let chestInventoryPosMap = new Map()
    let chestInventoryItemMap = new Map()
    let chestInventoryTypeMap = new Map()

    // 遍历器官并初始化玩家Map
    for (let i = 0; i < chestInventory.length; i++) {
        let organ = chestInventory[i];
        chestInventoryPosMap.set(organ.getInt('Slot'), organ)
        let itemId = String(organ.getString('id'))
        if (chestInventoryItemMap.has(itemId)) {
            let itemList = chestInventoryItemMap.get(itemId)
            itemList.push(organ);
            chestInventoryItemMap.set(itemId, itemList)
        } else {
            chestInventoryItemMap.set(itemId, [organ])
        }
        let tagList = Item.of(itemId).getTags().toArray()
        for (let i = 0; i < tagList.length; i++) {
            let tag = tagList[i].location()
            if (tag.getNamespace() != 'kubejs') {
                continue
            }
            tag = String(tag)
            if (chestInventoryTypeMap.has(tag)) {
                let itemList = chestInventoryTypeMap.get(tag)
                itemList.push(organ);
                chestInventoryTypeMap.set(tag, itemList)
            } else {
                chestInventoryTypeMap.set(tag, [organ])
            }
        }
    }
    // 将常用信息map载入到内存中，提高性能
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap)
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap)
    playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap)
    playerChestCavityHashMap.set(uuid, newHash)
    if (removeFlag) {
        player.persistentData.putInt(organActive, 0)
        clearAllActivedModify(player)
    }
    return;
}

/**
 * 获取玩家器官位置表
 * @param {Internal.ServerPlayer} player 
 * @returns {Map}
 */

function getPlayerChestCavityPosMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityPosMap.has(uuid)) {
        return playerChestCavityPosMap.get(uuid);
    }
    global.initChestCavityIntoMap(player, true)
    return playerChestCavityPosMap.get(uuid) ?? new Map();
}

/**
 * 获取玩家器官物品表
 * @param {Internal.ServerPlayer} player 
 * @returns {Map}
 */

function getPlayerChestCavityItemMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityItemMap.has(uuid)) {
        return playerChestCavityItemMap.get(uuid);
    }
    global.initChestCavityIntoMap(player, true)
    return playerChestCavityItemMap.get(uuid) ?? new Map();
}

/**
 * 获取玩家器官类型表
 * @param {Internal.ServerPlayer} player 
 * @returns {Map}
 */

function getPlayerChestCavityTypeMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityTypeMap.has(uuid)) {
        return playerChestCavityTypeMap.get(uuid);
    }
    global.initChestCavityIntoMap(player, true)
    return playerChestCavityTypeMap.get(uuid) ?? new Map();
}

/**
 * 校验玩家是否初始化器官
 * @param {Internal.ServerPlayer} player 
 * @returns {Boolean}
 */

function checkPlayerHasChestCavityMap(player) {
    if (playerChestCavityHashMap.has(String(player.getUuid()))) {
        return true;
    }
    return false;
}

const fourDirectionList = ['up', 'down', 'left', 'right']
const eightDirectionList = ['up', 'down', 'left', 'right', 'rightUp', 'rightDown', 'leftUp', 'leftDown']
const rightUp22DirectionList = ['rightUp', 'up', 'right']
const leftUp22DirectionList = ['leftUp', 'up', 'left']
const rightDown22DirectionList = ['rightDown', 'down', 'right']
const leftDown22DirectionList = ['leftDown', 'down', 'left']
const box22DirectionList = [rightUp22DirectionList, leftUp22DirectionList, rightDown22DirectionList, leftDown22DirectionList]


function lookPos(direction, pos) {
    switch (direction) {
        case 'up':
            return (pos - 9 >= 0) ? (pos - 9) : -1
        case 'down':
            return (pos + 9 < 27) ? (pos + 9) : -1
        case 'left':
            return (pos % 9 - 1 >= 0) ? (pos - 1) : -1
        case 'right':
            return (pos % 9 + 1 < 9) ? (pos + 1) : -1
        case 'rightUp':
            return (pos % 9 + 1 < 9 && pos - 9 >= 0) ? (pos - 8) : -1
        case 'rightDown':
            return (pos % 9 + 1 < 9 && pos + 9 < 27) ? (pos + 10) : -1
        case 'leftUp':
            return (pos % 9 - 1 >= 0 && pos - 9 >= 0) ? (pos - 10) : -1
        case 'leftDown':
            return (pos % 9 - 1 >= 0 && pos + 9 < 27) ? (pos + 8) : -1
        default:
            return -1
    }
}

function getOppoPos(pos) {
    return 18 * Math.floor(pos / 9) - pos + 8
}

global.getPlayerChestCavityItemMap = player => {
    return getPlayerChestCavityItemMap(player)
}


/**
 * 将玩家信息插入到器官表中（初始化器官表
 * @param {Internal.ServerPlayer} player 
 * @param {Boolean} removeFlag 
 * @returns 
 */

function initChestCavityIntoMap(player, removeFlag) {
    let chestInventory = player.getChestCavityInstance().inventory.tags
    let newHash = chestInventory.hashCode()
    let uuid = String(player.getUuid())
    if (playerChestCavityHashMap.has(uuid)) {
        let oldHash = playerChestCavityHashMap.get(uuid)
        if (oldHash == newHash) {
            return;
        }
    }
    let chestInventoryPosMap = new Map()
    let chestInventoryItemMap = new Map()
    let chestInventoryTypeMap = new Map()

    // 遍历器官并初始化玩家Map
    for (let i = 0; i < chestInventory.length; i++) {
        let organ = chestInventory[i];
        chestInventoryPosMap.set(organ.getInt('Slot'), organ)
        let itemId = String(organ.getString('id'))
        if (chestInventoryItemMap.has(itemId)) {
            let itemList = chestInventoryItemMap.get(itemId)
            itemList.push(organ);
            chestInventoryItemMap.set(itemId, itemList)
        } else {
            chestInventoryItemMap.set(itemId, [organ])
        }
        let tagList = Item.of(itemId).getTags().toArray()
        for (let i = 0; i < tagList.length; i++) {
            let tag = tagList[i].location()
            if (tag.getNamespace() != 'kubejs') {
                continue
            }
            tag = String(tag)
            if (chestInventoryTypeMap.has(tag)) {
                let itemList = chestInventoryTypeMap.get(tag)
                itemList.push(organ);
                chestInventoryTypeMap.set(tag, itemList)
            } else {
                chestInventoryTypeMap.set(tag, [organ])
            }
        }
    }
    // 将常用信息map载入到内存中，提高性能
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap)
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap)
    playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap)
    playerChestCavityHashMap.set(uuid, newHash)
    if (removeFlag) {
        player.persistentData.putInt(organActive, 0)
        clearAllActivedModify(player)
    }
    return;
}