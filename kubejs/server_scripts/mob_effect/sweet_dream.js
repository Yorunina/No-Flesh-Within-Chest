// priority: 5
EntityEvents.hurt('minecraft:player', event => {
    if (!event.entity.isPlayer()) {
        return;
    }
    let player = event.player;
    if (player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:candy_heart')) {
            return;
        }
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
        let duration = Math.floor(sweetDreamPotion.getDuration() - damage * 20 * 2 / (sweetDreamPotion.getAmplifier() + 1));
        let amplifier = sweetDreamPotion.getAmplifier();
        player.removeEffect('kubejs:sweet_dream')
        player.potionEffects.add('kubejs:sweet_dream', duration, amplifier);
        event.cancel();
        return;
    }

    if (event.getDamage() >= 10 && !player.hasEffect('kubejs:sweet_dream')) {
        let itemMap = getPlayerChestCavityItemMap(player);
        if (!itemMap.has('kubejs:magic_hippocampus')) {
            return;
        }
        let durationMuti = 1;
        let amplifierMuti = 0;
        if (itemMap.has('kubejs:magic_muscle')) {
            durationMuti = durationMuti + itemMap.get('kubejs:magic_muscle').length
        }
        if (itemMap.has('kubejs:magic_spine')) {
            amplifierMuti = amplifierMuti + Math.floor(itemMap.get('kubejs:magic_spine').length / 2)
        }
        if (!event.player.hasEffect('kubejs:sweet_dream')) {
            event.player.potionEffects.add('kubejs:sweet_dream', 20 * 5 * durationMuti,amplifierMuti);
        }
    }


})