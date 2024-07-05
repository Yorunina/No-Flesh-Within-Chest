function DefaultOrgan(itemID) {
    this.itemID = itemID
    this.organScores = []
    this.defaultTextLines = []
    this.shiftTextLines = []
    this.ctrlTextLines = []
    this.altTextLines = []
}

DefaultOrgan.prototype = {
    addScore: function (score, value) {
        this.organScores.push({ 'id': `chestcavity:${score}`, 'value': value })
        return this
    },
    build: function () {
        this.organScores.forEach(score => {
            let value = score.value
            let typeName = global.SCORE_MAP[score.id]
            this.shiftTextLines.push([LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.organ_score.1")), Text.yellow(String(value)), Text.gray(Text.translatable("kubejs.tooltips.organ_score.2")), Text.yellow(typeName)])
        })
        return this
    },
}



ItemEvents.tooltip((tooltip) => {
    tooltip.addAdvancedToAll((item, advanced, text) => {
        if (!item.nbt?.organData) {
            return
        }
        text.removeIf(e => {
            if (e.getString() == "removeFlag") {
                return true;
            }
            return false;
        })
        let lineNum = 1
        switch (true) {
            case tooltip.shift:
                let organData = item.nbt.organData
                lineNum = 1
                organData.allKeys.forEach(key => {
                    let value = organData[key]
                    let typeName = global.SCORE_MAP[key]
                    text.add(lineNum, [LEADING_SYMBOL, Text.gray(Text.translatable("kubejs.tooltips.organ_score.1")), Text.yellow(String(value)), Text.gray(Text.translatable("kubejs.tooltips.organ_score.2")), Text.yellow(typeName)]);
                    lineNum++
                })
                break;
            default:
                lineNum = 1;
                let tagList = item.getTags().toArray()
                let typeLine = []
                for (let i = 0; i < tagList.length; i++) {
                    let tag = tagList[i].location()
                    if (tag.getNamespace() != 'kubejs') {
                        continue
                    }
                    tag = String(tag)
                    if (!global.TYPE_MAP[tag]) {
                        continue
                    }
                    typeLine.push(global.TYPE_MAP[tag], ' ')
                }
                if (typeLine.length > 0) {
                    text.add(lineNum++, [LEADING_SYMBOL, Text.join(typeLine)])
                }
                text.add(lineNum++, [
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).gold(),
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.4")).yellow().bold(),
                    Text.of(Text.translatable("kubejs.tooltips.organ_score.5")).gold(),
                ]);
        }
    })

    function registerDefaultOrganToolTips(organ) {
        tooltip.addAdvanced(organ.itemID, (item, advanced, text) => {
            text.removeIf(e => {
                if (e.getString() == "removeFlag") {
                    return true;
                }
                return false;
            })
            switch (true) {
                case tooltip.shift:
                    addForTextLines(text, organ.shiftTextLines, 1);
                    break;
                case tooltip.ctrl:
                    addForTextLines(text, organ.ctrlTextLines, 1);
                    break;
                case tooltip.alt:
                    addForTextLines(text, organ.altTextLines, 1);
                    break;
                default:
                    let lineNum = 1;
                    let tagList = item.getTags().toArray()
                    let typeLine = []
                    for (let i = 0; i < tagList.length; i++) {
                        let tag = tagList[i].location()
                        if (tag.getNamespace() != 'kubejs') {
                            continue
                        }
                        tag = String(tag)
                        if (!global.TYPE_MAP[tag]) {
                            continue
                        }
                        typeLine.push(global.TYPE_MAP[tag], ' ')
                    }
                    if (typeLine.length > 0) {
                        text.add(lineNum++, [LEADING_SYMBOL, Text.join(typeLine)])
                    }

                    lineNum = addForTextLines(text, organ.defaultTextLines, lineNum);
                    if (organ.shiftTextLines && organ.shiftTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).gold(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.4")).yellow().bold(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.5")).gold(),
                        ]);
                    }
                    if (organ.ctrlTextLines && organ.ctrlTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).aqua(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.6")).yellow().bold(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.7")).aqua(),
                        ]);
                    }
                    if (organ.altTextLines && organ.altTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.3")).red(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.8")).yellow().bold(),
                            Text.of(Text.translatable("kubejs.tooltips.organ_score.9")).red(),
                        ]);
                    }
            }
        });
    }
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:venom_gland').addScore('venomous', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_muscle').addScore('strength', 0.5).addScore('speed', 1.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:silk_gland').addScore('silk', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_intestine').addScore('nutrition', 0.5).addScore('digestion', 0.25).addScore('detoxification', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_lung').addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).addScore('metabolism', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_stomach').addScore('digestion', 0.5).addScore('nutrition', 0.25).addScore('metabolism', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_heart').addScore('health', 0.5).addScore('filtration', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:insect_caeca').addScore('nutrition', 0.5).addScore('digestion', 0.25).addScore('nerves', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_muscle').addScore('strength', 1.25).addScore('speed', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_spleen').addScore('metabolism', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_appendix').addScore('luck', 1.25).addScore('arrow_dodging', 1).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_kidney').addScore('filtration', 1).addScore('hydroallergenic', 1).addScore('hydrophobia', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_liver').addScore('detoxification', 1).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_rib').addScore('defense', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_intestine').addScore('nutrition', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_lung').addScore('breath_recovery', 1.25).addScore('breath_capacity', 1.25).addScore('endurance', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_stomach').addScore('digestion', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_heart').addScore('health', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:ender_spine').addScore('defense', 0.625).addScore('nerves', 1.25).addScore('hydroallergenic', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:blaze_core').addScore('health', 1).addScore('nerves', 0.25).addScore('fire_resistant', 1).addScore('hydroallergenic', 3).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:blaze_shell').addScore('defense', 1).addScore('fire_resistant', 1).addScore('hydroallergenic', 3).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:active_blaze_rod').addScore('pyromancy', 3).addScore('fire_resistant', 1).addScore('hydroallergenic', 3).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:shulker_spleen').addScore('metabolism', 0.75).addScore('shulker_bullets', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:creeper_appendix').addScore('luck', 0.75).addScore('creepy', 1).addScore('explosive', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:saltwater_muscle').addScore('strength', 1).addScore('speed', 1).addScore('swim_speed', 0.5).addScore('fire_resistant', -0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:saltwater_heart').addScore('health', 1).addScore('water_breath', 0.5).addScore('fire_resistant', -1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:shifting_leaves').addScore('speed', 1).addScore('photosynthesis', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:volatile_stomach').addScore('digestion', 0.5).addScore('ghastly', 1).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:saltwater_lung').addScore('breath_recovery', 1).addScore('breath_capacity', 1).addScore('endurance', 1).addScore('water_breath', 0.5).addScore('fire_resistant', -1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:gas_bladder').addScore('breath_capacity', 1.5).addScore('buoyant', 1).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:withered_rib').addScore('defense', 0.5).addScore('withered', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:writhing_soulsand').addScore('strength', 1.5).addScore('speed', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:withered_spine').addScore('defense', 0.25).addScore('nerves', 0.5).addScore('withered', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_muscle').addScore('strength', 0.5).addScore('speed', 1.5).addScore('launching', 1).addScore('endurance', -0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_spleen').addScore('metabolism', 1.5).addScore('endurance', -0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_appendix').addScore('luck', 0.75).addScore('dragon_bombs', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_kidney').addScore('filtration', 1.5).addScore('buff_purging', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_liver').addScore('detoxification', 1.5).addScore('buff_purging', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_rib').addScore('defense', 1).addScore('impact_resistant', 1).addScore('endurance', -0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_lung').addScore('breath_recovery', 1.25).addScore('breath_capacity', 0.25).addScore('endurance', 0.75).addScore('dragon_breath', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_heart').addScore('health', 1.5).addScore('endurance', -0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:dragon_spine').addScore('defense', 0.5).addScore('nerves', 1).addScore('impact_resistant', 1).addScore('endurance', -0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:mana_reactor').addScore('crystalsynthesis', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:gills').addScore('water_breath', 1).addScore('breath_capacity', 1).addScore('endurance', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_muscle').addScore('strength', 0.75).addScore('speed', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_lung').addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:aquatic_muscle').addScore('strength', 1).addScore('speed', 0.5).addScore('swim_speed', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_spleen').addScore('metabolism', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fish_muscle').addScore('strength', 0.75).addScore('speed', 0.25).addScore('swim_speed', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:herbivore_stomach').addScore('herbivorous_digestion', 1.25).addScore('carnivorous_digestion', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:swift_muscle').addScore('strength', 0.75).addScore('speed', 1.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:herbivore_intestine').addScore('herbivorous_nutrition', 1.25).addScore('carnivorous_nutrition', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_appendix').addScore('luck', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:llama_lung').addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).addScore('forceful_spit', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_kidney').addScore('filtration', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_spleen').addScore('metabolism', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_appendix').addScore('luck', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_kidney').addScore('filtration', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_liver').addScore('detoxification', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_rib').addScore('defense', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_stomach').addScore('digestion', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_rib').addScore('defense', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_intestine').addScore('nutrition', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_heart').addScore('health', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:springy_muscle').addScore('strength', 0.75).addScore('speed', 0.75).addScore('leaping', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_lung').addScore('breath_recovery', 0.75).addScore('breath_capacity', 0.75).addScore('endurance', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:herbivore_rumen').addScore('herbivorous_digestion', 1).addScore('carnivorous_digestion', -0.5).addScore('grazing', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_stomach').addScore('digestion', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_heart').addScore('health', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:carnivore_stomach').addScore('carnivorous_digestion', 1.25).addScore('herbivorous_digestion', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_spine').addScore('defense', 0.375).addScore('nerves', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:animal_spine').addScore('defense', 0.375).addScore('nerves', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_muscle').addScore('strength', 0.75).addScore('speed', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:carnivore_intestine').addScore('carnivorous_nutrition', 1.25).addScore('herbivorous_nutrition', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_liver').addScore('detoxification', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:brutish_muscle').addScore('strength', 1.25).addScore('speed', 0.75).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:fireproof_intestine').addScore('nutrition', 0.75).addScore('fire_resistant', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_muscle').addScore('strength', 0.5).addScore('speed', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_spleen').addScore('metabolism', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_appendix').addScore('luck', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_kidney').addScore('filtration', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_liver').addScore('detoxification', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_rib').addScore('defense', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_intestine').addScore('nutrition', 0.5).addScore('rotgut', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_lung').addScore('breath_recovery', 0.5).addScore('breath_capacity', 0.5).addScore('endurance', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_stomach').addScore('digestion', 0.5).addScore('rot_digestion', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_heart').addScore('health', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rotten_spine').addScore('defense', 0.25).addScore('nerves', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:golem_cable').addScore('nerves', 0.25).addScore('defense', 1).addScore('knockback_resistant', 1).addScore('speed', -0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:inner_furnace').addScore('metabolism', 0.25).addScore('defense', 0.25).addScore('furnace_powered', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:golem_plating').addScore('defense', 1.25).addScore('iron_repair', 1).addScore('metabolism', -0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:golem_core').addScore('health', 0.75).addScore('knockback_resistant', 1).addScore('nerves', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:piston_muscle').addScore('strength', 1).addScore('speed', 0.5).addScore('launching', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:muscle').addScore('strength', 1).addScore('speed', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:spleen').addScore('metabolism', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:appendix').addScore('luck', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:kidney').addScore('filtration', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:liver').addScore('detoxification', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rib').addScore('defense', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:intestine').addScore('nutrition', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:lung').addScore('breath_recovery', 1).addScore('breath_capacity', 1).addScore('endurance', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:stomach').addScore('digestion', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:heart').addScore('health', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:spine').addScore('defense', 0.5).addScore('nerves', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_gills').addScore('water_breath', 0.5).addScore('breath_capacity', 0.5).addScore('endurance', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_muscle').addScore('strength', 0.5).addScore('speed', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_aquatic_muscle').addScore('strength', 0.5).addScore('speed', 0.25).addScore('swim_speed', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_spleen').addScore('metabolism', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_fish_muscle').addScore('strength', 0.25).addScore('speed', 0.25).addScore('swim_speed', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_herbivore_stomach').addScore('herbivorous_digestion', 0.75).addScore('carnivorous_digestion', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:rabbit_heart').addScore('health', 0.5).addScore('speed', 1).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_herbivore_intestine').addScore('herbivorous_nutrition', 0.75).addScore('carnivorous_nutrition', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_appendix').addScore('luck', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_kidney').addScore('filtration', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_liver').addScore('detoxification', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_rib').addScore('defense', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_intestine').addScore('nutrition', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_springy_muscle').addScore('strength', 0.5).addScore('speed', 0.5).addScore('leaping', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_lung').addScore('breath_recovery', 0.5).addScore('breath_capacity', 0.5).addScore('endurance', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_stomach').addScore('digestion', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_heart').addScore('health', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_carnivore_stomach').addScore('carnivorous_digestion', 0.75).addScore('herbivorous_digestion', 0.25).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_animal_spine').addScore('defense', 0.375).addScore('nerves', 0.5).build())
    registerDefaultOrganToolTips(new DefaultOrgan('chestcavity:small_carnivore_intestine').addScore('carnivorous_nutrition', 0.75).addScore('herbivorous_nutrition', 0.25).build())
})