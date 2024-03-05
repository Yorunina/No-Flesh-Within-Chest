// EntityEvents.spawned(event => {
//     /**
//     * @type {Internal.LivingEntity}
//     */
//     let entity = event.entity
//     if (!entity || !entity.isLiving() || !entity.isMonster()) return
//     entity.persistentData.put('champion', ['fight_for_death'])
//     entity.setCustomName([Text.darkPurple('死战'), Text.gray('精英')])
//     entity.setCustomNameVisible(true)
// })