input.onButtonPressed(Button.A, function () {
    counting = true
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
input.onButtonPressed(Button.B, function () {
    counting = false
    basic.showIcon(IconNames.No)
})
let counting = false
counting = false
loops.everyInterval(100, function () {
    if (counting == true) {
        datalogger.log(
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z))
        )
    }
})
