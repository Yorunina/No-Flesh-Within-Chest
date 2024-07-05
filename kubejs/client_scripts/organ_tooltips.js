// priority: 5
const LEADING_SYMBOL = Text.gold('● ')

function addForTextLines(text, textLines, initNum) {
    for (let i = 0; i < textLines.length; i++) {
        text.add(initNum++, textLines[i]);
    }
    return initNum;
}


ItemEvents.tooltip((tooltip) => {
    function registerOrganTooltips(organ) {
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
        return;
    }

    global.ORGAN_LIST.forEach(organ => {
        registerOrganTooltips(organ)
    })

    tooltip.addAdvanced('kubejs:infinity_force', (item, advanced, text) => {
        text.add(1, [Text.gold(Text.translatable("item.kubejs.infinity_force")), Text.yellow(` +${item.nbt?.forgeTimes ? item.nbt.forgeTimes : 0}`)]);
    })


    tooltip.addAdvanced('kubejs:glass_vial', (item, advanced, text) => {
        if (!item.nbt?.organSocres) return
        let lineNum = 1
        text.add(lineNum++, [Text.gold('血液样本信息如下：')])

        item.nbt.organSocres.getAllKeys().forEach(key => {
            text.add(lineNum++, [LEADING_SYMBOL, Text.yellow(global.SCORE_MAP[key]), Text.white(' : '), Text.white(item.nbt.organSocres[key].toFixed(2))])
        })
    })
});
