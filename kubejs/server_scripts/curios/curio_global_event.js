/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.archivistEyeGlassOnEquip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity()
    initAllBar(player)

}


/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.archivistEyeGlassOnUnequip = (itemFrom, ctx, itemTo) => {
    if (!ctx.entity().isPlayer()) return
    ctx.entity().paint({ barBackGround: { visible: false }, resourceBarOverlay: { visible: false }, warpBarOverlay: { visible: false } })
}


/**
 * @param {Internal.ItemStack} item
 * @param {Internal.SlotContext} ctx 
 */
global.archivistEyeGlassTick = (item, ctx) => {
    /**@type {Internal.ServerPlayer} */
    let player = ctx.entity()
    if (player.level.isClientSide()) return
    if (player.age % 20 != 0) return
    if (!player.isPlayer()) return
    let visible = true
    updateSideBar(player, visible)
}


/**
 * @param {Internal.ItemStack} itemFrom 
 * @param {Internal.SlotContext} ctx 
 * @param {Internal.ItemStack} itemTo 
 */
global.bunnyHoppersOnEquip = (itemFrom, ctx, itemTo) => {
    let entity = ctx.entity()
    entity.potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
}


/**
 * @param {Internal.ItemStack} item
 * @param {Internal.SlotContext} ctx 
 */
global.bunnyHoppersTick = (item, ctx) => {
    let entity = ctx.entity()
    if (entity.level.isClientSide()) return
    if (entity.age % 80 != 0) return
    entity.potionEffects.add('minecraft:jump_boost', 20 * 5, 1, false, false)
}