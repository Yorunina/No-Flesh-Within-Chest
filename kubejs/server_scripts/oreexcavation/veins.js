ServerEvents.recipes(event => {
 
    event.recipes.createoreexcavation.drilling('kubejs:raw_silver', '{"text": "粗银矿"}', 2, 600).drill('createoreexcavation:diamond_drill').alwaysInfinite().stress(384).biomeWhitelist('minecraft:is_overworld').id("kubejs:drilling_silver");

    event.recipes.createoreexcavation.drilling('minecraft:lapis_lazuli', '{"text": "青金石矿"}', 10, 600).drill('createoreexcavation:diamond_drill').alwaysInfinite().stress(256).biomeWhitelist('minecraft:is_overworld').id("kubejs:drilling_lapis");

    event.recipes.createoreexcavation.extracting('minecraft:lava 500', '{"text": "熔岩"}', 5, 100).drill('createoreexcavation:diamond_drill').alwaysInfinite().stress(512).biomeWhitelist('minecraft:is_overworld').id("extracting_lava_overworld");

    event.recipes.createoreexcavation.extracting('minecraft:lava 1000', '{"text": "熔岩"}', 50, 100).drill('createoreexcavation:diamond_drill').alwaysInfinite().stress(512).biomeWhitelist('minecraft:is_nether').id("extracting_lava_nether");

    event.recipes.createoreexcavation.extracting('hexerei:quicksilver_fluid 100', '{"text": "水银"}', 2, 600).drill('createoreexcavation:diamond_drill').alwaysInfinite().stress(640).biomeWhitelist('minecraft:is_overworld').id("extracting_quicksilver");
  })