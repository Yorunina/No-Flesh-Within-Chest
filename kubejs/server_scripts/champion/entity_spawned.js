EntityEvents.spawned(event => {
    /**
    * @type {Internal.LivingEntity}
    */
    let entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
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
    }
]