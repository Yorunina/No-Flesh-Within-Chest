EntityEvents.spawned('witherstormmod:wither_storm', event => {
    if (event.getLevel().getDimension() == 'kubejs:lost_memory') {
        return;
    }
    event.server.players.forEach(player => {
        player.notify(Notification.make((notification) => {
            Object.assign(notification, {
                itemIcon: 'minecraft:wither_skeleton_skull',
                backgroundColor: '#472b04',
                borderColor: '#241602',
                outlineColor: '#241602',
                textShadow: false,
                text: [Text.gold("有人似乎试图召唤了什么东西\n").bold(), Text.red("但被另一股神秘力量阻止了。")],
            });
        }));
    })
    event.cancel();
    return;
})