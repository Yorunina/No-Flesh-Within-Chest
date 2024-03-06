/**
 * 使用ForgeEvent监听CurioChangeEvent事件
 */
ForgeEvents.onEvent('top.theillusivec4.curios.api.event.CurioChangeEvent', event => {
    global.curioChange(event);
})