// 
// 击杀任务
EntityEvents.death(event => {
    let entity = event.entity;
    let player = event.source.player;
    if (!player) { return }
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
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
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
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

//挖掘任务
BlockEvents.broken(event => {
    let player = event.player;
    if (!player) return;
    let targetblock = event.block;
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'mining') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (curiosItem.nbt.miningTask) {
            if (!curiosItem.nbt.miningTask.targetblock.some(ctx => ctx == targetblock.id)) {
                return
            }
        }

        curiosItem.nbt.miningTask.counter++
        if (curiosItem.nbt.miningTask?.counter >= curiosItem.nbt.miningTask?.miningAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
        }

        if (curiosItem.nbt.miningTask.consume) {
            targetblock.set('minecraft:air')
            event.cancel()
        }
    }
})

/**
 * 承受伤害
 * @param {Internal.LivingDamageEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function organCharmPlayerHurtByOthers(event, data) {
    let player = event.entity
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'bear') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (event.amount < curiosItem.nbt.bearTask?.minDamage) {
            return
        }
        curiosItem.nbt.bearTask.counter = curiosItem.nbt.bearTask.counter + event.amount
        if (curiosItem.nbt.bearTask?.counter >= curiosItem.nbt.bearTask?.bearAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
}

/**
 * 造成伤害
 * @param {Internal.LivingHurtEvent} event 
 * @param {EntityHurtCustomModel} data 
 * @returns 
 */
function organCharmEntityHurtByPlayer(event, data) {
    let player = event.source.player
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'damage') {
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (event.amount < curiosItem.nbt.damageTask?.minDamage) {
            return
        }
        if (curiosItem.nbt.damageTask?.type) {
            let type = 'other'
            switch (true) {
                case (event.source.getType() == 'player'):
                    type = 'melee'
                    break;
                case (event.source.getType() == 'arrow'):
                    type = 'projectile'
                    break;
                case (event.source.getType().startsWith('irons_spellbooks')):
                    type = 'magic'
                    break;
                default:
                    type = 'other'
            }
            if (curiosItem.nbt.damageTask.type != type) {
                return
            }
        }
        curiosItem.nbt.damageTask.counter = curiosItem.nbt.damageTask.counter + event.amount
        if (curiosItem.nbt.damageTask?.counter >= curiosItem.nbt.damageTask?.damageAmount) {
            curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
            curiosItem.nbt.status = 1
            return
        }
    }
}

/**
 * 扭曲值任务
 * @param {Internal.ServerPlayer} player 
 * @param {Number} warpCount 
 */
global.organCharmPlayerWarpTask = (player) => {
    let curiosItem = getCuriosItem(player, 'kubejs:organ_charm')
    if (curiosItem?.id == 'kubejs:organ_charm' && curiosItem.nbt?.type == 'warp') {
        let warp = player.persistentData.getInt(warpCount)
        if (curiosItem.nbt.status == 1) {
            return
        }
        if (warp < curiosItem.nbt.warpTask?.warpMin) {
            return
        }
        curiosItem.nbt.organ.id = curiosItem.nbt.targetOrgan
        curiosItem.nbt.status = 1
        return
    }
}

function getCuriosItem(player, itemId) {
    let slotResult = new $CuriosApi().getCuriosHelper().findEquippedCurio(Item.of(itemId), player);
    if (slotResult.isPresent()) {
        return slotResult.get().getRight()
    }
    return null
}

