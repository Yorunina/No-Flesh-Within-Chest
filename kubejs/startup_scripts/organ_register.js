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
    this.organActiveScores = []
}

Organ.prototype = {
    addScore: function (score, value) {
        this.organScores.push({ 'id': `chestcavity:${score}`, 'value': value })
        return this
    },

    addActivedScore: function (organActiveScore) {
        this.organActiveScores.push(organActiveScore)
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
                break;
            case 'alt':
                this.altTextLines.push(textLines);
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

function convertScoreToTextLine(organ, score) {
    let value = score.value
    let typeName = ''
    let stack = organ.maxStackSize
    switch (score.id) {
        case 'chestcavity:filtration':
            typeName = '血液过滤效率'
            break;
        case 'chestcavity:breath_recovery':
            typeName = '呼吸效率'
            break;
        case 'chestcavity:nutrition':
            typeName = '营养获取效率'
            break;
        case 'chestcavity:nerves':
            typeName = '神经效率'
            break;
        case 'chestcavity:strength':
            typeName = '肌肉效率'
            break;
        case 'chestcavity:health':
            typeName = '健康'
            break;
        case 'chestcavity:breath_capacity':
            typeName = '肺活量'
            break;
        case 'chestcavity:detoxification':
            typeName = '解毒效率'
            break;
        case 'chestcavity:speed':
            typeName = '速度'
            break;
        case 'chestcavity:endurance':
            typeName = '耐力'
            break;
        case 'chestcavity:luck':
            typeName = '幸运'
            break;
        case 'chestcavity:defense':
            typeName = '防御'
            break;
        case 'chestcavity:digestion':
            typeName = '消化效率'
            break;
        case 'chestcavity:metabolism':
            typeName = '新陈代谢效率'
            break;
    }
    return [Text.gold('● '), Text.gray('每 '), Text.yellow(String(stack)), Text.gray(' 个该器官提供 '), Text.yellow(String(value)), Text.gray(' 点'), Text.yellow(typeName)]
}


function OrganActiveScore(activeTag, valueString, attribute) {
    this.activeTag = activeTag
    this.valueString = valueString // '${this}'
    this.attribute = attribute
    this.operation = global.OPERATION_ADD
}

OrganActiveScore.prototype = {
    setOperation: function (operation) {
        this.operation = operation
        return this
    }
}