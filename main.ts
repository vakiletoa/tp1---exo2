input.onButtonPressed(Button.A, function () {
    led.unplot(0, posY)
    posY += 1
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, posY)
    posY = 0
    led.plot(0, posY)
})
let posX = 0
let posY = 0
let direction = 0
posY = 0
posX = 0
led.plot(0, posY)
basic.forever(function () {
    led.unplot(0, posY)
    posY += direction
    led.plot(0, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    basic.pause(100)
})
