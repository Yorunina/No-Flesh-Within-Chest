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

global.getRandomWare = () => {
    let itemstack = getRandomOreWares()
    let random = Math.random()
    switch (true) {
        case random < 0.03:
            itemstack = getRandomEggWares()
            break
        case random < 0.06:
            itemstack = getRandomOrganWares()
            break
        case random < 0.12:
            itemstack = getRandomChallengeWares()
            break
        case random < 0.18:
            itemstack = getRandomSpecialWares()
            break
        case random < 0.3:
            itemstack = getRandomPotionWares()
            break
        default:
            itemstack = getRandomOreWares()
    }
    return itemstack
}

const PotionWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('biomancy:healing_additive').withCount(1)], 8),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.chop_tree",Duration:1}],CustomPotionColor:6967847,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomPotionColor:9868950,CustomPotionEffects:[{Ambient:0b,Amplifier:2b,CurativeItems:[{Count:1b,id:"minecraft:milk_bucket"}],Duration:1800,Id:56,ShowIcon:1b,ShowParticles:1b,"forge:id":"goety:arrowmantic"}],Lingering:0.0f,Quaff:0,Velocity:0.1f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:0,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.strip",Duration:1}],CustomPotionColor:5329233,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.love",Duration:1}],CustomPotionColor:16713305,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(2)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.growth",Duration:1}],CustomPotionColor:38417,Lingering:0.0f,Quaff:0,Velocity:0.0f}').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('goety:splash_brew', 3, '{AreaOfEffect:2,CustomBrew:1b,CustomBrewEffects:[{Amplifier:0b,BrewId:"effect.goety.flaying",Duration:1}],CustomPotionColor:10373418,Lingering:0.0f,Quaff:0,Velocity:0.0f}')], 16),
]

const ChallengeWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:god_challenge"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_rush"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:final_raid"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:element_revelry"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('gateways:gate_pearl', '{gateway:"kubejs:curios_of_god"}')], 1),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway:"gateways:magma_cube_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:blaze_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:enderman_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:shulker_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:spider_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:skeleton_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:slime_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:witch_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:zombie_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:creeper_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "gateways:ghast_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "kubejs:wither_skeleton_gate_large"}')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(5)], [Item.of('gateways:gate_pearl', '{gateway: "kubejs:phantom_gate_large"}')], 3)

]



const EggWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('bookwyrms:book_wyrm_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(6)], [Item.of('hexerei:crow_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('unusualprehistory:rex_spawn_egg')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('bettas:betta_fish_spawn_egg')], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('alexsmobs:spawn_egg_jerboa')], 4),
]

const SpecialWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:180, upgradeSlots:5}')], 2),
    new SimpleWares([Item.of('lightmanscurrency:coin_diamond').withCount(1)], [Item.of('sophisticatedbackpacks:netherite_backpack', '{inventorySlots:100, upgradeSlots:9}')], 2),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:forged_workbench')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('tetra:chthonic_extractor')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_emerald').withCount(1)], [Item.of('dimdungeons:item_blank_theme_key', '{theme:2}')], 4),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:one_eyed_wrait_in_a_bottle')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:rusty_sword_relic')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:disgusting_pendant')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:vampire_bait')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:prismarine_eye')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:dark_magic_gauntlet')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:token_of_the_ninja')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:frozen_shield_plate')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:gilded_dynamite')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:furnace_torch')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:ice_lantern')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:bone_of_curse')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:slab_of_command')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:illegal_beacon')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:necromancy_staff')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:burning_volcanic_rock')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:cursed_spring_water')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:chaos_insignia')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:monochrome_mask')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:cactus_relic')], 3),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('somebosses:power_generator_core')], 3),

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

const OreWares = [
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:coal').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:iron_ingot').withCount(8)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:redstone').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:lapis_lazuli').withCount(16)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:gold_ingot').withCount(4)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(3)], [Item.of('minecraft:diamond').withCount(2)], 16),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(1)], [Item.of('minecraft:andesite').withCount(16)], 64),
    new SimpleWares([Item.of('lightmanscurrency:coin_gold').withCount(8)], [Item.of('hexerei:selenite_shard').withCount(1)], 3),
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
    return new Wares('organ').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('器官商人', '#d15492').setMessage('这是一些. . .肉制品。\n我们保存的相当完好，保证随取随用。', '#33333').setOrdered(task.ordered).build()
}
function getRandomOreWares() {
    let task = randomGet(OreWares)
    return new Wares('ore').setPaymentItems(task.paymentItems).setRequestedItems(task.requestedItems).setTitle('矿石商人', '#33333').setMessage('你好，我这里有些矿物。\n或许这对你有用。', '#33333').setOrdered(task.ordered).build()
}

