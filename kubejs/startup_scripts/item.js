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

    event.create('candy').texture('kubejs:item/candy').tag('kubejs:eatable_candy').food(food => {
        food
            .hunger(1)
            .saturation(1)
            .alwaysEdible()
    })

    event.create('ceremonial_knife').texture('kubejs:item/ceremonial_knife').maxStackSize(1)
        .useAnimation('bow')
        .useDuration(itemStack => 40)
        .use((level, player, hand) => {
            if(player.getHealth() > 10) {
                return true;
            }
            return false;
        })
        .finishUsing((itemstack, level, entity) => {
            if(entity.getHealth() > 10) {
                entity.attack(10);
            }
        })
})