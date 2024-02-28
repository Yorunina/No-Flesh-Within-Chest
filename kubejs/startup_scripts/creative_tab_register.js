const $CreativeTabRegistry = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

$CreativeTabRegistry.create(Utils.id("kubejs:organs"), () => Item.of("kubejs:candy_heart"))
