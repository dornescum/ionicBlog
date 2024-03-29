import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    redirectTo: 'blogs',
    pathMatch: 'full'
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
  },
  {
    path: 'blog-details/:id',
    loadChildren: () => import('./blog-details/blog-details.module').then( m => m.BlogDetailsPageModule)
  },
  {
    path: 'weather-page',
    loadChildren: () => import('./weather-page/weather-page.module').then( m => m.WeatherPagePageModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./utilities/utilities.module').then( m => m.UtilitiesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-page/:id',
    loadChildren: () => import('./user-page/user-page.module').then( m => m.UserPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
