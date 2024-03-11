import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtilitiesPageRoutingModule } from './utilities-routing.module';

import { UtilitiesPage } from './utilities.page';
import {BlogDetailsPageModule} from "../blog-details/blog-details.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UtilitiesPageRoutingModule,
        BlogDetailsPageModule
    ],
  declarations: [UtilitiesPage]
})
export class UtilitiesPageModule {}
