import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPagePageRoutingModule } from './user-page-routing.module';

import { UserPagePage } from './user-page.page';
import {UsersPageModule} from "../users/users.module";
import {BlogDetailsPageModule} from "../blog-details/blog-details.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPagePageRoutingModule,
    UsersPageModule,
    BlogDetailsPageModule
  ],
  declarations: [UserPagePage]
})
export class UserPagePageModule {}
