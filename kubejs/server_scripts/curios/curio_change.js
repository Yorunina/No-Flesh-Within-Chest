/**
 * @param {Internal.CurioChangeEvent} event 
 * @returns 
 */
global.curioChange = event => {
    const api = new $CuriosApi();
    if (event.entity && event.entity.isPlayer()) {
        let player = event.entity
        let optionalCurios = api.curiosHelper.getEquippedCurios(player)
        if (!optionalCurios.isPresent()) {
            return
        }
        let curios = optionalCurios.resolve().get().getStackInSlot(event.getSlotIndex())
        // player.tell(event.getTo())
    }
}