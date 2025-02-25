basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.clearScreen()
        music.stopMelody(MelodyStopOptions.All)
    }
})
