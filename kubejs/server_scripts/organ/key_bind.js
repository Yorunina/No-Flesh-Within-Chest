// priority: 10
NetworkEvents.dataReceived('ogran_key_pressed', event => {
    let player = event.player
    if (!player) return;
    let coolDowns = player.getCooldowns()
    let typeMap = getPlayerChestCavityTypeMap(player);
    let onlySet = new Set()
    if (typeMap.has('kubejs:key_pressed_only')) {
        typeMap.get('kubejs:key_pressed_only').forEach(organ => {
            if (!onlySet.has(organ.id) && !coolDowns.isOnCooldown(Item.of(organ.id))) {
                onlySet.add(organ.id)
                organPlayerKeyPressedOnlyStrategies[organ.id](event, organ)
            }
        })
    }
})


/**
 * 主动策略
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const organPlayerKeyPressedOnlyStrategies = {
    'kubejs:illithids': function (event, organ) {
        let player = event.player
        let particleCarrot = Utils.particleOptions(`dust 1 0 0 1`)
        let ray = player.rayTrace(32, true)
        if (ray.entity && ray.entity.isLiving()) {
            ray.entity.potionEffects.add('goety:wild_rage', ray.entity.maxHealth > 100 ? 20 * 10 : 20 * 60)
            player.addItemCooldown('kubejs:illithids', 20 * 60)
            event.level.spawnParticles(particleCarrot, true, ray.entity.x, ray.entity.y + 0.5, ray.entity.z, 1, 1, 1, 100, 0.5)
        }
    },
    'kubejs:disenchantment_paper': function (event, organ) {
        let player = event.player
        let item = player.getMainHandItem()
        if (!item || !item.enchanted) {
            return
        }
        let curseList = []
        item.enchantments.forEach((name, level) => {
            if (curseEnchantList.some(ele => ele == name)) {
                curseList.push(name)
            }
        })
        if (curseList.length <= 0) {
            return
        }
        let removedCurse = randomGet(curseList)
        item.nbt.Enchantments = item.nbt.Enchantments.filter(function (item) {
            return item.id != removedCurse
        });
        player.addItemCooldown('kubejs:disenchantment_paper', 20 * 600)
        player.setStatusMessage([Text.lightPurple('祛魔虫'), '吃下了一个', Text.red('诅咒附魔')])
        let count = event.player.persistentData.getInt(warpCount) ?? 0
        updateWarpCount(event.player, count + 5)
    },
};
