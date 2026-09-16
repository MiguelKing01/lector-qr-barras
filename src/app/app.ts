import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';
import {IonApp,IonButton,IonContent,IonHeader,IonIcon,IonTitle,IonToolbar} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { qrCodeOutline, scanOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('lector-qr-barras');
  constructor() {
  addIcons({
    'qr-code-outline': qrCodeOutline,
    'scan-outline': scanOutline
  });
}
  result: string = 'No has escaneado nada aun';

  escanear = async () => {
    try {
        const response = await CapacitorBarcodeScanner.scanBarcode({
        hint: 17
      });

      this.result = String(response.ScanResult);
      console.log('Resultado:', this.result);

    } catch (error) {
      console.error('Error al escanear:', error);
    }
  }

}