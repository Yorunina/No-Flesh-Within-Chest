// 宏伟魔法
StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('to_the_lost')
        .setCastTime(60)
        .setCooldownSeconds(120)
        .setBaseManaCost(1000)
        .setCastType('long')
        .setSchool('irons_spellbooks:nature')
        .setMinRarity('legendary')
        .setMaxLevel(1)
        .setFinishSound('entity.lightning_bolt.thunder')
        .onPreCast(ctx => global.toTheLostWorldPre(ctx))
        .onCast(ctx => global.toTheLostWorld(ctx))
})

