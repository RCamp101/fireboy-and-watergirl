namespace SpriteKind {
    export const OverlapDoor = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const FireGem = SpriteKind.create()
    export const WaterGem = SpriteKind.create()
    export const WaterFliud = SpriteKind.create()
    export const LavaFluid = SpriteKind.create()
    export const Goo = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.FireGem, function (sprite, otherSprite) {
    if (sprite == FireBoy) {
        sprites.destroy(otherSprite, effects.warmRadial, 100)
        FireGemCount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile6`)
    tiles.setTileAt(tiles.getTileLocation(2, 14), assets.tile`myTile6`)
    tiles.setTileAt(tiles.getTileLocation(3, 14), assets.tile`myTile6`)
    tiles.setTileAt(tiles.getTileLocation(4, 14), assets.tile`myTile6`)
    tiles.setWallAt(tiles.getTileLocation(1, 14), false)
    tiles.setWallAt(tiles.getTileLocation(2, 14), false)
    tiles.setWallAt(tiles.getTileLocation(3, 14), false)
    tiles.setWallAt(tiles.getTileLocation(4, 14), false)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    WaterGirl.vy = -1000
})
sprites.onOverlap(SpriteKind.WaterFliud, SpriteKind.WaterFliud, function (sprite, otherSprite) {
    sprite.setVelocity(randint(-50, 50), randint(-50, 10))
    otherSprite.setVelocity(randint(-50, 50), randint(-50, 10))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WaterGem, function (sprite, otherSprite) {
    if (sprite == WaterGirl) {
        sprites.destroy(otherSprite, effects.coolRadial, 100)
        WaterGemCount += 1
    }
})
sprites.onOverlap(SpriteKind.LavaFluid, SpriteKind.LavaFluid, function (sprite, otherSprite) {
    sprite.setVelocity(randint(-50, 50), randint(-50, 10))
    otherSprite.setVelocity(randint(-50, 50), randint(-50, 10))
})
sprites.onOverlap(SpriteKind.Goo, SpriteKind.Goo, function (sprite, otherSprite) {
    sprite.setVelocity(randint(-50, 50), randint(-50, 10))
    otherSprite.setVelocity(randint(-50, 50), randint(-50, 10))
})
let FireBoyDone = false
let WaterGirlDone = false
let Poison: Sprite = null
let Lava: Sprite = null
let Water: Sprite = null
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
info.startCountup(true)
FireBoy.ay = 2000
WaterGirl.ay = 2000
tiles.placeOnTile(FireBoy, tiles.getTileLocation(2, 22))
tiles.placeOnTile(WaterGirl, tiles.getTileLocation(5, 22))
let FireGem1 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
tiles.placeOnTile(FireGem1, tiles.getTileLocation(21, 25))
let WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
tiles.placeOnTile(WaterGem, tiles.getTileLocation(12, 25))
let FireGem2 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
tiles.placeOnTile(FireGem2, tiles.getTileLocation(15, 17))
WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
tiles.placeOnTile(WaterGem, tiles.getTileLocation(18, 17))
let FireGem3 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
tiles.placeOnTile(FireGem3, tiles.getTileLocation(26, 6))
WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
tiles.placeOnTile(WaterGem, tiles.getTileLocation(17, 4))
let WaterGemCount = 0
let FireGemCount = 0
for (let index = 0; index < 100; index++) {
    Water = sprites.create(assets.image`Water`, SpriteKind.WaterFliud)
    Water.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnTile(Water, tiles.getTileLocation(12, 27))
    Water.ay = 500
}
for (let index = 0; index < 100; index++) {
    Lava = sprites.create(assets.image`Lava`, SpriteKind.LavaFluid)
    Lava.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnTile(Lava, tiles.getTileLocation(21, 27))
    Lava.ay = 500
}
for (let index = 0; index < 100; index++) {
    Water = sprites.create(assets.image`Water`, SpriteKind.WaterFliud)
    Water.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnTile(Water, tiles.getTileLocation(17, 6))
    Water.ay = 500
}
for (let index = 0; index < 100; index++) {
    Lava = sprites.create(assets.image`Lava`, SpriteKind.LavaFluid)
    Lava.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnTile(Lava, tiles.getTileLocation(26, 8))
    Lava.ay = 500
}
for (let index = 0; index < 100; index++) {
    Poison = sprites.create(assets.image`Goo`, SpriteKind.Goo)
    Poison.setScale(0.5, ScaleAnchor.Middle)
    tiles.placeOnTile(Poison, tiles.getTileLocation(25, 20))
    Poison.ay = 500
}
game.onUpdateInterval(50, function () {
    tiles.setWallAt(tiles.getTileLocation(1, 14), true)
    tiles.setWallAt(tiles.getTileLocation(2, 14), true)
    tiles.setWallAt(tiles.getTileLocation(3, 14), true)
    tiles.setWallAt(tiles.getTileLocation(4, 14), true)
})
game.onUpdateInterval(200, function () {
    pause(100)
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(1, 14))) {
        tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`myTile5`)
        tiles.setTileAt(tiles.getTileLocation(2, 14), assets.tile`myTile5`)
        tiles.setTileAt(tiles.getTileLocation(3, 14), assets.tile`myTile5`)
        tiles.setTileAt(tiles.getTileLocation(4, 14), assets.tile`myTile5`)
    }
})
