/**
 * 使用ForgeEvent监听PlayerSleepInBedEvent事件
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerSleepInBedEvent', event => {
    global.heartSecretSleeping(event)
})

/**
 * 使用ForgeEvent监听EntityStruckByLightningEvent事件
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityStruckByLightningEvent', event => {
})