radio.onReceivedString(function (receivedString) {
    if (receivedString == "take your meds") {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        servos.P0.setAngle(45)
        basic.pause(500)
        servos.P0.setAngle(135)
        basic.pause(500)
        servos.P0.stop()
        basic.clearScreen()
    }
})
radio.setGroup(218)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
