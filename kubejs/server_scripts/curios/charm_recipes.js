ServerEvents.recipes(event => {
    event.shapeless('kubejs:organ_charm', ['kubejs:empty_organ_charm', '#kubejs:organ'])
        .modifyResult((grid, stack) => {
            let organ = grid.find('#kubejs:organ', 0)
            stack = Item.of('kubejs:organ_charm', {})
            if (organCharmNbtMap[organ.id]) {
                stack.nbt.merge(organCharmNbtMap[organ.id])
            }
            stack.nbt.merge({ organ: { id: organ.id, tag: organ.nbt } })
            return stack;
        });

    event.shapeless('chestcavity:appendix', ['kubejs:organ_charm'])
        .replaceIngredient('kubejs:organ_charm', 'kubejs:empty_organ_charm')
        .modifyResult((grid, stack) => {
            let charm = grid.find('kubejs:organ_charm', 0)
            if (charm.nbt?.organ) {
                stack = Item.of(charm.nbt.organ.id, charm.nbt.organ.tag)
            }
            return stack;
        });
})

const organCharmNbtMap = {
    'kubejs:muscle_template': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:muscle_iron' },
    'kubejs:muscle_iron': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:muscle_gold' },
    'kubejs:muscle_gold': { type: 'kill', killTask: { mobType: 'minecraft:zombie', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:muscle_diamond' },

    'kubejs:telescopic_arm': { type: 'kill', killTask: { mobType: 'somebosses:hand_head', killAmount: 1, counter: 0 }, targetOrgan: 'kubejs:telescopic_attack_arm' },

    'kubejs:lung_template': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:lung_iron' },
    'kubejs:lung_iron': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:lung_gold' },
    'kubejs:lung_gold': { type: 'kill', killTask: { mobType: 'minecraft:spider', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:lung_diamond' },

    'kubejs:spine_template': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:spine_iron' },
    'kubejs:spine_iron': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:spine_gold' },
    'kubejs:spine_gold': { type: 'kill', killTask: { mobType: 'minecraft:skeleton', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:spine_diamond' },

    'kubejs:appendix_template': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 3, counter: 0 }, targetOrgan: 'kubejs:appendix_iron' },
    'kubejs:appendix_iron': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 10, counter: 0 }, targetOrgan: 'kubejs:appendix_gold' },
    'kubejs:appendix_gold': { type: 'kill', killTask: { mobType: 'minecraft:creeper', killAmount: 30, counter: 0 }, targetOrgan: 'kubejs:appendix_diamond' },

    'kubejs:stomach_template': { type: 'diet', dietTask: { minHunger: 1, foodTypeAmount: 3, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_iron' },
    'kubejs:stomach_iron': { type: 'diet', dietTask: { minHunger: 2, foodTypeAmount: 5, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_gold' },
    'kubejs:stomach_gold': { type: 'diet', dietTask: { minHunger: 3, foodTypeAmount: 10, foodTypeList: [] }, targetOrgan: 'kubejs:stomach_diamond' },

    'kubejs:intestine_template': { type: 'diet', dietTask: { minHunger: 1, foodTypeAmount: 3, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_iron' },
    'kubejs:intestine_iron': { type: 'diet', dietTask: { minHunger: 2, foodTypeAmount: 5, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_gold' },
    'kubejs:intestine_gold': { type: 'diet', dietTask: { minHunger: 3, foodTypeAmount: 10, foodTypeList: [] }, targetOrgan: 'kubejs:intestine_diamond' },

    'kubejs:spleen_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 400, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_iron' },
    'kubejs:spleen_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 900, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_gold' },
    'kubejs:spleen_gold': { type: 'damage', damageTask: { minDamage: 12, damageAmount: 1600, counter: 0, type: "magic" }, targetOrgan: 'kubejs:spleen_diamond' },

    'kubejs:rib_template': { type: 'bear', bearTask: { minDamage: 2, bearAmount: 100, counter: 0 }, targetOrgan: 'kubejs:rib_iron' },
    'kubejs:rib_iron': { type: 'bear', bearTask: { minDamage: 3, bearAmount: 300, counter: 0 }, targetOrgan: 'kubejs:rib_gold' },
    'kubejs:rib_gold': { type: 'bear', bearTask: { minDamage: 5, bearAmount: 500, counter: 0 }, targetOrgan: 'kubejs:rib_diamond' },

    'kubejs:kidney_template': { type: 'bear', bearTask: { minDamage: 2, bearAmount: 100, counter: 0 }, targetOrgan: 'kubejs:kidney_iron' },
    'kubejs:kidney_iron': { type: 'bear', bearTask: { minDamage: 3, bearAmount: 300, counter: 0 }, targetOrgan: 'kubejs:kidney_gold' },
    'kubejs:kidney_gold': { type: 'bear', bearTask: { minDamage: 5, bearAmount: 500, counter: 0 }, targetOrgan: 'kubejs:kidney_diamond' },

    'kubejs:liver_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 500, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_iron' },
    'kubejs:liver_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 1000, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_gold' },
    'kubejs:liver_gold': { type: 'damage', damageTask: { minDamage: 12, damageAmount: 1800, counter: 0, type: "projectile" }, targetOrgan: 'kubejs:liver_diamond' },

    'kubejs:heart_template': { type: 'damage', damageTask: { minDamage: 3, damageAmount: 800, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_iron' },
    'kubejs:heart_iron': { type: 'damage', damageTask: { minDamage: 8, damageAmount: 1500, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_gold' },
    'kubejs:heart_gold': { type: 'damage', damageTask: { minDamage: 15, damageAmount: 3000, counter: 0, type: "melee" }, targetOrgan: 'kubejs:heart_diamond' },

    'kubejs:blade_of_heart': { type: 'bear', bearTask: { minDamage: 10, bearAmount: 150, counter: 0 }, targetOrgan: 'kubejs:heart_of_blade' },
    'kubejs:heart_of_blade': { type: 'damage', damageTask: { minDamage: 15, damageAmount: 3000, counter: 0, type: "melee" }, targetOrgan: 'kubejs:blade_of_heart' },

    'kubejs:stomach_diamond': { type: 'diet', dietTask: { minHunger: 4, foodTypeAmount: 30, foodTypeList: [] }, targetOrgan: 'kubejs:king_of_stomach' },

    'kubejs:stomach_tumor': { type: 'mining', miningTask: { targetblock: ['minecraft:diamond_block', 'minecraft:gold_block', 'minecraft:iron_block', 'minecraft:copper_block'], counter: 0, consume: true, miningAmount: 32 }, targetOrgan: 'kubejs:desire_of_midas' },

    'kubejs:doppelganger': { type: 'diet', dietTask: { minHunger: 4, foodTypeAmount: 13, foodTypeList: [] }, targetOrgan: 'kubejs:mini_vampire' },

    'kubejs:fish_in_chest': { type: 'warp', warpTask: { warpMin: 50 }, targetOrgan: 'kubejs:fish_in_warp' },
    'chestcavity:gas_bladder': { type: 'warp', warpTask: { warpMin: 30 }, targetOrgan: 'kubejs:warp_bubble' }, 
}