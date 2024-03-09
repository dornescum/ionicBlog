import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogsPageRoutingModule } from './blogs-routing.module';

import { BlogsPage } from './blogs.page';
import {BlogCardComponent} from "../components/blog-card/blog-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogsPageRoutingModule
  ],
    declarations: [BlogsPage, BlogCardComponent]
})
export class BlogsPageModule {}
