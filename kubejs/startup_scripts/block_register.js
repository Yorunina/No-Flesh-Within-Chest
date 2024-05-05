// 预留方法
// StartupEvents.registry('block', event => {
//     event.create('neutron_collector', 'cardinal')
//         .model('kubejs:block/machine/collector/neutron_collector')
//         .soundType('netherite_block')
//         .blockEntity(entityInfo => {
//             entityInfo.inventory(9, 3)
//             entityInfo.rightClickOpensInventory()

//             entityInfo.clientTick(50, 0, entity => {
//                 entity.level.addParticle('minecraft:white_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0)
//             })

//             entityInfo.attachCapability(CapabilityBuilder.ITEM.blockEntity()
//                 .getSlots((be) => {
//                     return 27
//                 })
//                 .extractItem((be, slot, amount, simulate) => {
//                     return global.BlockExtractItem(be, slot, amount, simulate)
//                 })
//             )

//             entityInfo.serverTick(20, 0, entity => {
//                 if (entity.tick % 100 == 0 && entity.tick > 0) {
//                     entity.inventory.insertItem('kubejs:neutron_pile', false)
//                 }
//             })
//         })
// })