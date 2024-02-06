// priority: 0
function Organ(itemID) {
    this.itemID = itemID
    this.pseudoOrgan = false
    this.organScores = []
    this.defaultTextLines = []
    this.shiftTextLines = []
    this.ctrlTextLines = []
    this.altTextLines = []
    this.maxStackSize = 1
    this.neededTags = []
}
 
Organ.prototype = {
    // 注册常规效果
    addScore: function (score, value) {
        this.organScores.push({ 'id': `chestcavity:${score}`, 'value': value })
        return this
    },
    addTextLines: function (type, textLines) {
        switch (type) {
            case 'default':
                this.defaultTextLines.push(textLines);
                break;
            case 'shift':
                this.shiftTextLines.push(textLines);
                
                break;
            case 'ctrl':
                this.ctrlTextLines.push(textLines);
                this.neededTags.push('chestcavity:active')
                break;
            case 'alt':
                this.altTextLines.push(textLines);
                this.neededTags.push('chestcavity:special')
                break;
        }
        return this
    },

    pseudo: function () {
        this.pseudoOrgan = true;
        return this
    },

    maxStack: function (maxStackSize) {
        this.maxStackSize = maxStackSize
        return this
    },

    build: function () {
        this.organScores.forEach(score => {
            this.shiftTextLines.push(convertScoreToTextLine(this, score))
        })
        return this
    },
}

/**
 * 转换为描述文本
 * @param {Organ} organ 
 * @param {*} score 
 * @returns 
 */

function convertScoreToTextLine(organ, score) {
    let value = score.value
    let typeName = global.SCORE_MAP[score.id]
    let stack = organ.maxStackSize
    return [LEADING_SYMBOL, Text.gray('每 '), Text.yellow(String(stack)), Text.gray(' 个该器官提供 '), Text.yellow(String(value)), Text.gray(' 点'), Text.yellow(typeName)]
}

const IRON_OVERLAY = 'kubejs:item/overlay/iron_overlay'
const GOLD_OVERLAY = 'kubejs:item/overlay/gold_overlay'
const DIAMOND_OVERLAY = 'kubejs:item/overlay/diamond_overlay'
function modelOverlay(texture, overlay) {
    return { "parent": "minecraft:item/generated", "textures": { "layer0": texture, "layer1": overlay }}
}