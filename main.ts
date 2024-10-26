let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(128)
let color = neopixel.colors(NeoPixelColors.Red)
let speed = 1
strip.setPixelColor(0, color)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        strip.show()
        strip.rotate(speed)
        basic.pause(200)
    }
    if (color == neopixel.colors(NeoPixelColors.Red)) {
        color = neopixel.colors(NeoPixelColors.Green)
        speed = -1
    } else {
        if (color == neopixel.colors(NeoPixelColors.Green)) {
            color = neopixel.colors(NeoPixelColors.Blue)
            speed = 1
        } else {
            if (color == neopixel.colors(NeoPixelColors.Blue)) {
                color = neopixel.colors(NeoPixelColors.Violet)
                speed = -1
            } else {
                if (color == neopixel.colors(NeoPixelColors.Violet)) {
                    color = neopixel.colors(NeoPixelColors.Red)
                    speed = 1
                }
            }
        }
    }
    strip.setPixelColor(0, color)
})
