ItemEvents.entityInteracted('kubejs:leaflet', event => {
    if (!event.target.isPlayer()) {
        return
    }
    let playerName = event.target.getUsername()
    event.player.runCommand(`/party invite ${playerName}`)
})