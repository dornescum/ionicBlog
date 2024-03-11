import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetailsPageRoutingModule } from './blog-details-routing.module';

import { BlogDetailsPage } from './blog-details.page';
import {HeaderComponent} from "../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDetailsPageRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [BlogDetailsPage, HeaderComponent]
})
export class BlogDetailsPageModule {}
