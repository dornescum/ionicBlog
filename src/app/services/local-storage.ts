import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  constructor() {
  }

  async setItem(key: string, value: any) {
    await Preferences.set({
      key,
      value
    });
  }

  async getItem(key: any) {
    return await Preferences.get({ key });
  }

}
