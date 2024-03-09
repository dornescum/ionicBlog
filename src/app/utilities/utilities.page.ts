import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import {NetworkService} from "../services/network.service";
import {DeviceService} from "../services/device.service";

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.page.html',
  styleUrls: ['./utilities.page.scss'],
})
export class UtilitiesPage implements OnInit, OnDestroy {
  networkStatus!: ConnectionStatus;
  deviceId: any;
  deviceInfo: any;
  batteryInfo: any;
  languageCode: any;
  languageTag: any;

  constructor(private networkService: NetworkService, private deviceService: DeviceService) { }

  async ngOnInit() {
    await this.networkService.initNetworkListener();
    this.networkStatus = await Network.getStatus();

    this.deviceId = await this.deviceService.getId();

     this.deviceInfo = await this.deviceService.getInfo();

    this.batteryInfo = await this.deviceService.getBatteryInfo();

    this.languageCode = await this.deviceService.getLanguageCode();

    this.languageTag = await this.deviceService.getLanguageTag();
  }

  async ngOnDestroy() {
    await this.networkService.removeNetworkListener();
  }

}
