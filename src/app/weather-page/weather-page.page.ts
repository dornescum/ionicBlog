import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "../services/local-storage";
import {LoadingService} from "../services/loading.service";
import {ToastController} from "@ionic/angular";
import {textConstants} from "../utils/textConstants";
import {TownTemperatures} from "../utils/Interface";

 const townTemperature: TownTemperatures = {
  'bucuresti': 10,
  'cluj-napoca': 17,
  'iasi': 8,
  'timisoara': 9,
  'constanta': 7,
  'brasov': 8,
  'galati': 7,
  'ploiesti': 1,
  'oradea': 8,
  'braila': 2,
  'arad': 8,
  'sibiu': 7,
  'bacau': 8,
  'craiova': 9,
  'baia-mare': 7,
  'buzau': 8,
  'pitesi': 9,
  'ramnicu-valcea': 12,
  'drobeta-turnu-severin': 1,
  'targu-mures': 3,
};



@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.page.html',
  styleUrls: ['./weather-page.page.scss'],
})
export class WeatherPagePage implements OnInit {
  weather: number = 0;
  defaultTown = 'Bucharest';
  town: string | null = null;
  errorMessage: string = '';

  constructor(private localStorage: LocalStorage, private loadingService: LoadingService, private toastController: ToastController) { }

  async ngOnInit() {
   await this.loadData();
  }

  async loadData() {
    try {
      await this.loadingService.present();

      const townPreference = await this.localStorage.getItem('town');
      this.town = townPreference?.value || this.defaultTown;

    } catch (error) {
      console.error(textConstants.utils.errorLoading, error);
    } finally {
      await this.loadingService.dismiss();
    }
  }

  async setTown() {
    const wrongValue = this.town;
    try {
      if (!(this.town && this.town.toLowerCase() in townTemperature)) {
        this.town = 'timisoara';
        this.errorMessage = `The town "${wrongValue}" was not found. Resetting to Timisoara.`;
        await this.presentToast('bottom', this.errorMessage, textConstants.color.danger);
      }
      await this.localStorage.setItem('town', this.town || '');
       this.weather = townTemperature[this.town.toLowerCase()];
    } catch (error) {
      console.error(textConstants.utils.errorSettingTown, error);
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message?: string, color?: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3500,
      position: position,
      color: color
    });
    await toast.present();
  }

}
