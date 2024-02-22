//custom death code
enum respawn2 {
    //% block="respawn with full health"
    Fullhealth,
    //% block="respawn with half health"
    Halfhealth,
    //% block="respawn with 1 health"
    Healthone,
}
enum C {
    //% block="Fire"
    Fire,
    //% block="Rings"
    Rings,
    //% block="Minecraft death"
    Minecraftdeath,
    //% block="water"
    Water,
}
namespace deathsNcustom {
    //% block="fire death $bot if can be Invisible $t respawn $m time $time $b"
    export function death1(bot: Sprite, t: boolean, time: number, m: respawn2, b: C) {
        sprites.setDataNumber(bot, "health1", sprites.readDataNumber(bot, "health"))

        forever(function () {
            if (sprites.readDataNumber(bot, "health") <= 0) {
                sprites.readDataSprite(bot, "bot text").setFlag(SpriteFlag.Invisible, true)

                if (m == 0) {
                    if (b == 3) {
                        let textSprite2 = textsprite.create("oxygen 3")
                        spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                        sprites.setDataNumber(bot, "timer", 3)
                        for (let i = 0; i < 3; i++) {
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            pause(500)
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            sprites.changeDataNumberBy(bot, "timer", -1)
                            textSprite2.setText("oxygen" + sprites.readDataNumber(bot, "timer"))
                        }
                        sprites.destroy(textSprite2)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        pause(900)

                    }
                    if (b == 2) {

                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                    }
                    if (b == 0) {
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.ashes, 900)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        pause(1000)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                    }
                    if (b == 1) {
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                    }
                    if (t == true) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                    }
                    if (t == false) {
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                    }
                    sprites.setDataNumber(bot, "health", sprites.readDataNumber(bot, "health1"))
                    bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                    bot.setFlag(SpriteFlag.Invisible, false)
                    bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                    sprites.readDataSprite(bot, "bot text").setFlag(SpriteFlag.Invisible, false)
                }
                if (m == 1) {
                    if (b == 2) {
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                    }
                    if (b == 0) {
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.ashes, 900)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        pause(1000)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                    }
                    if (b == 3) {
                        let textSprite2 = textsprite.create("oxygen 3")
                        spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                        sprites.setDataNumber(bot, "timer", 3)
                        for (let i = 0; i < 3; i++) {
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            pause(500)
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            sprites.changeDataNumberBy(bot, "timer", -1)
                            textSprite2.setText("oxygen" + sprites.readDataNumber(bot, "timer"))
                        }
                        sprites.destroy(textSprite2)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        pause(900)

                    }

                    if (t == true) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                    }
                    if (b == 1) {
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                    }
                    if (t == false) {
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                    }
                    bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                    sprites.setDataNumber(bot, "some", sprites.readDataNumber(bot, "health1") * 0.5)
                    sprites.setDataNumber(bot, "health", sprites.readDataNumber(bot, "some"))
                    bot.setFlag(SpriteFlag.Invisible, false)
                    bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                    sprites.readDataSprite(bot, "bot text").setFlag(SpriteFlag.Invisible, false)

                }
                if (m == 2) {
                    if (b == 3) {
                        let textSprite2 = textsprite.create("oxygen 3")
                        spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                        sprites.setDataNumber(bot, "timer", 3)
                        for (let i = 0; i < 3; i++) {
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            pause(500)
                            spriteutils.placeAngleFrom(textSprite2, 4.6, 25, bot)
                            sprites.changeDataNumberBy(bot, "timer", -1)
                            textSprite2.setText("oxygen" + sprites.readDataNumber(bot, "timer"))
                        }
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        bot.startEffect(effects.bubbles, 1500)
                        sprites.destroy(textSprite2)
                        pause(900)

                    }
                    if (b == 2) {

                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                        bot.startEffect(effects.blizzard, 1000)
                    }
                    if (b == 0) {
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.fire, 1500)
                        bot.startEffect(effects.ashes, 900)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        pause(1000)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                    }
                    if (b == 1) {
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        pause(500)
                        bot.startEffect(effects.rings, 500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.startEffect(effects.rings, 500)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        pause(500)
                        bot.setFlag(SpriteFlag.Invisible, true)
                    }
                    if (t == true) {
                        bot.setFlag(SpriteFlag.GhostThroughSprites, true)
                        bot.setFlag(SpriteFlag.Invisible, true)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, true)
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                        bot.setFlag(SpriteFlag.GhostThroughWalls, false)
                        bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                        bot.setFlag(SpriteFlag.Invisible, false)
                    }
                    if (t == false) {
                        let respawn = textsprite.create("respawning.")
                        pause(time)
                        sprites.destroy(respawn)
                    }
                    sprites.setDataNumber(bot, "health", 1)
                    bot.setPosition(sprites.readDataNumber(bot, "x"), sprites.readDataNumber(bot, "y"))
                    bot.setFlag(SpriteFlag.Invisible, false)
                    bot.setFlag(SpriteFlag.GhostThroughSprites, false)
                    sprites.readDataSprite(bot, "bot text").setFlag(SpriteFlag.Invisible, false)
                }
            }

        })
    }
}
namespace deathsNcustom {
    //% block="$bot dont move alitte bit when dead(can be usefull for the bot to not move when playing animatoms when dead)"
    export function gj(bot: Sprite) {
        forever(function () {
            if (sprites.readDataNumber(bot, "health") <= 0) {
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
                bot.setVelocity(0, 0)
            }
        })
    }
}