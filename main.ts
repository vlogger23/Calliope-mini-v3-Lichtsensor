let isActive = false;
const LIGHT_THRESHOLD = 100;
const BLINK_INTERVAL = 500;

basic.forever(() => {
    const light = input.lightLevel();

    if (light > LIGHT_THRESHOLD && !isActive) {
        isActive = true;
        control.inBackground(() => {
            let ledsOn = false;
            while (isActive) {
                // Explizite LED-Steuerung statt Toggle
                if (ledsOn) {
                    basic.clearScreen();
                } else {
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                    `);
                }
                ledsOn = !ledsOn;

                // Ton im Hintergrund abspielen (nicht-blockierend)
                control.inBackground(() => {
                    music.playTone(440, 100);
                });

                basic.pause(BLINK_INTERVAL);
            }
            basic.clearScreen(); // Sicherstellen, dass LEDs aus sind
        });
    }
    else if (light <= LIGHT_THRESHOLD) {
        isActive = false;
    }
});