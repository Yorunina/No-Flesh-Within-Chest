// priority: 10
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed')) {
        let organList = typeMap.get('kubejs:key_pressed')
        for (let i = 0; i < organList.length; i++) {
            let organ = organList[i]
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                if (!coolDowns.isOnCooldown(Item.of(organ.id))) {
                    organPlayerKeyPressedOnlyStrategies[organ.id](event, organ)
                    break
                }
            }
        }
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
        let getlevel = player.getXpLevel()
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.attack(damageSource, 30 + Math.min(getlevel, 100))
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
                        e.attack(damageSource, 10 + Math.min(getlevel * 0.5, 50))
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
            player.setGameMode('creative')
            player.potionEffects.add('minecraft:glowing', 20 * 10)
            player.addItemCooldown('kubejs:genesis', 20 * 600)
            event.server.scheduleInTicks(20 * 10, ctx => {
                player.setGameMode('survival')
                player.closeMenu()
            })
        }
    },
    'kubejs:lowlight_vision': function (event, organ) {
        let player = event.player
        let count = player.persistentData.getInt(resourceCount)
        if (count > 60) {
            player.potionEffects.add('minecraft:night_vision', 20 * 240, 0)
            updateResourceCount(player, count - 60)
            player.addItemCooldown('kubejs:lowlight_vision', 20 * 180)
        }
    },
    'kubejs:jet_propeller': function (event, organ) {
        let player = event.player
        let typeMap = getPlayerChestCavityTypeMap(player)
        let count = player.persistentData.getInt(resourceCount)
        let value = 1
        if (typeMap.has('kubejs:resource')) {
            value = typeMap.get('kubejs:resource').length
        }
        let consume = 30 + 20 * value
        if (count > consume) {
            player.potionEffects.add('minecraft:speed', 20 * (value + 2), Math.min(8, Math.floor(value * 0.5)))
            updateResourceCount(player, count - consume)
            player.addItemCooldown('kubejs:jet_propeller', 20 * Math.max(15, 95 - value * 5))
        }
    },
    'kubejs:wither_and_fall': function (event, organ) {
        let player = event.player
        player.setHealth(1)
        if (player.getMaxHealth() < 20) {
            player.absorptionAmount = Math.floor((20 - player.getMaxHealth()) * 2.5)
        }
        else {
            player.giveExperiencePoints(Math.floor(player.getMaxHealth() - 10))
        }
        player.addItemCooldown('kubejs:wither_and_fall', 20 * 150)
    },
    'kubejs:excited_appendix': function (event, organ) {
        let player = event.player
        let itemMap = getPlayerChestCavityItemMap(player);
        let amplifier = Math.max(0, player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'explosive')) * 0.2)
        let duration = Math.max(0, player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'creepy')) * 10)
        let cooldown = 0
        if (itemMap.has('minecraft:gunpowder')) {
            cooldown = cooldown + itemMap.get('minecraft:gunpowder').length * 5
        }
        if (itemMap.has('minecraft:tnt')) {
            cooldown = cooldown + itemMap.get('minecraft:tnt').length * 10
        }
        player.potionEffects.add('goety:explosive', Math.max(60, 20 * duration), Math.min(1, Math.floor(amplifier)), false, false)
        player.addItemCooldown('kubejs:excited_appendix', Math.max(20 * 10, 20 * (120 - cooldown)))
    },
    'kubejs:blood_crystal': function (event, organ) {
        let player = event.player
        let harmfulEffects = []
        let beneficialEffects = []
        player.potionEffects.active.forEach(ctx => {
            if (!ctx.effect.isBeneficial()) {
                harmfulEffects.push(ctx)
            } else {
                beneficialEffects.push(ctx)
            }
        })
        if (harmfulEffects.length > 0) {
            harmfulEffects.forEach(ctx => {
                player.removeEffect(ctx.effect)
                player.potionEffects.add(ctx.effect, ctx.getDuration() * 0.5, ctx.getAmplifier() + 1)
            })
        }
        if (beneficialEffects.length > 0) {
            beneficialEffects.forEach(ctx => {
                player.removeEffect(ctx.effect)
                if (ctx.getAmplifier() > 0) {
                    player.potionEffects.add(ctx.effect, ctx.getDuration() * 2, ctx.getAmplifier() - 1)
                }
            })
        }
        player.addItemCooldown('kubejs:blood_crystal', 20 * 90)
    },
    'kubejs:amethyst_magic_core': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(Math.sqrt(manaCost), 1) + 4
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'magic_arrow'), amplifier, player, false)
        magicData.setMana(0)
        player.addItemCooldown('kubejs:amethyst_magic_core', 20 * 15)
    },
    'kubejs:ice_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'cone_of_cold'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:ice_dragon_bead', 20 * 30)
    },
    'kubejs:fire_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'fire_breath'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:fire_dragon_bead', 20 * 30)
    },
    'kubejs:lightning_dragon_bead': function (event, organ) {
        let player = event.player
        let magicData = getPlayerMagicData(player)
        let manaCost = magicData.getMana()
        let amplifier = Math.max(2 * Math.sqrt(player.getMaxHealth()), 1)
        overLimitSpellCast(new ResourceLocation('irons_spellbooks', 'electrocute'), amplifier, player, false)
        magicData.setMana(Math.max((manaCost - 500), 0))
        if (manaCost < 500) {
            player.setHealth(Math.max((player.getHealth() - (500 - manaCost) * 0.5), 1))
        }
        player.addItemCooldown('kubejs:lightning_dragon_bead', 20 * 30)
    },
    'kubejs:dragon_blood_heart': function (event, organ) {
        let player = event.player
        let typeMap = getPlayerChestCavityTypeMap(player)
        let amplifier = 0
        let duration = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'nerves')) * 20
        if (typeMap.has('kubejs:dragon')) {
            let onlySet = new Set()
            typeMap.get('kubejs:dragon').forEach(organ => {
                onlySet.add(organ.id)
            })
            amplifier = onlySet.size - 1
        }
        player.addItemCooldown('kubejs:dragon_blood_heart', 20 * 180)
        player.potionEffects.add('kubejs:dragon_power', Math.max(Math.floor(duration), 0), amplifier, false, false)
    },
    'kubejs:sunbird_crystals': function (event, organ) {
        let player = event.player
        player.potionEffects.add('alexsmobs:sunbird_blessing', 20 * 90, 0, false, false)
        if (player.hasEffect('alexsmobs:sunbird_curse')) {
            player.removeEffect('alexsmobs:sunbird_curse')
        }
        player.addItemCooldown('kubejs:sunbird_crystals', 20 * 90)
    },
    'kubejs:enderiophage_heart': function (event, organ) {
        let player = event.player
        let particle = Utils.particleOptions(`dust 1 0 1 1`)
        let ray = player.rayTrace(32, true)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('alexsmobs:ender_flu', 20 * 5, 0, false, false)
            player.addItemCooldown('kubejs:enderiophage_heart', 20 * 45)
            event.level.spawnParticles(particle, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
    'kubejs:viviparous_crinoidea': function (event, organ) {
        let player = event.player
        let chestInstance = player.getChestCavityInstance()
        let organScoresValue = []
        chestInstance.organScores.forEach((key, value) => {
            organScoresValue.push(value)
        })
        organScoresValue.sort(function() {
            return (0.5 - Math.random())
        })
        chestInstance.organScores.forEach((key, value) => {
            chestInstance.organScores.put(key, new $Float(organScoresValue.pop() + 1.5))
        })

        event.server.scheduleInTicks(20 * 30, (callback) => {
            chestInstance.containerChanged(chestInstance.inventory)
            global.initChestCavityIntoMap(player, false)
            if (player.persistentData.contains(organActive) &&
                player.persistentData.getInt(organActive) == 1) {
                global.updatePlayerActiveStatus(player)
            }
        })

        player.addItemCooldown('kubejs:viviparous_crinoidea', 20 * 60)
    },
};
