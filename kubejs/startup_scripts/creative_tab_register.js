const $CreativeTabRegistry = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")
StartupEvents.postInit(event => {
    $CreativeTabRegistry.create(new ResourceLocation("kubejs", "organs"), () => Item.of("kubejs:candy_heart"))
    $CreativeTabRegistry.create(new ResourceLocation("kubejs", "items"), () => Item.of("kubejs:candy_heart"))
})