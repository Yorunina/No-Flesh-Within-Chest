// priority: 100
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
/**
 * 玩家受伤
 * @param {Internal.LivingDamageEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function curiosPlayerHurtByOthers(event, data) {
    let player = event.entity;

    const api = new $CuriosApi();
    let optionalCurios = api.getCuriosHelper().getEquippedCurios(player)
    // LazyOptional
    if (!optionalCurios.isPresent()) {
        return
    }
    let curios = optionalCurios.resolve().get()

    for (let slot = 0; slot < curios.getSlots(); slot++) {
        if (player.getHealth() - event.amount <= 4) {
            let item = curios.getStackInSlot(slot);
            if (curiosHurtStrategies[item.id]) {
                curiosHurtStrategies[item.id](event, curios, slot, item, data)
            }
        }
    }
}


const curiosHurtStrategies = {
    'kubejs:friend_to_the_end': function (event, curios, slot, item, data) {
        if (item.hasNBT() && item.nbt.friendName) {
            let friend = Utils.server.getPlayer(item.nbt.friendName)
            if (friend && friend.isLiving()) {
                event.entity.teleportTo(friend.level.getDimension(), friend.x, friend.y, friend.z, 0, 0)
                curios.setStackInSlot(slot, Item.of('irons_spellbooks:silver_ring'));
                event.entity.setHealth(1)
                event.amount = 0
            }
        }
    },
}