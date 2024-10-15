namespace SpriteKind {
    export const OverlapDoor = SpriteKind.create()
    export const Wall = SpriteKind.create()
    export const FireGem = SpriteKind.create()
    export const WaterGem = SpriteKind.create()
    export const WaterFluid = SpriteKind.create()
    export const LavaFluid = SpriteKind.create()
    export const Goo = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`MiddleMiddleFire`, function (sprite, location) {
    if (sprite == FireBoy) {
        tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(6, 2), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(6, 3), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(6, 4), assets.tile`myTile`)
        tiles.placeOnTile(FireBoy, tiles.getTileLocation(7, 3))
        controller.moveSprite(FireBoy, 0, 0)
        pause(100)
        if (WaterGirlDone) {
            info.pauseCountup()
            LevelNumber = game.askForNumber("Choose a Level 1 2 3")
            game.reset()
        } else {
            FireBoyDone = true
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FireJumps < FireMaxJumps) {
        FireBoy.vy = -2000
        FireJumps += 1
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        if (sprite == FireBoy) {
            FireJumps = 0
        }
        if (sprite == WaterGirl) {
            WaterJumps = 0
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`MiddleMiddleWater`, function (sprite, location) {
    if (sprite == WaterGirl) {
        tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(4, 3), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(4, 2), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(3, 3), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(2, 2), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(2, 3), assets.tile`myTile`)
        tiles.setTileAt(tiles.getTileLocation(2, 4), assets.tile`myTile`)
        tiles.placeOnTile(WaterGirl, tiles.getTileLocation(3, 3))
        controller.player2.moveSprite(WaterGirl, 0, 0)
        pause(100)
        if (FireBoyDone) {
            info.pauseCountup()
            LevelNumber = game.askForNumber("Choose a Level 1 2 3")
            game.reset()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goo, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 500)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LavaFluid, function (sprite, otherSprite) {
    if (sprite == FireBoy) {
    	
    } else {
        sprites.destroy(sprite, effects.disintegrate, 500)
        game.reset()
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
    if (WaterJumps < WaterMaxJumps) {
        WaterGirl.vy = -1000
        WaterJumps += 1
    }
})
sprites.onOverlap(SpriteKind.WaterFluid, SpriteKind.WaterFluid, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.WaterFluid, function (sprite, otherSprite) {
    if (sprite == WaterGirl) {
    	
    } else {
        sprites.destroy(sprite, effects.disintegrate, 500)
        game.reset()
    }
})
sprites.onOverlap(SpriteKind.Goo, SpriteKind.Goo, function (sprite, otherSprite) {
    sprite.setVelocity(randint(-50, 50), randint(-50, 10))
    otherSprite.setVelocity(randint(-50, 50), randint(-50, 10))
})
let FireBoyDone = false
let WaterGirlDone = false
let FireGem5: Sprite = null
let FireGem4: Sprite = null
let Poison: Sprite = null
let Lava: Sprite = null
let Water: Sprite = null
let FireGem3: Sprite = null
let FireGem2: Sprite = null
let WaterGem: Sprite = null
let FireGem1: Sprite = null
let WaterGirl: Sprite = null
let FireBoy: Sprite = null
let WaterSpeed = 0
let WaterMaxJumps = 0
let FireSpeed = 0
let FireMaxJumps = 0
let FireJumps = 0
let WaterJumps = 0
let LevelNumber = 0
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 480
}
let FireDifficulty = game.askForNumber("Player !: 1-Easy 2-Medium 3-Hard")
let WaterDifficulty = game.askForNumber("Player 2: 1-Easy 2-Medium 3-Hard")
LevelNumber = 0
let WaterGemCount = 0
let FireGemCount = 0
WaterJumps = 0
FireJumps = 0
if (FireDifficulty == 1) {
    FireMaxJumps = 3
    FireSpeed = 350
} else if (FireDifficulty == 2) {
    FireMaxJumps = 2
    FireSpeed = 300
} else {
    FireMaxJumps = 1
    FireSpeed = 250
}
if (WaterDifficulty == 1) {
    WaterMaxJumps = 3
    WaterSpeed = 350
} else if (WaterDifficulty == 2) {
    WaterMaxJumps = 2
    WaterSpeed = 300
} else {
    WaterMaxJumps = 1
    WaterSpeed = 250
}
FireBoy = sprites.create(assets.image`FireBoy1`, SpriteKind.Player)
WaterGirl = sprites.create(assets.image`WaterGirl1`, SpriteKind.Player)
FireBoy.setStayInScreen(true)
WaterGirl.setStayInScreen(true)
controller.moveSprite(FireBoy, FireSpeed, 0)
controller.player2.moveSprite(WaterGirl, WaterSpeed, 0)
info.startCountup(true)
FireBoy.ay = 2000
WaterGirl.ay = 2000
if (LevelNumber == 0) {
    tiles.setCurrentTilemap(tilemap`Level0`)
    tiles.placeOnTile(FireBoy, tiles.getTileLocation(2, 22))
    tiles.placeOnTile(WaterGirl, tiles.getTileLocation(5, 22))
    FireGem1 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem1, tiles.getTileLocation(21, 25))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(12, 25))
    FireGem2 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem2, tiles.getTileLocation(15, 17))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(18, 17))
    FireGem3 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem3, tiles.getTileLocation(26, 6))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(17, 4))
    for (let index = 0; index < 100; index++) {
        Water = sprites.create(assets.image`Water`, SpriteKind.WaterFluid)
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
        Water = sprites.create(assets.image`Water`, SpriteKind.WaterFluid)
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
} else if (LevelNumber == 1) {
    tiles.setCurrentTilemap(tilemap`Level1`)
    tiles.placeOnTile(FireBoy, tiles.getTileLocation(14, 23))
    tiles.placeOnTile(WaterGirl, tiles.getTileLocation(10, 23))
    FireGem1 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem1, tiles.getTileLocation(7, 27))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(3, 27))
    FireGem2 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem2, tiles.getTileLocation(3, 20))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(21, 24))
    FireGem3 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem3, tiles.getTileLocation(26, 6))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(17, 4))
    FireGem4 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem4, tiles.getTileLocation(26, 6))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(17, 4))
    FireGem5 = sprites.create(assets.image`FireGem`, SpriteKind.FireGem)
    tiles.placeOnTile(FireGem5, tiles.getTileLocation(26, 6))
    WaterGem = sprites.create(assets.image`WaterGem`, SpriteKind.WaterGem)
    tiles.placeOnTile(WaterGem, tiles.getTileLocation(17, 4))
    for (let index = 0; index < 100; index++) {
        Water = sprites.create(assets.image`Water`, SpriteKind.WaterFluid)
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
        Water = sprites.create(assets.image`Water`, SpriteKind.WaterFluid)
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
} else if (false) {
	
} else {
	
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
