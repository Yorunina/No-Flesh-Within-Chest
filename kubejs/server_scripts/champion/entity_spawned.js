EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
    if (Math.random() > 0.05) return
    let randomChampionType = randomGet(championTypeMap)
    entity.persistentData.put('champion', [randomChampionType.type])
    entity.setCustomName([randomChampionType.name, Text.gray('精英')])
    entity.setCustomNameVisible(true)
})


const championTypeMap = [
    {
        type: 'fight_for_death',
        name: Text.darkPurple('死战'),
        desc: Text.gray('攻击时将会为你附加死亡宣告效果')
    },
    {
        type: 'low_frequency',
        name: Text.aqua('低频'),
        desc: Text.gray('受到攻击后有着更长的无敌时间')
    },
    {
        type: 'purify',
        name: Text.aqua('净化'),
        desc: Text.gray('攻击时会净化掉玩家身上所有正面效果')
    },
    {
        type: 'fierce_battle',
        name: Text.gold('鏖战'),
        desc: Text.gray('攻击时会赋予玩家侵蚀效果，并逐渐提升自身的伤害吸收效果')
    },
    {
        type: 'destruction',
        name: Text.gold('崩毁'),
        desc: Text.gray('攻击时会赋予玩家穿孔效果，玩家护甲越低，伤害越高')
    },
    {
        type: 'awed',
        name: Text.gold('震慑'),
        desc: Text.gray('攻击时封锁玩家右键，给予自身生命恢复效果')
    },
    {
        type: 'purity',
        name: Text.aqua('纯净'),
        desc: Text.gray('受到攻击后净化自身所有负面效果')
    },
    {
        type: 'reflection',
        name: Text.gold('反射'),
        desc: Text.gray('每次最多受到50%最大生命值的伤害，并可以反射伤害')
    },
    {
        type: 'corrupt',
        name: Text.red('腐蚀'),
        desc: Text.gray('攻击时额外减少玩家装备耐久')
    },
    {
        type: 'grue',
        name: Text.red('格鲁'),
        desc: Text.gray('攻击时会激发玩家对黑暗的恐惧')
    },
    {
        type: 'unbending',
        name: Text.aqua('根性'),
        desc: Text.gray('随着血量减少增加减伤幅度')
    },
    {
        type: 'exhausted',
        name: Text.aqua('封魔'),
        desc: Text.gray('攻击时会赋予玩家魔力空虚效果')
    }
]