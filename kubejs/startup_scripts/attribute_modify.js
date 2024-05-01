// priority: -1
global.attributes = {}

StartupEvents.registry('attribute', event => {
    global.attributes.MAGNIFICENT_SPELL_POWER = event.create('magnificent_spell_power', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.MAGNIFICENT_SPELL_RESISTANCE = event.create('magnificent_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)

    global.attributes.CANDY_SPELL_POWER = event.create('candy_spell_power', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.CANDY_SPELL_RESISTANCE = event.create('candy_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
})


ForgeModEvents.onEvent('net.minecraftforge.event.entity.EntityAttributeModificationEvent', event => {
    event.types.forEach(type => {
        event.add(type, global.attributes.MAGNIFICENT_SPELL_POWER.get())
        event.add(type, global.attributes.MAGNIFICENT_SPELL_RESISTANCE.get())
        event.add(type, global.attributes.CANDY_SPELL_POWER.get())
        event.add(type, global.attributes.CANDY_SPELL_RESISTANCE.get())
    })
})