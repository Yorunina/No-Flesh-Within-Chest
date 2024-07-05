const LuckyBoxStructList = [
    'kubejs:lucky_block_1',
    'kubejs:lucky_block_2',
    'kubejs:lucky_block_3',
    'kubejs:lucky_block_4',
]

const LuckyBoxMusicList = [
    'kubejs:beak_metal',
    'kubejs:beak_mangrove_roots',
]

/**
 * @constant
 * @type {Internal.List<function(Internal.BlockBrokenEventJS)>}
 */
const LuckyBoxSpicalEventList = [
    function (event) {
        event.block.createExplosion().strength(3).causesFire(true).explode()
    },
    function (event) {
        event.level.playSound(null, event.block.x, event.block.y, event.block.z, randomGet(LuckyBoxMusicList), event.entity.getSoundSource(), 1, 1)
    },
    function (event) {
        event.block.spawnLightning()
    },
    function (event) {
        event.level.setRainLevel(2)
    },
    function (event) {
        event.setXp(100)
    },
]


BlockEvents.broken('kubejs:lucky_block', event => {
    let player = event.entity
    if (!player.isPlayer()) return
    if (player.isShiftKeyDown()) {
        event.block.popItemFromFace('kubejs:lucky_block', player.facing.opposite)
        return
    }
    let random = Math.random()
    switch (true) {
        case random < 0.75:
            event.block.popItemFromFace(getLuckyBlockRandomLoot(), player.facing.opposite)
            break
        case random < 0.95:
            randomGet(LuckyBoxSpicalEventList)(event)
            break
        case random < 1:
            event.server.scheduleInTicks(2, ctx => {
                placeStructInWorld(event, randomGet(LuckyBoxStructList))
            })
            break
    }
})

BlockEvents.broken('kubejs:infinity_lucky_block', event => {
    let player = event.entity
    if (!player.isPlayer()) return
    if (player.isShiftKeyDown()) {
        event.block.popItemFromFace('kubejs:infinity_lucky_block', player.facing.opposite)
        return
    }
    let random = Math.random()
    switch (true) {
        case random < 0.75:
            event.block.popItemFromFace(getLuckyBlockRandomLoot(), player.facing.opposite)
            break
        case random < 0.95:
            randomGet(LuckyBoxSpicalEventList)(event)
            break
        case random < 1:
            event.server.scheduleInTicks(2, ctx => {
                placeStructInWorld(event, randomGet(LuckyBoxStructList))
            })
            break
    }
    event.cancel()
})


BlockEvents.broken('kubejs:organ_lucky_block', event => {
    let player = event.entity
    if (!player.isPlayer()) return
    if (player.isShiftKeyDown()) {
        event.block.popItemFromFace('kubejs:organ_lucky_block', player.facing.opposite)
        return
    }
    event.block.popItemFromFace(getLuckyBlockRandomLoot(), player.facing.opposite)
})

/**
 * @param {Internal.BlockBrokenEventJS} event 
 * @param {String} structName 
 */
function placeStructInWorld(event, structName) {
    let player = event.entity
    let pos = event.block.pos
    let level = event.level
    let facing = player.getFacing()
    event.server.structureManager.get(structName)
        .ifPresent((ctx) => {
            let size = ctx.getSize()
            let rotate = getRelativeRotation(facing)
            let spawnOffset = new BlockPos(-size.getX() / 2, 0, -size.getZ() / 2).rotate(rotate)
            let spawnPos = pos.offset(spawnOffset)
            ctx.placeInWorld(level, spawnPos, spawnPos, new $StructurePlaceSettings().setKeepLiquids(false).setIgnoreEntities(true).setRotation(rotate), level.getRandom(), 3)
        })
}



function getLuckyBlockRandomLoot() {
    let lootList = []
    lootList.push.apply(lootList, Ingredient.of('#kubejs:organ').getItemIds().filter(ctx => {
        return !Item.of(ctx).hasTag('kubejs:exclued_lucky_block')
    }))
    return randomGet(lootList)
}
