ClientEvents.highPriorityAssets(event => {
    function registeTips(key) {
        let translateKey = `kubejs.tip.${key}`
        event.add(new ResourceLocation(`kubejs:tips/${key}.json`), { "tip": Text.translatable(translateKey) })
    }
    registeTips('secret_hint')
    registeTips('wares_useage')
    registeTips('magic_forbiden')
    registeTips('active_organ')
    registeTips('organ_charm')
    registeTips('resource_bar')
    registeTips('burning_heart')
    registeTips('candy_organ')
    registeTips('ceremonial_knife')

    // 玩家词条注册
    for (let i = 0; i < 130; i++) {
        registeTips(`tip_${i + 1}`)
    }
})