MoreJSEvents.villagerTrades((event) => {
    event.addTrade("lightmanscurrency:banker", 1, [TradeItem.of("minecraft:emerald", 8, 16), TradeItem.of("minecraft:diamond", 1, 4)], getRandomPotionWares())
        .maxUses(32)
        .villagerExperience(1.0)
        .priceMultiplier(1.0)

    event.addTrade("lightmanscurrency:banker", 1, [TradeItem.of("minecraft:emerald", 4, 12), TradeItem.of("minecraft:diamond", 1, 2)], getRandomOreWares())
        .maxUses(32)
        .villagerExperience(1.0)
        .priceMultiplier(1.0)

    event.addTrade("lightmanscurrency:banker", 2, [TradeItem.of("minecraft:emerald", 24, 36), TradeItem.of("minecraft:diamond", 4, 16)], getRandomEggWares())
        .maxUses(16)
        .villagerExperience(3.0)
        .priceMultiplier(1.2)

    event.addTrade("lightmanscurrency:banker", 3, [TradeItem.of("minecraft:emerald", 32, 48), TradeItem.of("minecraft:diamond", 8, 24)], getRandomSpecialWares())
        .maxUses(8)
        .villagerExperience(5.0)
        .priceMultiplier(1.4)

    event.addTrade("lightmanscurrency:banker", 4, [TradeItem.of("minecraft:emerald", 36, 56), TradeItem.of("minecraft:diamond", 16, 32)], getRandomOrganWares())
        .maxUses(8)
        .villagerExperience(5.0)
        .priceMultiplier(1.6)

    event.addTrade("lightmanscurrency:banker", 5, [TradeItem.of("minecraft:emerald", 48, 64), TradeItem.of("minecraft:nether_star", 1, 2)], getRandomChallengeWares())
        .maxUses(4)
        .villagerExperience(8.0)
        .priceMultiplier(1.8)

});