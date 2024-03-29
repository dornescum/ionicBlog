import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import {UserCardComponent} from "../components/user-card/user-card.component";
import {BlogDetailsPageModule} from "../blog-details/blog-details.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    BlogDetailsPageModule
  ],
  exports: [
    UserCardComponent
  ],
  declarations: [UsersPage, UserCardComponent]
})
export class UsersPageModule {}
