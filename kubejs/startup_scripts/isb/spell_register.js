// 宏伟魔法
StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('to_the_lost')
        .setCastTime(60)
        .setCooldownSeconds(120)
        .setBaseManaCost(1000)
        .setCastType('long')
        .setSchool('kubejs:magnificent')
        .setMinRarity('legendary')
        .setMaxLevel(1)
        .setFinishSound('entity.lightning_bolt.thunder')
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            global.toTheLostWorld(ctx)
        })

    event.create('earth_without_earth')
        .setCastTime(20 * 15)
        .setCooldownSeconds(20 * 120)
        .setBaseManaCost(2000)
        .setCastType('long')
        .setSchool('kubejs:magnificent')
        .setMinRarity('legendary')
        .setMaxLevel(1)
        .setFinishSound('entity.lightning_bolt.thunder')
        .canBeCraftedBy(() => false)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            global.earthWithoutEarth(ctx)
        })

    event.create('endless_dream')
        .setCastTime(20)
        .setCooldownSeconds(40)
        .setBaseManaCost(100)
        .setManaCostPerLevel(20)
        .setCastType('long')
        .setSchool('kubejs:candy')
        .setMinRarity('common')
        .setMaxLevel(10)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            global.endlessDream(ctx)
        })

    event.create('dream_of_needles')
        .setCastTime(20)
        .setCooldownSeconds(6)
        .setBaseManaCost(100)
        .setManaCostPerLevel(20)
        .setCastType('long')
        .setSchool('kubejs:candy')
        .setMinRarity('common')
        .setMaxLevel(10)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            global.dreamOfNeedles(ctx)
        })

    event.create('dream_of_singing')
        .setCastTime(40)
        .setCooldownSeconds(120)
        .setBaseManaCost(100)
        .setManaCostPerLevel(50)
        .setCastType('long')
        .setSchool('kubejs:candy')
        .setMinRarity('common')
        .setMaxLevel(10)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            global.dreamOfSinging(ctx)
        })
})

