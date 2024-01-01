// priority: 6
/**
 * 被行刑
 * @param {Internal.LivingEntityHurtEventJS} event 
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
        data.damage = data.damage + (entity.getMaxHealth() - entity.getHealth()) * amplify * 0.03
    } else {
        data.damage = data.damage - amplify * 1
    }
}