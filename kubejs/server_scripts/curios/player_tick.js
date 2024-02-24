PlayerEvents.tick(event => {
    let player = event.player
    if (!event.player) { return }

    const api = new $CuriosApi();
    let optionalCurios = api.getCuriosHelper().getEquippedCurios(player)
    if (!optionalCurios.isPresent()) {
        return
    }
    let curios = optionalCurios.resolve().get()

    if (event.player.age % 20 == 0) {
        for (let slot = 0; slot < curios.getSlots(); slot++) {
            let item = curios.getStackInSlot(slot);
            if (curiosEquippedStrategies[item.id]) {
                curiosEquippedStrategies[item.id](event, curios, slot, item)
            }
        }
    }
})

const curiosEquippedStrategies = {
    'kubejs:bunny_hoppers': function (event, curios, slot, item) {
        if (!event.player || event.player.age % 80 != 0) {
            return
        }
        event.player.potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
    },
}