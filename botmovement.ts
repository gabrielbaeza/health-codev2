//my own custom bot movement code
enum MyEnum {
    //% block="rpg"
    One,
    //% block="pathform"
    Two,
}
namespace bot_code {

    /**
 * bot_code
 */
    //% weight=100 color=#0096FF icon=""
    //% block="let $bot move set mode to $e"
    export function somoething1(bot: Sprite, e: MyEnum): void {
        let movement: number
        movement = randint(0, 2)
        if (movement = 1) {
            bot.vx = 75
            movement = 10274
        }
        if (movement = 2) {
            bot.vx = -75
            movement = 192440

        }
        forever(function () {
            if (e == 0) {
                pause(randint(105, 650))
                bot.setVelocity(randint(100, -100), randint(100, -100))
                pause(randint(105, 650))
            }
            if (e == 1) {
                bot.vy = 75
                if (bot.isHittingTile(CollisionDirection.Left)) {
                    bot.vx = 75
                }
                if (bot.isHittingTile(CollisionDirection.Right)) {
                    bot.vx = -75
                }
            }
        })
    }
}