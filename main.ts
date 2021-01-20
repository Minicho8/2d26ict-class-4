function heart_speed () {
    hard_loop += randint(1000, 1100)
    basic.pause(hard_loop)
}
function heart_image () {
    if (heart == 3) {
        basic.showIcon(IconNames.Heart)
    } else if (heart == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else {
        if (randint(0, 1) == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # # # .
                . . # . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        heart = 4
        basic.clearScreen()
    }
    heart += -1
}
let hard_loop = 0
let heart = 0
heart = 3
hard_loop = 1000
basic.showString("2D26")
basic.forever(function () {
    heart_image()
    heart_speed()
})
