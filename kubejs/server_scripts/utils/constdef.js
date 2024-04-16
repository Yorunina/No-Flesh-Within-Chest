const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
const $Float = Java.loadClass('java.lang.Float')
const resourceCount = 'resourceCount'
const resourceCountMax = 'resourceCountMax'
const defaultResourceMax = 100
const warpCount = 'warpCount'
const warpCountMax = 'warpCountMax'
const defaultWarpMax = 100
const organActive = 'organActive'
const criticalPunch = 'criticalPunch'
const criticalPunchMaxCount = 10

const bossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
    'cataclysm:netherite_monstrosity',
    'cataclysm:ender_guardian',
    'cataclysm:ignis',
    'cataclysm:the_harbinger',
    'cataclysm:the_leviathan',
    'cataclysm:ancient_remnant',
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
    'meetyourfight:bellringer',
    'meetyourfight:rosalyne',
    'meetyourfight:swampjaw',
    'meetyourfight:dame_fortuna',
    'invasioncodered:gashslit',
    'irons_spellbooks:dead_king_corpse',
    "goety:apostle",
    "goety:vizier",
    "graveyard:lich",
]

const bossesOfMassDestructionBossTypeList = [
    'bosses_of_mass_destruction:void_blossom',
    'bosses_of_mass_destruction:lich',
    'bosses_of_mass_destruction:gauntlet',
    'bosses_of_mass_destruction:obsidilith',
]
const worldOfBossTypeList = [
    'somebosses:aesegull',
    'somebosses:prismarine_watcher',
    'somebosses:froverlord',
    'somebosses:volcanium',
    'somebosses:merciless_assasin',
    'somebosses:dark_mask',
    'somebosses:knight_garent',
    'somebosses:vulcan',
    'somebosses:ancient_wizard',
    'somebosses:man_of_water',
    'somebosses:flaming_berserker',
    'somebosses:electric_head',
    'somebosses:frost_magma',
    'somebosses:stone_guard',
    'somebosses:crimson_vampire',
    'somebosses:skeleton_demon',
    'somebosses:mono_eyed_skeleton',
    'somebosses:hand_head',
    'somebosses:ender_ordnance',
    'somebosses:nameless_one',
    'somebosses:sand_giant',
    "somebosses:rib_golem",
]


const tumorAttriBute = [
    { name: 'chestcavity:filtration', multi: 0.5, max: 5 },
    { name: 'chestcavity:breath_recovery', multi: 0.5, max: 3 },
    { name: 'chestcavity:nutrition', multi: 0.5, max: 3 },
    { name: 'chestcavity:nerves', multi: 1, max: 5 },
    { name: 'chestcavity:strength', multi: 1, max: 6 },
    { name: 'chestcavity:breath_capacity', multi: 0.5, max: 3 },
    { name: 'chestcavity:detoxification', multi: 0.5, max: 3 },
    { name: 'chestcavity:speed', multi: 0.5, max: 5 },
    { name: 'chestcavity:endurance', multi: 0.5, max: 5 },
    { name: 'chestcavity:defense', multi: 0.5, max: 5 },
    { name: 'chestcavity:digestion', multi: 0.5, max: 3 },
    { name: 'chestcavity:metabolism', multi: 0.5, max: 5 },
    { name: 'chestcavity:fire_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:knockback_resistant', multi: 0.5, max: 3 },
    { name: 'chestcavity:water_breath', multi: 0.5, max: 3 },
]

const difficultLevelDef = [
    { healthMulti: 1, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 2, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 3, attackMulti: 1, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 5, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 10, attackMulti: 1.5, armorMulti: 1, toughnessMulti: 1 },
    { healthMulti: 20, attackMulti: 2, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 30, attackMulti: 3, armorMulti: 1.5, toughnessMulti: 1.5 },
    { healthMulti: 50, attackMulti: 4, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 100, attackMulti: 5, armorMulti: 2, toughnessMulti: 2 },
    { healthMulti: 300, attackMulti: 6, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 500, attackMulti: 7, armorMulti: 2.5, toughnessMulti: 2.5 },
    { healthMulti: 1000, attackMulti: 8, armorMulti: 3, toughnessMulti: 3 },
]

const curseEnchantList = [
    'cursery:curse_electrified',
    'cursery:curse_switchy',
    'cursery:curse_illusion',
    'cursery:curse_undead',
    'cursery:curse_laddering',
    'cursery:curse_hungryhealth',
    'cursery:curse_slowness',
    'cursery:curse_poison',
    'cursery:curse_steelfeet',
    'cursery:curse_heavy_enchant',
    'cursery:curse_explosive',
    'cursery:curse_recoil',
    'cursery:curse_stubby',
    'cursery:curse_hurtful',
    'cursery:curse_loose',
    'cursery:curse_weakness',
    'cursery:curse_hungry',
    'cursery:curse_anvil',
    'cursery:curse_blindness',
    "chestcavity:malpractice",
    'minecraft:vanishing_curse',
    'minecraft:binding_curse',
]

const trinketList = ['nameless_trinkets:reforger', 'nameless_trinkets:true_heart_of_the_sea', 'nameless_trinkets:dragons_eye', 'nameless_trinkets:spider_legs', 'nameless_trinkets:sleeping_pills', 'nameless_trinkets:moon_stone', 'nameless_trinkets:nelumbo', 'nameless_trinkets:dark_nelumbo', 'nameless_trinkets:super_magnet', 'nameless_trinkets:rage_mind', 'nameless_trinkets:puffer_fish_liver', 'nameless_trinkets:lucky_rock', 'nameless_trinkets:vampire_blood', 'nameless_trinkets:speed_force', 'nameless_trinkets:tick', 'nameless_trinkets:ghast_eye', 'nameless_trinkets:cracked_crown', 'nameless_trinkets:ethereal_wings', 'nameless_trinkets:blindfold', 'nameless_trinkets:ice_cube', 'nameless_trinkets:blaze_nucleus', 'nameless_trinkets:wooden_stick', 'nameless_trinkets:tear_of_the_sea', 'nameless_trinkets:gods_crown', 'nameless_trinkets:fertilizer', 'nameless_trinkets:sigil_of_baphomet', 'nameless_trinkets:gills', 'nameless_trinkets:amphibious_hands', 'nameless_trinkets:fragile_cloud', 'nameless_trinkets:light_gloves', 'nameless_trinkets:fate_emerald', 'nameless_trinkets:scarab_amulet', 'nameless_trinkets:pocket_lightning_rod', 'nameless_trinkets:fractured_nullstone', 'nameless_trinkets:electric_paddle', 'nameless_trinkets:reverse_card', 'nameless_trinkets:missing_page', 'nameless_trinkets:broken_magnet', 'nameless_trinkets:experience_magnet', 'nameless_trinkets:experience_battery', 'nameless_trinkets:what_magnet', 'nameless_trinkets:callus']
