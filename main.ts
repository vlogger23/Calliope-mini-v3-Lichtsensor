basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    } else {
        basic.clearScreen()
    }
})
