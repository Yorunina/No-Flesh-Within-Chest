ItemEvents.modification((event) => {
    event.modify('extraarmor:magma_helmet', (item) => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '99C7EB2B-BDB2-4ED3-8994-42482686384F',
            'kubejsFireSpellBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_chestplate', (item) => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '8DA63229-6D05-4A14-8327-3085CED61BDB',
            'kubejsFireSpellBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_leggings', (item) => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '83714150-0D4D-49FF-82B4-94B139E18063',
            'kubejsFireSpellBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_boots', (item) => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            'A4196E77-E89C-4A58-982C-7082ABCA78CE',
            'kubejsFireSpellBoost',
            0.1,
            'addition'
        );
    });
});