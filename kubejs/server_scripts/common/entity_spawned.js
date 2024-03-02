EntityEvents.spawned('witherstormmod:wither_storm', event => {
    if (event.getLevel().getDimension() == 'kubejs:lost_memory') {
        return;
    }
    event.server.players.forEach(player => {
        player.notify(Notification.make((notification) => {
            Object.assign(notification, {
                itemIcon: 'minecraft:wither_skeleton_skull',
                backgroundColor: '#472b04',
                borderColor: '#241602',
                outlineColor: '#241602',
                textShadow: false,
                text: [Text.gold("有人似乎试图召唤了什么东西\n").bold(), Text.red("但被另一股神秘力量阻止了。")],
            });
        }));
    })
    event.cancel();
    return;
})


EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity) return
    let player = entity.getLevel().getNearestPlayer(entity, 64)
    let entityName = entity.type
    if (!player) return
    if (!entity.isLiving() || !(entity.isMonster() || entityName.startsWith('iceandfire'))) return
    if (entity.persistentData.contains('diffLevel')) return
    let diffStage = player.stages.getAll().toArray().find(ele => ele.startsWith('difficult_level_'))
    if (!diffStage) return
    let diffLevelNum = diffStage.match('difficult_level_(\\d+)')[1]
    let diffLevel = difficultLevelDef[diffLevelNum - 1]
    if (diffLevel.healthMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.max_health')) {
        entity.setAttributeBaseValue('minecraft:generic.max_health', entity.getAttribute('minecraft:generic.max_health').getValue() * diffLevel.healthMulti)
        entity.heal(entity.getMaxHealth())
    }
    if (diffLevel.attackMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.attack_damage')) {
        entity.setAttributeBaseValue('minecraft:generic.attack_damage', entity.getAttribute('minecraft:generic.attack_damage').getValue() * diffLevel.attackMulti)
    }
    if (diffLevel.armorMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.armor')) {
        entity.setAttributeBaseValue('minecraft:generic.armor', entity.getAttribute('minecraft:generic.armor').getValue() * diffLevel.armorMulti)
    }
    if (diffLevel.toughnessMulti != 0 && entity.attributes.hasAttribute('minecraft:generic.armor_toughness')) {
        entity.setAttributeBaseValue('minecraft:generic.armor_toughness', entity.getAttribute('minecraft:generic.armor_toughness').getValue() * diffLevel.toughnessMulti)
    }
    entity.persistentData.putInt('diffLevel', diffLevelNum)
})


const difficultLevelDef = [
    { healthMulti: 1, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 2, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 3, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 5, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 10, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 20, attackMulti: 2, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 30, attackMulti: 3, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 50, attackMulti: 4, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 100, attackMulti: 5, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 300, attackMulti: 6, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 500, attackMulti: 7, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 1000, attackMulti: 8, armorMulti: 3, toughnessMulti: 3 },
]