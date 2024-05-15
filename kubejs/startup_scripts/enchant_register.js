const $EnchantmentCategory = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentCategory')

StartupEvents.registry('minecraft:enchantment', event => {
    event.create('kubejs:painless_operation').minLevel(1).maxLevel(1)
        .category(
            $EnchantmentCategory.create('chest_opener', (i) => {
                return i.id == 'kubejs:advanced_chest_opener'
            })
        )
        .canEnchant((/** @type {Internal.ItemStack} */ i) => {
            return i.id == 'kubejs:advanced_chest_opener'
        })

    event.create('kubejs:tele_operation').minLevel(1).maxLevel(1)
        .category(
            $EnchantmentCategory.create('chest_opener', (i) => {
                return i.id == 'kubejs:advanced_chest_opener'
            })
        )
        .canEnchant((/** @type {Internal.ItemStack} */ i) => {
            return i.id == 'kubejs:advanced_chest_opener'
        })

    event.create('kubejs:creative_operation').minLevel(1).maxLevel(1)

    event.create('kubejs:safe_operation').minLevel(1).maxLevel(1)
        .category(
            $EnchantmentCategory.create('chest_opener', (i) => {
                return i.id == 'kubejs:advanced_chest_opener'
            })
        )
        .canEnchant((/** @type {Internal.ItemStack} */ i) => {
            return i.id == 'kubejs:advanced_chest_opener'
        })
})