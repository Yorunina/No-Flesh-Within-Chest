/**
 * 
 * @param {Internal.PlayerSleepInBedEvent} event 
 * @returns 
 */
global.heartSecretSleeping = (event) => {
    /** @type {Internal.ServerPlayer} */
    let player = event.entity
    if (!player.isPlayer()) return
    if (player.getMaxHealth() > 50 && player.hasEffect('kubejs:sweet_dream')) {
        player.server.scheduleInTicks(5, ctx => {
            if (player.isSleeping()) {
                player.give('kubejs:secret_of_heart')
            }
        })
    }

}

