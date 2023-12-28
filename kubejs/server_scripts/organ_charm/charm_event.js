// 
// 击杀任务
EntityEvents.death(event => {
    let entity = event.entity;
    let player = event.source.player;
    if (!player) { return }
    let curiosItem = getCuriosItem(player)
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'kill') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (curiosItem.nbt.killTask?.mobType != entity.getType()) {
            return
        }
        if (curiosItem.nbt.killTask?.minHealth > entity.getMaxHealth()) {
            return
        }
        curiosItem.nbt.killTask.counter++
        if (curiosItem.nbt.killTask?.counter >= curiosItem.nbt.killTask?.killAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
})


// 饮食任务
ItemEvents.foodEaten(event => {
    let player = event.player;
    if (!player) return;
    let food = event.item;
    let curiosItem = getCuriosItem(player)
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'diet') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (curiosItem.nbt.dietTask?.minHunger > food.item.foodProperties.getNutrition()) {
            return
        }
        if (!curiosItem.nbt.dietTask.foodTypeList.some(ele => ele == food.id)) {
            curiosItem.nbt.dietTask.foodTypeList.push(food.id)
        }
        if (curiosItem.nbt.dietTask.foodTypeList.length >= curiosItem.nbt.dietTask.foodTypeAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
})

// 忍受任务
EntityEvents.hurt('minecraft:player', event => {
    let player = event.player
    let curiosItem = getCuriosItem(player)
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'bear') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (event.damage < curiosItem.nbt.bearTask?.minDamage) {
            return
        }
        curiosItem.nbt.bearTask.counter = curiosItem.nbt.bearTask.counter + event.damage
        if (curiosItem.nbt.bearTask?.counter >= curiosItem.nbt.bearTask?.bearAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
})

// 伤害任务
EntityEvents.hurt(event => {
    if (!event.source.player) return;
    let player = event.source.player
    let curiosItem = getCuriosItem(player)
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'damage') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (event.damage < curiosItem.nbt.damageTask?.minDamage) {
            return
        }
        curiosItem.nbt.damageTask.counter = curiosItem.nbt.damageTask.counter + event.damage
        if (curiosItem.nbt.damageTask?.counter >= curiosItem.nbt.damageTask?.damageAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
})


function getCuriosItem(player) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of('kubejs:organ_charm'), player);
    if (slotResult.isPresent()) {
        return slotResult.get().getRight()
    }
    return null
}