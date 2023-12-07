ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('kubejs:ritual_catalyst')
    .id('kubejs:ritual_of_rain')
    // .itemOutput('kubejs:secret_of_rain')
    // .mobOutput(
    //     SummoningOutput.mob('blaze')
    //         .count(5)
    //         .offset(0, 3, 0)
    //         .spread(4, 0, 4)
    //         .data({ Health: 50, Attributes: [{ Name: 'generic.max_health', Base: 50 }] })
    // )
    .input('#kubejs:rain_ritual')
    .itemOutput('kubejs:secret_of_rain')
    .sacrifice('cow')
    .sacrificeRegion(3, 3)
    .dayTime('night')
    .recipeTime(200);
});