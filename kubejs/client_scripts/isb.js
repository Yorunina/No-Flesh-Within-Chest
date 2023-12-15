ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvanced('#kubejs:isb_spell_book', (item, advanced, text) => {
        if (item.nbt && item.nbt.ISB_spellbook&& item.nbt.ISB_spellbook.getInt('starLightEnhance') == 1) {
            text.add(Text.lightPurple('星月强化法术槽+2').italic())
        }
    });

    tooltip.addAdvanced('irons_spellbooks:scroll', (item, advanced, text) => {
        if (item.nbt && item.nbt.ISB_spell && item.nbt.ISB_spell.getInt('level') > 10) {
            text.add(Text.lightPurple('已超越法术极限').italic())
        }
    });
})