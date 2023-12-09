SummoningRituals.complete(event => {
    if (!event.player) return;
    // 雨之仪式
    if (event.recipe.getId() == 'kubejs:ritual_of_rain') {
        ritualsCompleteStrategies['kubejs:ritual_of_rain'](event)
    }
});


SummoningRituals.start(event => {
    if (!event.player) return;

    if (event.recipe.getId() == 'kubejs:ritual_of_rain') {
        ritualsStartStrategies['kubejs:ritual_of_rain'](event)
    }
    if (event.recipe.getId() == 'kubejs:wither_strom_summon') {
        ritualsStartStrategies['kubejs:wither_strom_summon'](event)
    }
});


let ritualsCompleteStrategies = {
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
    }
};

let ritualsStartStrategies = {
    'kubejs:ritual_of_rain': function (event) {
        if (!(event.level.isThundering() && event.player.hasEffect('minecraft:glowing'))) {
            event.cancel();
        }
    },
    'kubejs:wither_strom_summon': function (event) {
        if (event.getLevel().getDimension() != 'kubejs:lost_memory') {
            event.cancel();
        }
    }
};