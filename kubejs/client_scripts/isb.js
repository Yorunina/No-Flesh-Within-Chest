ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('#kubejs:isb_spell_book', (item, advanced, text) => {
        if (item.nbt && item.nbt.ISB_spellbook && item.nbt.ISB_spellbook.getInt('starLightEnhance') == 1) {
            text.add(Text.lightPurple({ "translate": "kubejs.tooltips.isb_spell_book.1" }).italic())
        }
    });

    tooltip.addAdvanced('irons_spellbooks:scroll', (item, advanced, text) => {
        if (item.nbt && item.nbt.ISB_spell && item.nbt.ISB_spell.getInt('level') > 10) {
            text.add(Text.lightPurple({ "translate": "kubejs.tooltips.isb_spell_book.2" }).italic())
        }
    });
})
