// priority: 5

function addForTextLines(text, textLines, initNum) {
    for (let i = 0; i < textLines.length; i++) {
        text.add(initNum++, textLines[i]);
    }
    return initNum;
}

ItemEvents.tooltip((tooltip) => {
    function registerOrganTooltips(organ) {
        tooltip.addAdvanced(organ.itemID, (item, advanced, text) => {
            // for (let i = 1;i < text.size();i++) {
            //     if (text.size() > 1) {
            //         text.remove(1)
            //     }
            // }
            // text.removeIf(e => e != item.name)
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
                        if(!global.TYPE_MAP[tag]) {
                            continue
                        }
                        typeLine.push(global.TYPE_MAP[tag], ' ')
                    }
                    if (typeLine.length > 0) {
                        text.add(lineNum++, [Text.gold('●'), Text.join(typeLine)])
                    }

                    lineNum = addForTextLines(text, organ.defaultTextLines, lineNum);
                    if (organ.shiftTextLines && organ.shiftTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of('按住 ').gold(),
                            Text.of('[ Shift ] ').yellow().bold(),
                            Text.of('查看器官信息').gold(),
                        ]);
                    }
                    if (organ.ctrlTextLines && organ.ctrlTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of('按住 ').aqua(),
                            Text.of('[ Ctrl ] ').yellow().bold(),
                            Text.of('查看激活效果').aqua(),
                        ]);
                    }
                    if (organ.altTextLines && organ.altTextLines.length != 0) {
                        text.add(lineNum++, [
                            Text.of('按住 ').red(),
                            Text.of('[ Alt ] ').yellow().bold(),
                            Text.of('查看特殊效果').red(),
                        ]);
                    }
            }
        });
    }

    global.ORGAN_LIST.forEach(organ => {
        registerOrganTooltips(organ)
    })
});


