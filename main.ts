function cálculo_del_promedio_de_temperaturas () {
    promedio_sensor_puerta = sensor_puerta / 10
    basic.showString("P" + promedio_sensor_puerta)
    promedio_sensor_centro = sensor_centro / 10
    basic.showString("C" + promedio_sensor_centro)
    promedio_sensor_ventana = sensor_ventana / 10
    basic.showString("V" + promedio_sensor_ventana)
}
function promedio_de_los_promedios () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showNumber((promedio_sensor_centro + (promedio_sensor_puerta + promedio_sensor_ventana)) / 3)
    }
}
function lectura_de_temperatura () {
    sensor_puerta += pins.analogReadPin(AnalogPin.P0)
    sensor_centro += pins.analogReadPin(AnalogPin.P1)
    sensor_ventana += pins.analogReadPin(AnalogPin.P2)
    contador += 1
    basic.showNumber(sensor_puerta)
    basic.showNumber(sensor_centro)
    basic.showNumber(sensor_ventana)
    basic.showNumber(contador)
}
let promedio_sensor_ventana = 0
let promedio_sensor_centro = 0
let promedio_sensor_puerta = 0
let contador = 0
let sensor_centro = 0
let sensor_puerta = 0
let sensor_ventana = 0
sensor_ventana = pins.analogReadPin(AnalogPin.P0)
sensor_puerta = pins.analogReadPin(AnalogPin.P1)
sensor_centro = pins.analogReadPin(AnalogPin.P2)
contador = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        lectura_de_temperatura()
    }
    promedio_de_los_promedios()
    if (input.buttonIsPressed(Button.B)) {
        cálculo_del_promedio_de_temperaturas()
    }
})
