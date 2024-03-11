import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {User} from "../utils/Interface";
import {LoadingService} from "../services/loading.service";
import {textConstants} from "../utils/textConstants";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService,  private loadingService: LoadingService,) { }

  async ngOnInit() {
    try{
      await this.loadingService.present();

      this.usersService.getUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    }
    catch (error) {
      console.error(textConstants.utils.errorLoading, error);
    }
    finally {
      await this.loadingService.dismiss();
    }
  }

}
