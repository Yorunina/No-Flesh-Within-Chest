ItemEvents.rightClicked(event => {
    let player = event.player;
    let item = event.item;
    if (item.hasTag('kubejs:anti_rejection')) {
        if (event.getHand() == "off_hand") {
            let organ = player.getMainHandItem();
            if (organ.hasNBT() && organ.nbt.contains('chestcavity:organ_compatibility')) {
                organ.nbt.remove('chestcavity:organ_compatibility')
                item.shrink(1);
            } else {
                player.tell('似乎该物品不需要进行抗排异')
            }
        } else {
            player.tell('如果要使用抗排异功能，请将药物放在副手，器官置于主手')
        }
    }
})

ServerEvents.tags('item', event => {
    event.add('kubejs:anti_rejection', ['biomancy:healing_additive'])
})
