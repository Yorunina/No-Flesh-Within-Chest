ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('#kubejs:isb_spell_book', (item, advanced, text) => {
        if (item.nbt?.ISB_Spells?.starLightEnhance && item.nbt.ISB_Spells.getInt('starLightEnhance') == 1) {
            text.add(Text.lightPurple({ "translate": "kubejs.tooltips.isb_spell_book.1" }).italic())
        }
    });

    tooltip.addAdvanced('irons_spellbooks:scroll', (item, advanced, text) => {
        if (item.nbt?.ISB_Spells?.starLightEnhance && item.nbt.ISB_Spells.getInt('starLightEnhance') > 9) {
            text.add(Text.lightPurple({ "translate": "kubejs.tooltips.isb_spell_book.2" }).italic())
        }
    });
})
