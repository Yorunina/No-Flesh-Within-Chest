// priority: 0

const playerChestCavityHashMap = new Map();
const playerChestCavityPosMap = new Map();
const playerChestCavityItemMap = new Map();

PlayerEvents.loggedIn((event) => {
    insertChestCavityIntoMap(event.player);
});

ItemEvents.rightClicked((event) => {
    let item = event.player.getHeldItem(event.hand);
    let player = event.player;
    if (item == 'minecraft:arrow') {
        if (checkPlayerHasChestCavityMap(player)) {
            let itemMap = getPlayerChestCavityItemMap(player);
            if (itemMap.has('chestcavity:muscle')) {
                player.modifyAttribute('minecraft:generic.max_health', 'kubejsMaxHealth', 4.0, 'addition');
            }
        }
    }
});

PlayerEvents.inventoryClosed((event) => {
    let player = event.player;
    if (player.mainHandItem != 'chestcavity:chest_opener') {
        return;
    }
    insertChestCavityIntoMap(player);
});


function insertChestCavityIntoMap(player) {
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
    for (let i = 0; i < chestInventory.length; i++) {
        chestInventoryPosMap.set(chestInventory[i].getInt('Slot'), chestInventory[i]);

        let itemId = String(chestInventory[i].getString('id'));
        if (chestInventoryItemMap.has(itemId)) {
            let itemList = chestInventoryItemMap.get(itemId);
            itemList.push(chestInventory[i]);
            chestInventoryItemMap.set(itemId, itemList);
        } else {
            chestInventoryItemMap.set(itemId, [chestInventory[i]]);
        }

    }
    playerChestCavityPosMap.set(uuid, chestInventoryPosMap);
    playerChestCavityItemMap.set(uuid, chestInventoryItemMap);
    playerChestCavityHashMap.set(uuid, newHash);
    player.tell('完成初始化');
    return chestInventoryPosMap;
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

function checkPlayerHasChestCavityMap(player) {
    let uuid = String(player.getUuid());
    if (playerChestCavityHashMap.has(uuid)) {
        return true;
    }
    return false;
}


function clearAllModify(player) {
    player.removeAttribute('minecraft:generic.max_health', 'kubejsMaxHealth');
}