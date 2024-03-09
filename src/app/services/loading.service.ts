import { Injectable } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading!: HTMLIonLoadingElement;
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async present() {
    this.loading = await this.loadingController.create({
      spinner: 'lines-sharp',
      cssClass: 'loading-class'
    });
    this.isLoading = true;
    return this.loading.present();
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

}
