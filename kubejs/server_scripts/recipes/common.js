ServerEvents.recipes(event => {
    event.remove({ mod: 'nameless_trinkets' })
    event.remove({ mod: 'somebosses' })
    event.remove({ output: 'supplementaries:candy' })
    event.remove({ output: 'moblassos:hostile_lasso' })
    event.remove({ output: 'majobroom:majo_hat' })
    event.remove({ output: 'majobroom:majo_cloth' })
    event.remove({ output: 'morebows:ender_bow' })


    event.shaped('minecraft:end_portal_frame', [
        ['hexerei:selenite_shard', 'hexerei:wax_blend', 'hexerei:selenite_shard'],
        ['minecraft:end_stone', 'minecraft:end_crystal', 'minecraft:end_stone'],
        ['#forge:obsidian', '#forge:obsidian', '#forge:obsidian']
    ])

    event.shaped('minecraft:elytra', [
        ['', 'alexsmobs:banana_slug_slime', ''],
        ['minecraft:phantom_membrane', 'createaddition:gold_wire', 'minecraft:phantom_membrane'],
        ['', 'alexsmobs:banana_slug_slime', '']
    ])

    event.shapeless('summoningrituals:altar', ['minecraft:wither_skeleton_skull', '#hexerei:candles', '#hexerei:candles', '#hexerei:candles', 'createaddition:electrum_sheet', 'minecraft:lectern'])

    event.shaped('irons_spellbooks:copper_spell_book', [
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', '#kubejs:isb_spell_book', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment']])
        .modifyResult((grid, stack) => {
            let spellBook = grid.find('#kubejs:isb_spell_book', 0)
            if (spellBook.nbt.ISB_spellbook.getInt('starLightEnhance') == 1) {
                return null;
            }
            spellBook.nbt.ISB_spellbook.putInt('spellSlots', spellBook.nbt.ISB_spellbook.getInt('spellSlots') + 2)
            spellBook.nbt.ISB_spellbook.putInt('starLightEnhance', 1)
            stack = spellBook
            return stack;
        });

    event.shaped('irons_spellbooks:scroll', [
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'irons_spellbooks:scroll', 'kubejs:stardust_fragment'],
        ['kubejs:stardust_fragment', 'kubejs:stardust_fragment', 'kubejs:stardust_fragment']])
        .modifyResult((grid, stack) => {
            let spellBook = grid.find('irons_spellbooks:scroll', 0)
            spellBook.nbt.ISB_spell.putInt('level', spellBook.nbt.ISB_spell.getInt('level') + 1)
            stack = spellBook
            return stack;
        });

    event.shapeless('kubejs:paradise_regained', ['kubejs:god_consciousness','kubejs:god_consciousness', 'kubejs:god_consciousness'])
        .modifyResult((grid, stack) => {
            let nbt1 = grid.find('kubejs:god_consciousness', 0).nbt
            let nbt2 = grid.find('kubejs:god_consciousness', 1).nbt
            let nbt3 = grid.find('kubejs:god_consciousness', 2).nbt
            if ((nbt1?.mobType != nbt2?.mobType) && (nbt2?.mobType != nbt3?.mobType) && (nbt3?.mobType != nbt1?.mobType)) {
                stack = Item.of('kubejs:paradise_regained')
                return stack;
            }
            return null;
        });

    event.shapeless('kubejs:infinity_force', ['kubejs:infinity_force', 'kubejs:infinity_force'])
        .modifyResult((grid, stack) => {
            let item1 = grid.find('kubejs:infinity_force', 0)
            let item2 = grid.find('kubejs:infinity_force', 1)
            if ((item1.nbt?.forgeTimes ?? 0) == (item2.nbt?.forgeTimes ?? 0)) {
                let forgeTimes = item1.nbt?.forgeTimes ?? 0
                stack = Item.of('kubejs:infinity_force', { forgeTimes: forgeTimes + 1 })
                return stack;
            }
            return null;
        });

    event.shapeless('kubejs:lucky_cookie', ['minecraft:paper', 'minecraft:cookie'])

    event.shaped('kubejs:empty_organ_charm', [
        ['#forge:glass', '#minecraft:logs', '#forge:glass'],
        ['#forge:glass', 'minecraft:ghast_tear', '#forge:glass'],
        ['#forge:glass', '#forge:glass', '#forge:glass']])

    event.shaped('kubejs:friend_to_the_end', [
        ['lightmanscurrency:coin_gold', '#forge:gems/diamond', 'lightmanscurrency:coin_gold'],
        ['lightmanscurrency:coin_gold', '', 'lightmanscurrency:coin_gold'],
        ['lightmanscurrency:coin_gold', 'lightmanscurrency:coin_gold', 'lightmanscurrency:coin_gold']])
    event.shaped('irons_spellbooks:silver_ring', [
        ['kubejs:silver_ingot', 'kubejs:silver_ingot', 'kubejs:silver_ingot'],
        ['kubejs:silver_ingot', '', 'kubejs:silver_ingot'],
        ['kubejs:silver_ingot', 'kubejs:silver_ingot', 'kubejs:silver_ingot']])
    event.shaped('kubejs:color_palette', [
        ['create:iron_sheet', 'create:iron_sheet', 'create:iron_sheet'],
        ['createaddition:electrum_sheet', 'create:clipboard', 'createaddition:electrum_sheet'],
        ['#forge:dyes/blue', '#forge:dyes/red', '#forge:dyes/green']])
})