ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal('nfwc')
            .requires(src => src.hasPermission(2))
            .then(Commands.literal('stages')
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('arg1', Arguments.NBT_COMPOUND.create(event))
                        .executes(ctx => {
                            let nbtCompound = Arguments.NBT_COMPOUND.getResult(ctx, 'arg1');
                            let player = ctx.source.server.getPlayer(Arguments.PLAYER.getResult(ctx, 'player'))
                            let addStages = nbtCompound.addStages
                            let removeStages = nbtCompound.removeStages
                            if (addStages) {
                                for (let i = 0; i < addStages.length; i++) {
                                    player.stages.add(addStages[i])
                                }
                            }
                            if (removeStages) {
                                for (let i = 0; i < removeStages.length; i++) {
                                    player.stages.remove(removeStages[i])
                                }
                            }
                            return 1
                        }
                        )
                    )
                )
            )
    )

})