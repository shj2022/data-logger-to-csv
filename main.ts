let counting = false
input.onButtonPressed(Button.A, function () {
    counting = true
})
input.onButtonPressed(Button.B, function () {
    counting = false
})
loops.everyInterval(100, function () {
    if (counting == true) {
        datalogger.log(
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z)),
        datalogger.createCV("s", input.acceleration(Dimension.Strength))
        )
    }
})
