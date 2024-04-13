// priority: 100

const $EyeofEnder = Java.loadClass('net.minecraft.world.entity.projectile.EyeOfEnder')
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')

StartupEvents.registry('item', event => {
  event.create('eye_of_fortress')
    .group("kubejs.item")
    .texture('kubejs:item/eye_of_fortress')
    .use((level, player, interactionHand) => {
      return eyeFinder(level, player, interactionHand, 'kubejs:fortress_locator');
    })
    .fireResistant();

  event.create('eye_of_village')
    .group("kubejs.item")
    .texture('kubejs:item/eye_of_village')
    .use((level, player, interactionHand) => {
      return eyeFinder(level, player, interactionHand, 'minecraft:village');
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
      player.swing()
      eye.spawn()
      item.shrink(1)
      level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
      player.swing(interactionHand)
      return true
    }
  }
  return false
}