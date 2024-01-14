StartupEvents.registry('fluid', event => {
    event.create('syrup')
        .temperature(1500)
        .viscosity(2000)
        .density(8000)
        .flowingTexture('kubejs:fluid/syrup')
        .stillTexture('kubejs:fluid/syrup')
        .bucketColor(0x914300)
});
