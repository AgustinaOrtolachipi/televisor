var Televisor = /** @class */ (function () {
    function Televisor(on, vol, ch, horaActual) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 10; }
        if (ch === void 0) { ch = 1; }
        if (horaActual === void 0) { horaActual = ""; }
        this.isOn = on;
        this.volume = vol;
        this.channel = ch;
        this.horaActual = horaActual || new Date().toLocaleTimeString();
    }
    Televisor.prototype.switchOnOff = function () {
        if (this.isOn) {
            this.isOn = false;
            console.log("Televisor apagado");
        }
        else {
            this.isOn = true;
            console.log("Televisor encendido");
        }
    };
    Televisor.prototype.pickChannel = function (newChannel) {
        if (this.isOn) {
            if (newChannel >= 1 && newChannel <= 99) {
                this.channel = newChannel;
                console.log("Cambiando al canal ".concat(this.channel));
            }
            else {
                console.log("Canal fuera de rango (1-99)");
            }
        }
        else {
            console.log("El televisor está apagado");
        }
    };
    Televisor.prototype.adjustVolume = function (newVolume) {
        if (this.isOn) {
            if (newVolume >= 0 && newVolume <= 100) {
                this.volume = newVolume;
                console.log("Volumen ajustado a ".concat(this.volume));
            }
            else {
                console.log("Volumen fuera de rango (0-100)");
            }
        }
        else {
            console.log("El televisor está apagado");
        }
    };
    Televisor.prototype.info = function () {
        if (this.isOn) {
            console.log("Canal: ".concat(this.channel));
            console.log("Volumen: ".concat(this.volume));
            console.log("Hora actual: ".concat(this.horaActual));
        }
        else {
            console.log("El televisor está apagado");
        }
    };
    return Televisor;
}());
// Uso:
var tv01 = new Televisor();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.switchOnOff();
tv01.pickChannel(45);
tv01.adjustVolume(75);
tv01.info();
