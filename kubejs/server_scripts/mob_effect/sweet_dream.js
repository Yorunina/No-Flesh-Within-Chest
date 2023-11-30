EntityEvents.hurt('minecraft:player', event => {
    if (!event.entity.isPlayer()) {
        return;
    }
    let player = event.player;
    let itemMap = getPlayerChestCavityItemMap(player);
    if (itemMap.has('kubejs:candy_heart') && player.hasEffect('kubejs:sweet_dream')) {
        let sweetDreamPotion = player.getEffect('kubejs:sweet_dream')
        let damage = event.getDamage();
        if (event.source.isFire()) {
            player.removeEffect('kubejs:sweet_dream');
            return;
        }
        if (sweetDreamPotion.getDuration() * (sweetDreamPotion.getAmplifier() + 1) < damage * 20) {
            player.removeEffect('kubejs:sweet_dream');
            if (itemMap.has('kubejs:candy_pancreas')) {
                player.potionEffects.add('minecraft:absorption', 20 * 30, 4);
            }
            event.cancel();
            return;
        }
        let duration = Math.floor(sweetDreamPotion.getDuration() - damage * 20 / (sweetDreamPotion.getAmplifier() + 1));
        let amplifier = sweetDreamPotion.getAmplifier();
        player.removeEffect('kubejs:sweet_dream')
        player.potionEffects.add('kubejs:sweet_dream', duration, amplifier);
        event.cancel();
        return;
    }

})