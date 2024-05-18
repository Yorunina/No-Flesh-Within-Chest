Platform.mods.kubejs.name = 'No Flesh Within Chest'
global.ORGAN_LIST = []

global.OPERATION_ADD = 'addition'
global.OPERATION_MULTI_TOTAL = 'multiply_total'
global.OPERATION_MULTI_BASE = 'multiply_base'

global.HEALTH_UP = { key: 'minecraft:generic.max_health', name: 'kubejsMaxHealth', operation: 'addition' }
global.ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamage', operation: 'addition' }
global.TEMP_ATTACK_UP = { key: 'minecraft:generic.attack_damage', name: 'kubejsTempAttackDamage', operation: 'addition' }
global.COOLDOWN_REDUCTION = { key: 'irons_spellbooks:cooldown_reduction', name: 'kubejsCooldownReduction', operation: 'addition' }
global.SPELL_POWER = { key: 'irons_spellbooks:spell_power', name: 'kubejsSpellPower', operation: 'addition' }
global.ICE_SPELL_POWER = { key: 'irons_spellbooks:ice_spell_power', name: 'kubejsIceSpellPower', operation: 'addition' }
global.FIRE_SPELL_POWER = { key: 'irons_spellbooks:fire_spell_power', name: 'kubejsFireSpellPower', operation: 'addition' }
global.CANDY_SPELL_POWER = { key: 'kubejs:candy_spell_power', name: 'kubejsCandySpellPower', operation: 'addition' }
global.ARMOR_TOUGHNESS = { key: 'minecraft:generic.armor_toughness', name: 'kubejsArmorToughness', operation: 'addition' }
global.ARMOR = { key: 'minecraft:generic.armor', name: 'kubejsArmor', operation: 'addition' }
global.ATTACK_SPEED = { key: 'minecraft:generic.attack_speed', name: 'kubejsAttackSpeed', operation: 'addition' }
global.MOVEMENT_SPEED = { key: 'minecraft:generic.movement_speed', name: 'kubejsMovementSpeed', operation: 'addition' }
global.MANA_REGEN = { key: 'irons_spellbooks:mana_regen', name: 'kubejsManaRegen', operation: 'addition' }
global.MAX_MANA = { key: 'irons_spellbooks:max_mana', name: 'kubejsMaxMana', operation: 'addition' }
global.KNOCKBACK_RESISTANCE = { key: 'minecraft:generic.knockback_resistance', name: 'kubejsKnockbackResistance', operation: 'addition' }
global.ATTACK_RANGE = { key: 'forge:attack_range', name: 'kubejsAttackRange', operation: 'addition' }
global.REACH_DISTANCE = { key: 'forge:reach_distance', name: 'kubejsReachRange', operation: 'addition' }
global.CRITICAL_HIT = { key: 'obscure_api:critical_hit', name: 'kubejsCriticalHit', operation: 'addition' }
global.CRITICAL_DAMAGE = { key: 'obscure_api:critical_damage', name: 'kubejsCriticalDamage', operation: 'addition' }
global.PARRY = { key: 'obscure_api:parry', name: 'kubejsParry', operation: 'addition' }
global.DODGE = { key: 'obscure_api:dodge', name: 'kubejsDodge', operation: 'addition' }
global.REGENERATION = { key: 'obscure_api:regeneration', name: 'kubejsRegeneration', operation: 'addition' }
global.PENETRATION = { key: 'obscure_api:penetration', name: 'kubejsPenetration', operation: 'addition' }
global.SUMMON_DAMAGE = { key: 'irons_spellbooks:summon_damage', name: 'kubejsSummonDamage', operation: 'addition' }
global.BLOOD_SPELL_DAMAGE = { key: 'irons_spellbooks:blood_spell_power', name: 'kubejsBloodSpellDamage', operation: 'addition' }
global.HOLY_SPELL_DAMAGE = { key: 'irons_spellbooks:holy_spell_power', name: 'kubejsHolySpellDamage', operation: 'addition' }
global.LUCK = { key: 'minecraft:generic.luck', name: 'kubejsLuck', operation: 'addition' }
global.LUCK_MULTI_BASE = { key: 'minecraft:generic.luck', name: 'kubejsLuckMultiBase', operation: 'multiply_base' }
global.ATTACK_UP_MULTI_BASE = { key: 'minecraft:generic.attack_damage', name: 'kubejsAttackDamageMultiBase', operation: 'multiply_base' }
global.ARMOR_MULTI_BASE = { key: 'minecraft:generic.armor', name: 'kubejsArmorMultiBase', operation: 'multiply_base' }

global.ATTRIBUTE_MAP = {
    'kubejsAttackDamage': global.ATTACK_UP,
    'kubejsMaxHealth': global.HEALTH_UP,
    'kubejsTempAttackDamage': global.TEMP_ATTACK_UP,
    'kubejsCooldownReduction': global.COOLDOWN_REDUCTION,
    'kubejsSpellPower': global.SPELL_POWER,
    'kubejsIceSpellPower': global.ICE_SPELL_POWER,
    'kubejsFireSpellPower': global.FIRE_SPELL_POWER,
    'kubejsArmorToughness': global.ARMOR_TOUGHNESS,
    'kubejsArmor': global.ARMOR,
    'kubejsAttackSpeed': global.ATTACK_SPEED,
    'kubejsMovementSpeed': global.MOVEMENT_SPEED,
    'kubejsManaRegen': global.MANA_REGEN,
    'kubejsMaxMana': global.MAX_MANA,
    'kubejsKnockbackResistance': global.KNOCKBACK_RESISTANCE,
    'kubejsAttackRange': global.ATTACK_RANGE,
    'kubejsReachRange': global.REACH_DISTANCE,
    'kubejsCriticalHit': global.CRITICAL_HIT,
    'kubejsCriticalDamage': global.CRITICAL_DAMAGE,
    'kubejsParry': global.PARRY,
    'kubejsDodge': global.DODGE,
    'kubejsRegeneration': global.REGENERATION,
    'kubejsPenetration': global.PENETRATION,
    'kubejsSummonDamage': global.SUMMON_DAMAGE,
    'kubejsBloodSpellDamage': global.BLOOD_SPELL_DAMAGE,
    'kubejsHolySpellDamage': global.HOLY_SPELL_DAMAGE,
    'kubejsLuck': global.LUCK,
    'kubejsLuckMultiBase': global.LUCK_MULTI_BASE,
    'kubejsAttackDamageMultiBase': global.ATTACK_UP_MULTI_BASE,
    'kubejsArmorMultiBase': global.ARMOR_MULTI_BASE,
    'kubejsCandySpellPower': global.CANDY_SPELL_POWER,
}

global.TYPE_MAP = {
    'kubejs:appendix': Text.aqua({ "translate": "kubejs.tooltips.appendix" }),
    'kubejs:heart': Text.aqua({ "translate": "kubejs.tooltips.heart" }),
    'kubejs:intestine': Text.aqua({ "translate": "kubejs.tooltips.intestine" }),
    'kubejs:kidney': Text.aqua({ "translate": "kubejs.tooltips.kidney" }),
    'kubejs:liver': Text.aqua({ "translate": "kubejs.tooltips.liver" }),
    'kubejs:lung': Text.aqua({ "translate": "kubejs.tooltips.lung" }),
    'kubejs:muscle': Text.aqua({ "translate": "kubejs.tooltips.muscle" }),
    'kubejs:rib': Text.gray({ "translate": "kubejs.tooltips.rib" }),
    'kubejs:spine': Text.of({ "translate": "kubejs.tooltips.spine" }).color('#cff9ff'),
    'kubejs:spleen': Text.aqua({ "translate": "kubejs.tooltips.spleen" }),
    'kubejs:pancreas': Text.aqua({ "translate": "kubejs.tooltips.pancreas" }),
    'kubejs:stomach': Text.aqua({ "translate": "kubejs.tooltips.stomach" }),
    'kubejs:infinity': Text.lightPurple({ "translate": "kubejs.tooltips.infinity" }),
    'kubejs:machine': Text.gray({ "translate": "kubejs.tooltips.machine" }),
    'kubejs:magic': Text.of({ "translate": "kubejs.tooltips.magic" }).color('#00eded'),
    'kubejs:candy': Text.of({ "translate": "kubejs.tooltips.candy" }).color('#e8a0dc'),
    'kubejs:rose': Text.darkRed({ "translate": "kubejs.tooltips.rose" }),
    'kubejs:resource': Text.gold({ "translate": "kubejs.tooltips.resource" }),
    'kubejs:revolution': Text.of({ "translate": "kubejs.tooltips.revolution" }).color('#deaa00'),
    'kubejs:relics': Text.of({ "translate": "kubejs.tooltips.relics" }).color('#ffe100'),
    'kubejs:legends': Text.of({ "translate": "kubejs.tooltips.legends" }).color('#d6e5ff'),
    'kubejs:evolution': Text.green({ "translate": "kubejs.tooltips.evolution" }),
    'kubejs:food': Text.of({ "translate": "kubejs.tooltips.food" }).color('#f1b500'),
    'kubejs:huge': Text.of({ "translate": "kubejs.tooltips.huge" }).color('#a900fd'),
    'kubejs:warp': Text.darkPurple({ "translate": "kubejs.tooltips.warp" }),
    'kubejs:prehistory': Text.of({ "translate": "kubejs.tooltips.prehistory" }).color('#d6d124'),
    'kubejs:dragon': Text.of({ "translate": "kubejs.tooltips.dragon" }).color('#bc00bc'),
    'kubejs:void': Text.of({ "translate": "kubejs.tooltips.void" }).color('#c2bec2'),
    'kubejs:fantasy': Text.of({ "translate": "kubejs.tooltips.fantasy" }).color('#cd9b9b'),
    'kubejs:infected': Text.of({ "translate": "kubejs.tooltips.infected" }).color('#00ba03'),
    'kubejs:botany': Text.of({ "translate": "kubejs.tooltips.botany" }).color('#0ed400'),
    'kubejs:loot_entity': Text.gold({ "translate": "kubejs.tooltips.loot_entity" }),
    'kubejs:loot_entity_only': Text.gold({ "translate": "kubejs.tooltips.loot_entity_only" }),
    'kubejs:loot_chest': Text.gold({ "translate": "kubejs.tooltips.loot_chest" }),
    'kubejs:loot_chest_only': Text.gold({ "translate": "kubejs.tooltips.loot_chest_only" }),
    'kubejs:active_only': Text.gold({ "translate": "kubejs.tooltips.active_only" }),
    'kubejs:active': Text.gold({ "translate": "kubejs.tooltips.active" }),
    'kubejs:rclick_only': Text.gold({ "translate": "kubejs.tooltips.rclick_only" }),
    'kubejs:rclick': Text.gold({ "translate": "kubejs.tooltips.rclick" }),
    'kubejs:player_tick_only': Text.gold({ "translate": "kubejs.tooltips.player_tick_only" }),
    'kubejs:player_tick': Text.gold({ "translate": "kubejs.tooltips.player_tick" }),
    'kubejs:key_pressed': Text.gold({ "translate": "kubejs.tooltips.key_pressed" }),
    'kubejs:damage_only': Text.gold({ "translate": "kubejs.tooltips.damage_only" }),
    'kubejs:damage': Text.gold({ "translate": "kubejs.tooltips.damage" }),
    'kubejs:eat_effect_only': Text.gold({ "translate": "kubejs.tooltips.eat_effect_only" }),
    'kubejs:eat_effect': Text.gold({ "translate": "kubejs.tooltips.eat_effect" }),
    'kubejs:break_only': Text.gold({ "translate": "kubejs.tooltips.break_only" }),
    'kubejs:break': Text.gold({ "translate": "kubejs.tooltips.break" }),
    'kubejs:bear_only': Text.gold({ "translate": "kubejs.tooltips.bear_only" }),
    'kubejs:bear': Text.gold({ "translate": "kubejs.tooltips.bear" }),
    'kubejs:enchant_only': Text.gold({ "translate": "kubejs.tooltips.enchant_only" }),
    'kubejs:enchant': Text.gold({ "translate": "kubejs.tooltips.enchant" }),
}


global.SCORE_MAP = {
    'chestcavity:filtration': { "translate": "kubejs.chestcavity.filtration" },
    'chestcavity:breath_recovery': { "translate": "kubejs.chestcavity.breath_recovery" },
    'chestcavity:nutrition': { "translate": "kubejs.chestcavity.nutrition" },
    'chestcavity:nerves': { "translate": "kubejs.chestcavity.nerves" },
    'chestcavity:strength': { "translate": "kubejs.chestcavity.strength" },
    'chestcavity:health': { "translate": "kubejs.chestcavity.health" },
    'chestcavity:breath_capacity': { "translate": "kubejs.chestcavity.breath_capacity" },
    'chestcavity:detoxification': { "translate": "kubejs.chestcavity.detoxification" },
    'chestcavity:speed': { "translate": "kubejs.chestcavity.speed" },
    'chestcavity:endurance': { "translate": "kubejs.chestcavity.endurance" },
    'chestcavity:luck': { "translate": "kubejs.chestcavity.luck" },
    'chestcavity:defense': { "translate": "kubejs.chestcavity.defense" },
    'chestcavity:digestion': { "translate": "kubejs.chestcavity.digestion" },
    'chestcavity:metabolism': { "translate": "kubejs.chestcavity.metabolism" },
    'chestcavity:fire_resistant': { "translate": "kubejs.chestcavity.fire_resistant" },
    'chestcavity:buoyant': { "translate": "kubejs.chestcavity.buoyant" },
    'chestcavity:glowing': { "translate": "kubejs.chestcavity.glowing" },
    'chestcavity:knockback_resistant': { "translate": "kubejs.chestcavity.knockback_resistant" },
    'chestcavity:water_breath': { "translate": "kubejs.chestcavity.water_breath" },
    'chestcavity:explosive': { "translate": "kubejs.chestcavity.explosive" },
    'chestcavity:pyromancy': { "translate": "kubejs.chestcavity.pyromancy" },
    'chestcavity:hydroallergenic': { "translate": "kubejs.chestcavity.hydroallergenic" },
    'chestcavity:photosynthesis': { "translate": "kubejs.chestcavity.photosynthesis" },
    'chestcavity:ghastly': { "translate": "kubejs.chestcavity.ghastly" },
    'chestcavity:withered': { "translate": "kubejs.chestcavity.withered" },
    'chestcavity:dragon_bombs': { "translate": "kubejs.chestcavity.dragon_bombs" },
    'chestcavity:buff_purging': { "translate": "kubejs.chestcavity.buff_purging" },
    'chestcavity:herbivorous_digestion': { "translate": "kubejs.chestcavity.herbivorous_digestion" },
    'chestcavity:herbivorous_nutrition': { "translate": "kubejs.chestcavity.herbivorous_nutrition" },
    'chestcavity:carnivorous_digestion': { "translate": "kubejs.chestcavity.carnivorous_digestion" },
    'chestcavity:carnivorous_nutrition': { "translate": "kubejs.chestcavity.carnivorous_nutrition" },
    'chestcavity:swim_speed': { "translate": "kubejs.chestcavity.swim_speed" },
    'chestcavity:launching': { "translate": "kubejs.chestcavity.launching" },
    'chestcavity:furnace_powered': { "translate": "kubejs.chestcavity.furnace_powered" },
    'chestcavity:iron_repair': { "translate": "kubejs.chestcavity.iron_repair" },
    'chestcavity:crystalsynthesis': { "translate": "kubejs.chestcavity.crystalsynthesis" },
    'chestcavity:rot_digestion': { "translate": "kubejs.chestcavity.rot_digestion" },
    'chestcavity:rot_nutrition': { "translate": "kubejs.chestcavity.rot_nutrition" },

    'chestcavity:forceful_spit': { "translate": "kubejs.chestcavity.forceful_spit" },
    'chestcavity:silk': { "translate": "kubejs.chestcavity.silk" },
    'chestcavity:venomous': { "translate": "kubejs.chestcavity.venomous" },
    'chestcavity:leaping': { "translate": "kubejs.chestcavity.leaping" },
    'chestcavity:hydrophobia': { "translate": "kubejs.chestcavity.hydrophobia" },
    'chestcavity:dragon_breath': { "translate": "kubejs.chestcavity.dragon_breath" },
    'chestcavity:creepy': { "translate": "kubejs.chestcavity.creepy" },
    'chestcavity:shulker_bullets': { "translate": "kubejs.chestcavity.shulker_bullets" },
    'chestcavity:grazing': { "translate": "kubejs.chestcavity.grazing" },
    'chestcavity:arrow_dodging': { "translate": "kubejs.chestcavity.arrow_dodging" },
    'chestcavity:impact_resistant': { "translate": "kubejs.chestcavity.impact_resistant" },
    'chestcavity:rotgut': { "translate": "kubejs.chestcavity.rotgut" },
    'chestcavity:ease_of_access': { "translate": "kubejs.chestcavity.ease_of_access" },
}

global.SCORE_HOVER_MAP = {
    'chestcavity:filtration': { "translate": "kubejs.chestcavity.hover.filtration" },
    'chestcavity:breath_recovery': { "translate": "kubejs.chestcavity.hover.breath_recovery" },
    'chestcavity:nutrition': { "translate": "kubejs.chestcavity.hover.nutrition" },
    'chestcavity:nerves': { "translate": "kubejs.chestcavity.hover.nerves" },
    'chestcavity:strength': { "translate": "kubejs.chestcavity.hover.strength" },
    'chestcavity:health': { "translate": "kubejs.chestcavity.hover.health" },
    'chestcavity:breath_capacity': { "translate": "kubejs.chestcavity.hover.breath_capacity" },
    'chestcavity:detoxification': { "translate": "kubejs.chestcavity.hover.detoxification" },
    'chestcavity:speed': { "translate": "kubejs.chestcavity.hover.speed" },
    'chestcavity:endurance': { "translate": "kubejs.chestcavity.hover.endurance" },
    'chestcavity:luck': { "translate": "kubejs.chestcavity.hover.luck" },
    'chestcavity:defense': { "translate": "kubejs.chestcavity.hover.defense" },
    'chestcavity:digestion': { "translate": "kubejs.chestcavity.hover.digestion" },
    'chestcavity:metabolism': { "translate": "kubejs.chestcavity.hover.metabolism" },
    'chestcavity:fire_resistant': { "translate": "kubejs.chestcavity.hover.fire_resistant" },
    'chestcavity:buoyant': { "translate": "kubejs.chestcavity.hover.buoyant" },
    'chestcavity:glowing': { "translate": "kubejs.chestcavity.hover.glowing" },
    'chestcavity:knockback_resistant': { "translate": "kubejs.chestcavity.hover.knockback_resistant" },
    'chestcavity:water_breath': { "translate": "kubejs.chestcavity.hover.water_breath" },
    'chestcavity:explosive': { "translate": "kubejs.chestcavity.hover.explosive" },
    'chestcavity:pyromancy': { "translate": "kubejs.chestcavity.hover.pyromancy" },
    'chestcavity:hydroallergenic': { "translate": "kubejs.chestcavity.hover.hydroallergenic" },
    'chestcavity:photosynthesis': { "translate": "kubejs.chestcavity.hover.photosynthesis" },
    'chestcavity:ghastly': { "translate": "kubejs.chestcavity.hover.ghastly" },
    'chestcavity:withered': { "translate": "kubejs.chestcavity.hover.withered" },
    'chestcavity:dragon_bombs': { "translate": "kubejs.chestcavity.hover.dragon_bombs" },
    'chestcavity:buff_purging': { "translate": "kubejs.chestcavity.hover.buff_purging" },
    'chestcavity:herbivorous_digestion': { "translate": "kubejs.chestcavity.hover.herbivorous_digestion" },
    'chestcavity:herbivorous_nutrition': { "translate": "kubejs.chestcavity.hover.herbivorous_nutrition" },
    'chestcavity:carnivorous_digestion': { "translate": "kubejs.chestcavity.hover.carnivorous_digestion" },
    'chestcavity:carnivorous_nutrition': { "translate": "kubejs.chestcavity.hover.carnivorous_nutrition" },
    'chestcavity:swim_speed': { "translate": "kubejs.chestcavity.hover.swim_speed" },
    'chestcavity:launching': { "translate": "kubejs.chestcavity.hover.launching" },
    'chestcavity:furnace_powered': { "translate": "kubejs.chestcavity.hover.furnace_powered" },
    'chestcavity:iron_repair': { "translate": "kubejs.chestcavity.hover.iron_repair" },
    'chestcavity:crystalsynthesis': { "translate": "kubejs.chestcavity.hover.crystalsynthesis" },
    'chestcavity:rot_digestion': { "translate": "kubejs.chestcavity.hover.rot_digestion" },
    'chestcavity:rot_nutrition': { "translate": "kubejs.chestcavity.hover.rot_nutrition" },
    'chestcavity:forceful_spit': { "translate": "kubejs.chestcavity.hover.forceful_spit" },
    'chestcavity:silk': { "translate": "kubejs.chestcavity.hover.silk" },
    'chestcavity:venomous': { "translate": "kubejs.chestcavity.hover.venomous" },
    'chestcavity:leaping': { "translate": "kubejs.chestcavity.hover.leaping" },
    'chestcavity:hydrophobia': { "translate": "kubejs.chestcavity.hover.hydrophobia" },
    'chestcavity:dragon_breath': { "translate": "kubejs.chestcavity.hover.dragon_breath" },
    'chestcavity:creepy': { "translate": "kubejs.chestcavity.hover.creepy" },
    'chestcavity:shulker_bullets': { "translate": "kubejs.chestcavity.hover.shulker_bullets" },
    'chestcavity:grazing': { "translate": "kubejs.chestcavity.hover.grazing" },
    'chestcavity:arrow_dodging': { "translate": "kubejs.chestcavity.hover.arrow_dodging" },
    'chestcavity:impact_resistant': { "translate": "kubejs.chestcavity.hover.impact_resistant" },
    'chestcavity:rotgut': { "translate": "kubejs.chestcavity.hover.rotgut" },
    'chestcavity:ease_of_access': { "translate": "kubejs.chestcavity.hover.ease_of_access" },
}
