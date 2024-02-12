// priority: 6
/**
 * 百战之力
* @param {Internal.LivingHurtEvent} event 
* @param {EntityHurtCustomModel} data 
* @returns 
*/
function powerOfFightPlayerHurtByOthers(event, data) {
   let entity = event.source.actual
   if (!entity) return;
   let player = event.entity;
   if (entity.isLiving() && entity.hasEffect('kubejs:power_of_fight'))
   {
        if(!player.hasEffect('goety:sapped'))
        {
            let amplifier = entity.getEffect('kubejs:power_of_fight').getAmplifier()
            player.potionEffects.add('goety:sapped', 20 * 5, amplifier)
            entity.potionEffects.add('minecraft:absorption', 20 * 5, ((amplifier + 1) * 2))
        }
        else
        {
            let amplifier = entity.getEffect('kubejs:power_of_fight').getAmplifier()
            player.potionEffects.add('goety:sapped', 20 * 5, amplifier)
            entity.potionEffects.add('minecraft:absorption', 20 * 5, ((amplifier + 1) * 2))
            entity.potionEffects.add('kubejs:power_of_fight', 144000, (amplifier + 1))
        }
   }
   
}