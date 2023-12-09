/* 
  Author: Discord @E...
  Modifier: Neha YoruNina

  原作者: Discord用户 @E...
  修改者: Neha YoruNina 本整合包作者
*/

const $EyeofEnder = Java.loadClass('net.minecraft.world.entity.projectile.EyeOfEnder')
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')

StartupEvents.registry('item', event => {
  event.create('eye_of_fortress')
    .texture('kubejs:item/eye_of_fortress')
    .use((level, player, interactionHand) => {
      return eyeFinder(level, player, interactionHand, 'kubejs:fortress_locator');
    })
    .fireResistant();

  event.create('eye_of_void_blossom')
    .texture('kubejs:item/eye_of_void_blossom')
    .use((level, player, interactionHand) => {
      return eyeFinder(level, player, interactionHand, 'kubejs:void_blossom_locator');
    })
    .fireResistant();
})


function eyeFinder(level, player, interactionHand, structureTagString) {
  let item = player.getHeldItem(interactionHand)
  player.startUsingItem(interactionHand)
  if (!level.isClientSide()) {
    let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, structureTagString)
    let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
    if (foundPos) {
      let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
      eye.setItem(item)
      eye.signalTo(foundPos)
      eye.spawn()
      item.shrink(1)
      level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
      player.swing(interactionHand)
      return true
    }
  }
  return false
}