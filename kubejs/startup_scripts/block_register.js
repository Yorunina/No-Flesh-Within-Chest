StartupEvents.registry('block', event => {
    event.create('neutron_collector').soundType('netherite_block').blockEntity(entityInfo => {
        entityInfo.inventory(9, 3)
        entityInfo.rightClickOpensInventory()

        entityInfo.clientTick(12, 0, entity => { 
            entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0)
        })

        entityInfo.attachCapability(CapabilityBuilder.ITEM.blockEntity()
            .getSlots((be) => {
                return 27
            })
            .extractItem((be, slot, amount, simulate) => {
                let realAmount = amount
                /** @type {Internal.ItemStack} */
                let item = be.inventory.getStackInSlot(slot)
                if (amount > item.count) {
                    realAmount = item.count
                }
                be.inventory.extractItem(slot, realAmount, simulate)
                if (!simulate) {
                    be.inventory.setChanged()
                }
                item.setCount(realAmount)
                return item
            })
        )

        entityInfo.serverTick(20, 0, entity => {
            // entity.inventory.insertItem('minecraft:apple', false)
        })
    })
})