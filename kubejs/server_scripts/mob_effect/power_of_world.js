// priority: 6
/**
 * 领域之力
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function powerOfWorldPlayerHurtByOthers(event, data) {
    let entity = event.source.actual
    if (!entity) return;
    let player = event.entity;
    if (entity.isLiving() && entity.hasEffect('kubejs:power_of_world')) {
        let amplifier = entity.getEffect('kubejs:power_of_world').getAmplifier()
        player.potionEffects.add('minecraft:weakness', 20 * 10 * (amplifier + 1), (amplifier + 1))
        entity.potionEffects.add('minecraft:resistance', 30 , 4)
    }
    
}

// priority: 6
/**
 * 领域之力
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 */
function powerOfWorldEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    let entity = event.entity
    if (!(entity.isLiving() && entity.hasEffect('kubejs:power_of_world') && event.source.type == 'player')) {
        return
    }
    if (player.hasEffect('minecraft:weakness') 
    && entity.hasEffect('kubejs:power_of_world') 
    && entity.hasEffect('minecraft:resistance') 
    && entity.getEffect('minecraft:resistance').getAmplifier() == 4)
    {
        data.returnDamage = Math.min(event.amount * 0.5 , player.getMaxHealth() * 1.5 )
        event.amount = 0
    }
}