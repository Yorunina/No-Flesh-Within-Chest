ItemEvents.modification((event) => {
    event.modify('extraarmor:magma_helmet', item => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '99C7EB2B-BDB2-4ED3-8994-42482686384F',
            'kubejsFireSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_chestplate', item => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '8DA63229-6D05-4A14-8327-3085CED61BDB',
            'kubejsFireSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_leggings', item => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            '83714150-0D4D-49FF-82B4-94B139E18063',
            'kubejsFireSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:magma_boots', item => {
        item.addAttribute(
            'irons_spellbooks:fire_spell_power',
            'A4196E77-E89C-4A58-982C-7082ABCA78CE',
            'kubejsFireSpellArmorBoost',
            0.1,
            'addition'
        );
    });

    event.modify('extraarmor:ice_helmet', item => {
        item.addAttribute(
            'irons_spellbooks:ice_spell_power',
            '03B9249B-929A-42AE-84F2-AD0DEBDCB3AB',
            'kubejsIceSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:ice_chestplate', item => {
        item.addAttribute(
            'irons_spellbooks:ice_spell_power',
            '86F42006-5A57-43BE-9151-E24C9B6E8B4B',
            'kubejsIceSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:ice_leggings', item => {
        item.addAttribute(
            'irons_spellbooks:ice_spell_power',
            '70A117E4-B12F-45C5-9BD5-6DB0662AF020',
            'kubejsIceSpellArmorBoost',
            0.1,
            'addition'
        );
    });
    event.modify('extraarmor:ice_boots', item => {
        item.addAttribute(
            'irons_spellbooks:ice_spell_power',
            'E3288450-C0DC-4690-B12C-4CEE9FD498FD',
            'kubejsIceSpellArmorBoost',
            0.1,
            'addition'
        );
    });

    event.modify('unusualprehistory:defrosted_frozen_fossil', item => {
        item.setFoodProperties(food => {
            food.hunger(15).saturation(0.5)
        })
    })
    event.modify('unusualprehistory:cooked_mammoth', item => {
        item.setFoodProperties(food => {
            food.hunger(10).saturation(0.8)
        })
    })
    event.modify('unusualprehistory:mammoth_meatball', item => {
        item.setFoodProperties(food => {
            food.hunger(18).saturation(0.3)
        })
    })
    event.modify('unusualprehistory:cooked_coty', item => {
        item.setFoodProperties(food => {
            food.hunger(10).saturation(0.8)
        })
    })
    event.modify('unusualprehistory:cooked_scau', item => {
        item.setFoodProperties(food => {
            food.hunger(8).saturation(1)
        })
    })
    event.modify('unusualprehistory:golden_scau', item => {
        item.setFoodProperties(food => {
            food.hunger(15).saturation(0.3)
        })
    })
    event.modify('unusualprehistory:cooked_austro', item => {
        item.setFoodProperties(food => {
            food.hunger(8).saturation(1.2)
        })
    })
});