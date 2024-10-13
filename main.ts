namespace SpriteKind {
    export const OverlapDoor = SpriteKind.create()
    export const Wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`MiddleMiddleFire`, function (sprite, location) {
    if (sprite == FireBoy) {
        if (WaterGirlDone) {
            tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(6, 2), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`myTile`)
            game.gameOver(true)
        } else {
            FireBoyDone = true
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    FireBoy.vy = -2000
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`MiddleMiddleWater`, function (sprite, location) {
    if (sprite == WaterGirl) {
        if (FireBoyDone) {
            tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(4, 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile`)
            tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`myTile`)
            game.gameOver(true)
        } else {
            WaterGirlDone = true
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    WaterGirl.vy = -1000
})
let FireBoyDone = false
let WaterGirlDone = false
let WaterGirl: Sprite = null
let FireBoy: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 480
}
tiles.setCurrentTilemap(tilemap`level2`)
FireBoy = sprites.create(assets.image`FireBoy1`, SpriteKind.Player)
WaterGirl = sprites.create(assets.image`WaterGirl1`, SpriteKind.Player)
FireBoy.setStayInScreen(true)
WaterGirl.setStayInScreen(true)
controller.moveSprite(FireBoy, 250, 0)
controller.player2.moveSprite(WaterGirl, 250, 0)
scene.setBackgroundImage(assets.image`Level 1`)
info.startCountup(true)
FireBoy.ay = 2000
WaterGirl.ay = 2000
