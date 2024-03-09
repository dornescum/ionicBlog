import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor() { }

  async getId(): Promise<string | any> {
    return await Device.getId();
  }

  async getInfo(): Promise<any> {
    return await Device.getInfo();
  }

  async getBatteryInfo(): Promise<any> {
    return await Device.getBatteryInfo();
  }

  async getLanguageCode(): Promise<string | any> {
    return await Device.getLanguageCode();
  }

  async getLanguageTag(): Promise<string | any> {
    return await Device.getLanguageTag();
  }
}
