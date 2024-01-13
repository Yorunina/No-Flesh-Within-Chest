MoreJSEvents.filterAvailableEnchantments(event => {
    event.remove("minecraft:knockback");
    event.remove("minecraft:punch");
})

MoreJSEvents.filterEnchantedBookTrade(event => {
    event.remove("minecraft:knockback");
    event.remove("minecraft:punch");
})