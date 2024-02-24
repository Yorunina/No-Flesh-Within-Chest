// priority: 10
PlayerEvents.tick(event => {
    let player = event.player

    if (event.player.age % 20 != 0) {
        return
    }
    let typeMap = getPlayerChestCavityTypeMap(player);
    if (typeMap.has('kubejs:player_tick')) {
        typeMap.get('kubejs:player_tick').forEach(organ => {
            organPlayerTickStrategies[organ.id](event, organ)
        })
    }
    let onlySet = new Set()
    if (typeMap.has('kubejs:player_tick_only')) {
        typeMap.get('kubejs:player_tick_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                organPlayerTickOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})


/**
 * 玩家Tick秒级策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const organPlayerTickStrategies = {
    'kubejs:machine_clockwork': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (player.isSprinting()) {
            let speed = Math.floor(player.getSpeed() * 20)
            updateResourceCount(player, count + speed)
        } else if (count > 0) {
            updateResourceCount(player, count - 1)
        }
    },
}

/**
 * 玩家Tick秒级唯一策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const organPlayerTickOnlyStrategies = {
    'kubejs:platelet_dispatcher': function (event, organ) {
        let player = event.player
        if (player.health >= player.maxHealth * 0.75 && player.health < player.maxHealth) {
            player.heal(1)
        }
    },
    'kubejs:sand_bone': function (event, organ) {
        let player = event.player
        if (event.level.getBlock(player.x, player.y - 1, player.z).id == 'minecraft:sand') {
            player.potionEffects.add('minecraft:speed', 20 * 3, 1)
        }
    },
    'kubejs:tamagotchi': function (event, organ) {
        if (event.player.age % 600 != 0) {
            return
        }
        if (Math.random() > 0.05) {
            return
        }
        event.player.potionEffects.add('kubejs:hungry_tamagotchi', 60 * 20, 0)
        event.player.tell(Text.gray({ "translate": "kubejs.msg.tamagotchi.1" }))
    },
    'kubejs:embers_liver': function (event, organ) {
        let player = event.player
        if (player.age % 40 != 0) {
            return
        }
        if (!player.isOnFire()) {
            return
        }
        let amplifier = 0
        if (player.hasEffect('minecraft:strength')) {
            amplifier = player.getEffect('minecraft:strength').getAmplifier()
        }
        player.potionEffects.add('minecraft:strength', 20 * 6, clamp(1, amplifier + 1, 4))
    },
    'kubejs:mini_vampire': function (event, organ) {
        let player = event.player
        let healthPrecent = player.getHealth() / player.getMaxHealth()
        if (healthPrecent <= 0.3) {
            player.potionEffects.add('kubejs:vampiric', 20 * 3, Math.floor(3 - healthPrecent * 10))
        }
    },
}