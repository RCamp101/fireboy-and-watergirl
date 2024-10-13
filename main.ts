namespace SpriteKind {
    export const OverlapDoor = SpriteKind.create()
    export const Wall = SpriteKind.create()
}
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 480
}
tiles.setCurrentTilemap(tilemap`level2`)
let FireBoy = sprites.create(assets.image`FireBoy1`, SpriteKind.Player)
let WaterGirl = sprites.create(assets.image`WaterGirl1`, SpriteKind.Player)
FireBoy.setStayInScreen(true)
WaterGirl.setStayInScreen(true)
controller.moveSprite(FireBoy, 250, 0)
controller.player2.moveSprite(WaterGirl, 250, 0)
scene.setBackgroundImage(assets.image`Level 1`)
info.startCountup(true)
