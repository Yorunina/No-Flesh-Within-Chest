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
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.chop_tree",Duration:1}],CustomPotionColor:6967847,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 64),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomPotionColor:9868950,CustomPotionEffects:[{Ambient:0b,Amplifier:2b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:1800,Id:56,ShowIcon:1b,ShowParticles:1b,"forge:id":"goety:arrowmantic"}],Lingering:0.0f,Quaff:0,Velocity:0.1f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.strip",Duration:1}],CustomPotionColor:5329233,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.love",Duration:1}],CustomPotionColor:16713305,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(2)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.growth",Duration:1}],CustomPotionColor:38417,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.flaying",Duration:1}],CustomPotionColor:10373418,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
]

const ChallengeWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}')], 3),
]

const EggWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('bookwyrms:book_wyrm_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(6)], [Item.of('hexerei:crow_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('unusualprehistory:rex_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('bettas:betta_fish_spawn_egg')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('modulargolems:metal_golem_template')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('alexsmobs:spawn_egg_jerboa')], 4),
]

const SpecialWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:180, upgradeSlots:5}')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:100, upgradeSlots:9}')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:forged_workbench')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('dimdungeons:item_blank_theme_key', '{theme:2}')], 4),
]

const OrganWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:redstone_furnace')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:d8')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:nether_star_shard')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:long_lasting_pill')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:doppelganger')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:rose_quartz_muscle')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:platelet_dispatcher')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:compressed_oxygen_implant')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(4)], [Item.of('kubejs:the_third_eye')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:muscle_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:spleen_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:heart_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:stomach_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:lung_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:rib_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:kidney_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:spine_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:liver_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:intestine_gold')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('kubejs:appendix_gold')], 4),
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
function getRandomSpecialWares() {
    let task = randomGet(SpecialWares)
    return new Wares('special').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('遗物商人', '#33333').setMessage('我们的探险队从遗迹中搜寻到了一些有趣的物品。\n我们只需要一个合理的价格。剩下的，你自己决定。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOrganWares() {
    let task = randomGet(OrganWares)
    return new Wares('special').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('器官商人', '#d15492').setMessage('这是一些. . .肉制品。\n我们保存的相当完好，保证随取随用。', '#33333').setOrdered(task.ordered).build()
}


