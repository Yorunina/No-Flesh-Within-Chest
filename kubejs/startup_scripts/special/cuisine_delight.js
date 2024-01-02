const $CuisineFoodItem = Java.loadClass('dev.xkmc.cuisinedelight.content.item.BaseFoodItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')
StartupEvents.registry('item', event => {
    event.createCustom('kubejs:organ_feast', () =>
    new $CuisineFoodItem(new $ItemProperties().stacksTo(1).craftRemainder(Item.of('cuisinedelight:plate')).tab($KubeJS.tab)))
})