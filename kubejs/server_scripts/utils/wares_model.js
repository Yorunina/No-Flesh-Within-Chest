function Wares(id) {
    this.paymentItems = []
    this.ordered = false
    this.id = id
    this.requestedItems = []
    this.experience = 0
}

Wares.prototype = {
    addPaymentItems: function (item) {
        this.paymentItems.push(item)
        return this
    },
    addRequestedItems: function (item) {
        this.requestedItems.push(item)
        return this
    },
    setPaymentItems: function (paymentItems) {
        this.paymentItems = paymentItems
        return this
    },
    setRequestedItems: function (requestedItems) {
        this.requestedItems = requestedItems
        return this
    },
    setBuyerAddress: function (buyerAddress, color) {
        this.buyerAddress = buildMessageJsonString(buyerAddress, color);
        return this
    },
    setOrdered: function (ordered) {
        this.ordered = ordered
        return this
    },
    setExperience: function (experience) {
        this.experience = experience
        return this
    },
    setTitle: function (title, color) {
        this.title = buildMessageJsonString(title, color)
        return this
    },
    setMessage: function (message, color) {
        this.message = buildMessageJsonString(message, color)
        return this
    },
    setBuyerName: function (buyerName, color) {
        this.buyerName = buildMessageJsonString(buyerName, color)
        return this
    },
    /**
     * 
     * @returns {Internal.ItemStack}
     */
    build: function () {
        return Item.of('wares:delivery_agreement', this)
    },
}

function buildMessageJsonString(text, color) {
    return `{ "color": "${color}", "text": "${text}" }`
}

function SimpleWares(requestedItems, paymentItems, ordered) {
    this.paymentItems = paymentItems
    this.requestedItems = requestedItems
    this.ordered = ordered
}


const PotionWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.chop_tree",Duration:1}],CustomPotionColor:6967847,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomPotionColor:9868950,CustomPotionEffects:[{Ambient:0b,Amplifier:2b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:1800,Id:56,ShowIcon:1b,ShowParticles:1b,"forge:id":"goety:arrowmantic"}],Lingering:0.0f,Quaff:0,Velocity:0.1f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.strip",Duration:1}],CustomPotionColor:5329233,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.love",Duration:1}],CustomPotionColor:16713305,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(2)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.growth",Duration:1}],CustomPotionColor:38417,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.flaying",Duration:1}],CustomPotionColor:10373418,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
]

const ChallengeWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}')], 3),
]

const EggWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('bookwyrms:book_wyrm_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(6)], [Item.of('hexerei:crow_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('unusualprehistory:rex_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('bettas:betta_fish_spawn_egg')], 16),

]

const NonRenewableWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}')], 1),
]

function getRandomPotionWares() {
    let task = randomGet(PotionWares)
    return new Wares('potion').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('女巫酿造师', '#33333').setMessage('我了解到你似乎有些 **特殊的** 需求。不如看看这瓶女巫精酿是否能够满足你的一时之需？', '#33333').setOrdered(task.ordered).build()
}
function getRandomChallengeWares() {
    let task = randomGet(ChallengeWares)
    return new Wares('challenge').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('传说中的物品', '#e6493e').setMessage('我们在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，可以将其低价转卖给你。', '#33333').setOrdered(task.ordered).build()
}
function getRandomEggWares() {
    let task = randomGet(EggWares)
    return new Wares('egg').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('宠物商人', '#33333').setMessage('咳，你也许在荒野上遇到过它吧。\n我们把它装在怪物蛋里，这对你来说很方便吧？', '#33333').setOrdered(task.ordered).build()
}
function getRandomNonRenewableWares() {
    let task = randomGet(NonRenewableWares)
    return new Wares('non_renewable').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('宠物商人', '#33333').setMessage('咳，你也许在荒野上遇到过它吧。\n我们把它装在怪物蛋里，这对你来说很方便吧？', '#33333').setOrdered(task.ordered).build()
}



const WARES_MORE_SOLT_BAG = new Wares('more_solt_bag')
    .addPaymentItems(Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:180, upgradeSlots:5}'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_diamond').withCount(4))
    .setTitle('背包商人', '#33333')
    .setMessage('我们从某些坟墓. . .**不需要的人** 身上搞到了这些东西。\n似乎是一个非常罕见的大背包。\n如果你想要的话，或许需要支付一个合适的价格。', '#33333')
    .setOrdered(3)
    .build()

const WARES_MORE_UPGRADE_BAG = new Wares('more_upgrade_bag')
    .addPaymentItems(Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:100, upgradeSlots:9}'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_diamond').withCount(4))
    .setTitle('背包商人', '#33333')
    .setMessage('我们从某些坟墓. . .**不需要的人** 身上搞到了这些东西。\n似乎是一个非常罕见的背包，有着更多的插槽。\n如果你想要的话，或许需要支付一个合适的价格。', '#33333')
    .setOrdered(3)
    .build()

const WARES_TETRA_PART_1 = new Wares('tetra_part_1')
    .addPaymentItems(Item.of('tetra:forged_workbench'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_diamond').withCount(1))
    .setTitle('遗迹探索者', '#33333')
    .setMessage('从某些地下遗迹里面，我们寻找到了古代锻造相关的遗迹品，如果你感兴趣的话。可以跟我聊聊。', '#33333')
    .setOrdered(3)
    .build()

const WARES_TETRA_PART_2 = new Wares('tetra_part_2')
    .addPaymentItems(Item.of('tetra:chthonic_extractor'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_diamond').withCount(1))
    .setTitle('遗迹探索者', '#33333')
    .setMessage('从某些地下遗迹里面，我们寻找到了古代锻造相关的遗迹品，如果你感兴趣的话。可以跟我聊聊。', '#33333')
    .setOrdered(3)
    .build()

const WARES_TETRA_PART_3 = new Wares('tetra_part_3')
    .addPaymentItems(Item.of('tetra:chthonic_extractor'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_diamond').withCount(1))
    .setTitle('遗迹探索者', '#33333')
    .setMessage('从某些地下遗迹里面，我们寻找到了古代锻造相关的遗迹品，如果你感兴趣的话。可以跟我聊聊。', '#33333')
    .setOrdered(3)
    .build()