let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(128)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    strip.rotate(-1)
    strip.show()
})
