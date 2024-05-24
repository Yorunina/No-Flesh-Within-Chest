StartupEvents.registry('minecraft:item', event => {
    event.create('archivist_eyeglass', 'basic')
        .texture('kubejs:item/archivist_eyeglass')
        .maxStackSize(1)
        .tag('curios:head')
        .tag('itemborders:diamond')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .onEquip((itemFrom, ctx, itemTo) => {
                global.archivistEyeGlassOnEquip(itemFrom, ctx, itemTo)
            })
            .onUnequip((itemFrom, ctx, itemTo) => {
                global.archivistEyeGlassOnUnequip(itemFrom, ctx, itemTo)
            })
            .curioTick((item, ctx) => {
                global.archivistEyeGlassTick(item, ctx)
            }))

    event.create('empty_organ_charm')
        .texture('kubejs:item/empty_organ_charm')
        .maxStackSize(1)
        .tag('curios:charm')
        .tag('itemborders:diamond')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true))

    event.create('organ_charm')
        .texture('kubejs:item/organ_charm')
        .maxStackSize(1)
        .tag('curios:charm')
        .tag('itemborders:diamond')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true))


    event.create('bunny_hoppers')
        .texture('kubejs:item/bunny_hoppers')
        .maxStackSize(1)
        .tag('curios:feet')
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .onEquip((itemFrom, ctx, itemTo) => {
                global.bunnyHoppersOnEquip(itemFrom, ctx, itemTo)
            })
            .curioTick((item, ctx) => {
                global.bunnyHoppersTick(item, ctx)
            }))
})