Ponder.registry((event) => {
    event.create('chestcavity:chest_opener').scene('chest_opener_usage', '如何使用开胸器', (scene, util) => {
        scene.showStructure();
        scene.idle(10);
        const cowEntityLink = scene.world.createEntity('minecraft:cow', [2.5, 1, 2.5]);
        scene.text(60, '当生物的生命值较低时，则可以被开膛', [2, 2.5, 2.5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget();
        scene.idle(10);
        scene.showControls(60, [2.5, 3, 2.5], "down")
            .rightClick()
            .withItem('chestcavity:chest_opener');
        scene.world.modifyEntity(cowEntityLink, (e) => {
            e.animateHurt()
        })
        scene.idle(10);
    });
});