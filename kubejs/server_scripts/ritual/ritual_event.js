SummoningRituals.complete(event => {
    if (!event.player) return;
    if (ritualsCompleteStrategies[event.recipe.getId()]) {
        ritualsCompleteStrategies[event.recipe.getId()](event)
    }
});


SummoningRituals.start(event => {
    if (!event.player) return;
    if (ritualsStartStrategies[event.recipe.getId()]) {
        ritualsStartStrategies[event.recipe.getId()](event)
    }
});

/**
 * 祭坛召唤事件
 * @constant
 * @type {Object<string,function(Internal.SummoningEventJS):void>}
 */
const ritualsCompleteStrategies = {
    'kubejs:ritual_of_rain': function (event) {
        if (event.level.isThundering() && event.player.hasEffect('minecraft:glowing')) {
            event.level.runCommandSilent('/weather clear');
            event.player.notify(Notification.make((notification) => {
                Object.assign(notification, {
                    itemIcon: 'kubejs:secret_of_rain',
                    backgroundColor: '#472b04',
                    borderColor: '#241602',
                    outlineColor: '#241602',
                    textShadow: false,
                    text: [Text.gold("三奇迹之一：雨的秘密\n").bold(), Text.gray("你领悟了一些超乎常人的知识")],
                });
            }));
        }
    },
    'kubejs:god_bless_summon': function (event) {
        /**
         * @type {Internal.LivingEntity}
         */
        let bossEntity = event.level.createEntity(randomGet(worldOfBossTypeList))
        bossEntity.setPosition(event.pos.x, event.pos.y, event.pos.z)
        if (bossEntity.isAlive()) {
            bossEntity.setGlowing(true)
            bossEntity.modifyAttribute('minecraft:generic.max_health', 'godBlessSummonHealthBoost', 1, 'multiply_total')
            bossEntity.modifyAttribute('minecraft:generic.attack_damage', 'godBlessSummonAttackBoost', 0.5, 'multiply_total')
            bossEntity.heal(bossEntity.maxHealth)
            bossEntity.potionEffects.add('kubejs:glimpse_of_god', 20 * 3600, 0, false, false)
            bossEntity.spawn()
        }
    }
};

/**
 * 祭坛召唤事件
 * @constant
 * @type {Object<string,function(Internal.SummoningEventJS):void>}
 */
const ritualsStartStrategies = {
    'kubejs:ritual_of_rain': function (event) {
        if (!(event.level.isThundering() && event.player.hasEffect('minecraft:glowing'))) {
            event.cancel()
        }
    },
    'kubejs:wither_strom_summon': function (event) {
        if (event.getLevel().getDimension() != 'kubejs:lost_memory') {
            event.cancel()
        }
    }

};