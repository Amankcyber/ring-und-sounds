namespace SpriteKind {
    export const Ziel = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ziel, function (sprite, otherSprite) {
    music.stopAllSounds()
    game.setGameOverMessage(true, "YOU GOT THE RING GOLLUM!")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    mySprite.setPosition(randint(10, 150), randint(10, 110))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(mySprite3)
})
let mySprite3: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e e e . . . . 
    . e e e . 3 3 3 3 3 3 e e e . . 
    . e . . 3 3 3 3 3 3 3 . . e . . 
    e e a 3 3 3 f 3 f 3 3 3 a e . . 
    e e . . 3 3 3 3 3 3 3 . . e e . 
    . e e . 3 f 3 3 3 f 3 . . . e e 
    . e . . . 3 f f f 3 . . . . . e 
    . e . . . . 3 . 3 . . . . . . . 
    e . . . . . a . 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(randint(0, 160), randint(0, 120))
mySprite2.setVelocity(50, 50)
controller.moveSprite(mySprite2)
mySprite = sprites.create(assets.image`target`, SpriteKind.Ziel)
mySprite.setPosition(randint(10, 150), randint(10, 110))
music.play(music.createSong(assets.song`gollum song`), music.PlaybackMode.LoopingInBackground)
mySprite3 = sprites.create(assets.image`fish`, SpriteKind.Food)
mySprite3.setPosition(randint(10, 150), randint(10, 110))
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 f 7 7 7 f 7 . . . . 
    . . . . 7 7 7 f 7 f 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 f f f f 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . 7 . 7 . . . . . . 
    . . . . . . . 7 . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite4.setPosition(randint(10, 150), randint(10, 110))
