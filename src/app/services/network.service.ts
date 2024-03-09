import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor() {}

  async initNetworkListener() {
    Network.addListener('networkStatusChange', this.handleNetworkStatusChange);
    await this.logCurrentNetworkStatus();
  }

  async logCurrentNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
  }

  handleNetworkStatusChange(status: any) {
    console.log('Network status changed', status);
  }

  async removeNetworkListener() {
    await Network.removeAllListeners();
  }



  networkCheck() {
    console.log('Network check utils ', navigator);
    let networkStatus = false;
    const navigatorAny = navigator as any;
    const networkState = navigatorAny?.connection?.type;
    const networkState2 = navigatorAny?.connection?.effectiveType;
    console.log('Network state utils 1', networkState)
    console.log('Network state utils 13', networkState2)
    if (networkState === 'none') {
      networkStatus = false;
    } else {
      networkStatus = true;
    }

    document.addEventListener('offline', (res) => {
      networkStatus = false;
    }, false);

    document.addEventListener('online', (resOnline) => {
      networkStatus = true;
    }, false);
    console.log('Network status utils 2', networkStatus)
    return networkStatus;
  }


}
