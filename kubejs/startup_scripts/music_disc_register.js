StartupEvents.registry('sound_event', event => {
    event.create("kubejs:slow_down_song")
  })
  


StartupEvents.registry('item', event => {
    event.create("kubejs:slow_down_disc", "music_disc")
        .song("kubejs:slow_down_song", 99)
        .analogOutput(1)
        .texture("kubejs:item/slow_down_disc")
        .displayName("Music Disc: Slow Down")
        .maxStackSize(64)
})