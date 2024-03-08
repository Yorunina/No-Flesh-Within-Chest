// StartupEvents.registry('irons_spellbooks:spells', event => {
// 	event.create('unlimited_infinity')
// 		.setCastTime(30)                           // Sets the cast time
// 		.setCooldownSeconds(120)                    // Sets the cooldown in seconds
// 		.setManaCostPerLevel(1000)                   // Sets the mana cost per level
// 		.setCastType('continuous')                 // Sets the cast type
// 		.setSchool('irons_spellbooks:blood')       // Sets the school
// 		.setMinRarity('epic')                      // Sets the minimal rarity
// 		.setMaxLevel(2)                            // Sets the maximum level
// 		.setStartSound('item.honey_bottle.drink')  // Sets the start sound
// 		.setFinishSound('item.honey_bottle.drink') // Sets the finish sound
// 		.onCast(ctx => global.unlimited_infinity(ctx))       // Calls global.bloodfed when the spell is casted
// })

// global.unlimited_infinity = (/** @type {Internal.CustomSpell$CastContext} */ ctx) => {
// 	let /** @type {Internal.ServerPlayer} */ player = ctx.entity
// 	if ((player.getFoodData().getFoodLevel() * (ctx.getSpellLevel() / 2)) < 2
// 	|| !ctx.entity.isPlayer()) return
// 	player.heal(ctx.getSpellLevel() / 2)
// 	player.getFoodData().setFoodLevel(player.getFoodData().getFoodLevel() - 2 * (ctx.getSpellLevel() / 2))
// }