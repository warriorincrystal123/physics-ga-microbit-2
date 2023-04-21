radio.onReceivedString(function (receivedString) {
    if (receivedString == "take your meds") {
        servos.P0.setAngle(45)
        basic.pause(300)
        servos.P0.setAngle(135)
        basic.pause(250)
        servos.P0.stop()
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "meds weren't taken") {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
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
basic.pause(500)
basic.clearScreen()
