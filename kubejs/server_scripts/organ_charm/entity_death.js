EntityEvents.death(event => {
    let entity = event.entity;
    let player = event.source.player;
    if (!player) { return }

    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of('kubejs:organ_charm'), player).get();
    let curiosItem = slotResult.getRight()
    if (curiosItem.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'kill') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (curiosItem.nbt.killTask?.mobType == entity.getType()) {
            curiosItem.nbt.killTask.counter++
        }
        if (curiosItem.nbt.killTask?.counter >= curiosItem.nbt.killTask?.killAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }

})

