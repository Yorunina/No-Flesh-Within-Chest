// priority: 101
EntityEvents.death(event => {
    let player = event.source.player
    if (!event.source.player) { return }

    const api = new $CuriosApi();
    let optionalCurios = api.getCuriosHelper().getEquippedCurios(player)
    if (!optionalCurios.isPresent()) {
        return
    }
    let curios = optionalCurios.resolve().get()

    for (let slot = 0; slot < curios.getSlots(); slot++) {
        let item = curios.getStackInSlot(slot);
        if (curiosDeathStrategies[item.id]) {
            curiosDeathStrategies[item.id](event, curios, slot, item)
        }
    }
})

const curiosDeathStrategies = {
    'kubejs:god_bless_empty_necklace': function (event, curios, slot, item) {
        if (!bossesOfMassDestructionBossTypeList.some(ctx => ctx == event.entity.type)) {
            return
        }
        curios.setStackInSlot(slot, Item.of('kubejs:god_bless_full_necklace'));
    },
}