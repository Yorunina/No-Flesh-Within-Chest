// priority: 10
const playerAutoActiveAttributeMap = new Map();

/**
 * 全局函数，用于更新玩家的自激活效果状态
 * @param {Internal.Player} player 
 */

global.autoActive = player => {
    let typeMap = getPlayerChestCavityTypeMap(player);
    let uuid = String(player.getUuid());
    let attributeMap = new Map();
    $ChestCavityUtil.evaluateChestCavity(player.getChestCavityInstance())
    player.persistentData.putInt(resourceCountMax, defaultResourceMax)
    // 激活状态根据Tag区分并遍历可以用于激活的器官方法
    //检测是否存在自激活器官
    if (typeMap.has('kubejs:autoActive')) {
        typeMap.get('kubejs:autoActive').forEach(organ => {
            autoOrganActiveStrategies[organ.id](player, organ, attributeMap)                  
        })
    }
    //检测是否存在唯一自激活器官
    let onlySet = new Set()
    if (typeMap.has('kubejs:autoActive_only')) {
        typeMap.get('kubejs:autoActive_only').forEach(organ => {
            if (!onlySet.has(organ.id)) {
                onlySet.add(organ.id)
                autoOrganActiveOnlyStrategies[organ.id](player, organ, attributeMap)                         
            }
        })
    }

    playerAutoActiveAttributeMap.set(uuid, attributeMap);
    attributeMap.forEach((value, key, map) => {
        player.modifyAttribute(global.ATTRIBUTE_MAP[key].key, key, value, global.ATTRIBUTE_MAP[key].operation);
    })
    let maxResourceCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
    updateResourceMaxCount(player, maxResourceCount)
}

/**
 * 获取玩家属性表
 * @param {Internal.Player} player 
 * @returns {Map}
 */

function getPlayerAutoActiveAttributeMap(player) {
    let uuid = String(player.getUuid());
    if (playerAutoActiveAttributeMap.has(uuid)) {
        return playerAutoActiveAttributeMap.get(uuid);
    }
    return new Map();
}

/**
 * 设置玩家属性表
 * @param {Internal.player} player 
 * @param {Map} attriMap 
 */
function setPlayerAutoActiveAttributeMap(player, attriMap) {
    let uuid = String(player.getUuid());
    playerAutoActiveAttributeMap.set(uuid, attriMap)
}


/**
 * 清除玩家所有已经添加的属性
 * @param {Internal.Player} player 
 * @returns
 */
function clearAllAutoActivedModify(player) {
    let attributeMap = getPlayerAutoActiveAttributeMap(player)
    attributeMap.forEach((value, key, map) => {
        player.removeAttribute(global.ATTRIBUTE_MAP[key].key, global.ATTRIBUTE_MAP[key].name);
    })
    player.persistentData.putInt(resourceCountMax, defaultResourceMax)
}

/**
 * 修改玩家属性
 * @param {Map} attributeMap
 * @param {attribute} attribute
 * @param {number} modifyValue
 * @returns
 */
function attributeMapValueAddition(attributeMap, attribute, modifyValue) {
    if (attributeMap.has(attribute.name)) {
        modifyValue = modifyValue + attributeMap.get(attribute.name)
    }
    attributeMap.set(attribute.name, modifyValue)
}

/**
 * 自激活器官激活策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ):void>}
 */
const  autoOrganActiveStrategies = {
};

/**
 * 自激活器官唯一激活策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ):void>}
 */
const  autoOrganActiveOnlyStrategies = {
    'kubejs:beast_king_heart': function (player, organ, attributeMap) {      
        let typeMap = getPlayerChestCavityTypeMap(player);
        let itemMap =  getPlayerChestCavityPosMap(player);
        let basicHealthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'health'));
        let basicStrengthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'strength'));
        let basicSpeedAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'speed'));      
        if (typeMap.has('kubejs:beast')) {
            let rate = 0
            rate = 0.015 * typeMap.get('kubejs:beast').length
            if (itemMap.size == typeMap.get('kubejs:beast').length){
                rate = rate * 2
            }
            attributeMapValueAddition(attributeMap, global.AUTO_HEALTH_UP, (basicHealthAttribute*rate)*2)   
            attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MULTIBASE, basicStrengthAttribute*rate*0.0625)        
            attributeMapValueAddition(attributeMap, global.AUTO_MOVEMENT_SPEED_MULTIBASE, basicSpeedAttribute*rate*0.025)                                    
        }
    },   
    'kubejs:beast_king_spine': function (player, organ, attributeMap) {    
        let typeMap = getPlayerChestCavityTypeMap(player);
        let itemMap =  getPlayerChestCavityPosMap(player);
        let basicHealthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'health'));
        let basicStrengthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'strength'));
        let basicSpeedAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'speed'));   
        if (typeMap.has('kubejs:beast')) {  
            let rate = 0   
            rate = 0.012 * typeMap.get('kubejs:beast').length
            if (itemMap.size == typeMap.get('kubejs:beast').length){
                rate = rate * 2
            }  
            attributeMapValueAddition(attributeMap, global.AUTO_HEALTH_UP, (basicHealthAttribute*rate)*2)   
            attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MULTIBASE, basicStrengthAttribute*rate*0.0625)        
            attributeMapValueAddition(attributeMap, global.AUTO_MOVEMENT_SPEED_MULTIBASE, basicSpeedAttribute*rate*0.025)                                                              
        }
    },
    'kubejs:beast_king_stomach': function (player, organ, attributeMap) {       
        let typeMap = getPlayerChestCavityTypeMap(player);
        let itemMap =  getPlayerChestCavityPosMap(player);
        let basicHealthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'health'));
        let basicStrengthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'strength'));
        let basicSpeedAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'speed'));   
        if (typeMap.has('kubejs:beast')) {   
            let rate = 0
            rate = 0.01 * typeMap.get('kubejs:beast').length
            if (itemMap.size == typeMap.get('kubejs:beast').length){
                rate = rate * 2
            }           
            attributeMapValueAddition(attributeMap, global.AUTO_HEALTH_UP, (basicHealthAttribute*rate)*2)   
            attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MULTIBASE, basicStrengthAttribute*rate*0.0625)        
            attributeMapValueAddition(attributeMap, global.AUTO_MOVEMENT_SPEED_MULTIBASE, basicSpeedAttribute*rate*0.025)                                                              
        }
    },
    "kubejs:muscle_thick": function (player, organ, attributeMap) {      
        let itemMap = getPlayerChestCavityItemMap(player);
        let basicHealthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'health'));
        if (itemMap.has('kubejs:muscle_thick')  ) {
            if (!(itemMap.has('kubejs:muscle_speed') || itemMap.has('kubejs:muscle_strength') )){
                attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MULTIBASE, basicHealthAttribute*0.5*0.0625)        
            }
        }      
    },
    "kubejs:muscle_speed": function (player, organ, attributeMap) {    
        let itemMap = getPlayerChestCavityItemMap(player);
        let basicSpeedAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'speed'));
        if (itemMap.has('kubejs:muscle_speed')  ) {
            if (!(itemMap.has('kubejs:muscle_thick') || itemMap.has('kubejs:muscle_strength') )){
                attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MULTIBASE, basicSpeedAttribute*0.125*0.0625)        
            }
        }      
    },
    "kubejs:muscle_strength": function (player, organ, attributeMap) {       
        let itemMap = getPlayerChestCavityItemMap(player);
        let basicStrengthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'strength'));
        if (itemMap.has('kubejs:muscle_strength')  ) {
            if (!(itemMap.has('kubejs:muscle_thick') || itemMap.has('kubejs:muscle_speed') )){
                attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP, basicStrengthAttribute*0.125)        
            }   
        }      
    },
    "kubejs:muscle_balanced": function (player, organ, attributeMap) {        
        let basicHealthAttribute = 8 * player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'health'));
        let basicStrengthAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'strength'));
        let basicSpeedAttribute = player.getChestCavityInstance().organScores.get(new ResourceLocation('chestcavity', 'speed'));        
        let x_bar = (basicHealthAttribute + basicStrengthAttribute + basicSpeedAttribute)/3
        let dx = ((((basicHealthAttribute-x_bar) ** 2) + ((basicStrengthAttribute-x_bar) ** 2) + (( basicSpeedAttribute-x_bar) ** 2)))/3
        attributeMapValueAddition(attributeMap, global.AUTO_HEALTH_UP_MUILTITOTAL, Math.max(0.25-0.05*dx,-0.25))   
        attributeMapValueAddition(attributeMap, global.AUTO_ATTACK_UP_MUILTITOTAL, Math.max(0.25-0.05*dx,-0.25))        
        attributeMapValueAddition(attributeMap, global.AUTO_MOVEMENT_SPEED_MUILTITOTAL, Math.max(0.25-0.05*dx,-0.25))     
    }
};
