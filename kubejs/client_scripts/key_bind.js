const $KeyMapping = Java.loadClass('net.minecraft.client.KeyMapping')

ClientEvents.tick(event => {
    if (global.OrganGCD.consumeClick()) {
        Client.player.sendData('ogran_key_pressed')
    }
})
