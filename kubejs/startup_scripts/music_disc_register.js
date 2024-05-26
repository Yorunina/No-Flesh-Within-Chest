StartupEvents.registry('sound_event', event => {
    event.create("kubejs:faded_song")
    event.create("kubejs:beak_metal")
    event.create("kubejs:beak_mangrove_roots")
})
  


StartupEvents.registry('item', event => {
    event.create("kubejs:faded_disc", "music_disc")
        .song("kubejs:faded_song", 99)
        .analogOutput(1)
        .texture("kubejs:item/faded_song_disc")
        .displayName("Music Disc: Faded")
        .maxStackSize(1)
})