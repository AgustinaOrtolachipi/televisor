class Televisor {
    private isOn: boolean;
    private volume: number;
    private channel: number;
    private horaActual: string;
  
    constructor(on: boolean = false, vol: number = 10, ch: number = 1, horaActual: string = "") {
      this.isOn = on;
      this.volume = vol;
      this.channel = ch;
      this.horaActual = horaActual || new Date().toLocaleTimeString();
    }
  
    switchOnOff(): void {
      if (this.isOn) {
        this.isOn = false;
        console.log("Televisor apagado");
      } else {
        this.isOn = true;
        console.log("Televisor encendido");
      }
    }
  
    pickChannel(newChannel: number): void {
      if (this.isOn) {
        if (newChannel >= 1 && newChannel <= 99) {
          this.channel = newChannel;
          console.log(`Cambiando al canal ${this.channel}`);
        } else {
          console.log("Canal fuera de rango (1-99)");
        }
      } else {
        console.log("El televisor está apagado");
      }
    }
  
    adjustVolume(newVolume: number): void {
      if (this.isOn) {
        if (newVolume >= 0 && newVolume <= 100) {
          this.volume = newVolume;
          console.log(`Volumen ajustado a ${this.volume}`);
        } else {
          console.log("Volumen fuera de rango (0-100)");
        }
      } else {
        console.log("El televisor está apagado");
      }
    }
  
    info(): void {
      if (this.isOn) {
        console.log(`Canal: ${this.channel}`);
        console.log(`Volumen: ${this.volume}`);
        console.log(`Hora actual: ${this.horaActual}`);
      } else {
        console.log("El televisor está apagado");
      }
    }
  }
  
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.pickChannel(45);
  tv01.adjustVolume(75);
  tv01.info();
  