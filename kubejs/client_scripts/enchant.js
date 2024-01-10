MoreJSEvents.enchantmentTableTooltip((event) => {
    event.lines.removeIf(x => {
        return true
    })
    if (event.clue.level > 9) {
        event.lines.add([Text.red('超高等级'), Text.gray('. . .!')])
    }
    else if (event.clue.level > 4) {
        event.lines.add([Text.gold('高等级'), Text.gray('. . .?!')])
    } else {
        event.lines.add([Text.gray(Text.translate(event.clue.enchantment.descriptionId)), Text.gray('. . .?')])
    }
});