import {Component, OnInit} from '@angular/core';
import {Blog} from "../utils/Interface";
import {BlogService} from "../services/blog.service";
import {Observable} from "rxjs";
import {WeatherService} from "../services/weather.service";
import {LoadingService} from "../services/loading.service";
import {LocalStorage} from "../services/local-storage";
import {ToastController} from '@ionic/angular';
import {textConstants} from "../utils/textConstants";


@Component({
  selector: 'app-blogs', templateUrl: './blogs.page.html', styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  blogs: Blog[] = [];
  weather$!: Observable<any>; // COMENTAT PENTRU CA SUNT 50 DE REQUESTURI PE LUNA
  weather: number = 0;
  defaultTown = 'Bucharest';
  town: string | null = null;
  filteredBlogs: Blog[] = [];
  creatorFilter: string = '';


  constructor(private blogService: BlogService, private weatherService: WeatherService,
              private loadingService: LoadingService, private localStorage: LocalStorage, private toastController: ToastController) {
  }

  async ngOnInit() {
    await this.loadData();
    await this.setTown('Timisoara');
  }


  async loadData() {
    try {
      await this.loadingService.present();

      this.blogs = this.blogService.getBlogs();
      this.filteredBlogs = [...this.blogs];
      // ============
      // COMENTAT PENTRU CA SUNT 50 DE REQUESTURI PE LUNA
      // this.weather$ = this.weatherService.getCurrentWeather('Bucharest');
      // ============

      const townPreference = await this.localStorage.getItem('town');
      this.town = townPreference?.value || this.defaultTown;
      setTimeout(async () => {
        this.weather = 25;
      }, 2000);

    } catch (error) {
      console.error(textConstants.utils.errorLoading, error);
    } finally {
      await this.loadingService.dismiss();
    }
  }


  async setTown(city: string): Promise<void> {
    try {
      await this.localStorage.setItem('town', city);
    } catch (error) {
      console.error(textConstants.utils.errorLoading, error);
      throw error;
    }
  }

  applyFilter() {
    this.filteredBlogs = this.blogs.filter(blog => blog.creator.toLowerCase().includes(this.creatorFilter.toLowerCase()));
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: this.weather ? `The weather in ${this.town} is ${this.weather} C` : textConstants.utils.noDataAvailable,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
