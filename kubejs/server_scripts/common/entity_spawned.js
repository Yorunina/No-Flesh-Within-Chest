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
    let entity = event.entity
    if (!entity) return
    let player = entity.getLevel().getNearestPlayer(entity, 64)
    let entityName = entity.type
    if (!player) return
    if (!entity.isMonster() && !entityName.startsWith('iceandfire')) return

    let diffStage = player.stages.getAll().toArray().find(ele => ele.startsWith('difficult_level_'))
    
    if (!diffStage) return
    let diffLevelNum = diffStage.match('difficult_level_(\\d+)')[1]
    let diffLevel = difficultLevelDef[diffLevelNum - 1]
    if (diffLevel.healthMulti != 0) {
        entity.modifyAttribute('minecraft:generic.max_health', 'kubejsMaxHealthMulti', diffLevel.healthMulti, 'multiply_total')
        entity.heal(entity.getMaxHealth())
    }
    if (diffLevel.attackMulti != 0) {
        entity.modifyAttribute('minecraft:generic.attack_damage', 'kubejsAttackDamageMulti', diffLevel.attackMulti, 'multiply_total')
    }
    if (diffLevel.armorMulti != 0) {
        entity.modifyAttribute('minecraft:generic.armor', 'kubejsArmorMulti', diffLevel.armorMulti, 'multiply_total')
    }
    if (diffLevel.toughnessMulti != 0) {
        entity.modifyAttribute('minecraft:generic.armor_toughness', 'kubejsArmorToughnessMulti', diffLevel.toughnessMulti, 'multiply_total')
    }
})


const difficultLevelDef = [
    { healthMulti: 0, attackMulti: 0, armorMulti: 0, toughnessMulti: 0 },
    { healthMulti: 1, attackMulti: 0, armorMulti: 0, toughnessMulti: 0 },
    { healthMulti: 2, attackMulti: 0, armorMulti: 0, toughnessMulti: 0 },
    { healthMulti: 4, attackMulti: 0.5, armorMulti: 0, toughnessMulti: 0 },
    { healthMulti: 9, attackMulti: 0.5, armorMulti: 0, toughnessMulti: 0 },
    { healthMulti: 19, attackMulti: 1, armorMulti: 0.5, toughnessMulti: 0.5 },
    { healthMulti: 29, attackMulti: 2, armorMulti: 0.5, toughnessMulti: 0.5 },
    { healthMulti: 49, attackMulti: 3, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 99, attackMulti: 4, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 299, attackMulti: 5, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 499, attackMulti: 6, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 999, attackMulti: 7, armorMulti: 2, toughnessMulti: 2 },
]