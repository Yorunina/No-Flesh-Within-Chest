// KeybindEvents.register(event => {
//     event.register(new KeyBind("open_menu" /* name */, InputConstants.KEY_G /* key index, opengl spec */, "screenjs" /* category name */), (action, modifiers /* modifiers as per OpenGL spec */) => {
//         if (action == 1) { // action == 1 is PRESS
//             Minecraft.instance.gui.setOverlayMessage(Text.string('AAA').yellow(), false) // vanilla method
//             MenuScreens.create('kubejs:separate', Minecraft.instance, 1000, Text.string('AAA').yellow()) // opens a GUI container, preferably of type 'basic'
//         } else if (action == 0) { // action == 0 is RELEASE
//             Minecraft.instance.gui.setOverlayMessage(Text.string('BBB').yellow(), true)
//         } else { // action == 2 is REPEAT (after a second of PRESS)
//             Minecraft.instance.gui.setOverlayMessage(Text.string('REPEAT').red(), false)
//         }
//     })
// })



// ScreenJs meet error when 1.19.2, so code dismiss here