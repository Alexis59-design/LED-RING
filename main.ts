let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let color = neopixel.colors(NeoPixelColors.Red)
let brigthness = 8
strip.setBrightness(brigthness)
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
        color = neopixel.colors(NeoPixelColors.Orange)
        strip.setBrightness(brigthness)
        speed = -1
    } else {
        if (color == neopixel.colors(NeoPixelColors.Orange)) {
            color = neopixel.colors(NeoPixelColors.Green)
            strip.setBrightness(brigthness)
            speed = 1
        } else {
            if (color == neopixel.colors(NeoPixelColors.Green)) {
                color = neopixel.colors(NeoPixelColors.Blue)
                strip.setBrightness(brigthness)
                speed = -1
            } else {
                if (color == neopixel.colors(NeoPixelColors.Blue)) {
                    color = neopixel.colors(NeoPixelColors.Red)
                    strip.setBrightness(brigthness)
                    speed = 1
                }
            }
        }
    }
    strip.setPixelColor(0, color)
})
