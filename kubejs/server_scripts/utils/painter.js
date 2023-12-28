
function paintResourceBar() {
    let percent = cur / max
    event.player.paint({ resourceBar: { type: 'rectangle', x: 10, y: '$screenH/2', w: 11, h: 98, alignX: 'left', texture: 'kubejs:textures/gui/resource_bar.png' } })
    event.player.paint({ resourceBarOverlay: { type: 'rectangle', x: 10, y: '$screenH/2', u0: 0, u1: percent, w: 11, h: 98 * percent, alignX: 'left', texture: 'kubejs:textures/gui/resource_bar_overlay.png' } })
}