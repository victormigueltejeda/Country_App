import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SibadarComponent } from './components/sibadar/sibadar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SibadarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePagesComponent,
    AboutPageComponent,
    SibadarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
