/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
    if (event.source.player) {
        global.LivingHurtByPlayer(event);
    }
    if (event.entity.isPlayer()) {
        global.LivingHurtByOthers(event);
    }
})


/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {
    if (event.entity.isPlayer()) {
        global.LivingDamageByOthers(event);
    }
})