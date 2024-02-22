//health code
enum Healthtype {
    //% block="with text"
    Zero,
    //% block="when damange then text"
    One,
    //% block="text with heart image"
    Two,
    //% block="no text with damange"
    Three,
}
enum Type {
    //% block="no custom death"
    Zero,
    //% block="custom death"
    One,
}
enum armortype {
    //% block="no armor"
    Zero,
    //% block="armor type 1"
    One,
    //% block="armor type 2"
    Two,
    //% block="armor type 3"
    Three,
    //% block="armor type 4"
    Four,
    //% block="armor type 5"
    Five,
}
enum respawn {
    //% block="respawn with full health"
    Zero,
    //% block="respawn with half health"
    One,
    //% block="respawn with 1 health"
    Two,
}
namespace health {
    /**
 * Custom blocks
 */
    //% weight=100 color=#C21E56 icon=""
    //% block="set $bot health to be with $e to have a number of $health health  set $armor $r respawn time $time $m"

    export function somethingg1(bot: Sprite, health: number, e: Healthtype, armor: armortype, r: respawn, time: number, m: Type) {
        sprites.setDataNumber(bot, "health", health)
        sprites.setDataNumber(bot, "y", bot.y)
        sprites.setDataNumber(bot, "x", bot.x)
        if (e == 1) {
            sprites.setDataString(bot, "l", "1")
        }
        if (e == 2) {
            let textSprite1 = textsprite.create("loading..")
            sprites.setDataSprite(bot, "bot text", textSprite1)
            textSprite1.setBorder(1, 3)
            textSprite1.setOutline(1, 3)
            textSprite1.setIcon(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f . f f f f f . .
    . . f f 3 3 3 f f f 3 3 3 f f .
    . . f 3 3 3 3 3 f 3 3 3 3 3 f .
    . . f 3 3 3 3 3 3 3 1 1 3 3 f .
    . . f 3 3 3 3 3 3 3 1 1 3 3 f .
    . . f 3 3 3 3 3 3 3 3 3 3 3 f .
    . . f f 3 3 3 b b b 3 3 3 f f .
    . . . f f 3 b b b b b 3 f f . .
    . . . . f f b b b b b f f . . .
    . . . . . f f b b b f f . . . .
    . . . . . . f f b f f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
            forever(function () {
                textSprite1.setText("" + sprites.readDataNumber(bot, "health"))
                spriteutils.placeAngleFrom(textSprite1, 4.6, 25, bot)
            })
        }
        if (e == 0) {
            let textSprite2 = textsprite.create("loading.")
            sprites.setDataSprite(bot, "bot text", textSprite2)
            textSprite2.setBorder(1, 3)
            textSprite2.setOutline(1, 3)
            forever(function () {
                textSprite2.setText("" + sprites.readDataNumber(bot, "health"))
                spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
            })
        }
        forever(function () {
            if (m == 0) {
                if (r == 0) {
                    if (sprites.readDataNumber(bot, "health") <= 0) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                        sprites.setDataNumber(bot, "health", health)
                    }
                }
                if (r == 1) {
                    if (sprites.readDataNumber(bot, "health") <= 0) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                        sprites.setDataNumber(bot, "some", health * 0.5)
                        sprites.setDataNumber(bot, "health", sprites.readDataNumber(bot, "some"))
                    }

                }
                if (r == 2) {
                    if (sprites.readDataNumber(bot, "health") <= 0) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                        sprites.setDataNumber(bot, "health", 1)
                    }
                }
            }

        })

        if (armor == 0) {
            sprites.setDataString(bot, "armor", "0")
        }
        if (armor == 1) {
            sprites.setDataString(bot, "armor", "1")
        }
        if (armor == 2) {
            sprites.setDataString(bot, "armor", "2")
        }
        if (armor == 3) {
            sprites.setDataString(bot, "armor", "3")
        }
        if (armor == 4) {
            sprites.setDataString(bot, "armor", "4")
        }
        if (armor == 5) {
            sprites.setDataString(bot, "armor", "5")
        }
    }
}
enum Armorblast {
    //% block="blast through armor 0"
    Zero,
    //% block="blast through armor 1"
    One,
    //% block="blast through armor 2"
    Two,
    //% block="blast through armor 3"
    Three,
    //% block="blast through armor 4"
    Four,
    //% block="blast through armor 5"
    Five,

}
namespace health {
    //% weight=100 color=#8B0000 icon=""
    //% block="damange $bot $d $b"
    export function damange(bot: Sprite, d: number, b: Armorblast) {
        sprites.setDataNumber(bot, "d", -d)
        if (sprites.readDataString(bot, "armor") == "1") {
            if (b == 0 || b == 1 || b == 2 || b == 3 || b == 4) {

            } else {
                sprites.changeDataNumberBy(bot, "d", 2)
            }

        }
        if (sprites.readDataString(bot, "armor") == "1" || sprites.readDataString(bot, "armor") == "2") {
            if (b == 1 || b == 2 || b == 3 || b == 4) {

            } else {
                sprites.changeDataNumberBy(bot, "d", 3)
            }

        }
        if (sprites.readDataString(bot, "armor") == "3") {
            if (b == 2 || b == 3 || b == 4) {

            } else {
                sprites.changeDataNumberBy(bot, "d", 5)
            }

        }
        if (sprites.readDataString(bot, "armor") == "4") {
            if (b == 3 || b == 4) {

            } else {
                sprites.changeDataNumberBy(bot, "d", 6)
            }

        }
        if (sprites.readDataString(bot, "armor") == "5") {
            if (b == 4) {

            } else {
                sprites.changeDataNumberBy(bot, "d", 7)
            }

        }

        if (sprites.readDataNumber(bot, "d") >= 0) {
            sprites.setDataNumber(bot, "d", 0)
        }
        sprites.setDataNumber(bot, "h", sprites.readDataNumber(bot, "health"))
        sprites.setDataNumber(bot, "p", sprites.readDataNumber(bot, "health"))
        if (sprites.readDataNumber(bot, "d") >= 0) {

        } else {
            sprites.changeDataNumberBy(bot, "health", sprites.readDataNumber(bot, "d"))
        }

        if (sprites.readDataNumber(bot, "health") > sprites.readDataNumber(bot, "p")) {
            sprites.setDataNumber(bot, "health", sprites.readDataNumber(bot, "h"))
        }
        if (sprites.readDataString(bot, "l") == "1") {
            bot.sayText("" + sprites.readDataNumber(bot, "health") + " health left enemy did " + sprites.readDataNumber(bot, "d") + "damange")
        }
    }
}
namespace health {
    //% weight=100 color=#C21E56 icon=""
    //% block=" $bot health is"
    export function somooosomethning231(bot: Sprite) {
        return sprites.readDataNumber(bot, "health")
    }
}
namespace health {
    //% weight=100 color=#000000 icon=""
    //% block="when $bot is dead then"
    export function soememeem(bot: Sprite) {
        if (health.somooosomethning231(bot) <= 0) {
            return true
        } else {
            return false
        }

    }
}