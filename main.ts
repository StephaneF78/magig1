let strip1 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip1.clear()
strip1.rotate(1)
strip1.show()
basic.forever(function () {
    magicbit.Servospeed(magicbit.Servos.S1, 0, 90, 1)
    basic.pause(500)
})
