// priority: 10
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed_only')) {
        typeMap.get('kubejs:key_pressed_only').forEach(organ => {
            if (!onlySet.has(organ.id) && !coolDowns.isOnCooldown(Item.of(organ.id))) {
                onlySet.add(organ.id)
                organPlayerKeyPressedOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})


/**
 * 主动策略
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const organPlayerKeyPressedOnlyStrategies = {
    'kubejs:illithids': function (event, organ) {
        let player = event.player
        let particle = Utils.particleOptions(`dust 1 0 0 1`)
        let ray = player.rayTrace(32, true)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('goety:wild_rage', ray.entity.maxHealth > 100 ? 20 * 10 : 20 * 60)
            player.addItemCooldown('kubejs:illithids', 20 * 60)
            event.level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
    'kubejs:disenchantment_paper': function (event, organ) {
        let player = event.player
        let item = player.getMainHandItem()
        if (!item || !item.enchanted) {
            return
        }
        let curseList = []
        item.enchantments.forEach((name, level) => {
            if (curseEnchantList.some(ele => ele == name)) {
                curseList.push(name)
            }
        })
        if (curseList.length <= 0) {
            return
        }
        let removedCurse = randomGet(curseList)
        item.nbt.Enchantments = item.nbt.Enchantments.filter(function (item) {
            return item.id != removedCurse
        });
        player.addItemCooldown('kubejs:disenchantment_paper', 20 * 600)
        player.setStatusMessage([Text.lightPurple('祛魔虫'), '吃下了一个', Text.red('诅咒附魔')])
        let count = event.player.persistentData.getInt(warpCount) ?? 0
        updateWarpCount(event.player, count + 5)
    },
    'kubejs:warden_core': function (event, organ) {
        let player = event.player
        let ray = player.rayTrace(24, true)
        let distance = ray.distance
        let damageSource = new DamageSource.sonicBoom(player)
        let vec3Nor = player.getLookAngle().normalize()
        let counter = 0
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.attack(damageSource, 30)
            ray.entity.invulnerableTime = 0
            counter++
        }
        if (ray.block) {
            distance = player.position().distanceTo(ray.block.pos)
        }
        for (let i = 0; i < distance; i++) {
            let vec3 = vec3Nor.scale(i).add(player.getEyePosition())
            event.level.spawnParticles($ParticleTypes.SONIC_BOOM, false, vec3.x(), vec3.y(), vec3.z(), 0, 0, 0, 1, 0)
            if (i % 2 == 0) {
                let entityInRadius = getLivingWithinRadius(event.level, vec3, 2)
                entityInRadius.forEach(e => {
                    if (!e.isPlayer()) {
                        counter++
                        e.attack(damageSource, 10)
                        e.invulnerableTime = 0
                    }
                })
            }
        }
        player.addItemCooldown('kubejs:warden_core', Math.max(20 * 60 - counter * 40, 0))
    },
    'kubejs:genesis': function (event, organ) {
        let player = event.player
        if (!player.isCreative()) {
            player.setGameMode('creative') //可以加个音效
            player.potionEffects.add('minecraft:glowing', 20 * 10)
            player.addItemCooldown('kubejs:genesis', 20 * 600)
            event.server.scheduleInTicks(20 * 10, ctx => {
                player.setGameMode('survival')
                player.closeMenu()
            })
        }
    },
    
};
