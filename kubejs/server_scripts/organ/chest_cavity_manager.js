// priority: 0

const playerChestCavityHashMap = new Map();
const playerChestCavityPosMap = new Map();
const playerChestCavityItemMap = new Map();
const playerChestCavityTypeMap = new Map();

PlayerEvents.loggedIn((event) => {
    initChestCavityIntoMap(event.player, false);
    
    if (event.player.persistentData.contains('organ_actived') && 
    event.player.persistentData.getInt('organ_actived') == 1) {
        global.updatePlayerActiveStatus(event.player)
    }
});

PlayerEvents.loggedOut((event) => {
    let uuid = String(event.player.getUuid());
    playerChestCavityHashMap.delete(uuid)
    playerChestCavityPosMap.delete(uuid)
    playerChestCavityItemMap.delete(uuid)
    playerChestCavityTypeMap.delete(uuid)
});


PlayerEvents.inventoryClosed((event) => {
    let player = event.player;
    if (player.mainHandItem != 'chestcavity:chest_opener') {
        return;
    }
    initChestCavityIntoMap(player, true);
});


/**
 * 将玩家信息插入到器官表中（初始化器官表
 * @param {Internal.player} player 
 * @param {Boolean} removeFlag 
 * @returns 
 */
function initChestCavityIntoMap(player, removeFlag) {
    let playerNbt = player.getNbt();
    let chestInventory = playerNbt.ChestCavity.Inventory;
    let newHash = chestInventory.hashCode();
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        let oldHash = playerChestCavityHashMap.get(uuid);
        if (oldHash == newHash) {
            return;
        }
    }
    let chestInventoryPosMap = new Map();
    let chestInventoryItemMap = new Map();
    let chestInventoryTypeMap = new Map();

    // 遍历器官并初始化玩家Map
    for (let i = 0; i < chestInventory.length; i++) {
        let organ = chestInventory[i];
        chestInventoryPosMap.set(organ.getInt('Slot'), organ);
        let itemId = String(organ.getString('id'));
        if (chestInventoryItemMap.has(itemId)) {
            let itemList = chestInventoryItemMap.get(itemId);
            itemList.push(organ);
            chestInventoryItemMap.set(itemId, itemList);
        } else {
            chestInventoryItemMap.set(itemId, [organ]);
        }
        let tagList = Item.of(itemId).getTags().toArray();
        for (let i = 0; i < tagList.length; i++) {
            let tag = tagList[i].location()
            if (tag.getNamespace() != 'kubejs') {
                continue
            }
            tag = String(tag)
            if (chestInventoryTypeMap.has(tag)) {
                let itemList = chestInventoryTypeMap.get(tag);
                itemList.push(organ);
                chestInventoryTypeMap.set(tag, itemList);
            } else {
                chestInventoryTypeMap.set(tag, [organ]);
            }
        }
    }
    // 将常用信息map载入到内存中，提高性能
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap);
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap);
    playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap);
    playerChestCavityHashMap.set(uuid, newHash);
    player.tell('完成初始化');
    if (removeFlag) {
        player.persistentData.putInt('organ_actived', 0)
        clearAllActivedModify(player)
    }
    return;
}

/**
 * 获取玩家器官位置表
 * @param {Internal.Player} player 
 * @returns {Map}
 */

function getPlayerChestCavityPosMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return playerChestCavityPosMap.get(uuid);
    }
    initChestCavityIntoMap(player);
    return playerChestCavityPosMap.get(uuid);
}

/**
 * 获取玩家器官物品表
 * @param {Internal.Player} player 
 * @returns {Map}
 */

function getPlayerChestCavityItemMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return playerChestCavityItemMap.get(uuid);
    }
    initChestCavityIntoMap(player);
    return playerChestCavityItemMap.get(uuid);
}

/**
 * 获取玩家器官类型表
 * @param {Internal.Player} player 
 * @returns {Map}
 */

function getPlayerChestCavityTypeMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityTypeMap.has(uuid)) {
        return playerChestCavityTypeMap.get(uuid);
    }
    initChestCavityIntoMap(player);
    return playerChestCavityTypeMap.get(uuid);
}

/**
 * 校验玩家是否初始化器官
 * @param {Internal.Player} player 
 * @returns {Boolean}
 */

function checkPlayerHasChestCavityMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return true;
    }
    return false;
}
