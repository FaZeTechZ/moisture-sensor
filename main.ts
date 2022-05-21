basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(10000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(10000)
    }
})
