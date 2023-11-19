StartupEvents.registry('item', event => {
    event.create('active_pill').texture('kubejs:item/active_pill').tag('kubejs:pill').food(food => {
        food
            .hunger(1)
            .saturation(1)
            .alwaysEdible()
            .eaten(ctx => {
                if (ctx.level.isClientSide()) {
                    return
                }
                ctx.player.tell('触发激活效果')
                global.updatePlayerActiveStatus(ctx.player)
                if (!ctx.player.stages.has('organ_actived')) {
                    ctx.player.stages.add('organ_actived')
                }
            });
    })
})