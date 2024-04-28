/**
 * 物品抽取
 * @param {Internal.BlockEntity} be 
 * @param {number} slot 
 * @param {number} amount 
 * @param {boolean} simulate 
 */
global.BlockExtractItem = (be, slot, amount, simulate) => {
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
    return Item.of(item.id, realAmount)
}