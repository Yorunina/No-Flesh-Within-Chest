MoreJSEvents.villagerTrades((event) => {

    PotionWares.forEach(ctx => {
        let sellitem = new Wares('potion').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('女巫酿造师', '#33333').setMessage('我了解到你似乎有些 **特殊的** 需求。不如看看这瓶女巫精酿是否能够满足你的一时之需？', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 1, [TradeItem.of('minecraft:emerald', 8, 16), TradeItem.of('minecraft:diamond', 1, 4)], sellitem)
            .maxUses(32)
            .villagerExperience(3.0)
    })

    OreWares.forEach(ctx => {
        let sellitem = new Wares('ore').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('矿石商人', '#33333').setMessage('你好，我这里有些矿物。\n或许这对你有用。', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 1, [TradeItem.of('minecraft:emerald', 4, 12), TradeItem.of('minecraft:diamond', 1, 2)], sellitem)
            .maxUses(32)
            .villagerExperience(3.0)
    })

    EggWares.forEach(ctx => {
        let sellitem = new Wares('egg').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('宠物商人', '#33333').setMessage('咳，你也许在荒野上遇到过它吧。\n我们把它装在怪物蛋里，这对你来说很方便吧？', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 2, [TradeItem.of('minecraft:emerald', 24, 36), TradeItem.of('minecraft:diamond', 2, 4)], sellitem)
            .maxUses(16)
            .villagerExperience(6.0)
    })

    SpecialWares.forEach(ctx => {
        let sellitem = new Wares('special').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('遗物商人', '#33333').setMessage('我们的探险队从遗迹中搜寻到了一些有趣的物品。\n我们只需要一个合理的价格。剩下的，你自己决定。', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 3, [TradeItem.of('minecraft:emerald', 32, 48), TradeItem.of('minecraft:diamond', 4, 8)], sellitem)
            .maxUses(8)
            .villagerExperience(8.0)
    })

    OrganWares.forEach(ctx => {
        let sellitem = new Wares('organ').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('器官商人', '#d15492').setMessage('这是一些. . .肉制品。\n我们保存的相当完好，保证随取随用。', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 4, [TradeItem.of('minecraft:emerald', 36, 56), TradeItem.of('minecraft:diamond', 4, 16)], sellitem)
            .maxUses(8)
            .villagerExperience(10.0)
    })

    ChallengeWares.forEach(ctx => {
        let sellitem = new Wares('challenge').setPaymentItems(ctx.paymentItems).setRequestedItems(ctx.requestedItems).setTitle('传说中的物品', '#e6493e').setMessage('我们在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，可以将其低价转卖给你。', '#33333').setOrdered(ctx.ordered).build()
        event.addTrade('lightmanscurrency:banker', 5, [TradeItem.of('minecraft:emerald', 48, 64), TradeItem.of('minecraft:nether_star', 1, 2)], sellitem)
            .maxUses(4)
            .villagerExperience(12.0)
    })

    event.addTrade('minecraft:cleric', 2, [TradeItem.of('minecraft:emerald', 8, 24),
    TradeItem.of('chestcavity:chest_opener', 1, 1)], Item.of('kubejs:advanced_chest_opener'))
    event.addTrade('minecraft:cleric', 3, [TradeItem.of('minecraft:emerald', 8, 16)], Item.of('kubejs:active_pill'))
    event.addTrade('minecraft:cleric', 4, [TradeItem.of('minecraft:emerald', 16, 32)], Item.of('kubejs:operation_box'))

})