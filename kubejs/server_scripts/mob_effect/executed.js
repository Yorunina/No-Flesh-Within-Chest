// priority: 6
/**
 * 被行刑
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function executedEntityHurtByPlayer(event, data) {
    let player = event.source.player;
    let entity = event.entity
    if (!(entity.hasEffect('kubejs:executed') && event.source.type == 'player')) {
        return
    }
    let executedEffect = entity.getEffect('kubejs:executed')
    let amplify = executedEffect.getAmplifier()
    if (Math.random() < 0.15) {
        event.amount = event.amount + (entity.getMaxHealth() - entity.getHealth()) * amplify * 0.03
    } else {
        event.amount = event.amount - amplify * 1
    }
}