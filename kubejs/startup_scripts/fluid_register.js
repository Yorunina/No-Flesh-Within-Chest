StartupEvents.registry('fluid', event => {
    event.create('syrup')
        .temperature(1500)
        .viscosity(2000)
        .density(8000)
        .flowingTexture('kubejs:fluid/syrup')
        .stillTexture('kubejs:fluid/syrup')
        .bucketColor(0x914300)
});

StartupEvents.registry('fluid', event => {
    event.create('cream')
        .temperature(1000)
        .viscosity(1500)
        .density(6000)
        .flowingTexture('kubejs:fluid/cream')
        .stillTexture('kubejs:fluid/cream')
        .bucketColor(0xFDF5E6)
});