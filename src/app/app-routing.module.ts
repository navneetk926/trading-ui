import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { CcapiComponent } from './pages/ccapi/ccapi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'apps',
    component: AppPageComponent
  },
  
  {
    path: 'ccapi',
    component: CcapiComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
