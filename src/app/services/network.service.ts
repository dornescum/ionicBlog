import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import {textConstants} from "../utils/textConstants";

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
    console.log(textConstants.utils.networkStatus, status);
  }

  handleNetworkStatusChange(status: any) {
    console.log(textConstants.utils.networkStatusChanged, status);
  }

  async removeNetworkListener() {
    await Network.removeAllListeners();
  }
}
