// priority: 0

const playerChestCavityHashMap = new Map();
const playerChestCavityPosMap = new Map();
const playerChestCavityItemMap = new Map();
const playerChestCavityTypeMap = new Map();

PlayerEvents.loggedIn((event) => {
    insertChestCavityIntoMap(event.player, false);
    if (event.player.stages.has('organ_actived')) {
        global.updatePlayerActiveStatus(event.player)
    }
});

PlayerEvents.inventoryClosed((event) => {
    let player = event.player;
    if (player.mainHandItem != 'chestcavity:chest_opener') {
        return;
    }
    insertChestCavityIntoMap(player, true);
});


function insertChestCavityIntoMap(player, removeFlag) {
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
                chestInventoryTypeMap.set(tag, chestInventoryTypeMap.get(tag) + organ.getInt('Count'));
            } else {
                chestInventoryTypeMap.set(tag, 1);
            }
        }
    }
    // 将常用信息map载入到内存中，提高性能
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap);
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap);
    playerChestCavityTypeMap.set(uuid, chestInventoryTypeMap);
    playerChestCavityHashMap.set(uuid, newHash);
    player.tell('完成初始化');
    if (player.stages.has('organ_actived') && removeFlag) {
        player.stages.remove('organ_actived')
    }
    return;
}

function getPlayerChestCavityPosMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return playerChestCavityPosMap.get(uuid);
    }
    insertChestCavityIntoMap(player);
    return playerChestCavityPosMap.get(uuid);
}

function getPlayerChestCavityItemMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return playerChestCavityItemMap.get(uuid);
    }
    insertChestCavityIntoMap(player);
    return playerChestCavityItemMap.get(uuid);
}

function getPlayerChestCavityTypeMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityTypeMap.has(uuid)) {
        return playerChestCavityTypeMap.get(uuid);
    }
    insertChestCavityIntoMap(player);
    return playerChestCavityTypeMap.get(uuid);
}

function checkPlayerHasChestCavityMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return true;
    }
    return false;
}


function clearAllActivedModify(player) {
    player.removeAttribute(global.HEALTH_UP.key, global.HEALTH_UP.name);
}