sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
scene.setBackgroundImage(assets.image`Spillebane`)
let mySprite = sprites.create(assets.image`Toilet`, SpriteKind.Player)
mySprite.setPosition(76, 112)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    controller.moveSprite(mySprite, 200, 0)
})
forever(function () {
    mySprite3 = sprites.create(assets.image`Fjende lort`, SpriteKind.Food)
    mySprite3.setVelocity(0, 50)
    mySprite3.setPosition(randint(0, 160), 0)
    pause(randint(1000, 2000))
})
forever(function () {
    if (info.score() <= 9) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . d 1 d . . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . d 1 3 3 3 3 d . . . . . . . 
            . . . d d d d d . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.setVelocity(0, 50)
        mySprite2.setPosition(randint(0, 160), 0)
        pause(randint(3000, 5000))
    } else if (info.score() >= 9) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d . . . . . . . . . . 
            . . . . d 1 d . . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . . d 1 3 3 d . . . . . . . . 
            . . d 1 3 3 3 3 d . . . . . . . 
            . . . d d d d d . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.setVelocity(0, 70)
        mySprite2.setPosition(randint(0, 160), 0)
        pause(randint(2000, 4000))
    } else if (false) {
    	
    } else {
    	
    }
})
