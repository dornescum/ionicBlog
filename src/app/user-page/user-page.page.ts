import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
})
export class UserPagePage implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    const userId = this.route.snapshot.params?.['id'];
    if (userId !== undefined) {
      this.user = this.userService.getUserById(Number(userId)).subscribe((user: any) => {
        this.user = user;
      });
    }
  }

}
