// priority: 100
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
/**
 * 玩家受伤
 * @param {Internal.LivingEntityHurtEventJS} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function curiosPlayerHurtByOthers(event, data) {
    let player = event.player;

    const api = new $CuriosApi();
    const curios = api
        .getCuriosHelper()
        .getEquippedCurios(player)
        .resolve()
        .get();

    for (let slot = 0; slot < curios.getSlots(); slot++) {
        if (player.getHealth() - event.damage <= 4) {
            let item = curios.getStackInSlot(slot);
            if (curiosStrategies[item.id]) {
                curiosStrategies[item.id](event, curios, slot, item, data)
            }
        }
    }
}




const curiosStrategies = {
    'kubejs:friend_to_the_end': function (event, curios, slot, item, data) {
        if (item.hasNBT() && item.nbt.friendName) {
            let friend = event.server.getPlayer(item.nbt.friendName)
            if (friend && friend.isAlive()) {
                event.player.teleportTo(friend.level.getDimension(), friend.x, friend.y, friend.z, 0, 0)
                curios.setStackInSlot(slot, Item.of('irons_spellbooks:silver_ring'));
                event.player.setHealth(1)
                event.cancel();
            }
        }
    },
}