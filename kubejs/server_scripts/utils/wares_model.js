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

const WARES_GOD_CHALLENGE = new Wares('god_challenge')
    .addPaymentItems(Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('传说中的物品', '#e6493e')
    .setMessage('有商人说，在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，他们可以将其低价转卖给你。', '#33333')
    .setOrdered(3)
    .build()

const WARES_BOSS_RUSH = new Wares('boss_rush')
    .addPaymentItems(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('传说中的物品', '#e6493e')
    .setMessage('有商人说，在某些村庄收购到了蕴含特殊力量的挑战之门。\n而这股力量如此强大，以至于连专业的冒险团队都为之汗颜。\n如果你有需要，他们可以将其低价转卖给你。', '#33333')
    .setOrdered(1)
    .build()

const WARES_BOOK_WYRM = new Wares('book_wyrm')
    .addPaymentItems(Item.of('bookwyrms:book_wyrm_spawn_egg'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('宠物商人', '#33333')
    .setMessage('商人们弄到了非常有趣的生物。\n只要你愿意花费一点点预算，他们就愿意将这种打包好的生物出让给你。', '#33333')
    .setOrdered(8)
    .build()

const WARES_CROW = new Wares('crow')
    .addPaymentItems(Item.of('hexerei:crow_spawn_egg'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('宠物商人', '#33333')
    .setMessage('商人们弄到了非常有趣的生物。\n只要你愿意花费一点点预算，他们就愿意将这种打包好的生物出让给你。', '#33333')
    .setOrdered(8)
    .build()

const WARES_REX = new Wares('rex')
    .addPaymentItems(Item.of('unusualprehistory:rex_spawn_egg'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('宠物商人', '#33333')
    .setMessage('商人们弄到了非常有趣的生物。\n只要你愿意花费一点点预算，他们就愿意将这种打包好的生物出让给你。', '#33333')
    .setOrdered(2)
    .build()

const WARES_BETTA_FISH = new Wares('betta_fish')
    .addPaymentItems(Item.of('bettas:betta_fish_spawn_egg'))
    .addRequestedItems(Item.of('lightmanscurrency:coin_emerald'))
    .setTitle('宠物商人', '#33333')
    .setMessage('商人们弄到了非常有趣的生物。\n只要你愿意花费一点点预算，他们就愿意将这种打包好的生物出让给你。', '#33333')
    .setOrdered(20)
    .build()

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